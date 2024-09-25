import { Route, Routes } from "react-router-dom";
import CountriesList from "./CountriesList";
import CountryDetail from "./CountryDetail";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<CountriesList />} />
        <Route path="/country/:code" element={<CountryDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

