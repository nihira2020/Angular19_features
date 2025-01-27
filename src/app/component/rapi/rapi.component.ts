import { Component, computed, resource, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { players } from '../../model/players';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {rxResource} from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-rapi',
  imports: [MatCardModule, MatListModule, CommonModule],
  templateUrl: './rapi.component.html',
  styleUrl: './rapi.component.css'
})
export class RAPIComponent {
  apiurl = 'http://localhost:3000/players';
  //playerlist: players[] = []

  constructor(private http:HttpClient) {
    //this.Loadall();
    this.playerResource.reload();
    this.playerRS.reload();
  }

  // Loadall(){
  //   this.http.get<players[]>(this.apiurl).subscribe(item=>{
  //     this.playerlist=item;
  //   })
  // }

  id = signal(1);

  playerResource = rxResource({
    loader: () => {
      //return fetch(this.apiurl).then(res => res.json())
       return this.http.get<players[]>(this.apiurl);
    }
  })

  playerRS = resource({
    request: () => ({ id: this.id() }),
    loader: ({ request }) => {
      return fetch(this.apiurl + '/' + request.id).then(res => res.json())
    }
  })

  playerlist = computed(() => this.playerResource.value())
  playerObj = computed(() => this.playerRS.value())

  next() {
    this.id.update(data => data + 1);
  }

  relaod(){
    this.playerRS.reload();
  }

}
