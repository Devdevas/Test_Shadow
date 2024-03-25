// A theme object to store global style variables
interface Theme {
   colors: {
      primary: string;
      secondary: string;
      backgroundBlack: string;
      backgroundGray: string;
      backgroundGrayLighter: string;
      backgroundPink: string;
      backgroundTransparent: string;
      whiteText: string;
      grayText: string;
      blackText: string;
   };
   fonts: {
      primary: string;
      secondary: string;
   };
   fontSizes: {
      small: string;
      medium: string;
      large: string;
      larger: string;
   };
   fontWeights: {
      light: number;
      normal: number;
      medium: number;
      bold: number;
   };
   spacing: {
      small: string;
      medium: string;
      large: string;
      larger: string;
   };
   borders: {
      thin: string;
      thick: string;
   };
   borderRadius: {
      small: string;
      medium: string;
      large: string;
   };
}

const theme: Theme = {
   colors: {
      primary: "#C3073F",
      secondary: "#6F2232",
      backgroundBlack: "#000",
      backgroundGray: "#0e0e0f",
      backgroundGrayLighter: "#1b1b1b",
      backgroundPink: "#f4cdcd",
      backgroundTransparent: "rgba(0, 0, 0, 0.2)",
      whiteText: "#FFF",
      grayText: "#747474",
      blackText: "#0e0e0e",
   },
   fonts: {
      primary: "Ubuntu, sans-serif",
      secondary: "Open Sans, sans-serif",
   },
   fontSizes: {
      small: "0.8rem",
      medium: "1rem",
      large: "1.4rem",
      larger: "2.3rem",
   },
   fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 600,
   },
   spacing: {
      small: "8px",
      medium: "16px",
      large: "24px",
      larger: "60px",
   },
   borders: {
      thin: "1px solid",
      thick: "2px solid",
   },
   borderRadius: {
      small: "4px",
      medium: "8px",
      large: "12px",
   },
};

export default theme;
