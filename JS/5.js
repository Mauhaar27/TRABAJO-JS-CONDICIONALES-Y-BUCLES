let a=prompt("ingrese un numero: ");
let b=prompt("ingrese otro numero: ");
let c=prompt("ingrese otro numero: ");

if(Math.abs(a-b)<Math.abs(c)&&Math.abs(c)<Math.abs(a+b))
{
    if(a==b&&b==c){
        alert("es equilátero");
    }
    else if(a==b||b==c||c==a){
        alert("es isósceles");
    }
    else{
        alert("es escaleno");
    }   
}
else{
    alert("el triángulo no existe");
}
 
