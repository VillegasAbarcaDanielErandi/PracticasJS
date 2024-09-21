function ejercicio4(form){
    let cal1_par=parseFloat(form.par1.value.trim())
    let cal2_par=parseFloat(form.par2.value.trim())
    let cal3_par=parseFloat(form.par3.value.trim())
    let calExam=parseFloat(form.exam.value.trim())
    let calWork=parseFloat(form.work.value.trim())

    if (
        isNaN(cal1_par) || cal1_par < 0 || cal1_par > 10 ||
        isNaN(cal2_par) || cal2_par < 0 || cal2_par > 10 ||
        isNaN(cal3_par) || cal3_par < 0 || cal3_par > 10 ||
        isNaN(calExam) || calExam < 0 || calExam > 10 ||
        isNaN(calWork) || calWork < 0 || calWork > 10
    ) {
        alert("Ingresa calificaciones reales");
        return false;
    }

    let prom=(cal1_par+cal2_par+cal3_par)/3
    let porProm=(prom*55)/10

    let porExam=(calExam*33)/10

    let porWork=(calWork*15)/10

    let cal=porProm+porExam+porWork
    cal/=10
    alert("Tu calificacion final en la materia de Algoritmos es : "+cal)
    return true


}