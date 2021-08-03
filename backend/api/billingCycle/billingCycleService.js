const BillingCycle = require('./billingCycle')
const _ = require('lodash')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if(bundle.errors) {
        var erros = parseErrors(bundle.errors)
        res.status(500).json({ erros })
    } else {
        next()
    }
}

function parseErrors(nodeRestfulErros) {
    const errors = []
    _.forIn(nodeRestfulErros, error => errors.push(error.message))
    return errors 
}

BillingCycle.route('count', function(req, res, next) {
    BillingCycle.count(function(error, value) {
        if(error) {
            res.status(500).json({ errors: [error] })
        }
        res.json({value})
    })
})

module.exports = BillingCycle