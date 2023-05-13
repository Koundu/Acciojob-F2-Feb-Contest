/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
      arr.forEach(({name, marks})=>{
        if(marks>50){
            console.log(name);
        }
    },[])
}

function addData() {
  //Write your code here, just console.log
     const person = {id: "4", name:"Lenovo", age:"22", marks:"80"};
    arr.push(...person);
    console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
      let arr1 = [{ id: 4, name: "Lenovo", age: "24", marks: 70 }]
    const arr3 = arr.concat(arr1);
    console.log(arr3);
}
