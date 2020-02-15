import {  OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
//import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


class area
{
  areaname: string;
  areadescription : string;
}

@Component({
  selector: 'app-addwarmodal',
  templateUrl: './addwarmodal.component.html',
  styleUrls: ['./addwarmodal.component.scss']
})

export class AddwarmodalComponent implements OnInit {

  user : area;

  areaname1: string;
  areadescription1 : string;
  
  constructor(public activeModal  : NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  submitarea()
  {
    this.user = new area;
    this.user.areaname =  this.areaname1;
    this.user.areadescription = this.areadescription1;
    this.activeModal.close(this.user);    // sending data to the component here
  }
}
