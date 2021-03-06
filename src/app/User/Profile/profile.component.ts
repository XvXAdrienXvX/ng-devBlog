import { ViewEncapsulation, Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from 'src/app/Core/toastr.service';
import { AuthService } from '../../Core/auth.service';

@Component({
  templateUrl: '/profile.component.html',
  styleUrls:[
     'profile.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit{
    profileForm: FormGroup
    private firstName: FormControl
    private lastName: FormControl

    constructor(private authService: AuthService, 
      private router: Router, @Inject(TOASTR_TOKEN)private toastr: Toastr){

    }

    ngOnInit(): void {
       this.firstName = new FormControl(this.authService.currentUser.firstName, 
                                        [Validators.required, Validators.pattern('[a-zA-Z].*')])

       this.lastName = new FormControl(this.authService.currentUser.lastName, 
                                        [Validators.required, Validators.pattern('[a-zA-Z].*')])

       this.profileForm = new FormGroup({
           firstName: this.firstName,
           lastName: this.lastName
       })
    }

    SaveProfile(values){
       if (this.profileForm.valid){
         this.authService.UpdateCurrentUser(values.firstName, values.lastName);
         this.toastr.success('Profile Saved');
       }     
    }

    getErrorMessage(){
       if(this.firstName.hasError('required')){
         return 'firstname cannot be blank'
       }

       if(this.lastName.hasError('required')){
         return 'lastname cannot be blank'
       }
    }
}