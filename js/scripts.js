
const datos =  {
    nombre: '',
    email: '',
    mensaje: ''
};

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombreInput.addEventListener('change', leerTexto);
emailInput.addEventListener('change', leerTexto);
mensajeInput.addEventListener('change', leerTexto);


//Elemento de Submit

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    //validar fomulario
    const { nombre, email, mensaje } = datos;
    if(nombre !=='' && email !== '' && mensaje !== ''){
        mostrarAlerta('Informacion  enviada correctamente');
        return;
    }
    mostrarAlerta('Todos los campos son obligatorios', 'error')
    //enviar formulario
});

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent=mensaje;
    if(error){
        alerta.classList.add('error')
    }
    else{
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}


//Eventos de los inputs y textarea

function leerTexto(e){
    datos[e.target.id] = e.target.value
    // console.log(datos)
}
