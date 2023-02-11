
import React from 'react';
import {Component, SyntheticEvent} from "react";
import {connect} from "react-redux";
import {appConstants} from "../../../Header/appConstants";

class AddProduct extends Component<any, any>{
// class AddProduct extends Component<AddProductProps, AddProductState>{
    state: any;
    // state: AddProductState;
    constructor(props: any) {
    // constructor(props: AddProductProps) {
        super(props);
        this.state={
            product:{
                name:'',
                brand:'',
                price:'',
                stock:'',
                image:'',
            },
            msg: 'default msg',
        };
    }

    inputChangeHandlder = (event: SyntheticEvent )=>{
        // !! 1/13 14:50
        const val = (event.target as HTMLInputElement).value;
        const key = (event.target as HTMLInputElement).name;
        this.setState({
            product:{
                ...this.state.product,
                [key]: val,
            }
        });
    };

    fieldUpdateHandler = (event: SyntheticEvent) => {
        const val = (event.target as HTMLInputElement).value;
        const key = (event.target as HTMLInputElement).name;
        const newProduct = {...this.state.product, [key]: val}
        this.setState({
            product:{
                product: newProduct
                // ...this.state.product,
                // [key]: val,
            }
        });
    };

    submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        this.props.addProduct(this.state.product);

        // ()=>{
        //     this.setState({msg: 'added successfully'})
        // },
        // ()=>{
        //     this.setState({msg: 'added failed'})
        // };
    };

    render() {
        return (
           <form style={{margin: '40px'}} className="form-group" onSubmit={this.submitHandler}>

               {
                   appConstants.PRODUCT_FIELDS.map(field => (
                       <React.Fragment key={field.id}>
                           <label htmlFor={field.id}>{field.label}</label>
                           <input
                               onChange={this.fieldUpdateHandler}
                               // value={this.state.product[field.id as keyof ProductModel]}
                               value={this.state.product[field.id]}
                               className="form-control"
                               id={field.id}
                               type={field.type}/>
                       </React.Fragment>
                   ))
                   /*
                    */
               }


               <h1>Add Product</h1>
               <input className="form-contr " value={this.state.product.name} name="name" onChange={this.inputChangeHandlder} placeholder="Name" type = 'text'/>
               <input className="form-contr " value={this.state.product.brand} name="brand" onChange={this.inputChangeHandlder} placeholder="Brand" type = 'text'/>
               <input className="form-contr " value={this.state.product.price} name="price" onChange={this.inputChangeHandlder} placeholder="Price" type = 'number'/>
               <input className="form-contr " value={this.state.product.stock} name="stock" onChange={this.inputChangeHandlder} placeholder="Stock" type = 'number'/>
               <input className="form-contr " value={this.state.product.image} name="image" onChange={this.inputChangeHandlder} placeholder="Image" type = 'text'/>
               { /*

                 */ }

               {/*!!!Q: what is btn success*/}
                <button className="btn btn-success">Add Product</button>
           </form>

        );
    }
};

// ae k shu s
export default AddProduct;

// !!! 15:28  how to create redux? -> Redux Store -> AddName -> ActionCreator -> actionObj -> Reducers -> Redux Store
// syntax sugar same as in AddName.mapDispatchToProps()
// export default connect(null,{addProduct: addProduct})(AddProduct);
//
// interface AddProductProps{
//     addProduct: (product: ProductModel) => {};
//     // addProduct: (product: ProductModel, succeed:() => void, fail:() => void ) => {};
// }
// interface AddProductState{
//     product: ProductModel;
//     msg: string;
// }


/*
render(){
    form onSubmit= submitHandler
}

submitHandler fn
    event prevent default

// !!!WHY constructor vs styate
state =
OR
constructor(props:any) {
    super(props

}

 */
