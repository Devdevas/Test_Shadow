import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import GameDetailsPage from "./pages/GameDetailsPage";
import PlatformsPage from "./pages/PlatformsPage";
import GenresPage from "./pages/GenresPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollToTop } from "./shared/utils/scrollToTop";
import GameMoviesPage from "./pages/GameMoviesPage";

const AppRouter = () => {
   return (
      <BrowserRouter>
         <ScrollToTop />
         <Header />
         <NavBar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="games" element={<GamesPage />} />
            <Route path="games/:gameId" element={<GameDetailsPage />} />
            <Route path="games/:gameId/movies" element={<GameMoviesPage />} />
            <Route path="platforms" element={<PlatformsPage />} />
            <Route path="genres" element={<GenresPage />} />
            <Route path="*" element={<NotFoundPage />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
};

export default AppRouter;
