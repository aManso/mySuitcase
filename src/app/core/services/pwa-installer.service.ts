import { Injectable, LOCALE_ID, Inject } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PWAInstallerService {

    constructor(
        @Inject(LOCALE_ID) public locale: string
    ) { }

    public loadScript() {
        let body = <HTMLDivElement> document.body;
        let script = document.createElement('script');
        script.innerHTML = 'Install APP';
        script.src = '/'+this.locale+'/pwa-installer.js';
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    }

}
