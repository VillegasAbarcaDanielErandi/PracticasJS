function ejercicio7(form) {
    // Obtener los valores de los campos del formulario y convertir a números
    let horasT = parseFloat(form.elements.horasTrabajadas.value.trim());
    let pagoXhora = parseFloat(form.elements.pagoPorHora.value.trim());
    
    // Validar horas trabajadas
    if (isNaN(horasT) || horasT <= 0) {
        alert("Ingresa una cantidad de horas correcta");
        return false;
    }

    // Validar pago por hora
    if (isNaN(pagoXhora) || pagoXhora <= 0) {
        alert("Ingresa una cantidad de pago por hora correcta");
        return false;
    }

    let sueldo;

    // Cálculo del sueldo
    if (horasT <= 40) {
        sueldo = horasT * pagoXhora;
    } else {
        let horasExtra = horasT - 40;
        sueldo = 40 * pagoXhora; // Sueldo por las primeras 40 horas
        
        if (horasExtra <= 8) {
            sueldo += horasExtra * pagoXhora * 2; // Horas extra hasta 8 horas
        } else {
            let horasDoble = horasExtra - 8;
            sueldo += (8 * pagoXhora * 2) + (horasDoble * pagoXhora * 3); // Horas extra dobles y triples
        }
    }

    alert("Tu sueldo total es: " + sueldo);
    return true;
}
