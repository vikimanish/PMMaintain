import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import{machineList} from '../../model/machinelist';
import {machineservice} from'../../services/machine.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  board: string;
  @Input() machineForm:any;
  errorMessage: string;
  machineList:machineList;
  mform: any = {};
  isAddUp = false;
  isAddFailed = true;

  constructor(private authService: AuthService,private machineserv:machineservice) { }

  ngOnInit() {
    if(localStorage.getItem("mode")=='update')
    {
      this.mform = this.machineserv.getMachineList();
      console.log(this.mform);
    }
    
  }
  onSubmit() {
    console.log(this.mform);

   
      if(localStorage.getItem("mode")=='update'){
        this.machineList = new machineList(this.machineserv.getMachineList().sno,
        this.mform.mname,
        this.mform.myear,this.mform.date,this.mform.farea,this.mform.mno,this.mform.mflag,this.mform.pressure,this.mform.pressureoption,
        this.mform.voltage,this.mform.current,this.mform.ideal,this.mform.duration,this.mform.pmdate,this.mform.type);
  

       
        console.log('this.mform '+this.mform);
this.authService.updateMachine(this.mform.sno,this.machineList).subscribe(
  data=>{
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
localStorage.setItem("mode", "insert");

      }
      else
      {

        this.machineList = new machineList(0,
        this.mform.mname,
        this.mform.myear,this.mform.date,this.mform.farea,this.mform.mno,this.mform.mflag,this.mform.pressure,this.mform.pressureoption,
        this.mform.voltage,this.mform.current,this.mform.ideal,this.mform.duration,this.mform.pmdate,this.mform.type);
  
    this.authService.addMachine(this.machineList).subscribe(
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
  }
}
