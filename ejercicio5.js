function ejercicio5(form) {
    let hoy = new Date();
    let nacimiento = new Date(form.fechaNacimiento.value); 
    
    if (isNaN(nacimiento)) {
        alert("Por favor, ingresa una fecha válida.");
        return false;
    }
    
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let mes = hoy.getMonth() - nacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad -= 1;
    }
    if(edad<=0){
        alert("Aun no naces :( ,Ingresa una fecha de nacimiento valida")
        
        return false
    }
    alert("Tu edad es: " + edad);
    return true;
}