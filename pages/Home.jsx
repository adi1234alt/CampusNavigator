import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import FeatureCards from "../components/FeatureCards";
import MapView from "../components/Map/MapView";

function Home() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Navbar />
      <Hero />

      <SearchBar onSearch={setSearchText} />

      <FeatureCards />

      <MapView searchText={searchText} />
    </>
  );
}

export default Home;