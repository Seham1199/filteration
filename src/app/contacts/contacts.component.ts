import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiDataService } from '../api-data.service';
import { response } from 'express';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  constructor(private _ApiDataService:ApiDataService){}

  dataForm:FormGroup = new FormGroup({
    name:new FormControl('' , [Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
    email:new FormControl('' , [Validators.required , Validators.email]) ,
    phone:new FormControl('' , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]) ,
    });

    handleForm():void{
      if (this.dataForm.valid) {
        this._ApiDataService.dataForm(this.dataForm.value).subscribe({
          next:(response) =>{
            console.log(response);
          }
        })
      }
    }


}
