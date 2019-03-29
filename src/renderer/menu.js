import Goods from './pages/menu/Goods.vue';
import DetailList from './pages/menu/DetailList.vue';

const menu = [
  {
    icon: 'cube',
    title: '物品管理',
    path: '/goods',
    component: Goods,
  },
  {
    icon: 'clipboard',
    title: '基金明细',
    path: '/detailList/:code',
    component: DetailList,
  },
];
export default menu;
