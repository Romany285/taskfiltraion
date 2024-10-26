import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  constructor(private _DataService:DataService , private _FormBuilder:FormBuilder){}
  contactForm:FormGroup = this._FormBuilder.group({

    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
    name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]]
  })
  handleForm(){

      const userData = this.contactForm.value
      if(this.contactForm.valid){
      this._DataService.sentUserData(userData).subscribe({
        next:(responce)=>{



          console.log(responce)
        },
        error:(err)=>{


          console.log(err)
        }
      })
        console.log(this.contactForm.value)
    }
  }
}
