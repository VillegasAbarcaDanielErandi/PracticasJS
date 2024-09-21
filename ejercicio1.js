function ejercicio1(form) {
    let capital1 = parseFloat(form.capital.value.trim()); // Convertir a número

    if (isNaN(capital1) || capital1 <= 0) { // Validar que sea un número positivo
        alert("Por favor, ingresa un valor numérico válido y positivo.");
        return false; 
    }
    
    let capitalres = (capital1 * 2) / 100; // Calcular la ganancia del 2%
    let capitaltot = capital1 + capitalres; // Capital total después de un mes
    
    // Función para formatear el número sin decimales innecesarios
    function formatNumber(num) {
        return num % 1 === 0 ? num.toFixed(0) : num.toFixed(2);
    }

    // Mostrar los resultados con saltos de línea
    alert("Capital ingresado: " + formatNumber(capital1) + "\n" +
          "Capital Ganado: " + formatNumber(capitalres) + "\n" +
          "Capital Total: " + formatNumber(capitaltot));
    
    return false; // Evitar el envío del formulario
}