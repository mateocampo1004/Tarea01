let promedio,ingresos;

promedio= Number(prompt("Ingrese el promedio"));
ingresos= Number(prompt("Ingrese los ingresos familiares"));
if(promedio>=8.5&&ingresos<600){
    alert("Aprobado");

}else{
    alert("Desaprobado");
}