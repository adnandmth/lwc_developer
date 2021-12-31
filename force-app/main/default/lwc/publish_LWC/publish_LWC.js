import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import { createMessageContext, releaseMessageContext, publish } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';

/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_salesforce_modules */

export default class Publish_LWC extends LightningElement {

    context = createMessageContext();
    @track accountList;

    connectedCallback(){
        getAccounts()
            .then(result => {
                this.accountList = result;
            })
            .catch(error => {
                this.accountList = undefined;
                this.error = error;
            });
    }

    // handle click and publish event to message channel
    handleClick(event){
        
        event.preventDefault();
        const message = {
            recordId: event.target.dataset.value,
            recordData: {value: 'message from LWC'}
        };
        publish(this.context, SAMPLEMC, message);
    }
}