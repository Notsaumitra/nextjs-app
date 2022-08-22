import Main from "../components/Main";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicProducts = dynamic(() => import("../components/products"), {
  suspense: true,
});
const Home = (props) => {
  return (
    <>
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
