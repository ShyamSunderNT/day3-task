//task 1 two JSON have the same properties without order 

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };
let sortedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
let sortedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());
if (sortedObj1 === sortedObj2) {
    console.log("The objects are True.");
} else {
    console.log("The objects are False.");
}

// task 2 Using to API URL display all the country flags in the console
let service =new XMLHttpRequest();
service.open("Get","https://restcountries.com/v3.1/all",true);
service.send();
service.onload = function() {
 var data =service.response;
 var result = JSON.parse(data);
 for(var i =0;i<result.length;i++){
    console.log(result[i].flags.svg);
 }

}
// task 3 print all countres name,regions, sub-regions and population 

let think =new XMLHttpRequest();
think.open("get","https://restcountries.com/v3.1/all",true);
think.send();
think.onload =function(){
    var a =think.response;
    var final =JSON.parse(a);
    for(let i =0;i<final.length;i++)
    console.log("country name:"+ " "+final[i].name.common,"country Region:"+ " "+final[i].region,"country sub-Region:"+ " "+final[i].subregion,"country population:"+ " "+final[i].population);
}