function palabrasANumeros(form) {
    const numeros = {
        cero: 0,
        uno: 1,
        dos: 2,
        tres: 3,
        cuatro: 4,
        cinco: 5,
        seis: 6,
        siete: 7,
        ocho: 8,
        nueve: 9
    };

    let strings = form.palabras.value.trim();
    strings = strings.replace(/\s+/g, '').toLowerCase();
    let arregloPal = strings.split(/[,]+/);
    
    let arregloNum = new Array(arregloPal.length);

    for (let i = 0; i < arregloPal.length; i++) {
        arregloNum[i] = numeros[arregloPal[i]] !== undefined ? numeros[arregloPal[i]] : -1;
    }

    // Convertir arregloNum a una cadena y mostrarlo en el campo de resultado
    document.getElementById('resul').value = arregloNum.join(', ');

    return false; // Previene el envío del formulario
}
