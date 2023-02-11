import React, {Component} from 'react'
import { connect } from 'react-redux'
import '../assets/css/shoppingCart.css'
const data = {
    list: [
        {
            goodsId: '10001',
            goodsSrc: 'https://aplus-img.oss-cn-beijing.aliyuncs.com/vVORwq7j4JJPH3LfR55.jpg',
            goodsTitle: '南酸枣粒 酸甜解暑',
            goodsSubtitle: '江西特产 五眼果 249g',
            goodsPrice: '25.8',
            goodsNum: '2',
        },
        {
            goodsId: '10002',
            goodsSrc: 'https://aplus-img.oss-cn-beijing.aliyuncs.com/kSJmZOJWythpbOFnMnb.jpg',
            goodsTitle: '麻花小辫 迷你酥条',
            goodsSubtitle: '山药小麻花 249g',
            goodsPrice: '88.8',
            goodsNum: '1',
        },
        {
            goodsId: '10003',
            goodsSrc: 'https://timgsa.oss-cn-beijing.aliyuncs.com/dearcoo/thumb/8015.png',
            goodsTitle: '香菇脆 即食果蔬',
            goodsSubtitle: '江西风味 249g',
            goodsPrice: '100',
            goodsNum: '10',
        },
        {
            goodsId: '10004',
            goodsSrc: 'https://timgsa.oss-cn-beijing.aliyuncs.com/dearcoo/thumb/8002_v1.png',
            goodsTitle: '酸甜可口 风味独特',
            goodsSubtitle: '菩提圣果 圣果可串手串 220g',
            goodsPrice: '30.5',
            goodsNum: '5',
        },
    ],
};
class ShoppingCart extends Component {
    constructor(props:any) {
        super(props)
    }
    // 选择商品
    // checkGoods = (goodsId,index) =>{
    //     console.log(new Date())
    //     this.props.dispatch({
    //         type:'checkGoods',
    //         data:goodsId
    //     })
    // }
    // // 切换商品数量
    // changeGoodNum = (status,goodsId,index,e) =>{
    //     // 阻止事件冒泡、浏览器默认行为
    //     e.preventDefault();
    //     e.stopPropagation();
    //     let data = {
    //         status:status,
    //         goodsId:goodsId
    //     }
    //     this.props.dispatch({
    //         type:'changeGoodsNum',
    //         data:data
    //     })
    // }
    // // 全选
    // checkAllGoods = () => {
    //     this.props.dispatch({
    //         type:'checkAllGoods',
    //         data:this.props.checkAll
    //     })
    // }
    // // 结算
    submit = () => {
        // let submitList = []
        // let checkGoodsList = this.props.goodsList.filter(item => item.check)
        // checkGoodsList.map((item,index) => {
        //     let obj = {
        //         goodsId:item.goodsId,
        //         goodsNum:item.goodsNum
        //     }
        //     submitList.push(obj)
        // })
        // console.log(submitList)
    }
    render() {
        return (
            <div className='shoppingCartWarp'>
                <div className='shoppingCartWarp_header'>
                    <div>购物车</div>
                </div>
                <div className='shoppingCartWarp_content'>
                    {
                        // this.props.goodsList.map((item,index) => (
                        //     <div className='shoppingCartWarp_content_list' key={index} onClick={() => this.checkGoods(item.goodsId,index)}>
                        //         <div className='shoppingCartWarp_content_check'>
                        //             {
                        //                 item.check ? <img src={require('../assets/img/shopping_check.png')} alt=""/> : <img src={require('../assets/img/shopping_checkNormal.png')} alt=""/>
                        //             }
                        //         </div>
                        //         <div className='shoppingCartWarp_content_list_imgWarp'>
                        //             <img src={item.goodsSrc} alt=""/>
                        //         </div>
                        //         <div className='shoppingCartWarp_content_list_info'>
                        //             <div className='shoppingCartWarp_content_list_title'>{item.goodsTitle}</div>
                        //             <div className='shoppingCartWarp_content_list_subtitle'>{item.goodsSubtitle}</div>
                        //             <div className='shoppingCartWarp_content_list_action'>
                        //                 <div className='shoppingCartWarp_content_list_price'>￥{item.goodsPrice}</div>
                        //                 <div className='shoppingCartWarp_content_list_actionNum'>
                        //                     {
                        //                         // 商品数量为0 隐藏取消和数量
                        //                         item.goodsNum > 0 ?
                        //                             <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        //                                 <div className='shoppingCartWarp_content_list_actionNumChangeButton' onClick={(e) => this.changeGoodNum('reduce',item.goodsId,index,e)}>-</div>
                        //                                 <div className='shoppingCartWarp_content_list_actionNumInfo'>{item.goodsNum}</div>
                        //                             </div>
                        //                             : ''
                        //                     }
                        //                     <div className='shoppingCartWarp_content_list_actionNumChangeButton' onClick={(e) => this.changeGoodNum('add',item.goodsId,index,e)}>+</div>
                        //                 </div>
                        //             </div>
                        //         </div>
                        //     </div>
                        // ))
                    }
                </div>
                <div className='shoppingCartWarp_footer'>
                    <div className='shoppingCartWarp_footer_action'>
                        {/*<div className='shoppingCartWarp_footer_checkAll' onClick={() => this.checkAllGoods()}>*/}
                        {/*    {*/}
                        {/*        this.props.checkAll ? <img src={require('../assets/img/shopping_check.png')} alt=""/> : <img src={require('../assets/img/shopping_checkNormal.png')} alt=""/>*/}
                        {/*    }*/}
                        {/*    全选*/}
                        {/*</div>*/}
                        <div className='shoppingCartWarp_footer_mount'>
                            总计&nbsp;:&nbsp;
                            {/*<span>{this.props.price.toFixed(2)}</span>*/}
                        </div>
                    </div>
                    <div className='shoppingCartWarp_footer_submit' onClick={() => this.submit()}>结算</div>
                </div>
            </div>
        )
    }
}

// function mapStateToProps(state:any) {
//     // 计算总价
//     let price = state.goods.list.reduce((total:number,item) => total + (item.check ? parseFloat(item.goodsPrice*item.goodsNum) : 0),0)
//     return {
//         goodsList:state.goods.list,
//         checkAll:state.goods.list.filter(item => item.check).length == state.goods.list.length, // 根据已选的商品和商品总数量进行对对，决定全选状态
//         price:price
//     }
// }
//
// export default connect(mapStateToProps)(ShoppingCart);
