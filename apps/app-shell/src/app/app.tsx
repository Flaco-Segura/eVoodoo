import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import { Header } from '@evoodoo/ui';
// import useStore from 'store/Module';
// import { AiFillLike } from "react-icons/ai";

const Catalog = React.lazy( () => import('catalog/Module') );
const Checkout = React.lazy( () => import('checkout/Module') );

export const App = () => {
  // const { count, increment } = useStore();

  return (
    <React.Suspense fallback={null}>
      <Container style={{ marginTop: '5rem' }}>
        <Header />
        <Routes>
          <Route path='/' element={<Catalog />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Container>
    </React.Suspense>
  );
}

export default App;
