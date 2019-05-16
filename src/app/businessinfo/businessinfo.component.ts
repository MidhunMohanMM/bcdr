import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service'
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';
import axios from 'axios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var jQuery:any;
declare var $ :any;


// var $ = require("jquery");


@Component({
  selector: 'app-businessinfo',
  templateUrl: './businessinfo.component.html',
  styleUrls: ['./businessinfo.component.css']
})
export class BusinessinfoComponent implements OnInit {
  
  homeTitle = "Please fill out these fields! - Company / Business Information";
  eid: any;
  company: any;
  cid: number;
  clist:any;
 // compliance: any = '';
  appname1: any = "";
  appname2: any = "";
  appname3: any = "";
  name: any ='';
  presence: any = "";
  number:any;
  workforce = 0;
  evaluatorsid="";
  contactsid = "";
  country= [];
  length: any;
  industryother: any;
  cloud: any = '';
  firewall: any = '';
  firewallchoice: any = "";
  office365: any = '';
  backup_strategy: any = "";
  high_availability: any = "";
  disaster_recovery_setup: any = "";
  carray= [];

  size:any = '';
  industry:any= '';
  compliance:any= '';
  policy:any= '';
  gdpr:any= '';
  business_model:any= '';
  customer_portal:any= '';
  p = [];
  sizes=[];
  industries=[];
  compliances= [];
  policys=[];
  gdprs=[];
  business_models= [];
  customer_portals=[];
  industrychoice: any = "";
  countries = [];
 // os:[];
  flag :any;
  clouds = [];
  firewalls = [];
  office365s = [];
  backup_strategys = [];
  high_availabilitys = [];
  disaster_recovery_setups = [];
  mailboxess = [];

  mailboxes:any='';
  average_mailbox_sizes: any='';
  sharepoint: any='';
  total_data_size: any='';
  total_virtual_machines : any='';
  tvm : any = '';


  decoded_cid: any;
  decoded_eid: any;
  user_company_id :any;
  user_tech_id :any;
  branches= [];

  id1 :any;
  id2 :any;
//////workload



docDefinition = { 
  content: ''
}


//homeTitle = "Workloads";
title = "Workload:"
selectedDatabase1="";
selectedaccess ="";
selectedValue1: string = '';
HASetup: string = '';
backup: string = '';
IsSetCmpSize = 0;
IsSetBsnsModel = 0;
IsSetCustPortal = 0 ;
IsSetCloud = 0;

count = 1;
// decoded_cid: any;
// flag:any;
osart: any;
//decoded_eid: any;
backupfrequency: any = "0";
backuptype: any = "0"
backuphow: any = "0";
hasetupreplication : any = "0";
drsetupreplication : any = "0";
drsetuplocation : any = "0";
drsetupconnection: any = "0";
array= [];
app_runnings = [];
auths = [];
backupfrequencys = [];
backups = [];
backuphows = [];
backuptypes = [];
criticals = [];    
databases = [];
descriptions = [];

drsetups = [];
drsetupconnections = [];
drsetuplocations = [];
drsetupreplications = [];
hasetups = [];
hasetupreplications = [];
oss = [];
//sizes = [];
useraccesss = [];
whoaccesss = [];

radio1:any = "";
radio2:any = "";
radio3:any = "";

dropdownList = [];
selectedItems = [];
dropdownSettings = {};
firewallList = [];

session_company = [];

firewallListSettings = {};



  constructor(
      private route : ActivatedRoute , 
      private router: Router, 
      private _location: Location) {
      this.route.params.subscribe(params => {
      console.log(params);
      this.number = params;
      this.cid = this.number.id;
      console.log(this.cid);
      this.showCountries();
      });
      }


  ngOnInit() {
    var self = this;
    var i = localStorage.getItem('lid');
    console.log(i)
    if(i == null){
      this.router.navigate(['/']);

    }

  

  

    window.addEventListener("beforeunload", function (event) {

      event.preventDefault();
      // Chrome requires returnValue to be set.
      event.returnValue = '';
    });

    axios.get('http://103.214.233.141:3333/v1/secure/leads/dictionaries/technologies')
    .then(function(response){
      
        console.log(response);

        self.firewalls = response.data.firewall;
        self.firewallList = self.firewalls;
      
    })
    .catch(function (error) {
        console.log('An Error occured',  error);
        
    }); 
    // this.firewallListSettings = {

    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   allowSearchFilter: true

    // };
    this.dropdownList = [
      { item_id: 1, item_text: 'Afghanistan' },
      { item_id: 2, item_text: 'Albania' },
      { item_id: 3, item_text: 'Algeria' },
      { item_id: 4, item_text: 'Andorra' },
      { item_id: 5, item_text: 'Angola' },
      { item_id: 6, item_text: 'Anguilla' },
      { item_id: 7, item_text: 'Antigua &amp; Barbuda' },
      { item_id: 8, item_text: 'Argentina' },
      { item_id: 9, item_text: 'Armenia' },
      { item_id: 10, item_text: 'Australia' },
      { item_id: 11, item_text: 'Austria' },
      { item_id: 12, item_text: 'Azerbaijan' },
      { item_id: 13, item_text: 'Bahamas' },
      { item_id: 14, item_text: 'Bahrain' },
      { item_id: 15, item_text: 'Bangladesh' },
      { item_id: 16, item_text: 'Barbados' },
      { item_id: 17, item_text: 'Belarus' },
      { item_id: 18, item_text: 'Belgium' },
      { item_id: 19, item_text: 'Belize' },
      { item_id: 20, item_text: 'Benin' },
      { item_id: 21, item_text: 'Bermuda' },
      { item_id: 22, item_text: 'Bhutan' },
      { item_id: 23, item_text: 'Bolivia' },
      { item_id: 24, item_text: 'Bosnia &amp; Herzegovina' },
      { item_id: 25, item_text: 'Botswana' },
      { item_id: 26, item_text: 'Brazil' },
      { item_id: 27, item_text: 'Brunei' },
      { item_id: 28, item_text: 'Burundi' },
      { item_id: 29, item_text: 'Bulgaria' },
      { item_id: 30, item_text: 'British Virgin Islands' },
      { item_id: 31, item_text: 'Burkina Faso' },
      { item_id: 32, item_text: 'Cambodia' },
      { item_id: 33, item_text: 'Cameroon' },
      { item_id: 34, item_text: 'Canada' },
      { item_id: 35, item_text: 'Cape Verde' },
      { item_id: 36, item_text: 'Cayman Islands' },
      { item_id: 37, item_text: 'Chad' },
      { item_id: 38, item_text: 'Chile' },
      { item_id: 39, item_text: 'China' },
      { item_id: 40, item_text: 'Congo' },
      { item_id: 41, item_text: 'Colombia' },
      { item_id: 42, item_text: 'Cook Islands' },
      { item_id: 43, item_text: 'Costa Rica' },
      { item_id: 44, item_text: 'Cote D Ivoire' },
      { item_id: 45, item_text: 'Croatia' },
      { item_id: 46, item_text: 'Cruise Ship' },
      { item_id: 47, item_text: 'Cuba' },
      { item_id: 48, item_text: 'Cyprus' },
      { item_id: 49, item_text: 'Czech Republic' },
      { item_id: 50, item_text: 'Denmark' },
      { item_id: 51, item_text: 'Djibouti' },
      { item_id: 52, item_text: 'Dominica' },
      { item_id: 53, item_text: 'Dominican Republic' },
      { item_id: 54, item_text: 'Ecuador' },
      { item_id: 55, item_text: 'Egypt' },
      { item_id: 56, item_text: 'El Salvador' },
      { item_id: 57, item_text: 'Equatorial Guinea' },
      { item_id: 58, item_text: 'Estonia' },
      { item_id: 59, item_text: 'Ethiopia' },
      { item_id: 60, item_text: 'Falkland Islands' },
      { item_id: 61, item_text: 'Faroe Islands' },
      { item_id: 62, item_text: 'Fiji' },
      { item_id: 63, item_text: 'France' },
      { item_id: 64, item_text: 'French Polynesia' },
      { item_id: 65, item_text: 'French West Indies' },
      { item_id: 66, item_text: 'Gabon' },
      { item_id: 67, item_text: 'Gambia' },
      { item_id: 68, item_text: 'Georgia' },
      { item_id: 69, item_text: 'Germany' },
      { item_id: 70, item_text: 'Ghana' },
      { item_id: 71, item_text: 'Gibraltar' },
      { item_id: 72, item_text: 'Greece' },
      { item_id: 73, item_text: 'Greenland' },
      { item_id: 74, item_text: 'Grenada' },
      { item_id: 75, item_text: 'Guam' },
      { item_id: 76, item_text: 'Guatemala' },
      { item_id: 77, item_text: 'Guernsey' },
      { item_id: 78, item_text: 'Guinea' },
      { item_id: 79, item_text: 'Guinea Bissau' },
      { item_id: 80, item_text: 'Guyana' },
      { item_id: 81, item_text: 'Honduras' },
      { item_id: 82, item_text: 'Hong Kong' },
      { item_id: 83, item_text: 'Hungary' },
      { item_id: 84, item_text: 'Iceland' },
      { item_id: 85, item_text: 'India' },
      { item_id: 86, item_text: 'Indonesia' },
      { item_id: 87, item_text: 'Iran' },
      { item_id: 88, item_text: 'Iraq' },
      { item_id: 89, item_text: 'Ireland' },
      { item_id: 90, item_text: 'Isle of Man' },
      { item_id: 91, item_text: 'Israel' },
      { item_id: 92, item_text: 'Italy' },
      { item_id: 93, item_text: 'Jamaica' },
      { item_id: 94, item_text: 'Japan' },
      { item_id: 95, item_text: 'Jersey' },
      { item_id: 96, item_text: 'Jordan' },
      { item_id: 97, item_text: 'Kazakhstan' },
      { item_id: 98, item_text: 'Kenya' },
      { item_id: 99, item_text: 'Kuwait' },
      { item_id: 100, item_text: 'Kyrgyz Republic' },
      { item_id: 101, item_text: 'Laos' },
      { item_id: 102, item_text: 'Latvia' },
      { item_id: 103, item_text: 'Lebanon' },
      { item_id: 104, item_text: 'Lesotho' },
      { item_id: 105, item_text: 'Liberia' },
      { item_id: 106, item_text: 'Libya' },
      { item_id: 107, item_text: 'Liechtenstein' },
      { item_id: 108, item_text: 'Lithuania' },
      { item_id: 109, item_text: 'Luxembourg' },
      { item_id: 110, item_text: 'Macau' },
      { item_id: 111, item_text: 'Macedonia' },
      { item_id: 112, item_text: 'Madagascar' },
      { item_id: 113, item_text: 'Malawi' },
      { item_id: 114, item_text: 'Malaysia' },
      { item_id: 115, item_text: 'Maldives' },
      { item_id: 116, item_text: 'Mali' },
      { item_id: 117, item_text: 'Malta' },
      { item_id: 118, item_text: 'Mauritania' },
      { item_id: 119, item_text: 'Mauritius' },
      { item_id: 120, item_text: 'Mexico' },
      { item_id: 121, item_text: 'Moldova' },
      { item_id: 122, item_text: 'Monaco' },
      { item_id: 123, item_text: 'Mongolia' },
      { item_id: 124, item_text: 'Montenegro' },
      { item_id: 125, item_text: 'Montserrat' },
      { item_id: 126, item_text: 'Morocco' },
      { item_id: 127, item_text: 'Mozambique' },
      { item_id: 128, item_text: 'Namibia' },
      { item_id: 129, item_text: 'Nepal' },
      { item_id: 130, item_text: 'Netherlands' },
      { item_id: 131, item_text: 'Netherlands Antilles' },
      { item_id: 132, item_text: 'New Caledonia' },
      { item_id: 133, item_text: 'New Zealand' },
      { item_id: 134, item_text: 'Nicaragua' },
      { item_id: 135, item_text: 'Niger' },
      { item_id: 136, item_text: 'Nigeria' },
      { item_id: 137, item_text: 'Norway' },
      { item_id: 138, item_text: 'Oman' },
      { item_id: 139, item_text: 'Pakistan' },
      { item_id: 140, item_text: 'Palestine' },
      { item_id: 141, item_text: 'Panama' },
      { item_id: 142, item_text: 'Papua New Guinea' },
      { item_id: 143, item_text: 'Paraguay' },
      { item_id: 144, item_text: 'Peru' },
      { item_id: 145, item_text: 'Philippines' },
      { item_id: 146, item_text: 'Poland' },
      { item_id: 147, item_text: 'Portugal' },
      { item_id: 148, item_text: 'Puerto Rico' },
      { item_id: 149, item_text: 'Qatar' },
      { item_id: 150, item_text: 'Reunion' },
      { item_id: 151, item_text: 'Romania' },
      { item_id: 152, item_text: 'Russia' },
      { item_id: 153, item_text: 'Rwanda' },
      { item_id: 154, item_text: 'Saint Pierre and Miquelon' },
      { item_id: 155, item_text: 'Samoa' },
      { item_id: 156, item_text: 'San Marino' },
      { item_id: 157, item_text: 'Satellite' },
      { item_id: 158, item_text: 'Saudi Arabia' },
      { item_id: 159, item_text: 'Senegal' },
      { item_id: 160, item_text: 'Serbia' },
      { item_id: 161, item_text: 'Seychelles' },
      { item_id: 162, item_text: 'Sierra Leone' },
      { item_id: 163, item_text: 'Singapore' },
      { item_id: 164, item_text: 'Slovakia' },
      { item_id: 165, item_text: 'Slovenia' },
      { item_id: 166, item_text: 'South Africa' },
      { item_id: 167, item_text: 'South Korea' },
      { item_id: 168, item_text: 'Spain' },
      { item_id: 169, item_text: 'Sri Lanka' },
      { item_id: 170, item_text: 'St Kitts and Nevis' },
      { item_id: 171, item_text: 'St Lucia' },
      { item_id: 172, item_text: '"St Vincent' },
      { item_id: 173, item_text: 'St. Lucia' },
      { item_id: 174, item_text: 'Sudan' },
      { item_id: 175, item_text: 'Suriname' },
      { item_id: 176, item_text: 'Swaziland' },
      { item_id: 177, item_text: 'Sweden' },
      { item_id: 178, item_text: 'Switzerland' },
      { item_id: 179, item_text: 'Syria' },
      { item_id: 180, item_text: 'Taiwan' },
      { item_id: 181, item_text: 'Tajikistan' },
      { item_id: 182, item_text: 'Tanzania' },
      { item_id: 183, item_text: 'Thailand' },
      { item_id: 184, item_text: 'Timor L Este' },
      { item_id: 185, item_text: 'Togo' },
      { item_id: 186, item_text: 'Tonga' },
      { item_id: 187, item_text: 'Trinidad and Tobago ' },
      { item_id: 188, item_text: 'Tunisia' },
      { item_id: 189, item_text: 'Turkey' },
      { item_id: 190, item_text: 'Turkmenistan' },
      { item_id: 191, item_text: 'Turks and Caicos' },
      { item_id: 192, item_text: 'Uganda' },
      { item_id: 193, item_text: 'Ukraine' },
      { item_id: 194, item_text: 'United Arab Emirates' },
      { item_id: 195, item_text: 'United Kingdom' },
      { item_id: 196, item_text: 'United States' },
      { item_id: 197, item_text: 'United States Minor Outlying Islands' },
      { item_id: 198, item_text: 'Uruguay' },
      { item_id: 199, item_text: 'Uzbekistan' },
      { item_id: 200, item_text: 'Venezuela' },
      { item_id: 201, item_text: 'Vietnam' },
      { item_id: 202, item_text: 'Virgin Islands (US)' },
      { item_id: 203, item_text: 'Yemen' },
      { item_id: 204, item_text: 'Zambia' },
      { item_id: 204, item_text: 'Zimbabwe' },
      
    ];
    
    
   
    this.dropdownSettings = {

      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true

    };

   // self.compliance = $('#myonoffswitch4').val();
    var count=1;
    var btncount=1;
    var collapse = 0;

    $( document ).ready(function() {


      var IsSetBinfo = localStorage.getItem('bInfo');

      var session_binfo = JSON.parse(localStorage.getItem('session_companyinfo'));
      console.log(session_binfo);
      if(IsSetBinfo == '1'){
        if(session_binfo != 'undefined'){
         var company =  session_binfo[0].company;
         var country = session_binfo[0].country;
         var branchnum = session_binfo[0].branches;
         var industry = session_binfo[0].industry;
         var size = session_binfo[0].size;
         var workforce = session_binfo[0].workforce;
         var bm = session_binfo[0].bm;
         var cm = session_binfo[0].cm;

          $('input[name=company]').val(company);
          $('#country').val(country);
          $('#branchnum').val(branchnum);
          $('#industry').val(industry);
          $("input[name=radio][value='"+ size +"']").prop('checked', true);
          $('input[name=ageInputName]').val(workforce);
          $('output[name=ageOutputName]').val(workforce+' %');
          $("input[name=business_model][value='"+ bm +"']").prop('checked', true);
          $("input[name=customer_portal][value='"+ cm +"']").prop('checked', true);
          
          $(".card-footer").find('.btn-secondary:nth-child(2)').prop("disabled", false); 
          
        }
      }
      var IsSetTinfo = localStorage.getItem('tInfo');

      var session_tinfo = JSON.parse(localStorage.getItem('session_techinfo'));
      console.log(session_tinfo);
      if(IsSetTinfo == '1'){
        if(session_tinfo != 'undefined'){
          var cloud = session_tinfo[0].cloud;
          var firewall = session_tinfo[0].firewall;
          var total_data = session_tinfo[0].total_data_size;
          var total_vm = session_tinfo[0].total_v_m;
          var mailboxes = session_tinfo[0].mailboxes;
          var avg_mb_size = session_tinfo[0].avg_mb_size;
          var sharept = session_tinfo[0].sharept;
            
          $("input[name=radio6][value='"+ cloud +"']").prop('checked', true);
          $('#firewall').val(firewall);
          $('input[name=total_data_size]').val(total_data);
          $('input[name=total_virtual_machines]').val(total_vm);
          // if(session_tinfo[0].officetsf == "Yes"){
          //   console.log("hid");
          //   $("#myonoffswitch9").prop('checked', false);
          // }

          $('input[name=mailboxes]').val(mailboxes)
          $('input[name=average_mailbox_sizes]').val(avg_mb_size)
          $('input[name=sharepoint]').val(sharept)
            
          
          console.log(session_tinfo[0]);
        }
      }

      $('input[name=radio]').click(function(){
        // $('#valid').removeAttr("required");
        // $('#valid').remove();
        self.removeCmpnyValidation();
      });
      $('input[name=business_model]').click(function(){
        self.removeBsnsValidation(); 
      });
      $('input[name=customer_portal]').click(function(){
        self.removeCustPortalValidation();
      });
      
      $('input[name=radio6]').click(function(){
        self.removeCloudValValidation();
      });

      $(".card-footer").find('.btn-secondary:nth-child(3)').hide();
      var form1 = $("#formrepeat0").clone(true);


      $(".addnew").click(function(e){
        
          // alert();
          var self = this;
          //this.GetData();
          e.preventDefault();
          var formnew = form1.clone(true);
      

          var i = formnew.find('input:text,select').val("").end().appendTo("#repeat");
          i.find(".remove").attr("style" , "display:block;padding:0px;");
          i.find('form').attr("id" , `form${count}`);
          i.find('.hr1').attr("id" , `hr${count}`);
          i.find('.barw').attr("id" , `barw${count}`);
          i.find('.work').attr("id" , `work${count}`);
          $(`#btn${collapse}`).attr("style" , "display:block");
          $(`#hr${collapse}`).attr("style" , "display:block");
          $(`#barw${collapse}`).attr("style" , "display:block;background-color: #eeeff1;padding: 9px;border-bottom: 1px solid #bfbfbf;");
          $(`#btn${collapse}`).attr("style" , "float:right;padding: 2px 7px;border-radius: 3px!important;color:white!important;padding:2px 7px; background-color:#1976d2!important;font-family:Poppins-Regular, sans-serif");
          // $('.formrepeat0').attr("style" , "outline: auto;");
          //  $(this).closest("#formrepeat0").attr("style" , "background: none;");
          i.find('.flipbtn').attr("id" , `btn${btncount}`);
          i.find('.databaseval').attr("id" , `databaseval${btncount}`);
          i.find('.name').attr("id" , `name${btncount}`);
          i.find('.app_running').attr("id" , `app_running${btncount}`);
          i.find('.formrepeat').attr("id" , `formrepeat${btncount}`);

          self.appname1 = $('#name0').val();

          console.log($('#name0').val());
          console.log(this.appname1);

          self.appname2 = $('#name1').val();
          console.log($('#name1').val());
          console.log(self.appname2);


          for(var l = 0; l < 500; ++l) {
            self.appname = $('#name' +l).val();
            $('#work' +l).html(self.appname);
          }


          i.find('.database').attr("id" , `database${btncount}`);
          i.find('.databaseother').attr("id" , `databaseother${btncount}`);
          i.find('.whoaccess').attr("id" , `whoaccess${btncount}`);
          i.find('.whoaccessother').attr("id" , `whoaccessother${btncount}`);
          i.find('.drsetupconnection').attr("id" , `drsetupconnection${btncount}`);
          i.find('.drsetupconnectionother').attr("id" , `drsetupconnectionother${btncount}`);
          i.find('.os').attr("id" , `os${btncount}`);
          i.find('.osother').attr("id" , `osother${btncount}`);
          i.find('.backup').attr("id" , `backup${btncount}`);
          i.find('.backupf').attr("for" , `backup${btncount}`);
          i.find('.backupYes').attr("id" , `backupYes${btncount}`);
          i.find('.hasetup').attr("id" , `hasetup${btncount}`);
          i.find('.hasetupf').attr("for" , `hasetup${btncount}`);
          i.find('.hasetupYes').attr("id" , `hasetupYes${btncount}`);
          i.find('.drsetup').attr("id" , `drsetup${btncount}`);
          i.find('.drsetupf').attr("for" , `drsetup${btncount}`);
          i.find('.drsetupYes').attr("id" , `drsetupYes${btncount}`);


          i.find('.bit1').attr("id" , `bit1${btncount}`);
          i.find('.bit1f').attr("for" , `bit1${btncount}`);

          i.find('.bit2').attr("id" , `bit2${btncount}`);
          i.find('.bit2f').attr("for" , `bit2${btncount}`);

          
          i.find('.user1').attr("id" , `user1${btncount}`);
          i.find('.user1f').attr("for" , `user1${btncount}`);

          i.find('.user2').attr("id" , `user2${btncount}`);
          i.find('.user2f').attr("for" , `user2${btncount}`);

          i.find('.user3').attr("id" , `user3${btncount}`);
          i.find('.user3f').attr("for" , `user3${btncount}`);

          i.find('.customRadio1').attr("id" , `customRadio1${btncount}`);
          i.find('.customRadio1f').attr("for" , `customRadio1${btncount}`);

          i.find('.customRadio2').attr("id" , `customRadio2${btncount}`);
          i.find('.customRadio2f').attr("for" , `customRadio2${btncount}`);

          i.find('.customRadio3').attr("id" , `customRadio3${btncount}`);
          i.find('.customRadio3f').attr("for" , `customRadio3${btncount}`);
          

          // i.find('.backup').attr("id" , `backup${btncount}`);
          // i.find('.backupf').attr("for" , `backup${btncount}`);
     
          $('#form' +collapse).slideToggle("slow");       
          

          count++;
          btncount++;
          collapse++;


        });

      });

// if( $('.backup').val()==="on"){
//       $('.backup').attr('value', 'Yes'); 
//   }

//   if( $(this).val()==="others"){
//         $('.backup').attr('value', 'Yes'); 
//     }

//     if( $(this).val()==="others"){
//       $("#databaseother" +i).show();
//       }

  
      $(".remnew").click(function(){
        // console.log("hi");
        $(this).closest("#formrepeat0").remove();
      });


      $(".flipbtn").click(function(e){
        for(var i = 0; i < 500; ++i) {
        if($(this).attr("id") == 'btn' +i){
          $('#form' +i).slideToggle("slow");       
        }
      
        }
      });


        $('.database').on('change',function(){

        for(var i = 0; i < 500; ++i) {
          if($(this).attr("id") == 'database' +i){
        console.log("hi");
        if( $(this).val()==="others"){
        $("#databaseother" +i).show();
        }
        else{
        $("#databaseother" +i).hide();
        }
        }
        }
        });


        $('.whoaccess').on('change',function(){

        for(var i = 0; i < 500; ++i) {
          if($(this).attr("id") == 'whoaccess' +i){


        if( $(this).val()==="others"){
        $("#whoaccessother" +i).show();
        }
        else{
        $("#whoaccessother" +i).hide();
        }
        }
        }
        });


        $('.drsetupconnection').on('change',function(){

        for(var i = 0; i < 500; ++i) {
          if($(this).attr("id") == 'drsetupconnection' +i){

        if( $(this).val()==="others"){
        $("#drsetupconnectionother" +i).show();
        }
        else{
        $("#drsetupconnectionother" +i).hide();
        }
        }
        }
        });

        $('.os').on('change',function(){
        //alert();
        for(var i = 0; i < 500; ++i) {
          if($(this).attr("id") == 'os' +i){
          //  $("#osother" +i).attr("style" , "display:block");
        if( $(this).val() != ''){
          //alert();
        $("#osother"+i).show();
        //$("#osother" +i).attr("style" , "display:block");
        }
        else{
        $("#osother" +i).hide();
        }
        }
        }
        });







        $('.backup').on('change',function(){
          //alert();
        for(var i = 0; i < 500; ++i) {
          if($(this).attr("id") == 'backup' +i){

        if( $(this).val() === 'Yes'){
        $("#backupYes" +i).toggle();
        }
        if( $(this).val() === 'NULL'){
          $("#backupYes" +i).toggle();
          $('#backup' +i).val('No');
        }
        if( $(this).val() === ''){
          $("#backupYes" +i).toggle();
          $('#backup' +i).val('No');
        }

        }
        }
        });



          $('.hasetup').on('change',function(){
          for(var i = 0; i < 500; ++i) {
            if($(this).attr("id") == 'hasetup' +i){
          //alert($(this).val());
          if( $(this).val() === 'Yes'){
          $("#hasetupYes" +i).toggle();
          }
          if( $(this).val() === 'NULL'){
            $("#hasetupYes" +i).toggle();
            $('#hasetup' +i).val('No');
          }
          }
          }
          });



          $('.drsetup').on('change',function(){
          for(var i = 0; i < 500; ++i) {
            if($(this).attr("id") == 'drsetup' +i){

          if( $(this).val() === 'Yes'){
            $("#drsetupYes" +i).toggle();
          // $('.backup').attr('value', 'Yes');
          }
          if( $(this).val() === 'NULL'){
            $("#drsetupYes" +i).toggle();
            $('#drsetup' +i).val('No');
          }
          }
          }
          });


          this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
      
      });
  
    this.GetData();
    this.GetTData();
    this.GetWData();


        $('#btn').on('click', function() {
          if ($('#company').val() == ""){
            alert('Please enter your company name');
        }
        // console.log($('#country').val());
        else if ($('#country').val() == null){
          alert('Please enter your country');
        }
        if ($('#size').val() == null){
        alert('Please enter the company size');
        }

      });


      if(localStorage.getItem("companyinfo"))
    {
      var i = localStorage.getItem("companyinfo");
      console.log(i);
      console.log(i[2]);
      var arrayFromLS;
      
        if(i != null){

      //try {
          arrayFromLS = JSON.parse(localStorage.getItem("companyinfo"));
          // if ({}.toString.call(arrayFromLS) !== "[object Array]") {
            //  arrayFromLS = [];
              console.log( arrayFromLS);
              this.name = arrayFromLS[0];
              this.country = arrayFromLS[1];
              this.presence = arrayFromLS[2];
              this.branches = arrayFromLS[3];
              this.size = arrayFromLS[4];
              this.industry = arrayFromLS[5];
              this.industrychoice = arrayFromLS[6];
              this.workforce = arrayFromLS[7];
              this.compliance = arrayFromLS[8];
              this.policy = arrayFromLS[9];
              this.gdpr = arrayFromLS[10];
              this.business_model = arrayFromLS[11];
              this.customer_portal = arrayFromLS[12];
        // }
    // } catch ( e ) {
      //    arrayFromLS = [];
    // }

        //  }
        }
      }


  (function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
            hideValidate(this);
        });
    });

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

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



///////////////////////////wizard///////


})(jQuery);

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  backClicked() {
    alert();
    this._location.back();
  }

  showCountries() {
    var self = this;
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(function(response){
        let countrylist = response.data.map((val, index, arr) => {
        return val.name;
      });
  
      self.clist = countrylist;

    // console.log(self.list)
    })
   

    .catch(function (error) {
        console.log('An Error occured',  error);
    });

  
  }
  PostCompany(){

      var self = this;

      if(self.compliance === 'on'){
        self.compliance = 'Yes';
      }

      if(self.compliance === true){
        self.compliance = 'Yes';
      }
        
      if(self.policy === true){
        self.policy = 'Yes';
      }

      if(self.gdpr === true){
        self.gdpr = 'Yes';
      }

      if(self.compliance === false){
        self.compliance = 'No';
      }
      if(self.policy === false){
        self.policy = 'No';
      }
      if(self.gdpr === false){
        self.gdpr = 'No';
      }



      if(self.compliance == ''){
        self.compliance = 'No';
      }
      if(self.policy == ''){
        self.policy = 'No';
      }
      if(self.gdpr == ''){
        self.gdpr = 'No';
      }



      self.size =$('input[name=radio]:checked').val();
      self.business_model =$('input[name=business_model]:checked').val();
      self.customer_portal =$('input[name=customer_portal]:checked').val();
      console.log(self.country);
      console.log(self.presence);

      if(self.industryother != undefined){
        self.industry = self.industryother;
      }

      var countries = '';
      self.presence.forEach(function(i, idx, array) {
          // console.log(array[idx].item_text)
        
          if (idx === array.length - 1){ 
            countries = countries+array[idx].item_text;
          }
          else{
            countries = countries+array[idx].item_text+',';
          }
    
      });
        console.log(countries);
      self.presence = countries;
      var values = new Array();
    
        // values.push(self.company);
        // values.push(self.country);
        // values.push(self.presence);
        // values.push(self.branches);
        // values.push(self.size);
        // values.push(self.industry);
        // values.push(self.industryother);
        // values.push(self.workforce);
        // values.push(self.compliance);
        // values.push(self.policy);
        // values.push(self.gdpr);
        // values.push(self.business_model);
        // values.push(self.customer_portal);

        values = [{
          "company" : self.company,
          "country" : self.country,
          "presence" : self.presence,
          "branches" : self.branches,
          "size" : self.size,
          "industry" : self.industry,
          "industryother" : self.industryother,
          "workforce" : self.workforce,
          "compliance" : self.compliance,
          "policy" : self.policy,
          "gdpr" : self.gdpr,
          "bm" : self.business_model,
          "cm" : self.customer_portal
        }]



        try {
          localStorage.setItem("session_companyinfo", JSON.stringify(values));
        } 
        catch (e) { }
        var leadId = localStorage.getItem('lid');
    
        var IsLoggedIn = localStorage.getItem('bInfo');
        var userCmpId = localStorage.getItem('user_cmp_id');
        if(IsLoggedIn == '1'){

        axios.put('http://103.214.233.141:3333/v1/secure/leads/companies/'+userCmpId,
        {
          "leadsid": self.cid,
          "name": self.company, 
          "country": self.country,
          "presence":self.presence,
          "branches" : self.branches,
          "size": self.size,
          "industry": self.industry,
          "workforce": self.workforce,
          "compliance": self.compliance,
          "policy" : self.policy,
          "gdpr": self.gdpr,
          "business_model": self.business_model,
          "customer_portal": self.customer_portal
         })
          .then(function (response) {
          console.log(response); 
            //self.router.navigate(['/technologyinformation', i,cid] ); 
          })
          .catch(function (error) {
            console.log(error);
          });



        }
        else{

               
        axios.post('http://103.214.233.141:3333/v1/secure/leads/companies', 
        {
          "leadsid": self.cid,
          "name": self.company, 
          "country": self.country,
          "presence":self.presence,
          "branches" : self.branches,
          "size": self.size,
          "industry": self.industry,
          "workforce": self.workforce,
          "compliance": self.compliance,
          "policy" : self.policy,
          "gdpr": self.gdpr,
          "business_model": self.business_model,
          "customer_portal": self.customer_portal
          })

          .then(function (response) {
            self.user_company_id = response.data.leadscompaniesid; 
            localStorage.setItem('user_cmp_id', response.data.leadscompaniesid)

          })
          .catch(function (error) {
            console.log(error);
          });
          localStorage.setItem('bInfo', '1');

        }
    }


      BacktoContact(){
        var self = this;
        var values = new Array();
        values.push(self.cid);
        try {
            sessionStorage.setItem('cid', values.join(";"));
        } 
        catch (e) { }
        self.router.navigate(['/contactinformation', self.eid] ); 
      }



      GetData(){
        var self = this;
        axios.get('http://103.214.233.141:3333/v1/secure/leads/dictionaries/companies')
        .then(function(response){
           console.log(response);
      
            self.business_models = response.data.business_model;
            self.sizes = response.data.size;
            self.industries = response.data.industry;
            self.compliances = response.data.compliance;
            self.policys = response.data.policy;
            self.gdprs = response.data.gdpr;
            self.customer_portals = response.data.customer_portal;

        })
        .catch(function (error) {
            console.log('An Error occured',  error);
           
        }); 
      }

      GetTData(){
        var self = this;
        axios.get('http://103.214.233.141:3333/v1/secure/leads/dictionaries/technologies')
        .then(function(response){
           console.log(response);
      
            self.clouds = response.data.cloud;
            self.firewalls = response.data.firewall;
            self.office365s = response.data.office365;
            self.backup_strategys = response.data.backup_strategy;
            self.high_availabilitys = response.data.high_availability;
            self.disaster_recovery_setups = response.data.disaster_recovery_setup;
            self.mailboxess = response.data.mailboxes;

           

        })
        .catch(function (error) {
            console.log('An Error occured',  error);
           
        }); 
      }

    submit(){



        $.fn.serializeJSON = function() {

          var obj = {};
          var arr = this.serializeArray();
          console.log(arr);
          arr.forEach(function(item, index) {
              if (obj[item.name] === undefined) {      // New
                  obj[item.name] = item.value || '';
              } else {                                 // Existing
                  if (!obj[item.name].push) {
                      obj[item.name] = [obj[item.name]];
                  }
                  obj[item.name].push(item.value || '');
              }
          });
         
          return (obj);
      };
    
      var self = this;
       
      var list = new Array();
      for(var i:any = 0; i < 500; i++) {
        if($('#form' +i).length){
        
        self.array=$('#form' +i).serializeJSON();
        console.log(self.array)
        self.p.push( self.array) ;
        console.log(self.array);
        console.log(self.p);

        list.push(self.array);
      
        }
      }
      for(var m = 0; m < 500; ++m) {

        if($('#form' +m).val() != undefined){
        if ($('#name' +m).val() == ''){
          this.flag = 1;
          console.log($('#name' +m).val());
          alert('Please enter name of Workload' +' '+(m+1));
          
          }
          // console.log($('#app_running' +m).val());
          // console.log($('#backup' +m).val());
          else if($('#app_running' +m).val() == null){
            this.flag = 1;
            console.log($('#app_running' +m).val());
            alert('Please select required field on Workload' + ' ' +(m+1));
          }
          else if($('#backup' +m).val() == null){
            this.flag = 1;
            console.log($('#backup' +m).val());
          alert('Please select required field on Workload' + ' ' +(m+1));
          }
          else{
            this.flag = 0;
          }
        }
      }
      //this.docDefinition.content = $('#name0' ).val();
      
      //pdfMake.createPdf(this.docDefinition).download();
      //else{
        
     if(this.flag == 0)   {


      $('#purpose-modal-btn').trigger( "click" );
      $('#pupose-save').click(function(){
        var purpose_val = $("input[name='purpose']:checked"). val();
        if (purpose_val === undefined){
          $('#error_msg_purpose').show();
          
        }
        else{
          $('#pupose-close').trigger("click");
          axios.post('http://103.214.233.141:3333/v1/secure/leads/purposes',{

              "leadsid": self.cid,
              "business_problem_technical_challenge": purpose_val
          
          })
          .then(function (response) {
     
            axios.post('http://103.214.233.141:3333/v1/secure/leads/workloads/bulk',list)
            .then(function (response) {
       
              self.router.navigate(['/report', self.cid] ); 
             })
             .catch(function (error) {
               console.log(error);
             });

           })
           .catch(function (error) {
             console.log(error);
           });
        }

      });



        }
      
    }

      GetWData(){
        var self = this;
        axios.get('http://103.214.233.141:3333/v1/secure/leads/dictionaries/workloads')
        .then(function(response){
           console.log(response);
           self.app_runnings = response.data.app_running;
           self.auths = response.data.auth;
           self.backups = response.data.backup;
           self.backupfrequencys = response.data.backupfrequency;
           self.backuphows = response.data.backuphow;
           self.backuptypes = response.data.backuptype;
           self.criticals = response.data.critical;
           self.databases = response.data.database;
           self.descriptions = response.data.description;
           self.drsetups = response.data.drsetup;
           self.drsetupconnections = response.data.drsetupconnection;
           self.drsetuplocations = response.data.drsetuplocation;
           self.drsetupreplications = response.data.drsetupreplication;
           self.hasetups = response.data.hasetup;
    
           self.hasetupreplications = response.data.hasetupreplication;
           self.oss = response.data.os;
           self.sizes = response.data.size;
           self.useraccesss = response.data.useraccess;
           self.whoaccesss = response.data.whoaccess;
    
        })
        .catch(function (error) {
            console.log('An Error occured',  error);
           
        }); 
      }

      
  PostTech(){
    
    var self = this; 
    // self.cid
      self.cloud =$('input[name=radio6]:checked').val();
	
      if(self.office365 === 'on'){

        self.office365 = 'Yes';
      }
      if(self.office365 === true){
        self.office365 = 'Yes';
      }
      if(self.backup_strategy === true){
        self.backup_strategy = 'Yes';
      }
      if(self.high_availability === true){
        self.high_availability = 'Yes';
      }
      if(self.disaster_recovery_setup === true){
        self.disaster_recovery_setup = 'Yes';
      }

      if(self.office365 === false){
        self.office365 = 'No';
      }
      if(self.backup_strategy === false){
        self.backup_strategy = 'No';
      }
      if(self.high_availability === false){
        self.high_availability = 'No';
      }
      if(self.disaster_recovery_setup === false){
        self.disaster_recovery_setup = 'No';
      }


      if(self.office365 === ''){
        self.office365 = 'No';
      }
      if(self.backup_strategy === ''){
        self.backup_strategy = 'No';
      }
      if(self.high_availability === ''){
        self.high_availability = 'No';
      }
      if(self.disaster_recovery_setup === ''){
        self.disaster_recovery_setup = 'No';
      }

      if(self.firewallchoice != ''){
        self.firewall = self.firewallchoice;
      }

      self.average_mailbox_sizes = self.average_mailbox_sizes;
      self.sharepoint = self.sharepoint;
      self.total_data_size = self.total_data_size;
      self.tvm = self.total_virtual_machines;

      var values = new Array();
  
      // values.push(self.cloud);
      // values.push(self.firewall);
      // values.push(self.firewallchoice);
      // values.push(self.office365);
      // values.push(self.mailboxes);
      // values.push(self.average_mailbox_sizes);
      // values.push(self.sharepoint);
      // values.push(self.total_data_size);
      // values.push(self.backup_strategy);
      // values.push(self.high_availability);
      // values.push(self.disaster_recovery_setup);

      values = [{
        "cloud" : self.cloud,
        "firewall" : self.firewall,
        "firewallchoice" : self.firewallchoice,
        "officetsf" : self.office365,
        "mailboxes" : self.mailboxes,
        "avg_mb_size" : self.average_mailbox_sizes,
        "sharept" : self.sharepoint,
        "total_data_size" : self.total_data_size,
        "total_v_m" : self.tvm,
        "backup_strategy" : self.backup_strategy,
        "havlblty" : self.high_availability,
        "drs" : self.disaster_recovery_setup
      }]
  
      try {
        localStorage.setItem("session_techinfo", JSON.stringify(values));
      } 
      catch (e) { }
  


      var i = sessionStorage.getItem('eid');
      console.log(i);
      var IsTinfo = localStorage.getItem('tInfo');
      var userTechId = localStorage.getItem('user_tech_id');
    
      if(IsTinfo == '1'){
        console.log('local storage');
        var cid = sessionStorage.getItem('cid');
        console.log(cid);
        this.decoded_cid = atob(cid);
        this.decoded_eid = atob(i);

        axios.put('http://103.214.233.141:3333/v1/secure/leads/technologies/'+userTechId ,
        {

          "leadsid": self.cid,
          "cloud": self.cloud, 
          "firewall": self.firewall,
          "total_vm_physical": self.tvm,
          "office365":self.office365,
          "mailboxes": self.mailboxes,
          "average_mailbox_sizes": self.average_mailbox_sizes,
          "sharepoint": self.sharepoint,
          "total_data_size": self.total_data_size,
          "backup_strategy" : self.backup_strategy,
          "high_availability" : self.high_availability,
          "disaster_recovery_setup" : self.disaster_recovery_setup

        })
        .then(function (response) {
        console.log(response); 
          self.router.navigate(['/workloaddetails', i,cid] ); 
        })
        .catch(function (error) {
          console.log(error);
        });
    
    
    
      }
      else{


      localStorage.setItem('tInfo', '1');
      axios.post('http://103.214.233.141:3333/v1/secure/leads/technologies', 
      {
        "leadsid": self.cid,
        "cloud": self.cloud, 
        "firewall": self.firewall,
        "total_vm_physical": self.tvm,
        "office365":self.office365,
        "mailboxes": self.mailboxes,
        "average_mailbox_sizes": self.average_mailbox_sizes,
        "sharepoint": self.sharepoint,
        "total_data_size": self.total_data_size,
        "backup_strategy" : self.backup_strategy,
        "high_availability" : self.high_availability,
        "disaster_recovery_setup" : self.disaster_recovery_setup
        })

      .then(function (response) {
        localStorage.setItem('user_tech_id' , response.data.leadstechnologiesid) ; 

        // self.evaluatorsid = response.data.evaluatorsid;
        // self.contactsid = response.data.contactsid;


        // self.router.navigate(['/workloaddetails',  self.eid, self.cid] ); 
        })
        .catch(function (error) {
          console.log(error);
        });
        }
    }



      
      NextPage(){
        var self = this;
        self.id1 = 1;
        self.id2 = 2;
        self.router.navigate(['/technologyinformation', self.id1,self.id2] ); 
      }

/////////////////////////////////////////////////wizard//////////////////////////////////
      step2: any = {
        showNext: true,
        showPrev: true
      };
    
      step3: any = {
        showSecret: false
      };
    
      // data: any = {
      //   email: 'muk@gmail.com'
      // };
    
      isCompleted: boolean = false;
    
      onStep1Next(event) {
        console.log('Step1 - Next');
    
  
        $(window).scrollTop(400);
      }
    
      onStep2Next(event) {
        console.log('Step2 - Next');
    
        this.PostCompany();
        $(window).scrollTop(400);
        // showNext: true,
      }
    
      onStep3Next(event) {
        console.log('Step3 - Next');
        this.PostTech();
        $(window).scrollTop(400);
        //this.isCompleted = true;
      }
    
      onComplete(event) {
        console.log("completed");
        this.isCompleted = true;
        this.submit();
      }
    
      onStepChanged(step) {
        console.log('Changed to ' + step.title);
      }
      removeCmpnyValidation(){
        // console.log(this.IsSetCmpSize)
        this.IsSetCmpSize = 1;
        // console.log(this.IsSetCmpSize)
      }
      removeBsnsValidation(){
        this.IsSetBsnsModel = 1;
      }
      removeCustPortalValidation(){
        this.IsSetCustPortal = 1;
      }
      removeCloudValValidation(){
        this.IsSetCloud = 1;
      }
       
      
}
