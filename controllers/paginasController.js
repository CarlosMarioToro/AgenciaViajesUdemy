import { Testimonial } from '../models/Testimoniales.js';
import {Viaje} from '../models/Viaje.js';

const paginaInicio = async (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    // Consultar 3 viajes del modelo Viaje
    try {
        const viajes = await Viaje.findAll({limit: 3})
        
        res.render('inicio', {
            pagina: "Inicio",
            clase: 'home',
            viajes
        });        
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    res.render('nosotros', {
        pagina: "Nosotros"
    });
}

const paginaViajes = async (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    // Consultar bd
    const viajes = await Viaje.findAll()

    console.log(viajes);

    res.render('viajes', {
        pagina: "Próximos Viajes",
        viajes
    });
}

const paginaTestimoniales = async (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: "Testimoniales",
            testimoniales
        });        
    } catch (error) {
        console.log(error);
    }
}

const paginaDetalleViaje = async (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    const {slug} = req.params

    try {
        const viaje = await Viaje.findOne({where : {slug}})
        
        res.render('viaje', {
            pagina: "Informacion Viaje",
            viaje
        });
    } catch (error) {
        console.log(error);
    }

}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}