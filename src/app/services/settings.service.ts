import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  linkTheme = document.getElementById('theme');
  urTheme: string = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';

  constructor() { 
     this.linkTheme?.setAttribute('href', this.urTheme);
  }

  chageTheme(theme: string){
    
    const urlTheme = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', urlTheme);
    localStorage.setItem('theme', urlTheme);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const linksThemes = document.querySelectorAll('.selector');

    linksThemes.forEach( elemento => {
      elemento.classList.remove('working');

      const linkTheme = elemento.getAttribute('data-theme');
      const urlLinkTheme = `./assets/css/colors/${linkTheme}.css`;
      const urlCurrentTheme = this.linkTheme?.getAttribute('href');

      if(urlLinkTheme === urlCurrentTheme){
        elemento.classList.add('working');
      }
    });
  }
}
