import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from './core/pages/header/header.component';
import { CallFormComponent } from './core/pages/call-form/call-form.component';
import { NavbarComponent } from './core/pages/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, 
    RouterLink, RouterLinkActive,
     MatTabsModule, HeaderComponent, CallFormComponent, 
     NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chamada-gohome';
}
