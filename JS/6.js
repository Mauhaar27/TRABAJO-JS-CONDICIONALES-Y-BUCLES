let a = prompt("valor para a:");
let b = prompt("valor para b:");
let c = prompt("valor para c:");

if(a!=0){
    let discri = b*b - 4*a*c;

    if(discri>0){
        let x1 = (-b + Math.sqrt(discri))/(2*a); 
        let x2 = (-b - Math.sqrt(discri))/(2*a); 

        alert("x1="+x1 + ", x2="+x2);
    }
    else if(discri==0){
        let x= -b/(2*a);
        alert("x="+x);
    }
    else{
        alert("La ecuación no tiene solución en los reales.");
    }
}
else{
    if(b==0&&c!=0){
        alert("la ecuación no tiene sentido");
    }
    else{
        alert("la ecuación es lineal:");
        alert("x="+(-c/b));
    }
}