import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class Logger {
    constructor(){}

    public log(className: string) {
        console.log('creating ' + className) 
    }
}