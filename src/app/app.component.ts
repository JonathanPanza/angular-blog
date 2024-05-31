import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-angular-blog';
}
