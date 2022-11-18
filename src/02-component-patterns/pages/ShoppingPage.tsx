import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import coffeImage from '../assets/coffee-mug.png';
const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: coffeImage,
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'Hola mundo'} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
