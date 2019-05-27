import { Injectable } from '@angular/core';
import {machineList} from '../model/machinelist';
@Injectable({
    providedIn: 'root'
  })
export class machineservice{
    private machine: machineList=new machineList(0,'','','','','','','','','','','','','','');

    constructor() { }
    getMachineList(): machineList {

        console.log("getQueryTable");
        // Return the Personal data
        var machine: machineList = {
            sno:this.machine.sno,
            mname:this.machine.mname,
            myear:this.machine.myear,
            date:this.machine.date,
            farea:this.machine.farea,
            mno:this.machine.mno,
            mflag:this.machine.mflag,
            pressure:this.machine.pressure,
            pressureoption:this.machine.pressureoption,
            voltage:this.machine.voltage,
            current:this.machine.current,
            ideal:this.machine.ideal,
            duration:this.machine.duration,
            pmdate:this.machine.pmdate,
            type:this.machine.type
        };
        return machine;
      }
      
      setMachineList(data:any) {
          console.log("mname "+data.mname);
        this.machine.sno=data.sno;
        this.machine.mname = data.mname;
        this.machine.myear = data.myear;
        this.machine.date = data.date;
        this.machine.farea=data.farea;
        this.machine.mno = data.mno;
        this.machine.mflag = data.mflag;
        this.machine.pressure = data.pressure;
        this.machine.pressureoption = data.pressureoption;
        this.machine.voltage = data.voltage;
        this.machine.current = data.current;
        this.machine.ideal = data.ideal;
        this.machine.duration = data.duration;
        this.machine.pmdate = data.pmdate;
        this.machine.type=data.type;
      }

}