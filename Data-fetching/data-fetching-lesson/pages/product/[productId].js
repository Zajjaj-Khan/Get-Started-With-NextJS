import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";
function productDetailPage({loadedProduct}) {
  //If fallback is true we show some loading widgets
  if(!loadedProduct){
    return (<h2>Laoding.....</h2>)
  }
  
  return (

    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}
//Function to get Data from dummy file
async function getData (){
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}
export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productId;
  const data = await getData();


  const product = data.products.find((product) => product.id === productId);
  if(!product){
    return {notFound: true};
  }
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths(){
  const data = await getData();
  const ids = data.products.map(product => product.id);
  const pathWithParams = ids.map((id)=>({params:{productId:id}})
  );

  return {
    paths:
      pathWithParams,
      // {params:{productId: 'p2'}},
      // {params:{productId: 'p3'}}

    fallback:true
     
    }
  }

export default productDetailPage;
