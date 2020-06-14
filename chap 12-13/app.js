//chap 12-13
//ex1
var cha = prompt("enter any character either alphabate or number wise");
if (cha >="A" && cha <= "Z" || cha >="65" && cha <= "92"){
    alert("entered character is uppercase");
}
else if (cha >="a" && cha <= "z" || cha >="97" && cha <= "122"){
    alert("entered character is Lowercase");
}
else{ alert("enter proper number");}
//ex2
var fst = prompt("enter intiger number");
var scnd = prompt("enter intiger number");
if(fst > scnd){
    alert(fst);
}
else if(scnd > fst){
    alert(scnd);
}
else{ alert ("enter integer please")}
if(fst==scnd){
    alert("two integer are equal ");
}
//ex 3
var pnz = prompt("enter number");
if(pnz >0 ){
    alert("NUMBER IS POSITIVE");
}
else if(pnz < 0){
    alert("NUMBER IS NEGATIVE");
}
else{ alert ("NUMBER IS ZERO")}
//EX 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
//ex 7
var time = prompt("enter time in 24 formats")
if (time == 0000){
    alert("0000 = 12 AM")
}
else if (time == 0100){
    alert("0100 = 1 AM")
}
else if (time == 0200){
    alert("0200 = 2 AM")
}
else if (time == 0300){
    alert("0300 = 3 AM")
}
else if (time == 0400){
    alert("0400 = 4 AM")
}
else if (time == 0500){
    alert("0500 = 5 AM")
}
else if (time == 0600){
    alert("0600 = 6 AM")
}
else if (time == 0700){
    alert("0700 = 7 AM")
}
else if (time == 0800){
    alert("0800 = 8 AM")
}
else if (time == 0900){
    alert("0900 = 9 AM")
}
else if (time == 1000){
    alert("1000 = 10 AM")
}
else if (time == 1100){
    alert("1100 = 11 AM")
}
else if (time == 1200){
    alert("1200 = 12 PM")
}
else if (time == 1300){
    alert("1300 = 1 PM")
}
else if (time == 1400){
    alert("1400 = 2 PM")
}
else if (time == 1500){
    alert("1500 = 3 PM")
}
else if (time == 1600){
    alert("1600 = 4 PM")
}
else if (time == 1700){
    alert("1700 = 5 PM")
}
else if (time == 1800){
    alert("1800 = 6 PM")
}
else if (time == 1900){
    alert("1900 = 7 PM")
}
else if (time == 2000){
    alert("2000 = 8 PM")
}
else if (time == 2100){
    alert("2100 = 9 PM")
}
else if (time == 2200){
    alert("2200 = 10 PM")
}
else if (time == 2300){
    alert("2300 = 11 PM")
}
else{
    alert("please inset in 0000 formate");
}