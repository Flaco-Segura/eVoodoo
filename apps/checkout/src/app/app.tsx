import { Container, Header as Text } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ShoppingBasket from './basket';
import { getSessionStorage } from '@evoodoo/utils';

import { PRODUCT_LIST_MOCKS } from '@evoodoo/mocks';

export const App = () => {
  const basketFromStorage: any = getSessionStorage('shoppingBasket');

  const createCompleteBasket = (allItems: any, quantities: any) => {
    return allItems
      .filter((item: any) => quantities[item.id])
      .map((item: any) => {
        return {
          ...item,
          quantity: quantities[item.id]
        }
      });
  };

  const completeBasket = createCompleteBasket(
    PRODUCT_LIST_MOCKS,
    basketFromStorage
  );

  return (
    <Container style={{ marginTop: '5rem' }}>
      <Text size='huge'>Checkout</Text>
      <ShoppingBasket basketList={completeBasket} />
    </Container>
  );
}

export default App;
