

// export let empName="Nikita Chandar";
 let empName="Nikita Chandar";
export function displayData(userName)
{
    //console.log("Hello My User");
    //console.log(`Hello ${userName}`);
    return (`Hello ${userName}`);
}

//export class Employee{
    class Employee{
    constructor()
    {
        console.log("Default constructor..!!");
    }
}

export default function()
{
    console.log("MyDefault Function");
}

export {empName,displayData,Employee};