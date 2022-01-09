import Link from "next/link";

export default function SearchResult({ person }) {
  return (
    <div className="m-2" >
      <Link
        href={{
          pathname: "/person/[id]",
          params: {
            person,
          },
        }}
        as={`/person/${person.url.match(/\d+/)}`}
      >
        <div className="hover:cursor-pointer flex flex-col md:flex-row md:max-w-5xl rounded-lg bg-white shadow-lg mx-auto">
          <img
            className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-md md:rounded-md"
            src="https://a.1stdibscdn.com/r2d2-life-size-model-sculpture-star-wars-for-sale-picture-2/f_14282/f_145374121556547126676/Sans_titre_1_master.jpg"
            alt=""
          />
          <div className="p-6 flex flex-col justify-start flex-1">
            <div className="flex flex-row justify-between">
              <h5 className="text-background-dark text-4xl font-medium mb-2">
                {person.name}
              </h5>
              <p className="text-background-light text-lg mb-4">
                {`(${person.birth_year})`}
              </p>
            </div>
            <p className="text-background-light text-m">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
