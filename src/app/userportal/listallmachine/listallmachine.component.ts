import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {machineList} from '../../model/machinelist';
import { jsonpCallbackContext } from '@angular/common/http/src/module';


@Component({
  selector: 'app-listallmachine',
  templateUrl: './listallmachine.component.html',
  styleUrls: ['./listallmachine.component.css']
})
export class ListallmachineComponent implements OnInit {

  machinedata: machineList[];
  list:any;
  errorMessage: string;

  constructor(private userService: UserService) { }

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

}
