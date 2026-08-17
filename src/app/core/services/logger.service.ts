import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class Logger {

    public log(className: string) {
        console.log('creating ' + className) 
    }
}