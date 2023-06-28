import useData from "./useData";

export interface Genre {
  id: number;
  name: String;
}

const useGenre = () => useData<Genre>("/genres");

export default useGenre;
