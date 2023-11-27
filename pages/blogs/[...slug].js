import {useRouter} from "next/router"

function BlogPages() {
  const routes = useRouter();
  console.log(routes.query)
    return (


    <div>
        <h1>Blog Pages</h1>
        
        
        </div>
  )
}

export default BlogPages

//Catch multiple dynamic section/routes in one go...