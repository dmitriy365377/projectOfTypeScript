import { Starships } from '../bus/starships/types';

export type FetchDataType<T> = () => Promise<T>;

type APIFetchDataType = {
  starships: {
    fetch: FetchDataType<Starships>;
  };
};

export const api: APIFetchDataType = {
  starships: {
    fetch: (): Promise<Starships> => fetch(`https://swapi.co/api/starships`, {
        method: 'GET',
        mode: "no-cors"
    })
      .then((response) => response.json())
      .then(({ results }) => ({ results })),
  },
};
