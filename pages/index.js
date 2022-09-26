import Main from "../components/Main";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Head from "next/head";

const DynamicProducts = dynamic(() => import("../components/products"), {
  suspense: true,
});
const Home = (props) => {
  return (
    <>
      <Head>
        <title>Order Pizza</title>
        <meta
          name="description"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Main />
      <Suspense fallback={`Loading...`}>
        <DynamicProducts props={props.data} />
      </Suspense>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://ecom-rest-apis.herokuapp.com/api/products");
  const data = await res.json();
  // console.log(data);
  return { props: { data } };
}
export default Home;
