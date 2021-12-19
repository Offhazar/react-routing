import { Route, Switch } from 'react-router-dom';
import MainHeaders from './components/MainHeaders';
import ProdactDetail from './pages/ProdactDerail';
import Products from './pages/Products';
import Welkome from './pages/Welkome';

function App() {
  return (
    <div>
      <MainHeaders />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welkome />
          </Route>
          <Route path="/products/:productId">
            <ProdactDetail />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
