// Write your code here
// Create a list of fruits with their properties (name, color, pricePerKg)
var fruits=
[
    {
        name:"Apple",
        color:"Red",
        pricePerKg:"50"

    },
    {
        name:"Banana",
        color:"Yellow",
        pricePerKg:"30"

    },
    {
        name:"Mango",
        color:"Pink",
        pricePerKg:"20"

    },
    {
        name:"Grapes",
        color:"Green",
        pricePerKg:"50"

    }
];
var result={};
//Function to Convert List Of Fruits in to Object format to retrieve value by Fruit name 
const convertToObject=(fruits)=>{
    fruits.forEach(element => {
        result[element.name]={color:element.color,pricePerKg:element.pricePerKg};
    });
    //console.log(result);
    return result;
}
///console.log(fruits);
// and convert it into a format so that for a given fruit name
var fastObject=convertToObject(fruits);
// retrieval of its color and pricePerKg value is fast by providing fruit name
console.log(fastObject["Mango"]);


