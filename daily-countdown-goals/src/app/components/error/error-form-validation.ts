import {Observer} from 'rxjs/Observer'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { ErrorManager } from './error-manager'
import {AbstractControl} from '@angular/forms';


export abstract class ErrorFormValidation {

    fields: ErrorChangeMap[] = []

    constructor( ...fields: string[]) {
        fields.forEach(field => {
            this.fields.push(new ErrorChangeMap(field, new ErrorManager()))
        })
    }

    isAnyError(): boolean {
        return this.fields.filter(field => field.errorManager.errors.length > 0).length > 0
    }

    getErrorManager(fieldName: string): ErrorManager {
        const errorMap: ErrorChangeMap[] = this.getMatches(fieldName);

        if (errorMap.length > 0) {
            return errorMap[0].errorManager
        }
        // TODO: throw error.
        return null
    }

    isError(fieldName: string): boolean{
        const errorMap: ErrorChangeMap[] = this.getMatches(fieldName);

        if (errorMap.length > 0) {
            return errorMap[0].errorManager.errors.length > 0
        }
        return false
    }

    clearAll() {
        for (let i = 0; i < this.fields.length; i++) {
            this.fields[i].errorManager.clear()
        }
    }

    private getMatches(fieldName: string): ErrorChangeMap[] {
        return this.fields.filter( field => field.name === fieldName)
    }

    abstract validate(AC: AbstractControl);
    

}

class ErrorChangeMap {
    name: String;
    errorManager: ErrorManager;

    constructor(name: string, errorManager: ErrorManager) {
       this.name = name
       this.errorManager = errorManager
        
    }
}