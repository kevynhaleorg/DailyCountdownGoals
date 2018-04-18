import { ErrorFormValidation } from './error-form-validation'
import { AbstractControl } from '@angular/forms';

export class SetupFormValidation extends ErrorFormValidation {

    public static EMAIL: string = 'email';
    public static PASSWORD: string = 'password';
    public static CONFIRM_PASSWORD: string = 'confirmPassword';
    public static DAYS: string = 'days';

    constructor() {
        super(
            SetupFormValidation.EMAIL,
            SetupFormValidation.PASSWORD,
            SetupFormValidation.CONFIRM_PASSWORD,
            SetupFormValidation.DAYS)
        
    }

    public get EMAIL(): string {
        return SetupFormValidation.EMAIL;
    }

    public get PASSWORD(): string {
        return SetupFormValidation.PASSWORD;
    }

    public get CONFIRM_PASSWORD(): string {
        return SetupFormValidation.CONFIRM_PASSWORD;
    }

    public get DAYS(): string {
        return SetupFormValidation.DAYS;
    }

    validate(AC: AbstractControl) {
        super.clearAll()
        const password = AC.get(SetupFormValidation.PASSWORD).value;
        const confirmPassword = AC.get(SetupFormValidation.CONFIRM_PASSWORD).value;
        if ( password !== confirmPassword && confirmPassword !== null) {

            super.getErrorManager(SetupFormValidation.CONFIRM_PASSWORD).push("Passwords do not match.")
        }

        if (AC.get(SetupFormValidation.DAYS).value > 10) {
            super.getErrorManager(SetupFormValidation.DAYS).push("Number of days cannot be greater than 10.")
        }
        
    }
}