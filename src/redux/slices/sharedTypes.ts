export interface ApiResponse<T> {
   count: number;
   next: string | null;
   previous: string | null;
   results: T | [];
}

export interface InitialState<T> {
   data: T[] | [];
   loading: boolean;
   error: string | null;
}

export interface CustomError {
   message: string;
   statusCode?: number;
}
