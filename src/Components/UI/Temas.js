import { 
    fondoClaro,
    fondoOscuro,
    contenidoClaro,
    contenidoOscuro,
    textoFondoClaro,
    textoFondoOscuro
} from "./variables";

export const temaClaro = {
    body: fondoClaro,
    inside: contenidoClaro,
    text: textoFondoClaro,
    filter: "",
}

export const temaOscuro = {
    body: fondoOscuro,
    inside: contenidoOscuro,
    text: textoFondoOscuro,
    filter: "invert(100%)",
}