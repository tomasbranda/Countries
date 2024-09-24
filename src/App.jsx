import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountriesList from "./CountriesList";
import CountryDetail from "./CountryDetail";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<CountriesList />} />
          <Route path="/country/:code" element={<CountryDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

