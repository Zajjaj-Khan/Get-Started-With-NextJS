import { useEffect, useState } from "react";
import useSWR from "swr";
function LastSalesPAge() {
  const [sales, setSales] = useState();
  const [loading, setLoading] = useState(false);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {data,error} = useSWR('https://nextjs-starter-92bcf-default-rtdb.firebaseio.com/sales.json', fetcher)
  useEffect(() =>{
    if(data){
        const transforedSales = [];
        for (const key in data) {
          transforedSales.push({
            id: key,
            username: data[key].username,
            volumes: data[key].volume,
          });
        }
        setSales(transforedSales);

    }
  },[data])
//   useEffect(() => {
//     setLoading(true);
//     fetch('https://nextjs-starter-92bcf-default-rtdb.firebaseio.com/sales.json')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)
//         const transforedSales = [];
//         for (const key in data) {
//           transforedSales.push({
//             id: key,
//             username: data[key].username,
//             volumes: data[key].volume,
//           });
//         }
//         setSales(transforedSales);
//         setLoading(false);
//       });
//   }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if(!sales || !data){
    return <p>No Data yet!</p>
  }
  return (
    <ul>
      {sales?.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volumes}
        </li>
      ))}
    </ul>
  );
}
export default LastSalesPAge;
export async function getStaticProps(){
    const response = await fetch('https://nextjs-starter-92bcf-default-rtdb.firebaseio.com/sales.json')
         const data = await response.json();
            console.log(data)
            const transforedSales = [];
            for (const key in data) {
              transforedSales.push({
                id: key,
                username: data[key].username,
                volumes: data[key].volume,
              });
            }
            return {props:{sales:transforedSales},revalidate:10}
};