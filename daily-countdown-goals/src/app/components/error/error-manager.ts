import {Observer} from 'rxjs/Observer'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';


export class ErrorManager {

	errors: Error[] = []
    error$: Observable<any>;
	private _errorObserver: Observer<any>;

	constructor() {
    	this.error$ = new Observable(observer =>
     	this._errorObserver = observer).share();
	}

	clear() {
		this.errors = []
		this.update()
	}

	push(error: string) {
		this.errors.push(Error.error(error))
		this.update()
	}

	update() {
		if (this._errorObserver) {
			this._errorObserver.next(this.errors)
		}	
	}
	  

}

export class Error {

	err: string;
  
	constructor(err: string)
	{
	  this.err = err;
	}
  
	public static error(err: string)
	{
	  return new Error(err);
	}
}