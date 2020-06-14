//chapter 6-9
//ex 1
var a = 10;
document.write("the value of a is ", a);
document.write("<br/>..............");
document.write("<br/><br/>the value of ++a is ",++a );
document.write("<br/>Now value of a is", a);
document.write("<br/><br/>the value of a++ is ",a++ );
document.write("<br/>Now value of a is", a);
document.write("<br/><br/>the value of --a is ",--a );
document.write("<br/>Now value of a is", a);
document.write("<br/><br/>the value of a-- is ",a-- );
document.write("<br/>Now value of a is", a);
//ex 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--; //answer is 3
--a; //since --a decrease a by 1 now a =1,
--a - --b; //--b decrease b by 1 a =1, b=0, --a - --b = 1-0 = 1 
--a - --b + ++b; //now ++b first increase b by 1 b= 1, 1+1 = 2
--a - --b + ++b + b--; //here a=1, b=1, b-- first store the value of b which is "1" 2 + b-- =2+1 = 3, 
document.write("<br/><br/>the value of a is ", a);
document.write("<br/>the value of b is ", b);
document.write("<br/>the value of result is ", result);
//ex3
var name = prompt("what is your name?");
document.write("<br/></br>hello ", name);
//ex4
var n = +prompt("enter number of multiplication");
var j=1;
if(n == 0){
    for (var i = 5; j <=10;j++){
        z=i*j;
        document.write("<br/>",z)
    } 
}
else{
     for (i=n;j<=10;j++){
         z=i*j;
         document.write("<br/>",z);
     }
}
//ex 5
var x = document.createElement("TABLE");
var sub1 = +prompt("enter 1st subject");
var sub2 = +prompt("enter 2nd subject");
var sub3 = +prompt("enter 3rd subject");
var tm = 100;
var obt_marks1 = +prompt("enter obtained marks of 1st");
var obt_marks2 = +prompt("enter obtained marks of 2nd");
var obt_marks3 = +prompt("enter obtained marks of 3rd");
var tom = (obt_marks1 +obt_marks2 +obt_marks3);
var percentage = (tom/tm)*100;
document.write( tm , tom, percentage)
