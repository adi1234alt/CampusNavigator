import { useEffect } from "react";
import { useMap } from "react-leaflet";

function SearchLocation({ searchText, locations }) {
  const map = useMap();

  useEffect(() => {
    console.log("Search:", searchText);

    if (!searchText) return;

    const place = locations.find((loc) =>
      loc.name.toLowerCase().includes(searchText.trim().toLowerCase())
    );

    console.log("Place:", place);

    if (place) {
      map.flyTo(place.position, 18);
    }
  }, [searchText]);

  return null;
}

export default SearchLocation;