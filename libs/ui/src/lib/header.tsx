import { Menu, Container, Icon, Label, Button } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { useEventListener } from "usehooks-ts";
import { getSessionStorage } from "@evoodoo/utils";
import { Link } from "react-router-dom";
import useStore from 'store/Module';
import { AiFillLike } from "react-icons/ai";

export const Header = () => {
  const [miniBasketCount, setMiniBasketCount] = useState(null);
  const { count, increment } = useStore();
  
  const getTotalBasketCount = (basket: any) : any => {
    return Object.values(basket).reduce((a: any, b: any) => a + b, 0);
  };

  const setTotalBasketCount = () => {
    const basket: any = getSessionStorage('shoppingBasket');
    const totalCount: any = getTotalBasketCount(basket);
    setMiniBasketCount(totalCount);
  }

  useEffect(() => {setTotalBasketCount()}, []);

  useEventListener('session-storage', () => {setTotalBasketCount()});

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          Voodoo.com
        </Menu.Item>
        <MenuItems />
        <Menu.Item position="right">
          <Button onClick={increment}>{count} <AiFillLike/></Button>
          <Label>  
            <Icon name="shopping cart" />
            {miniBasketCount}
          </Label>
        </Menu.Item>
      </Container>
    </Menu>
  );
}

const MenuItems = () => {
  return (
    <>
      {NAV_ITEMS.map((navItem, index) => (
        <Menu.Item key={index}>
          <Link to={navItem.href ?? '#'}>{navItem.label}</Link>
        </Menu.Item>
      ))};
    </>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Catalog',
    href: '/',
  },
  {
    label: 'Checkout',
    href: '/checkout'
  },
];

export default Header;
