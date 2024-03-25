export interface GenresState {
   genres: Genre[];
   genreDetails: Genre | null;
   loading: boolean;
   error: string | null;
}

export interface Genre {
   id: number;
   name: string;
   slug: string;
   games_count: number;
   image_background: string;
}
