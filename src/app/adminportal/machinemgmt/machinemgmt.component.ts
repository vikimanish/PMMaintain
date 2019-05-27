import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {machineservice} from'../../services/machine.service';
import {machineList} from '../../model/machinelist';
import {ModalComponent} from '../modal/modal.component';
import { AuthService } from '../../auth/auth.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-machinemgmt',
  templateUrl: './machinemgmt.component.html',
  styleUrls: ['./machinemgmt.component.css']
})
export class MachinemgmtComponent implements OnInit {

  machinedata: machineList[];
  list:any;
  errorMessage: string;
  machineNo:string;
  isAddUp = false;
  isAddFailed = true;
  closeResult:string;

  constructor(private router:Router,private userService: UserService,private modalService: NgbModal,private machineserv:machineservice) { }

  open(machineNo:string) {

    const modalRef = this.modalService.open(ModalComponent );
    modalRef.componentInstance.machineNo = machineNo;
    modalRef.componentInstance.machineConfirm.subscribe((receivedEntry) => {
    
      console.log("Received "+receivedEntry);
      })
    
   
  }

  ngOnInit() {
    this.userService.getMachineList().subscribe(
      data => {
        console.log(data);
        this.machinedata = data;
       
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }

  deleteMachine(machineNo:string)
  {
    console.log("entered"+machineNo);
    this.userService.deleteMachine(machineNo).subscribe(
      data => {
        console.log(data);
        this.isAddUp=true;    
      },
      error => {
        console.log(error);
        this.isAddUp=false
        this.isAddFailed=true;
        this.errorMessage = error.error.message;
       
      }
    );
  }
  update(machine:any)
  {
    console.log(machine);
    this.machineserv.setMachineList(machine);
    this.router.navigate(['admin']);
    localStorage.setItem("mode", "update");
  }

}

