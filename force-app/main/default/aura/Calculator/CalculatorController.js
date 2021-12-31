({
    calculate : function(component, event, helper) {

        // get value from component using aura id
        const fNumberAura = component.find('fnum').get('v.value');
        const sNumberAura = component.find('snum').get('v.value');
        const resultAura = component.find('result');

        // set a value to a variable using set
        // set is used when a value is derived from the component
        resultAura.set('v.value', fNumberAura + sNumberAura);

        // get value from component using attribute
        const fNumber = component.get('v.fnumber');
        const sNumber = component.get('v.snumber');
        component.set('v.result', fNumber + sNumber);

        // calculate value using apex class
        // invoke the apex class
        const actionFromApex = component.get('c.calculateValues');
        // set variable
        actionFromApex.setParams({'firstNumber':fNumber, 'secondNumber':snumber});
        // set the callback
        actionFromApex.setCallback(this, function(responseBack){
            
            const state = responseBack.getState();
            if(state === 'SUCCESS'){
                component.set('v.result', responseBack.getReturnValue());
            }
        });
        // execute the apex method
        $A.enqueueAction(action);

    }
})
