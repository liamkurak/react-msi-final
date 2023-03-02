import React from "react";
import css from "../Page1.module.scss";

const Checkout = () => {
    return(
        <>
            <img
                src={'https://cdn.shopify.com/s/files/1/0472/5922/2175/files/Vital_Essentials_Logo_Horizontal_Primary_ClearBG_web_2019.png?7334'}
                width= '300px'
                alt={'vital Essentials'}
            />
            <div className={css.wrapper} >

                <span>
                    <p><b>Contact information</b></p>
                    <p><input/></p>
                    <p><b>Shipping address</b></p>
                    <p>
                        Country <br/>
                        First Name <br/>
                        Last Name <br/>
                        Address <br/>
                    </p>
                </span>

                <span>
                    <p>Subtotal: </p>
                    <p>Discount: </p>
                    <p>Shipping: </p>
                    <p>----------</p>
                    <p>Total: </p>
                </span>

                <span>
                    <form>
                        <table>
                            <tr>
                              <td><label>Name</label></td>
                              <td>
                                  {/*<input id="name" type="text" name="name" required>*/}
                                  <input/>
                              </td>
                            </tr>

                            <tr>
                              <td><label>Card type</label></td>
                              <td><select name="category">
                                  <option value="Per">Credit Card</option>
                                  <option value="Aca">Debit Card</option>
                                  {/*<option value="Ind"></option>*/}
                                  </select>
                              </td>
                            </tr>

                            <tr>
                              <td><label>Card Number</label></td>
                              <td>
                                  <input/>
                              </td>

                            </tr>

                            <tr>
                              <td><label>Exp Date</label></td>
                              <td> <input/> </td>

                              <td><label>CVV</label></td>
                              <td> <input/> </td>
                            </tr>

                            <tr>
                              <td><label>Address</label></td>
                              <td>
                                  {/*<input id="location" type="text" name="location" required>*/}
                                  <input/>
                              </td>
                            </tr>

                            <tr>
                              <td><label>Email</label></td>
                              <td>
                                  {/*<input id="email" type="text" name="email" required>*/}
                                  <input/>
                                  </td>
                            </tr>

                            <tr>
                              <td><label>Website</label></td>
                              <td>
                                  {/*<input id="website" type="url" name="website" placeholder="https://example.com" pattern="https://.*" required>*/}
                                  <input/>
                              </td>
                            </tr>

                            <tr>
                              <td></td>
                                <td>
                                    <input />
                                    {/*<input type="submit" value="Submit">*/}
                                </td>
                            </tr>
                          </table>
                    </form>
                </span>


            </div>
        </>
    );
}

export default Checkout;