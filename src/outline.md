

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
     * `<input>`
     * value = {this.state.newName}
     * onChange = {this.changeHandler}
     * changeHandler:
     *  ```JavaScript
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



































<!-- 





# Ticket System
  * 1. Movies
      * Filter / Sort By
        * Name
        * Genre
        * Rating
        * Release Date
    
      * Movie info
        * Name
        * Runtime
        * Release Date
        * Genre
        * rating
        * Cast & Crew

  * Reservation Check
    * check your appointment 
  * 2. Food & Drinks
  * 3. Rewards
  * 4. Account
    * a. Sign in OR Create 



## login with diffrent auth
  * Editing
    * CRUD
      * add, delete








# Final Project

农业系统
* 1. 每日计划
* 2. 仓库
* 3. 账单
* 4. 管理员


        Core Feature Sets, - farm management - group orders - book keeping - market place (equipment sellers and service providers)



播种系统：
        - plant
          -> stock --, if 0 , shows RED out of stock



# Hotel System

  * 1. Booking
   
    * Search:
      * Destination
      * Check-in date
      * Check-out date
      * Guests
    
    * Filter:
      * Rating/ price

    * hotels table

  * 2. 

 -->
