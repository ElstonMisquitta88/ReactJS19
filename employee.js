
import Person from "./person.js";

class Employee{
      constructor(pid,pname)
    {    
        this.personid=pid;
        this.personname=pname;
    }
    showEmployeeInfo(){
         let person=new Person(this.personid,this.personname);
         person.showInfo();
    } 
}

export default Employee;
