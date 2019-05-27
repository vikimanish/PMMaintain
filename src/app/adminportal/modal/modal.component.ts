import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent implements OnInit {

  @Input() machineNo:string;
  @Output() machineConfirm: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log("child component"+this.machineNo);
  }

  confirm()
  {
    this.machineConfirm.emit(this.machineNo);
    this.activeModal.close('Close click');
  }

}
