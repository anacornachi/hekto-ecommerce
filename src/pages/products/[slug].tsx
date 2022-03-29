import ProductDetails from '@components/ProductPage/ProductDetails';
import ProductTabs from '@components/ProductPage/ProductTabs';
import SubHeader from '@components/shared/SubHeader';
import {getAllProducts, getProductBySlug} from '@services/products';

type Props = {
  product: TProduct;
};

export default function ProductPage({product}: Props) {
  console.log(product);
  return (
    <>
      <SubHeader title={product.title} />
      <ProductDetails product={product} />
      <ProductTabs product={product} />
    </>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((product) => ({
    params: {slug: product.slug},
  }));

  return {paths, fallback: false};
}

export async function getStaticProps({params}) {
  const product = await getProductBySlug(params.slug);

  return {props: {product}};
}
