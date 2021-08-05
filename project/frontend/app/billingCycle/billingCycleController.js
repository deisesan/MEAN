angular.module('primeiraApp').controller('BillingCycleCtrl', [
    '$http',
    'msgs',
    'tabs',
    BillingCycleController,
])

function BillingCycleController($http, msgs, tabs) {
    const vm = this
    const url = 'http://localhost:3003/api/billingCycles'
    
    vm.refresh = function(){
        $http.get(url).then(function(response){
            vm.billingCycle = {}
            vm.billingCycles = response.data
            tabs.show(vm, {tabList: true, tabCreate: true})
        })      
    }

    vm.create = function() {
        $http.post(url, vm.billingCycle)
        .then(function(response) {
            vm.refresh()
            msgs.addSuccess('Operação Realizada com Sucesso!')
        })
        .catch(function(response) {
            msgs.addError(response.data.errors)
        })
    }

    vm.showTableUpdate = function(billingCycle) {
        vm.billingCycle = billingCycle
        tabs.show(vm, {tabUpdate: true})
    }

    vm.showTableDelete = function(billingCycle) {
        vm.billingCycle = billingCycle
        tabs.show(vm, {tabDelete: true})
    }

    vm.delete = function() {
        const deleteUrl = `${url}/${vm.billingCycle._id}`
        $http.delete(deleteUrl, vm.billingCycle)
            .then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação Realizada com Sucesso!')
            })
            .catch(function(response) {
                msgs.addError(response.data.errors)
            })
    }

    vm.refresh()
}