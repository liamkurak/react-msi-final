

# Online Shopping

  ## Header: 
  * text-logo
  * search bar
  * Login

  ## sub-header:
  * Products
      * Filter / Sort By
        * Genre
        * 
    
  * Support
      * custumor
      * return items

## login with diffrent auth
  * Editing
    * CRUD
      * add, delete

React Component:
  Class, function

# 1. 因为single page 用 
  ``` JavaScript
      submitHandler = (event: SyntheticEvent) => {
        event.preventDefault(); // 以阻止刷新
        this.props.addProduct(this.state.product);
  ```


# 2. 使用 props：
   * parent passing value to attribute:
     * App -> names = ['1','2'];
     * App -> <Names names={names}/>
  
   * child receive data through props:
     * Names -> get props.names from App

# 3. 使用setState:
   * AddName
  在AddName里面有ini state， which is newName = ‘’
  其中`<input>` tag 里面有 value（包括需要更新的state），和changeHandler fn（用于从HTML从得到newName后update state） 
  以及`<button>` tag的submitHanderler

     * state = {newName: ' '}
     * `<input>` tag
       ```
       value = {this.state.newName}
       onChange = {this.changeHandler}
       ```
     * changeHandler:
        ```JavaScript
        const newName = (event.target as HTMLInputElement).value;
        this.setState({
          newName: newName
        })
        ```

     * `<button>` -> submitHandler
     * ``` JavaScript
        event.preventDefault();
        this.props.addName(this.state.newName);
        ```
              

  然后在app里面，传入新的props，其中传入了一个addName fn，来更改原有的names string[] ，然后forceUpdate 立即更新。（不然的即使state更新了，页面还没有更新，看不到）
  
  * addName()
    * ```JavaScript
      names.push(newName);
      this.forceUpdate();
      ```
    * `<Addname addNmae={this.addName}/>`

# 4. 使用React Router -> `<BrowserRouter>`
   * How to set up routing in react with react-router
      1. Create Routes component and config them
      2. Use NavLink/Link to change URL
         * (Header ->`<nav><ul><li><NavLink to={appConstants}>`)
      3. Use a placeholder to dynamically display components
         * (App -> `this.props.children`)
   * `<BrowserRouter>` 
  创建`<BrowserRouter>`tag，将App 包括在内 并且创建`<Switch>``<Route>`作为`props.children` 传入。
```JavaScript
  <BrowserRouter>
    <App>
      <Switch>
        <Route path={appConstants.loginRoute} component={Login}/>
      </Switch>
    </App>
  </BrowserRouter>
```
   * 创建上面用的Constants Component, `appConstants`
    * Route paths -> `namesRoute: '/names'`
    * actions -> `ADD_NAME: 'ADD_NAME'`


  ## make it Reducer way
  * `index`
    * change `component={()=>{}}` to `component={}`
  * `products` -> create mapStateToProps & export with connect() 
      ```JavaScript
      // destructuring ->  ES6.tx 1/13 11:53
      // const {products} = reduxState; -> {products}
      // function mapStateToProps(reduxState:ReduxStateModel){
      function mapStateToProps({products}: ReduxStateModel){
      // syntax sugar of key value pair: return {products: products};
        return {products};
      }
      export default connect(mapStateToProps)(Products);
      ```
  * `products.reducer`
     ```Java
      export const productsReducer = (state = products, action: ProductsReducerAction ) => {
        return state;
      };

      interface ProductsReducerAction{
        type: string;
      // payload: ProductModel | AxiosResponse;
      // payload: AxiosResponse <ProductModel | AxiosResponse>;
        payload: AxiosResponse <ProductModel | {product: ProductModel, success: boolean}>;
      }
      ```
  * and add it to `root.reducer`
      ```Java 
      products: productsReducer
      ```
    




# 遇到的一些疑问..
        
1. 为什么 comment的stars PUT后还为0
    `变量名字写错了`

2. Login 的 ID和名字必须对应
   虽然报错（in promise syntaxErr) 但是还是添加成功了
    `*primary key ? 因为只能有一个pk，可以同时设置name和id为pk`

3. 不太清楚Query如何直接使用的
    `现在可以使用了， 用的不是Oracle SQL，而是IDE的SQL`

4. 是否有类似给console的sout缩写
    `vscode 插件后 用clg`

5. fn命名的时候 什么时候用下划线，什么时候用大写？
    `都没差，基本不用下划线`

6. 你一般用的都是let吗？和const比呢？
    `对象 object -> const`

7. async fn 关键词是什么
   `*要大写，反正挺神奇的`

8. button的onClick vs form的OnSubmit -> event.preventDefault();
    ```
    !! ##buble -> extra 8:15
    ```

9.  如何直接在NavLink里面写css
`<h1 style={{"color":"blue" ,'textAlign':'center'    }  } > asd</h1>`

10.   useEffect 是什么？ 可以直接改成()()吗？
    2 para:
        1. ()
        2.dependency -> 当发生变化的时候 立即再次运行一次 render
        render -> useEffect -> change color/ or debug check render or not.


11. 如何实时更新Header？ 我login后 header要手动刷新才给变
12. input如何仅支持 字母和数字？
