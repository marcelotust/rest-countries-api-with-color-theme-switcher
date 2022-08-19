import Header from "./components/Header/Header";
import PageList from "./pages/PageList/PageList";
import { StyledApp, StyledMain } from "./App.styled";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import { GlobalStyles } from "./GlobalStyles";
import useDarkTheme from "./hooks/useDarkTheme";
import { darkTheme, lightTheme } from "./themes/themes";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [theme, themeToggler] = useDarkTheme();
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <StyledApp>
        <Header themeToggler={themeToggler} />
        <StyledMain>
          <Routes>
            <Route path="/" element={<Navigate to="/list" />} />
            <Route path="/list" element={<PageList />} />
            <Route path="/detail/:countryId" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </StyledMain>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
