import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import PublicPage from "./pages/publicPage";
import ProfilePage from "./pages/profilePage";
import MoviesPage from "./pages/moviesPage"; 
import SeriesPage from "./pages/seriesPage";  
import PeoplePage from "./pages/celebPage";
import { QueryClientProvider, QueryClient } from "react-query";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
import SignUpPage from "./pages/signUpPage";
import ProtectedRoutes from "./protectedRoutes";
import Header from "./components/siteHeader";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <Header />
          <ul>
            <li>
              <Link to="/">Public</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li> 
            <li>
              <Link to="/series">TV Shows</Link>
            </li> 
            <li> 
            <Link to="/celebs">People</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<PublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={ <SignUpPage /> } />
            <Route element={<ProtectedRoutes />}>
              <Route path="/movies" element={<MoviesPage />} /> 
              <Route path="/series" element={<SeriesPage />} /> 
              <Route path="/celebs" element={<PeoplePage />}/>
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);