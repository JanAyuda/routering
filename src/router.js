// Dit js file importeert een module 'Router' van '@vaadin/router', selecteert een element met de id 'outlet', maakt een routerinstantie en definieert routes voor de router.
import { Router } from '@vaadin/router';

const app = document.querySelector('#outlet');
export const router = new Router(outlet);

router.setRoutes([
    {path: '/', component: 'my-element'},
    {path: '/second', component: 'my-second-element'},
    {path: '/users/:user', component: 'my-user'}
]);