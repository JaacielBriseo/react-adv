import { Product } from '../interfaces/interfaces';

import coffeImage from '../assets/coffee-mug.png';
import coffeImage2 from '../assets/coffee-mug2.png';

const product1 = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: coffeImage,
};

const product2 = {
  id: '2',
  title: 'Coffe Mug - Meme',
  img: coffeImage2,
};

export const products: Product[] = [product1, product2];
