/* Aqui es donde tu podras editar el contenido del carrousel agregado, cada ID corresponde a un slider, su titulo  y la ruta de imagenes. */

import { ICarouselItem } from './../../carousel/icarousel-item.metadata';
export const CAROUSEL_DATA_ITEMS_BANNERP: ICarouselItem[] = [
    {
        id: 1,
        title: {
            first: 'Cumple tus metas',
            second: '#FamiliaTESE'
        },
        subtitle: 'Prueba de imágen',
        link: 'localhost:4200/asd',
        image: "assets/images/admisionytramitesimg/becasimg/pexels-photo-756790.jpeg"
    }, {
        id: 2,
        title: {
            first: 'Noticias',
            second: ''
        },
        subtitle: '',
        link: 'Carreras/Industrial',
        image: "assets/images/tese2.jpg"
    }, {
        id: 3,
        title: {
            first: 'Anuncios',
            second: ''
        },
        subtitle: '',
        link: 'Carreras/Industrial',
        image: "assets/images/tese3.jpg"
    }
]
