// import './App.css';
import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import productApi from "./api/productApi";
import NotFound from "./components/NotFound";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

function App() {
  useEffect(() => {
    const params = {_limit: 10};

    const fetchProducts = async () => {
      const productList = await productApi.getAll(params);
      // console.log(productList);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todos">Todo List</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Album List</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
