import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signal-example',
  imports: [MatButtonModule],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.scss',
})
export class SignalExampleComponent {
  constructor() {
    effect(() => {
      console.log(`The value of count is ${this.count()}`);
      console.log(`The value of double count is ${this.doubleCount()}`);
    });
  }

  count: WritableSignal<number> = signal(0);
  doubleCount = computed(() => this.count() * 2);

  increaseCount() {
    console.log('entered');
    this.count.update((value) => value + 1);
  }
}
