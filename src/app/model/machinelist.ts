export class machineList {
    sno:number=null;
    mname: string='';
    myear: string='';
    date: string='';
    farea: string='';
    mno: string='';
    mflag:string='';
    pressure:string='';
    pressureoption:string='';
    voltage:string='';
    current:string='';
    ideal:string='';
    duration:string='';
    pmdate:string='';
    type:string='';

    constructor(sno:number,mname: string, myear: string, date: string, farea: string,
        mno: string, mflag: string, pressure: string
        , pressureoption: string, voltage: string, current: string,
        ideal: string, duration: string, pmdate: string,type:string) {
        this.sno=sno;
        this.mname = mname;
        this.myear = myear;
        this.date = date;
        this.farea=farea;
        this.mno = mno;
        this.mflag = mflag;
        this.pressure = pressure;
        this.pressureoption = pressureoption;
        this.voltage = voltage;
        this.current = current;
        this.ideal = ideal;
        this.duration = duration;
        this.pmdate = pmdate;
        this.type=type;
       
    }
    
   
}