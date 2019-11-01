import { Router } from '@vaadin/router';
import '../views/templates/home-template-view';
import '../views/templates/litelement-template-view'

export const initRouter = (element) => {
  const router = new Router(element.shadowRoot.querySelector('main'));
  router.setRoutes([
    ...router.getRoutes(),
    {
      path: '/accentureFormation/build',
      component: 'home-template-view'
    },
    {
      path: '/accentureFormation/build/litelement',
      component: 'litelement-template-view'
    }
  ]);
}