import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetaiPage from './pages/DetaiPage';
import ListPage from './pages/ListPage';

function ProductFeature(props) {
  const match = useRouteMatch()

  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
        <Route path={`${match.url}/:productId`} component={DetaiPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;