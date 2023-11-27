import { useRouter } from "next/router";

function projectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query); //concrete value of the Url.
    //Send a request to some backend server 
    //to fetch the peice of the data with a id of {router.query.projectId}
  return <h1>Portfolio Page</h1>;
}

export default projectPage;
