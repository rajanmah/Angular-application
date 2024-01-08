import { Component } from '@angular/core';
import { ShowsComponent } from '../shows/shows.component';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [ShowsComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {

}
