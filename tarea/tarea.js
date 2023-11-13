//Ejercicio 1
let age,licencia;

age=Number(prompt("Ingrese su edad"));
licencia=Boolean(Confirm("Posee licencia profesional?"));

if(age>25&&licencia==true){
    alert("Apto");

}else{ 
    alert("No apto+");
}