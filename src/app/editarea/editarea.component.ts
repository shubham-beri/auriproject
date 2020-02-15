import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

class area
{
  areaname: string;
  areadescription : string;
  wardnumber : number
}
@Component({
  selector: 'app-editarea',
  templateUrl: './editarea.component.html',
  styleUrls: ['./editarea.component.scss']
})
export class EditareaComponent implements OnInit {

  user : area;

  areaname1: string;
  areadescription1 : string;
  wardnumber1 : number;

  constructor(public activeModal  : NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  editareadetails()
  {
    this.user = new area();
    this.user.areadescription = this.areadescription1;
    this.user.areaname = this.areaname1;
    this.user.wardnumber = this.wardnumber1;

    this.activeModal.close(this.user);
  }

}
