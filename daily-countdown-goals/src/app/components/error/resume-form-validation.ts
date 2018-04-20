import { ErrorFormValidation } from "./error-form-validation";
import { AbstractControl } from "@angular/forms";

export class ResumeFormValidation extends ErrorFormValidation {

    validateInternal(AC: AbstractControl) {
        
    }

    public static EMAIL: string = 'email';
    public static PASSWORD: string = 'password';

    constructor() {
        super(
            { name: ResumeFormValidation.EMAIL, required: true },
            { name: ResumeFormValidation.PASSWORD, required: true })
    }

    public get EMAIL(): string {
        return ResumeFormValidation.EMAIL;
    }

    public get PASSWORD(): string {
        return ResumeFormValidation.PASSWORD;
    }

}