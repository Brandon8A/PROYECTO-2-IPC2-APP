export interface Anuncio {
    id: number;
    tipoAnuncio: string;
    tiempoDuracion: number;
    descripcion: string;
    vecesMostrado: number;
    activo: boolean;
    path: string;
    precioAdquirido: number;
}
