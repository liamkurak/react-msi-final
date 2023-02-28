
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Component/Counter/counterSlice';

// this file didnt use!!!
// index.tsx ->  <Provider store={store}>
// change to root.reducer !

// Redux Steps 1: configureStore从 Redux Toolkit导入API
// 这将创建一个 Redux Store，并自动配置(configure) Redux DevTools 扩展，以便您可以在开发时检查商店。
export default configureStore({
    reducer: {
        // Redux Steps 4: add Reducers to Store
        counter: counterReducer,
    },
})