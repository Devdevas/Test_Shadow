import { Game } from "../games/gamesTypes";

export interface DevelopersState {
   developers: Developer[];
   loading: boolean;
   error: string | null;
}

export interface Developer {
   id: number;
   name: string;
   slug: string;
   games_count: number;
   image_background: string;
   games: Game[];
}
