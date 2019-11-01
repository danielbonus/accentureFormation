import { Router } from '@vaadin/router';
import '../views/templates/home-template-view';
import '../views/templates/litelement-template-view'

export const initRouter = (element) => {
  const router = new Router(element.shadowRoot.querySelector('main'));
  router.setRoutes([
    ...router.getRoutes(),
    {
      path: '/',
      component: 'home-template-view'
    },
    {
      path: '/litelement',
      component: 'litelement-template-view'
    },
    {
      path: '/build',
      component: 'home-template-view'
    }
  ]);
}