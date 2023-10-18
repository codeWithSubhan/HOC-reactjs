import { faker } from '@faker-js/faker';
import './styles.css';
import withToggles from './HOC';

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});
// it return array of object
// console.log(products);

function ProductItem({ product }) {
  return (
    <li className='product'>
      <p className='product-name'>{product.productName}</p>
      <p className='product-price'>${product.price}</p>
      <p className='product-description'>{product.description}</p>
    </li>
  );
}

// LATER: Let's say we got this component from a 3rd-party library, and can't change it.
// But we still want to add the 2 toggle functionalities to it hence HOC😎
function ProductList({ title, items }) {
  return (
    <ul className='list'>
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}
const ProductListWithToggles = withToggles(ProductList);

export default function App() {
  return (
    <div>
      <h1>initial product</h1>

      <div className='col-2'>
        <ProductList title='Products with HOC ' items={products} />
        <ProductListWithToggles title='Products HOC' items={products} />
      </div>
    </div>
  );
}
