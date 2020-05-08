import abstract from '@/view/common/abstract.vue'
import goodList from '@/view/good/good-list.vue'
import orderList from '@/view/orders/order-list.vue'
import user from '@/view/setting/user.vue'
export default[
        {
          path:'/setting',
          name:'setting',
          meta:{
            name:'基本设置',
            auth:false,
            icon:"",    
          },
          component:abstract,
          children:[
            {
              path:'user',
              name:'user',
          meta:{
            name:'个人中心',
            auth:false,
            icon:"",
          },
          component:user
            },
            
          ]
        },
        {
          path:'/good',
          name:'good',
          meta:{
            name:'商品管理',
            auth:false,
            icon:"",    
          },
          component:abstract,
          children:[
            {
              path:'list',
              name:'goodList',
              meta:{
                name:'商品列表',
                auth:false,
                icon:''
              },
               component:goodList,
            }
          ]
        },
        {
          path:'/orders',
          name:'orders',
          meta:{
            name:'订单管理',
            auth:false,
            icon:''
          },
          component:orderList
        }
]
