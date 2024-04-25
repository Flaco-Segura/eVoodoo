import { Table, Image, Container } from 'semantic-ui-react';

interface BasketListData {
  basketList: Array<BasketItem>;
}

interface BasketItem {
  id: string;
  image: string;
  title: string;
  quantity?: number;
  price: number;
};

export const ShoppingBasket = (basketListData: BasketListData) => {
  const { basketList } = basketListData;
  const getQuantity = (quantity: number | undefined) => quantity || 0

  return (
    <Container textAlign='center'>
      <Table basic='very' rowed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Items</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          { basketList.map((basketItem: BasketItem) => (
            <Table.Row key={basketItem.id}>
              <Table.Cell>
                <Image src={basketItem.image} rounded size='mini'/>
              </Table.Cell> 
              <Table.Cell>{basketItem.title}</Table.Cell>
              <Table.Cell>{getQuantity(basketItem.quantity)}</Table.Cell>
              <Table.Cell>{basketItem.price * getQuantity(basketItem.quantity)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  )
};

export default ShoppingBasket;
