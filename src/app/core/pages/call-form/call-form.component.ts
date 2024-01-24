import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-call-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './call-form.component.html',
  styleUrl: './call-form.component.css'
})
export class CallFormComponent {

  formGroup = new FormGroup({
    name: new FormControl(''),
  })
  

}
