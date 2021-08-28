import { filterControlType } from "../Filter/filter.model";

export class ControlTypeHelper{
    
    static setControlType(control: filterControlType): string{
        let elementControl: string;
        switch(control){
            case filterControlType.Textbox:
                elementControl = `<input mat-input >`;
            break;
            default:
            break;
        }
        return elementControl;
    }
}