import Head from "next/head";
import ListFromRequest from "../../../components/listFromRequest";
import { API } from "../../../config";

export default function Person({ person }) {
  const {
    name,
    birth_year,
    created,
    edited,
    films,
    homeworld,
    species,
    vehicles,
    starships,
    url,
    ...bodyParams
  } = person;
  console.log(person)
  return (
    <div className="bg-background-dark flex h-screen">
      <Head>
        <title>{name}</title>
        <meta name="description" content={name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1">
        <div className="container m-5 mx-auto">
          <h1 className="text-primary text-6xl text-center m-3">{name}</h1>
          <h1 className="text-primary text-xl text-center">
            Birth Year: {birth_year}
          </h1>
        </div>
        <div className="bg-background-light p-5 flex flex-1 flex-col">
          <div>
            <h3 className="text-white text-l text-center">
              Created: {new Date(created).toLocaleDateString()}
            </h3>
          </div>
          <ListFromRequest title={'Films'} urls={films} dataKey={'title'} />
          <ListFromRequest title={'Species'} urls={species} dataKey={'name'} />
          <ListFromRequest title={'Vehicles'} urls={vehicles} dataKey={'name'} />
          <ListFromRequest title={'Starships'} urls={starships} dataKey={'name'} />
          <ul className="bg-background m-2 border-background-dark border-2 p-3 rounded-md">
            {Object.entries(bodyParams).map(([k, v]) => (
              <li key={k} className="text-white text-xl">
                {k}: {v}
              </li>
            ))}
          </ul>
        <h3 className="text-white text-sm text-center">
          Last edited: {new Date(edited).toLocaleDateString()}
        </h3>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await fetch(`${API}/people/${id}`);
  const person = await res.json();
  return {
    props: {
      person,
    },
  };
}
