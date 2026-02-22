class Fruit
{
    static personid;
    static personname;

    constructor(pid, pname) {
        Fruit.personid = pid;     // Set static properties
        Fruit.personname = pname;
    }

    static getColor()
    {
       console.log("The color of the fruit is red.");
       console.log("personid: "+this.personid);
       console.log("personname: "+this.personname);
    }
}

let fruit1 = new Fruit(1, "Apple");
Fruit.getColor();
//-----------------------


//reduce - iterates through the array and return single value
let numbers = [1,2];
const sum = numbers.reduce((result, current) => {
    return result + current;
},0); // Initial value of result is set to 0    


console.log(`The sum of the numbers is: ${sum}`); // Interpolating the sum into the output string