import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </BrowserRouter>
  );
}
