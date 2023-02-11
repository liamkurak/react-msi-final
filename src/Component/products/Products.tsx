import React,{Component} from "react";
import {Link} from "react-router-dom";
import {appConstants} from "../../Header/appConstants";


// class Products extends Component<ProdudctProps, ProdudctState>{
class Products extends Component<any, any>{

    componentDidMount() {
        // TODO: if already has products in redux store, do not fetch it again
        // this.props.getproducts;
    }

    render() {
        return(
            <table className="table table-bordered table-striped ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Image</th>
                    </tr>
                </thead>

                <tbody>
                {
                    (this.props.products)?.map(
                        (p: any)=> (
                        // (p: ProductModel)=> (
                        <tr key={p.name}>
                            <Link to={`${appConstants.editProductRoute}/${p.name}`}>
                                <td>{p.name}</td>
                            </Link>
                            <td>{p.brand}</td>
                            <td>{p.price}</td>
                            <td>{p.stock}</td>
                            <td><img width = "100px" height="80px" src={p.image} alt={p.name}/></td>
                        </tr>
                    )
                    )
                }

                {console.log('props: is :', this.props.children)}

                </tbody>
            </table>
        );
    }
}
export default Products;
//
// // destructuring ->  ES6.tx 1/13 11:53
// // const {products} = reduxState; -> {products}
// // function mapStateToProps(reduxState:ReduxStateModel){
// function mapStateToProps({products}: ReduxStateModel){
//     // syntax sugar of key value pair: return {products: products};
//     return {products};
// }
//
// // export default connect(mapStateToProps)(Products);
// export default connect(mapStateToProps,{getProducts})(Products);
//
// interface ProdudctProps{
//     products: ProductModel [] | null,
//     getProducts: () => {};
// };
//
// interface ProdudctState{
//
// };