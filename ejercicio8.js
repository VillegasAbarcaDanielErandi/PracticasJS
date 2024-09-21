function ejercicio8(form){
   
    let salario = parseFloat(form.elements.salarioMen.value.trim())
    let hoy =new Date()
    let diawork=new Date(form.antigue.value); 

    if(isNaN(salario)|| salario<0 ){
        alert("Ingrese un salario correcto")
        return false
    }
    if (isNaN(diawork)) {
        alert("Por favor, ingresa una fecha válida.");
        return false;
    }
    //calcular la antiguedad del trabajador dependiendo de la resta entre los dias de hoy y el dia en el que entro 

    let diffTime = hoy - diawork
    let antiguedad = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)) // Convertir de milisegundos a años
    if(antiguedad>70){
        alert("Ingresa una antiguedad correcta")
        return false
    }

    if(antiguedad<=1){
        let util=salario*0.05
        alert("Tu utilidad es de: "+util)
        return true
    }
    if(antiguedad>1 && antiguedad<=2){
        let util=salario*0.07
        alert("Tu utilidad es de:"+util)
        return true
    }
    if(antiguedad>2 && antiguedad<=5){
        let util=salario*0.1
        alert("Tu utilidad es de: "+util)
        return true
    }
    if(antiguedad>5 && antiguedad<=10){
        let util= salario*0.15
        alert("Tu utilidad es de: "+util)
        return true
    }
    if(antiguedad>10){
        let util=salario*0.2
        alert("Tu utilidad es de: "+util)
        return true
    }
    alert("Hay un problema")
    return false
}