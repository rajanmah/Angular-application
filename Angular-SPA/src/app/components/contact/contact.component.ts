import { Component } from '@angular/core';
import { AllComponent } from '../all/all.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AllComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
