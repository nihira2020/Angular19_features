import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {

  quantity = signal(1);
  price = signal(10);

  user = signal({ firstname: 'nihira', lastname: 'tech' })
  username = linkedSignal({
    source: this.user,
    computation: (user) => user,
    equal:(a,b)=>a.firstname===b.firstname
  })

  total = linkedSignal({
    source: this.quantity,
    computation: (previous, newdata) => {
      console.log(previous);
      console.log(newdata);
      return this.quantity() * this.price()
    }
  })


  total1 = computed(() => this.quantity() * this.price());

  change(qty: any) {
    this.quantity.set(qty);
  }
  namechange(fname: string, lastname: string) {
    this.user.set({ firstname: fname, lastname: lastname })
  }

}
