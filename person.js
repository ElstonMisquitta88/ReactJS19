class Person
{
    constructor(pid,pname)
    {    
        this.personid=pid;
        this.personname=pname;
    }
    showInfo()
    {        
        console.log(`Person ID: ${this.personid}`);
        console.log(`Person Name: ${this.personname}`);
    }
}

export default Person;


