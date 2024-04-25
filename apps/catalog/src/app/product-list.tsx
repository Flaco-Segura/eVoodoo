import { Card } from 'semantic-ui-react';
import ProductCard from './product-card';
import { PRODUCT_LIST_MOCKS } from '@evoodoo/mocks';

export const ProductList = () => {
  return (
    <Card.Group>
      {PRODUCT_LIST_MOCKS.map( product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Card.Group>
  )
}
export default ProductList;
