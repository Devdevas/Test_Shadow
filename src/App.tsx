import AppRouter from "./AppRouter";
import GlobalStyle from "./shared/styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./shared/styles/theme";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <AppRouter />
      </ThemeProvider>
   );
}

export default App;
