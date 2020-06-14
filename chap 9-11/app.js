//chap 9-11
// ex1
var a = prompt("write city");
if(a === "Karachi"){
    alert("Welcom to city of light");
}
else if( a =="karachi"){
    alert("please write first word capital");
}
else{
alert("welcome to ",a)};
//ex2
var gender = prompt("enter gender");
if(gender == "male"){
    alert("welcom sir");
}
else if ( gender == "female" ){
 alert( "welcome mam");
}
else { alert("write proper answer");
}
//ex 4
var fuel =prompt("please insert your fuel level in liters");
if(fuel < 0.25){
    alert("Please refill the fuel in your car");
}
else if(fuel == 0.25){
    alert("your fuel is about to low");
}
else{
alert("enjoy the ride");
}
//ex 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");//output
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");//output
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");//output
}
//ex 6
var eng = +prompt("enter english obtained marks");
var urdu = +prompt("enter urdu obtained marks");
var math = +prompt("enter math obtained marks");
tm = 300;
mobt = (eng + urdu + math);
percentage = (mobt/tm)*100;
if( percentage >=80){
    var grade = "A-one";
}
else if(percentage >=70){
    var grade = "A";
}
else if(percentage >=60){
    var grade = "B";
}
else{ grade = "Fail"
}
if( grade == "A-one"){
    var remarks = "Excellent"
}
else if(grade == "A"){
    var remarks = "Good"
}
else if(grade == "B"){
    var remarks = "You need to improve"
}
else{ var remarks = "Sorry"}
document.write("<br/> Total Marks : ", tm);
document.write("<br/> Marks Obtained : ", mobt);
document.write("<br/> Percentage : ", percentage);
document.write("<br/> Grade : ", grade);
document.write("<br/> Remarks : ", remarks);
//guess game 
//ex 7
var guess = prompt("guess the number between 1 to 10");
if (guess == "6"){
    alert("Bingo! Correct answer");
}
else if (guess == "7"){
    alert("Close enough to the correct answer");
}
else{alert("try again")}
//ex 8
var divisible = prompt("give the number");
if (divisible%3==0){
    alert("number is divisible by 3");
}
//ex 9
var evenod = prompt("check number is even or odd")
if (evenod%2 ==0){
    alert("number is even")
}
else if (evenod%2 !=0){
    alert("number is odd");
}
else{alert("0 is constant")}
//ex 10
var temp = prompt("give the temperature");
if (temp > 40){
    alert("It is too hot outside.");
}
else if (temp > 30){
    alert("The Weather today is Normal.");
}
else if (temp > 20){
    alert("Today’s Weather is cool.");
}
else{alert("OMG! Today’s weather is so Cool.")}
//ex 11
var operation = prompt("please select operation")
var fst = prompt("Enter first number");
var scnd = prompt("Enter 2nd number");
if (operation === "+"){
    alert(fst+scnd);
}
else if(operation ==="-"){
    alert(scnd-fst);
}
else if(operation ==="*"){
    alert(fst*scnd);
}
else if(operation ==="/"){
    alert(scnd/fst);
}
