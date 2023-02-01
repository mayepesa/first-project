import axiosRM from "../../axios";
import { useQuery } from "react-query";

import { isAxiosError } from "axios";

// type Props = {}

const Characters = () => {
  const { isLoading, data, error } = useQuery(
    "rick&morty",
    async () => {
      return await axiosRM.get("/character");
    },
    {
      enabled: true,
      retry: 1,
      onError: (err) => {
        if (isAxiosError(err)) console.log("[Err rick&morty]", err.response);
      },
    }
  );

  if (isLoading) return <p>'Loading...'</p>;
  if (error) return <p>{`An error has occurred: ${error}`}</p>;
  if (data) console.log(data);

  return (
    <div className="root">
      {data?.data.results.length > 0 &&
        data?.data.results.map((character: any, index: number) => (
          <div key={index} className="container">
            <img
              src={character.image}
              alt={character.name}
              className="characterImg"
            />
            <p>Name: {character.name}</p>
            <p>Species: {character.species}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Status: {character.status}</p>
          </div>
        ))}
    </div>
  );
};

export default Characters;
