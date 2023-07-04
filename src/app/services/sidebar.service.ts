import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'DashBoard',
      icon: 'mdi mdi-gauge',
      submenu:[
        {
          title: 'Main',
          url: '/'
        },
        {
          title: 'ProgressBar',
          url: 'progress'
        },
        {
          title: 'Gráfica',
          url: 'grafica1'
        },
      ]
    }
  ]

  constructor() { }
}
