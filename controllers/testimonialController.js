const guardarTestimonial = (req, res) =>{
    // Validar
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if (nombre.trim( ) === "") {
        errores.push({mensaje: "Nombre requerido"});        
    }
    if (correo.trim( ) === "") {
        errores.push({mensaje: "Correo requerido"});        
    }
    if (mensaje.trim( ) === "") {
        errores.push({mensaje: "Mensaje requerido"});        
    }

    console.log(errores);
}

export {guardarTestimonial};