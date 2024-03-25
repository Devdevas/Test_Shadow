export interface PlatformsState {
   platforms: Platform[];
   platformDetails: Platform | null;
   loading: boolean;
   error: string | null;
}

export interface Platform {
   id: number;
   name: string;
   slug: string;
   image?: string;
   year_end?: number;
   year_start?: number;
   games_count: number;
   image_background: string;
}

export interface PlatformDetail {
   platform: Platform;
   released_at: string;
   requirements_en?: Requirements;
   requirements_ru?: Requirements;
}

interface Requirements {
   minimum: string;
   recommended: string;
}

export interface ParentPlatform {
   platform: {
      id: number;
      name: string;
      slug: string;
   };
}
