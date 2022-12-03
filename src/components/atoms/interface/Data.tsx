export interface IJsonResposne {
    results: IMovieData[];
    page: number;
  }
  
  export interface IMovieData {
    id:string;
    poster_path: string;
    original_title: string;
    original_language: string;
    overview: string;
    release_date: number;
    vote_average: number;
  }