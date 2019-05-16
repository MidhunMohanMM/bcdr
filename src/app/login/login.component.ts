import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var jQuery:any;
declare var $ :any;
declare var axios: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  title = "Welcome to the Cloud BCDR Tool ! ";
  evaluatorsid="";
  email :any = '';
  e:  any;
  string: any;
  encoded_eid:any;
  id1 :any;
  name: any;
  fullname :any;
  leadsid:any;
  designation:any;
  cid:any;
  eid:any;
  phone:any;
  isUser:any;
  IsUserName:any;
  IsUserMail:any;
  registerForm: FormGroup;
  IsContinueSession:any;
  session_data = [];
  submitted = false;
  constructor( private router: Router, location: PlatformLocation,
    private formBuilder: FormBuilder) {
    location.onPopState(() => {
    //   console.log('pressed back!');
  });
  }

  ngOnInit() {
        var i = localStorage.getItem('lid');
        // console.log(i);
       
        if(i != null){

            var self = this;
            this.isUser = true;
            this.cid = i;
            var respOk = 0;

       
            axios.get('http://103.214.233.141:3333/v1/secure/leads/contacts/'+this.cid)
            .then(function(response){
            //    console.log(response);
          
               self.IsUserName = response.data.name;
               self.IsUserMail = response.data.email;
         
               $('#isUserModalBtn').trigger( "click" );
            })
            .catch(function (error) {
                console.log('An Error occured',  error);
               
            }); 
            // console.log(this.cid);
            $('#session-continue').click(function(){
                $('#myModal').modal('toggle');
                // console.log(this.cid);
                self.continueSession();
                // self.router.navigate(['/businessinformation',this.cid]);
            });
            $('#session-close').click(function(){

                self.clearSession();
        
            });
        
            // self.router.navigate(['/businessinformation',this.cid]);   
        }



        this.registerForm = this.formBuilder.group({
            fullname: ['', Validators.required],
            designation: ['', Validators.required],
            contactnumber: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
        });

        // $('input,textarea,select').filter('[required]:visible')
        // sessionStorage.clear();
        // localStorage.clear();

        (function ($) {
        function validate (input) {
            if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                    return false;
                }
            }
            else {
                if($(input).val().trim() == ''){
                    return false;
                }
            }
        }



        })(jQuery);
    }


    PostContact(name,designation,phone,email){
      
        var self = this;
        var values = new Array();
        // values.push(name);
        // values.push(designation);
        // values.push(phone);
        // values.push(email);
        values = [{
            "name" : name,
            "desig" : designation,
            "phone" : phone,
            "email" : email
         }];
         self.session_data = self.session_data.concat(values);
          try {
            localStorage.setItem("session_contactinfo", JSON.stringify(values));
          } 
          catch (e) { }
            var i = sessionStorage.getItem('cid');
            console.log(i);

            // if(i != null){
            //     console.log('local storage');
            //     var cid = sessionStorage.getItem('cid');
            //     console.log(cid);
            //     // this.cid = atob(cid);
            //     self.router.navigate(['/businessinformation',this.cid]);
                
            //     // axios.put('http://103.214.233.141:3333/v1/secure/leads/contacts/'+this.cid, {"leadsevaluatorsid":"1","name": name, "designation": designation,"phone":phone, "email": email })
            //     // .then(function (response) {
            //     // console.log(response); 
            //     // self.cid = response.data.leads.leadsid;;
            //     // console.log(self.cid);
            //     // self.router.navigate(['/businessinformation',self.cid]);
            //     // //  self.router.navigate(['/businessinformation', self.eid.id,cid] ); 
            //     // })
            //     // .catch(function (error) {
            //     // console.log(error);
            //     // });

            // }

            // else{


            axios.post('http://103.214.233.141:3333/v1/secure/leads/contacts', {"leadsevaluatorsid":"1","name": name, "designation": designation,"phone":phone, "email": email })
            .then(function (response) {
               
            // console.log(response); 
            self.evaluatorsid = response.data.leads.leadsevaluatorsid;
            self.leadsid = response.data.leads.leadsid;
            self.cid = response.data.leads.leadsid;

            sessionStorage.setItem("cid",self.cid);
            // console.log(self.cid);
            localStorage.setItem('lid', self.cid);
            self.router.navigate(['/businessinformation',self.cid]);

            })
            .catch(function (error) {
            console.log(error);
            });
      
        }
        continueSession(){
            localStorage.setItem('lid', this.cid);
            // sessionStorage.setItem('key', 'value');
            this.router.navigate(['/businessinformation',this.cid]);
        }
        clearSession(){
            sessionStorage.clear();
            localStorage.clear();
        }


        get f() { return this.registerForm.controls; }

        onSubmit() {
            this.submitted = true;
            var form = this.registerForm.value;
            // stop here if form is invalid
            if (this.registerForm.invalid) {
            //   console.log(0);
                return; 
            }

            // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value.fullname))
            this.PostContact(form.fullname,form.designation,form.contactnumber,form.email);
        }

}
