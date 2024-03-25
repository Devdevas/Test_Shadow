import { Genre } from "../genres/genresTypes";
import { ParentPlatform, PlatformDetail } from "../platforms/platformsTypes";
import { GamesStore } from "../gamesStores/gamesStoresTypes";

export interface GamesState {
   games: Game[];
   filteredGames: Game[];
   totalPages: number;
   gameDetails: Game | null;
   gamesFromSeries: Game[];
   gameMovies: GameMovie[] | null;
   gameScreenshots: Screenshot[] | null;
   loading: boolean;
   loadingFiltredGames: boolean;
   loadingScreenshots: boolean;
   loadingGameMovies: boolean;
   error: string | null;
}

export interface Game {
   id: number;
   slug: string;
   name: string;
   released: string;
   tba: boolean;
   description: string;
   description_raw: string;
   background_image: string;
   rating: number;
   rating_top: number;
   ratings: Rating[];
   ratings_count: number;
   reviews_text_count: number;
   added: number;
   added_by_status: AddedByStatus;
   metacritic: number;
   playtime: number;
   suggestions_count: number;
   updated: string;
   platforms: PlatformDetail[];
   parent_platforms: ParentPlatform[];
   genres: Genre[];
   stores: GamesStore[];
   tags: Tag[];
   esrb_rating: EsrbRating;
}

export interface GameFilters {
   genres?: string;
   platforms?: string;
   publishers?: string;
   developers?: string;
   stores?: string;
   search?: string;
   ordering?: string;
   page?: number;
   page_size?: number;
}

export interface GameMovie {
   id: number;
   name: string;
   preview: string;
   data: {
      480: string;
      max: string;
   };
}

interface Rating {
   id: number;
   title: string;
   count: number;
   percent: number;
}

interface AddedByStatus {
   yet: number;
   owned: number;
   beaten: number;
   toplay: number;
   dropped: number;
   playing: number;
}

interface Tag {
   id: number;
   name: string;
   slug: string;
   language: string;
   games_count: number;
   image_background: string;
}

interface EsrbRating {
   id: number;
   name: string;
   slug: string;
}

export interface Screenshot {
   id: string;
   image: string;
   width: number;
   height: number;
   is_deleted: boolean;
}
