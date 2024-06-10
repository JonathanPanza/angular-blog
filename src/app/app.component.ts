import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HomeComponent, MenuBarComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';
}
