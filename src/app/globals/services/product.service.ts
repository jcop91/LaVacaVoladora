import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  product = [
    {
      nombre: 'Filet Wellington',
      precio: 230,
      descripcion: 'El plato especial del chef Gordon Ramsey, un filete cocinado perfectamente envuelto en masa',
      imagen: 'https://www.saboresdemihuerto.com/wp-content/uploads/2015/12/filete-willinton-1-a.jpg',
      category: 'maindish'
    }, {
      nombre: 'Sopa Azteca',
      precio: 51.2,
      descripcion: 'Sopa de tomate con tortilla, crema y aguacate',
      imagen: 'https://www.deliciosi.com/images/1000/1020/sopa-azteca.jpg',
      category: 'side',
    }, {
      nombre: 'Cerveza Modelo',
      precio: 60,
      descripcion: 'Cerveza negra Modelo (solo para perfiles mayores a 18 años)',
      imagen: 'https://awomk.com/images/productos/cervezas/negra-modelo.jpg',
      category: 'drink'
    }, {
      nombre: 'Cheesecake',
      precio: 70,
      descripcion: 'Receta casera de pie de queso, una rebanada',
      imagen: 'https://i0.wp.com/thehappening.com/wp-content/uploads/2020/07/cheesecake-a-domicilio-cdmx.jpg?fit=1480%2C1003&ssl=1',
      category: 'dessert'
    }
  ];

  getProductTest(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.product);
      }, 2000);
    });
  }
}
