export interface ProductModel{
    // { name: 'iPhone3G', brand: 'Apple', price: 200, stock: 33, image: 'https://cdn.mos.cms.futurecdn.net/005cd70c02c2c8bd7b07d3cfeca82a3a.jpg'},
    id?:number;
    name?: string,
    brand: string,
    price: number | '',
    stock: number | '',
    image: string
}