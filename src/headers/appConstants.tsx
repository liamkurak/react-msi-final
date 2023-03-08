export const appConstants = {
    // Route paths
    namesRoute: '/names',
    reactCounterRouter: '/counter',
    loginRoute: '/login',
    registerRoute: '/register',

    homePageRoute: '/Home',
    shopRoute: '/shop',

    page2Route: '/page2',

    productsRoute: '/products',
    addNameRoute: '/add-name',
    addProductRoute: '/add-product',
    editProductRoute: '/edit-product',
    loginProductRoute: '/login',

    detailRoute: '/detail',
    cartRoute: '/cart',
    checkoutRoute: '/checkout',

    test1:'/test1',
    // actions
    ADD_NAME: 'ADD_NAME',
    ADD_PRODUCT: 'ADD_PRODUCT',
    GET_PRODUCTS:'GET_PRODUCTS',

    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',


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