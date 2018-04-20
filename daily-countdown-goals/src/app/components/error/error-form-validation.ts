import {Observer} from 'rxjs/Observer'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { ErrorManager } from './error-manager'
import {AbstractControl, FormControl, FormGroup, FormBuilder} from '@angular/forms';


export abstract class ErrorFormValidation {

    fields: ErrorChangeMap[] = []
    formGroup: FormGroup;

    constructor( ...fields: any[]) {
        fields.forEach(field => {
            this.fields.push(new ErrorChangeMap(field.name, field.required, new ErrorManager()))
        })

        let group: any = {};

        this.fields.map(field => {
            group[field.name] = new FormControl()
        })

        this.formGroup = new FormBuilder().group(group, {
            validator: (ac) => this.validate(ac)
          })
    }

    isAnyError(): boolean {
        return this.fields.filter(field => field.errorManager.errors.length > 0).length > 0
    }

    getValue(field: string) {
        return this.formGroup.get(field).value
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

    validate(AC: AbstractControl) {
        this.clearAll()
        this.validateInternal(AC)
    }

    abstract validateInternal(AC: AbstractControl)

    submitValidate() {
        this.fields.forEach(field => {
            if (this.formGroup.get(field.name).value == null && field.required) {
                field.errorManager.push(`${field.name} is required.`)
            }
        })
    }
}

class ErrorChangeMap {
    name: string;
    required: boolean;
    errorManager: ErrorManager;

    constructor(name: string, required: boolean, errorManager: ErrorManager) {
       this.name = name
       this.required = required
       this.errorManager = errorManager
        
    }
}