function ejercicio3(form){
    let TotalCompra=parseFloat(form.totalCompra.value.trim())
    if(isNaN(TotalCompra)){
        alert("Ingrese una cantidad correcta")
        return false
    }
    let descuento=0.15*TotalCompra
    TotalCompra-=descuento
    alert("Pago final: "+ TotalCompra)

}