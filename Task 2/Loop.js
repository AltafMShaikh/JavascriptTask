
  //For LOOP
for(var i=0; i<=10; ++i){
  console.log(i);
  break;
}
//While LOOP

let x = 10;
while(x < 100){
  x *= 5;
  console.log(x);
}
//do while loop
do{
  x *= 5;
  console.log(x);
}while(x<100)
 //For...in LOOP
  var cars = ['jaguar', 'Tesla', 'BMW', 'Audi'];
            for(const i in cars){
               document.write(i +" => " + cars[i]);   
               document.write("</br>");
            }
            document.write("</br>");

// For...Of LOOP
var cars = ['jaguar', 'Tesla', 'Jeep', 'Audi'];
            for(const i of cars){
               document.write(i);   
               document.write("</br>");
            }
            document.write("<br>");
 
