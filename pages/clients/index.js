import Link from 'next/link'
function index() {
  const clients = [{
    id:'max', name:'maxwell'
  },{
    id:'manu', name:'manual'
  }]
  return (
    <div>
      <h1>This is client page</h1>
      <ul>
        {clients.map((client)=> <li key={client.id}>
          <Link href={{
            pathname:'/clients/[id]',
            query:{id:client.id}
          }}>{client.name}
          </Link>
          </li>)}
      </ul>
    </div>
  )
}

export default index