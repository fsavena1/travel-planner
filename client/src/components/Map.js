import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
  Autocomplete,
} from "@react-google-maps/api";

function Map() {

  const API_KEY = process.env.REACT_APP_MAP_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
  });

  const containerStyle = {
    margin: "30px auto 0 auto",
    width: "800px",
    height: "500px",
    borderRadius: "10px",
  };

  return isLoaded ? (
    <div>
      <GoogleMap mapContainerStyle={containerStyle}></GoogleMap>
    </div>
  ) : null;
}

export default Map;
