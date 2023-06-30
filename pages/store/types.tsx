export type actionProps = {
  type: string;
  payload: number;
  error: string;
};

export type responseProps = {
  data: {};
};

export type userProps = {
  data: Array<any | []>;
  error: null;
  loading: boolean;
};

export type episodeProps = {
  data: Array<any | []>;
  error: null;
  loading: boolean;
};

export type reducerProps = {
  user: userProps;
  episode: episodeProps;
};

export type props = {
  data: null | undefined | reducerProps;
  loading: boolean;
  error: string;
  fetchData: (query: number) => void;
  fetchEpisode: (query: number) => void;
};

type originProps = {
  name: string;
  url: string;
};
export type charApiProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: null | string;
  gender: string;
  origin: originProps;
  location: originProps;
  image: string;
  episode: [];
  url: string;
  created: string;
};
export type episodeResponseProps = {
  id: number;
  name: string;
  url: string;
  episode: string;
  created: string | Date;
  characters: [];
  air_date: string | Date;
};

export type stateProps = {
  user: userProps;
  episode: episodeProps;
  loading: boolean;
  error: null | string;
};
