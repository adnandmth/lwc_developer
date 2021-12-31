import { LightningElement } from 'lwc';

export default class ColorPicker extends LightningElement {
    
    handleColorChange(event){
        const colorCodeVal = event.target.value;
        // create custom event to dynamically get the selected color from the UI
        const colorCodeEvent = new CustomEvent('colorchange', {
            detail:{colorCodeVal},
        });
        this.dispatchEvent(colorCodeEvent);
    }
}