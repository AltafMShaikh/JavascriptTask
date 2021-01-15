<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Task 2</title>
  </head>
  <body>
<script type = "text/javascript">
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
  var cars = ['jaguar', 'Tesla', 'BMW', ' Audi'];
            for(const i in cars){
               document.write(i +" => " + carss[i]);   
               document.write("</br>");
            }
            document.write("</br>");

// For...Of LOOP
var fruits = ['apple', 'grapes', 'orange', 'banana'];
            for(const i of fruits){
               document.write(i);   
               document.write("</br>");
            }
            document.write("</br>");
 </script>
    </body>
</html>
