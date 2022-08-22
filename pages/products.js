import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicProducts = dynamic(() => import("../components/products"), {
  suspense: true,
});

const products = (props) => {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicProducts props={props.data} />
    </Suspense>
  );
};

export default products;

export async function getStaticProps() {
  const res = await fetch("https://ecom-rest-apis.herokuapp.com/api/products");
  const data = await res.json();
  return { props: { data } };
}
