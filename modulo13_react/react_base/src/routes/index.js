import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Rotas() {
  return (
    <BrowserRouter>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </BrowserRouter>
  );
}
