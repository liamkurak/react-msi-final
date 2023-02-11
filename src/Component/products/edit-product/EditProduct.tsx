import {Component} from "react";
import {RouteComponentProps} from "react-router-dom";
import {Formik} from "formik";

// class EditProduct extends Component<any, any>{
class EditProduct extends Component<EditProductProps, EditProductState>{

    render() {
        console.log(this.props);
        return (

            // <Formik>
            //     {/*something here*/}
            // </Formik>

            <div>
                using Formik
                Edit Product {this.props.match.params.name}
            </div>
        );
    }

}

export default EditProduct;

interface EditProductProps extends RouteComponentProps<{name:string}> {

}
interface EditProductState{

}