interface productListItem {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
}

export const PRODUCT_LIST_MOCKS: Array<productListItem> = [
  {
    id: '1',
    title: 'Voodoo, starters guide',
    image: '/assets/voodoo_starters_guide.avif',
    description: 'Beautiful pages for your Book of Shadows',
    price: 2.79,
  },
  {
    id: '2',
    title: 'Pestilence dust',
    image: '/assets/pestilence_dust.webp',
    description: 'Witch witchcraft paganism curse doll spell pins pincushion evil eye magic wicca',
    price: 7.13,
  },
  {
    id: '3',
    title: 'Witch voodoo doll',
    image: '/assets/witch_voodoo_doll.webp',
    description: 'Pestilence Dust can be used in rituals that involve revenge, striking down an enemy, and/or causing them great misfortune.',
    price: 15.20,
  },
];

export default PRODUCT_LIST_MOCKS;
