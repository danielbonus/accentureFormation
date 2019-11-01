import { Router } from '@vaadin/router';
import '../views/templates/home-template-view';
import '../views/templates/litelement-template-view'

export const initRouter = (element) => {
  const router = new Router(element.shadowRoot.querySelector('main'));
  router.setRoutes([
    ...router.getRoutes(),
    {
      path: '/javascript',
      component: 'home-template-view'
    },
    {
      path: '/litelement',
      component: 'litelement-template-view'
    }
  ]);
}