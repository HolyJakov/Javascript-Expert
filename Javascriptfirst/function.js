const string = "the quick brown fox";
function capitalFirstLetter(hol){
    const strArry = hol.toLowerCase().split(' ');
    
    for(let i=0; i<strArry.length; i++) {
        strArry[i] = strArry[i].charAt(0).toUpperCase() + strArry[i].slice(1);
    }
    const result = strArry.join(' ');
    return result;
}

const res = capitalFirstLetter(string);
console.log(res)




function evenOrNot(number){
    if(number % 2 == 0) {
        console.log("even number");
    }
    else{
        console.log('odd number');
    }
}
evenOrNot(4);



function arrayPar(arry){
console.log(arry);
}
arrayPar([1,2,3]);
