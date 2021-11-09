txt= parseInt(prompt("Ingrese el límite: "));

var pre0= 0;
var pre1= 1;
console.log("%d\n%d\n",pre0,pre1)

for( var y=3; y<parseInt(txt+1); y++){
    val = pre0 + pre1;
    pre0 = pre1;
    pre1 = val;
    console.log(val);
}