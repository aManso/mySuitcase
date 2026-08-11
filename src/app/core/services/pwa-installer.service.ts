import { Injectable, LOCALE_ID, inject } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PWAInstallerService {
    protected readonly locale: string = inject(LOCALE_ID);

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
