function UserProfilePage({ username }) {
  return <h1>{username}</h1>;
}
export default UserProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log(res)
  console.log(req)

  return {
    props: {
      username: "Max",
    },
  };
}
