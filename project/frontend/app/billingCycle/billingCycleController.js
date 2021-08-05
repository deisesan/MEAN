angular.module('primeiraApp').controller('BillingCycleCtrl', [
    '$http',
    'msgs',
    BillingCycleController,
])

function BillingCycleController($http, msgs) {
    const vm = this
    
    vm.create = function() {
        const url = 'http://localhost:3003/api/billingCycles'
        $http.post(url, vm.billingCycle)
        .then(function(response) {
            vm.billingCycle = {}
            msgs.addSuccess('Operação Realizada com Sucesso!')
        })
        .catch(function(response) {
            msgs.addError(response.data.errors)
        })
    }
}