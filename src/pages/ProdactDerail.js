import { useParams } from 'react-router-dom';

const ProdactDetail = () => {
  const params = useParams();

  console.log(params);

  return (
    <section>
      <h1>Product detail</h1>
      {params.productId}
    </section>
  );
};

export default ProdactDetail;
