angular.module('primeiraApp').component('field', {
    bindings: {
        id: '@',
        label: '@',
        grid: '@',
        placeholder: '@',
        type: '@',
        model: '=',
        readonly: '<',
    }, 
    controller: [
        'gridSystem',
        function(gridSystem) {
            const self = this
            this.$onInit = () => self.gridClasses = gridSystem.toCssClasses(self.grid)
        }
    ], 
    template: `
    <div class="{{ $ctrl.gridClasses }}">
        <div class="form-group">
            <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
            <input id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}" type="{{ $ctrl.type }}" 
                ng-model="$ctrl.model" ng-readonly="$ctrl.readonly"/>
        </div>
    </div>           
    `
})