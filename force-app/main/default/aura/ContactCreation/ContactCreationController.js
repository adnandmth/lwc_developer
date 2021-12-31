({
    doSave : function(component, event, helper) {

        const action = component.get('c.createContact');
        action.setParams({'contObj':component.get('v.contactObj')});
        action.setCallback(this, function(data){
            component.set('v.contactId', data.getReturnValue());
        });
        $A.enqueueAction(action);
    },

    showContacts : function(component, event, helper) {

        const action = component.get('c.retrieveContacts');
        action.setCallback(this, function(data){
            component.set('v.contactList', data.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})
