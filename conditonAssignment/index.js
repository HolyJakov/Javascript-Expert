function findLargest(num1,num2){
    if(num1>num2){console.log(`${num1} is greater`)}
    else{console.log(`${num2} is greater`)}
    
}
findLargest(4,7);


function evenOrOdd(num){
    if(num % 2 ===0){console.log(`${num} is even`)}
    else{console.log(`${num} is odd`)}
}
evenOrOdd(5)


function findTriangleType(a,b,c){
    if (a==b && a==c){console.log("Equilateral triangle")}
    else if(a==b || a==c || b==c){console.log("Isosceles triangle")}
    else {console.log("scalene triangle")}
}
findTriangleType(5,8,3)

const freeday = new Date().getDay();
let day = '';

switch (freeday) {
    case 0:
        day = "Sunday";
      break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
        default:
        day = alert("invalid date")
}

console.log(day)


