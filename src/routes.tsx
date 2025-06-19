
import loadable from '@loadable/component';
import RootLayout from '@/routes/layout';
import Error_0 from '@/routes/error';
const Component_0 = loadable(() => import(/* webpackChunkName: "page" */ '@/routes/page'));
const Component_1 = loadable(() => import(/* webpackChunkName: "about/page" */ '@/routes/about/page'));
const Component_2 = loadable(() => import(/* webpackChunkName: "blogs/page" */ '@/routes/blogs/page'));
const Component_3 = loadable(() => import(/* webpackChunkName: "blogs/(id)/page" */ '@/routes/blogs/[id]/page'));
const Component_4 = loadable(() => import(/* webpackChunkName: "demo/page" */ '@/routes/demo/page'));

export const routes = [
  {
    path: '/',
    errorElement: <Error_0 />,
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Component_0 />
    }, {
      path: 'about',
      children: [{
        index: true,
        element: <Component_1 />
      }]
    }, {
      path: 'blogs',
      children: [{
        index: true,
        element: <Component_2 />
      }, {
        path: ':id',
        children: [{
          index: true,
          element: <Component_3 />
        }]
      }]
    }, {
      path: 'demo',
      children: [{
        index: true,
        element: <Component_4 />
      }]
    }]
  }
];