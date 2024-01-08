import { Component } from '@angular/core';
import { ShowsComponent } from '../shows/shows.component';
import { NgFor } from '@angular/common';
import { AlltimehitsComponent } from '../alltimehits/alltimehits.component';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [AlltimehitsComponent,
  NgFor],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent {

}
