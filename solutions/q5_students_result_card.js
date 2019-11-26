// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
var student=[
    {
        name:"Amit",
        Grammer:67,
        Accounts:78,
        SubjectCategory:"GA"
    },
    {
        name:"Santosh",
        Grammer:69,
        Accounts:87,
        SubjectCategory:"GA"
    },
    {
        name:"Satish",
        Grammer:61,
        Accounts:47,
        SubjectCategory:"GA"
    },
    {
        name:"Sachin",
        Grammer:56,
        Accounts:87,
        SubjectCategory:"GA"
    },
    {
        name:"Sehwag",
        Grammer:69,
        Accounts:87,
        SubjectCategory:"GA",
    },
    {
        name:"Bipul",
        Grammer:62,
        Accounts:89,
        SubjectCategory:"GA"
    },
    {
        name:"Gopal",
        Grammer:54,
        Physics:67,
        SubjectCategory:"GP"
    },
    {
        name:"Gopal",
        Grammer:54,
        Physics:67,
        SubjectCategory:"GP"
    },
    {
        name:"Amar",
        Grammer:57,
        Physics:87,
        SubjectCategory:"GP"
    },
    {
        name:"Aman",
        Grammer:88,
        Physics:97,
        SubjectCategory:"GP"
    },
    {
        name:"Rahul",
        Grammer:98,
        Physics:69,
        SubjectCategory:"GP"
    }
];
const getMarksSheet=(student)=>{
    student.forEach(element => {
        if(element.SubjectCategory==="GP"){
            console.log("Name : "+element.name+"       Percentage : "+(element.Grammer+element.Physics)*0.5+" %");
        }
        else{
            console.log("Name : "+element.name+"       Percentage : "+(element.Grammer+element.Accounts)*0.5+" %");
        }
        
    });
}
getMarksSheet(student);