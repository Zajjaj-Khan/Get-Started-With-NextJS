import { useRouter } from "next/router";
function ClientProjectId() {
  const router = useRouter();

  console.log(router.query);
  function loadProjectHanders() {
    //load Data
    router.push("/clients/max/projectA")
  }

  return (
    <div>
      <h1> the Projects of a given Clients</h1>
      <button onClick={loadProjectHanders}>Load a Project</button>
    </div>
  );
}

export default ClientProjectId;
