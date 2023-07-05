import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  ngOnInit(): void {
    /* const promesa = new Promise( ( resolve, reject ) =>{
      if (true){
        resolve('Hola Mundo !!')
      }
      else{
        reject('Algo salio mal..')
      }
    });

    promesa.then( ( mensaje ) => {
      console.log(mensaje)
    }).catch( error => { console.log('Error en la promesa..', error)})

    console.log('Fin del Init..') */

    this.getUsers().then( users => console.log(users))
  }

  getUsers(){

    /* fetch('https://reqres.in/api/users').then( resp => {
      resp.json().then( body => {
        console.log(body)
      })
    }) */

    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users').then( resp => resp.json() ).then( body => resolve(body.data))
    })
    return promesa
    
  }
}
