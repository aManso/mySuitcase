import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PWAInstallerService {

    public loadScript() {
        let body = <HTMLDivElement> document.body;
        let script = document.createElement('script');
        script.innerHTML = 'Install APP';
        script.src = '/pwa-installer.js';
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    }
}
