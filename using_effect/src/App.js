import React from "react";
import "./App.css";
import { SelectBox } from "./using_effect";

const indiaStateOption = [
  { label: "Karnataka", value: "kar" },
  { label: "Tamilnadu", value: "TN" },
];
const indiaKarOption = [
  { label: "Bangalore", value: "bang" },
  { label: "Mangalore", value: "mang" },
];

function App() {
  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [countryOptions] = React.useState([
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
    { label: "Pakistan", value: "pakistan" },
  ]);

  const [stateOptions, setStateOptions] = React.useState([]);
  const [cityOptions, setCityOptions] = React.useState([]);

  React.useEffect(() => {
    if (country === "india") {
      setStateOptions(indiaStateOption);
    }
  }, [country]);

  React.useEffect(() => {
    if (state === "kar") {
      setCityOptions(indiaKarOption);
    }
  }, [state]);

  React.useEffect(() => {
    setMessage(`${country} -> ${state} -> ${city}`);
  }, [country, state, city]);

  return (
    <div className="App">
      {/* Country */}
      <SelectBox
        label="Country"
        value={country}
        onChange={setCountry}
        options={countryOptions}
      />

      {/* State */}
      <SelectBox
        label="State"
        value={state}
        onChange={setState}
        options={stateOptions}
      />

      {/* City */}
      <SelectBox
        label="City"
        value={city}
        onChange={setCity}
        options={cityOptions}
      />

      <h1>{message}</h1>
    </div>
  );
}

export default App;
