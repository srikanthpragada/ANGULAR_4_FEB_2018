
import { Injectable } from "@angular/core";

@Injectable()
export class LogService {

    constructor() {
        console.log("Log Service Constructor");
    }
    
    log(msg: string): void {
        console.log(msg);
    }

    error(msg: string): void {
        console.error("Error : " + msg);
    }
}