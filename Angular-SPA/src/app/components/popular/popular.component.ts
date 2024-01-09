import { Component } from '@angular/core';
import { ShowsComponent } from '../shows/shows.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [ShowsComponent,
    FlexLayoutModule 
  ],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {
heading= "Popular Movies and Series"
}
