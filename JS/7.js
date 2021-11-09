let a = prompt("ingrese un año: ");

if(a%4==0){
    if(a%100==0){
        if(a%400==0){
            alert("Si es bisiesto");
        }
    }
    else{
        alert("No es bisiesto");
    }
}