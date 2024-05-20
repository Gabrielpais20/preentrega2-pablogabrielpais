
function cliente(nombre,mesa) {
    this.nombre = nombre;
    this.mesa = mesa;
  }

  let clientes = []

 function calcularMonto(){
    //pido la informacion del cliente 
    let nuevoCliente = prompt('ingrese su nombre').toLowerCase().trim()
    let numeroMesa = parseInt(prompt('ingrese su numero de mesa'))
    let factura = parseInt(prompt('cuanto salio su plato?'))
    let propina = parseInt(prompt('ingresa el porcentaje de la propina que queres dejar'))
    let mostrarPropina;

    
    if(nuevoCliente === '' || !isNaN(nuevoCliente)) {
        alert('El nombre no puede estar vacio o contener solo números');
    } else if (isNaN(numeroMesa) || isNaN(factura) || isNaN(propina)) {
        alert('Solo se aceptan valores numericos para la mesa, la factura y el porcentaje de propina');
    } else if (factura <= 0 || propina <= 0) {
        alert('Los valores deben ser positivos');   
    }else{
    mostrarPropina = calcularPropina(factura,propina)
    alert(`muchas gracias ${nuevoCliente} de la mesa ${numeroMesa} la propina seria ${mostrarPropina}`);

    let crearNuevocliente =  new cliente(nuevoCliente,numeroMesa);
    clientes.push(crearNuevocliente)

    clientes.forEach((x)=>console.log(x))
     }
    

     return mostrarPropina 
    }



function calcularPropina(factura, propina) {
    // Calcular la cantidad de la propina
    return factura * (propina / 100);
}

resultado = calcularMonto()
