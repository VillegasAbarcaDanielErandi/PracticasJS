function ejercicio2(form) {

    let sueldoBase_1 = parseFloat(form.sueldoBase.value.trim());
    let venta1_1 = parseFloat(form.venta1.value.trim());
    let venta2_1 = parseFloat(form.venta2.value.trim());
    let venta3_1 = parseFloat(form.venta3.value.trim());

    if (isNaN(sueldoBase_1) || isNaN(venta1_1) || isNaN(venta2_1) || isNaN(venta3_1)) {
        alert("Por favor, ingresa valores correctos");
        return false; 
    }

    let comisionTotal = 0.10 * (venta1_1 + venta2_1 + venta3_1);
    let sueldoTotal = sueldoBase_1 + comisionTotal;

    alert("Comisión Total: $" + comisionTotal.toFixed(2) + "\nSueldo Total: $" + sueldoTotal.toFixed(2));

    return true;
}

function resetForm(form) {
    form.reset();
    return false;  
}
