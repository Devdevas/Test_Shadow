export interface StoresState {
   gamesStores: GamesStore[];
   storeDetails: GamesStore | null;
   loading: boolean;
   error: string | null;
}

export interface GamesStoreObject {
   id: number;
   store: GamesStore;
}

export interface GamesStore {
   id: number;
   name: string;
   slug: string;
   domain: string;
   games_count: number;
   image_background: string;
}
