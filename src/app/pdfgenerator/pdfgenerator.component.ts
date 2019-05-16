
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
//var $ = require("jquery");
declare var jQuery:any;
declare var $ :any;

declare var pdfMake:any;
declare var jsPDF: any;

declare var axios: any;

@Component({
  selector: 'app-pdfgenerator',
  templateUrl: './pdfgenerator.component.html',
  styleUrls: ['./pdfgenerator.component.css']
})
export class PdfgeneratorComponent implements OnInit {

  appname: string= 'Test App';
  office365_veeam_datasize : any ;
  office365_veeam_bcdr : any;
  onpremise_veeam_datasize : any;
  onpremise_veeam_bcdr : any;


  office365_veritas_datasize : any;
  office365_veritas_bcdr : any;
  onpremise_veritas_datasize : any;
  onpremise_veritas_bcdr : any;



  onpremise_b2a_az_datasize : any;
  onpremise_b2a_az_monthly  : any;
  onpremise_d2a_az_datasize : any;
  onpremise_d2a_az_monthly : any;




  office365mi : string = '15';

  onpremisemi : string = '20';
  cid: string = "";
  number: any 
  cri: any;
  cri1: any;
  reportsid:any = "";
  bcdrri: any;
  cbcdrri: any;
  name: any;
  length: any ="";
  cro_answer: any;
  cro_crm: any;
  aro_answer: any;
  aro_crm: any;
  feed_answer: any;

  companybcdrri:any;

    // workloaddata:any = "";

    workloaddata = [];
    obj = [];
    reports = [];
    notes = [];
    meter_reports = [];

    m_r_crm = [];
    m_r_brm = [];
    m_r_drm = [];

    total_workloads = [];
    crm_note_heading:any;
    brm_note_heading:any;
    drm_note_heading:any;

    crm_note_side = [];
    brm_note_side = [];
    drm_note_side = [];

    onpremiseazuredz : string = '20';
    onpremiseazuremi : string = '30';
    onpremisedrsz : string = '40';
    onpremisedrmi : string = '50';

@ViewChild('content') content :ElementRef;


  constructor( private route : ActivatedRoute ,  private router: Router) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.number = params;
      this.cid = this.number.id;
      console.log(this.cid);
      });
   }

  ngOnInit() {

    this.ReportGeneration();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
      
  });


  }

  downloadPDF(){

    function fn1() {
      $(".collapse").collapse('show');
      
    }

    function fn3() {
      if($('#wrkload0').is('.collapse:not(.show)')) {

    }
    else{
      var self = this;

      let margins = {
        top: 80,
        bottom: 90,
        left: 40,
        width: 522
      };
    
    
    
    
      let doc = new jsPDF('p','mm',[700, 550]);
    
    
    doc.addHTML(document.getElementById('content'),{
      pagesplit: true, 
      margin:{ top: 0,
            bottom: 0,   
    
      }
    },
    function() {
        doc.save('BCDR_Report.pdf');
    });
    
    }

    }
    fn1();
    setTimeout(fn3, 2000);
//     var dfd = $.Deferred();
//     dfd
// // .done() can take any number of functions or arrays of functions
//   .done( fn1,fn3  )
//   dfd.resolve();
  }

  ReportGeneration(){
    
    var self = this;
    console.log(self.cid);
    const lid = self.cid;
    
    axios.get('http://103.214.233.141:3333/v1/secure/leads/dictionaries/howtomove')
    .then(function(response){

      self.notes = response.data;
      
      self.crm_note_heading = response.data.crm_note.heading;
      self.brm_note_heading = response.data.brm_note.heading;
      self.drm_note_heading = response.data.drm_note.heading;

      self.crm_note_side = response.data.crm_note.side;
      self.brm_note_side = response.data.brm_note.side;
      self.drm_note_side = response.data.drm_note.side;

    })
    .catch(function (error) {
      console.log('An Error occured',  error);
    
  }); 
    axios.get('http://103.214.233.141:3333/v1/secure/leads/reports/create/'+self.cid)
    .then(function(response){

      
      
        axios.get('http://103.214.233.141:3333/v1/secure/leads/reports/calculate/prices/'+self.cid)
        .then(function(response){

          self.office365_veeam_datasize = response.data.veeam.o365.storage_req;
          self.office365_veeam_bcdr = response.data.veeam.o365.cost_month;
          self.onpremise_veeam_datasize = response.data.veeam.op.backup_data;
          self.onpremise_veeam_bcdr = (response.data.veeam.op.veeam_cost_year/12).toFixed(2);

          self.office365_veritas_datasize  = response.data.veeam.o365.storage_req;
          self.office365_veritas_bcdr = response.data.veritas.o365.cost_month;
          self.onpremise_veritas_datasize = response.data.veritas.op.on_premise_backup;
          self.onpremise_veritas_bcdr = (response.data.veritas.op.cost_year/12).toFixed(2);

          self.onpremise_b2a_az_datasize = response.data.asr.ba.onpremise_storage;
          self.onpremise_b2a_az_monthly = response.data.asr.ba.total_cost;
          self.onpremise_d2a_az_datasize = response.data.asr.dra.total_data_size;
          self.onpremise_d2a_az_monthly = response.data.asr.dra.total_cost;

       
            axios.get('http://103.214.233.141:3333/v1/secure/leads/reports/calculate/meters/'+self.cid)
            .then(function(response){
         
   
              // self.meter_reports = response.data.crm;
        
              // for (var k in self.meter_reports){
       
              //   self.m_r_crm.push(response.data.crm[k]);
              //   self.m_r_brm.push(response.data.brm[k]);
              //   self.m_r_drm.push(response.data.drm[k]);
    
              // }

            axios.get('http://103.214.233.141:3333/v1/secure/leads/reports?leads[leadsid]='+self.cid)
            .then(function(response){

                self.cro_crm = response.data[0].lead.cro_crm;
                self.cro_answer = response.data[0].lead.cro_answer;
                self.aro_crm = response.data[0].lead.aro_crm;
                self.aro_answer = response.data[0].lead.aro_answer;
                self.companybcdrri = response.data[0].lead.companybcdrri;
                self.feed_answer = response.data[0].lead.feed_answer;
                self.reports = response.data;
                console.log(response.data);

           

            })
            .catch(function (error) {
              console.log('An Error occured',  error);
            
          }); 
            
          })
          .catch(function (error) {
              console.log('An Error occured',  error);
            
          }); 
     
        })
        .catch(function (error) {
            console.log('An Error occured',  error);
          
        }); 
   
      })
      .catch(function (error) {
          console.log('An Error occured',  error);
        
      }); 
     
    console.log(self.m_r_crm)
  }


}
