import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {machineList} from '../../model/machinelist';

@Component({
  selector: 'app-listmachine',
  templateUrl: './listmachine.component.html',
  styleUrls: ['./listmachine.component.css']
})
export class ListmachineComponent implements OnInit {
  mform: any = {};
  machineNoInp:string;
  machinedata: machineList[];
  mnoList:machineList[];
  mno:string;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getMachineNo().subscribe(
      data => {
        console.log("data "+data);
        this.mnoList = data;		// FILL THE ARRAY WITH DATA.
      },
      error => {
        console.log(error);
      
      }
    );
  }
  onSubmit()
  {
    this.machineNoInp=this.mform.machineNo;
    console.log("this.machineNo "+this.machineNoInp);
    this.userService.getMachine(this.machineNoInp).subscribe(
     
      machinedata => this.machinedata = machinedata,
      error => {
        console.log(error);
      
      }
    );
  }

}
