import Header from "./components/Header/Header";
import PageList from "./pages/PageList/PageList";
import { StyledApp, StyledMain } from "./App.styled";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DetailPage from "./pages/DetailPage/DetailPage";

const App = () => {
  return (
    <StyledApp>
      <Header />
      <StyledMain>
        <Routes>
          <Route path="/" element={<Navigate to="/list" />} />
          <Route path="/list" element={<PageList />} />
          <Route path="/detail/:countryId" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </StyledMain>
    </StyledApp>
  );
};

export default App;
