import { api, LightningElement } from 'lwc';

export default class ApiDecorator extends LightningElement {
    // decorare variable with api to be exposed by other component
    @api name = 'Adnan';
}