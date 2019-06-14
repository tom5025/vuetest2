import BeerView from "./components/BeerView.vue";
//const BeerView = () => import('@/components/BeerView.vue');

const routes = [
    {
        path: '/',
        name: 'BeerView',
        component: BeerView
    },
];

export default routes;
