import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Products = () => {
  return (
    <section>
      <h1>the product page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A book</Link>
        </li>
        <li>
          <Link to="/products/p2">A carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An inline</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
