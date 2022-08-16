import { Injectable } from "@angular/core";
import { Logger } from "src/app/core/services/logger.service";

@Injectable()
export class AdminLogger extends Logger {
  constructor() { super(); }

    public log(className: string) {
        console.log('creating from admin  ' + className) 
    }
}