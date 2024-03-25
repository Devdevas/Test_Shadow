import { AxiosError } from "axios";
import { CustomError } from "../redux/slices/sharedTypes";

export function handleAxiosError(error: AxiosError): CustomError {
   let customError: CustomError = { message: "An unexpected error occurred. Please try again." };
   if (!error.response) {
      customError.message = "Please check your network connection and try again.";
   } else {
      // Customize error messages according to the response status code
      switch (error.response.status) {
         case 400:
            customError.message = "Bad Request. Please check your request and try again.";
            break;
         case 401:
            customError.message = "Unauthorized. Please log in.";
            break;
         case 404:
            customError.message = "The requested resource couldn't be found.";
            break;
         case 500:
            customError.message = "Internal Server Error. Please try again later.";
            break;
      }
      customError.statusCode = error.response.status;
   }

   return customError;
}
