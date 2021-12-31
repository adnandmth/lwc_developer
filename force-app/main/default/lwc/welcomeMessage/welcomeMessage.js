/**
 * @description       : Override standard new opportunity object
 * provides easy UI to create an opportunity with its necessary components
 * e.g 2M projects, Sectors, Products, Other Sectors/Products
 * @author            : Adnan Zahry
 * @group             : SecondMuse Salesforce Group
 * @last modified on  : 12-20-2021
 * @last modified by  : Adnan Zahry
 * Modifications Log 
 * Ver  Modification
 * 1.0  First commit
**/
import {LightningElement,track } from 'lwc';

export default class WelcomeMessage extends LightningElement {

    /**
     * Both @track and @api mark a property as reactive. If the property’s value changes, the component rerenders.
     * 
     * Tracked properties are private, where properties decorated with @api are public and can be set by another component.
     * 
     * @track is powerful, but remember, track a property only if you want the component to rerender when the property’s value changes. Don’t track every private property.
     * 
     * We can’t decorate a property with both @track and @api.
     */
    welcomeMessage = 'Welcome to Lightning Web Components';

    @track greetings;
    handleGreetingChanges(event){
        this.greetings = event.target.value;

        // if the @track is removed, then the value
        // will not be re-rendered but only displayed thru console log
        console.log(this.greetings);
    }
   


}