import { Component,OnDestroy, inject, signal } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignalExampleComponent } from '../signal-example/signal-example.component';

@Component({
  selector: 'app-nav-bar',
  imports: [MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule, SignalExampleComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnDestroy {
  content = "Welcome";
  protected readonly isMobile = signal(true);


  constructor() {}

  ngOnDestroy(): void {}

}
