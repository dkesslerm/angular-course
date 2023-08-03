import { Component } from '@angular/core';
import { Observable, interval, tap, timeout } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect Pipe
  public name: string = 'Fernando';
  public sex: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  public changeClient(): void{
    if (this.name == 'Fernando'){
      this.name = 'Melissa';
      this.sex = 'female';
    } else {
      this.name = 'Fernando';
      this.sex = 'male';
    }
  }

  // i18nPlural Pipe

  public client_num: number = 10;
  public deleteClient(){
    if (this.client_num > 0)
      this.client_num -= 1;
    else
      this.client_num = 0;
  }
  public resetClients(){
    this.client_num = 10;
  }
  public clientsMap = {
   '=0': "no tenemos ningún cliente esperando",
   '=1': "tenemos un cliente esperando",
   'other': "tenemos # clientes esperando"
  }

  // Slice Pipe
  public clients: string[] = ['David', 'Quique', 'Mathieu', 'Gracia']

  // KeyValue Pipe
  public person = {
    name: 'David',
    age: 19,
    address: 'Granada, Spain'
  }

  // Async Pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value)));

  public promiseValue: Promise<string> = new Promise( (resolve, reject)  => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa' );
      this.person.name = 'Otro nombre';
    }, 3500)
  });
}

