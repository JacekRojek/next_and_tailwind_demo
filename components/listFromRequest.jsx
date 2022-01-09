import { useEffect, useState } from "react";

export default function ListFromRequest({ urls, title, dataKey }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json()))).then(
      (respData) => {
        setData(respData);
        console.log(title, respData);
      }
    );
  }, []);
  return (
    data.length > 0 && (
      <div className="bg-background m-2 border-background-dark border-2 p-3 rounded-md">
        <h3 className="text-white text-2xl mb-4">{title}</h3>
        <ul>
          {data.map((d) => (
            <li key={d.name} className="text-white text-xl">
              - {d[dataKey]}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
