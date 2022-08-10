import Header from "./Header/Header";
import PageList from "./pages/PageList/PageList";
import { StyledApp } from "./App.styled";

const App = () => {
  return (
    <StyledApp>
      <Header />
      <PageList />
    </StyledApp>
  );
};

export default App;
