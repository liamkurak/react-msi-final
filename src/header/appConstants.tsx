export const appConstants = {
    // Route paths
    namesRoute: '/names',
    reactCounterRouter: '/counter',
    loginRoute: '/login',
    shopRoute: '/shop',
    PageRoute: '/page1',

    productsRoute: '/products',
    addNameRoute: '/add-name',
    addProductRoute: '/add-product',
    editProductRoute: '/edit-product',
    loginProductRoute: '/login',

    // actions
    ADD_NAME: 'ADD_NAME',
    ADD_PRODUCT: 'ADD_PRODUCT',
    GET_PRODUCTS:'GET_PRODUCTS',


    PRODUCT_FIELDS: [
        {
            label: 'Name',
            id: 'name',
            type: 'text',
        },
        {
            label: 'Brand',
            id: 'brand',
            type: 'text',
        },
        {
            label: 'Price',
            id: 'price',
            type: 'number',
        },
        {
            label: 'Stock',
            id: 'stock',
            type: 'number',
        },
        {
            label: 'Image',
            id: 'image',
            type: 'text',
        }
    ],


}