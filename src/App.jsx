import { useContext, useEffect, useState } from "react";
import CityInformation from "./Components/CityInformation";
import ToggleButton from "./Components/ToggleButton";
import WeatherInfo from "./Components/WeatherInfo";
import Navbar from "./Components/Navbar";
import HourlyWeatherInfo from "./Components/HourlyWeatherInfo";
import Humidity from "./Components/Humidity";
import Wind from "./Components/Wind";
import Precipitation from "./Components/Precipitation";
import UVindex from "./Components/UVindex";
import Temperature from "./Components/Temperature";
import RainPossibility from "./Components/RainPossibility";
import { useQuery } from "react-query";

function App() {
  const [queryData, setQueryData] = useState(null);
  const [searchError, setSearchError] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //  get the coords of the current location.
          const { latitude, longitude } = position.coords;
          const lat = parseFloat(latitude.toFixed(2));
          const lon = parseFloat(longitude.toFixed(2));
          const coords = `${lat},${lon}`;
          setQueryData(coords);
        },
        (error) => {
          setQueryData("22.97,87.74");
          console.log(error);
        }
      );
    }
  }, []);

  // get the weather information
  const { data, isLoading, isError } = useQuery(
    ["weather", queryData],
    async () => {
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_API_KEY
      }&q=${queryData}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data?.error?.code === 1006) {
        setSearchError(data?.error?.message);
        return [];
      }
      setSearchError("");
      return data;
    },
    {
      enabled: !!queryData,
      onError: (err) => {
        console.log(err.message);
      },
    }
  );

  // function to get background image url based on weather condition
  const getBackgroundImage = (weatherCondition) => {
    switch (weatherCondition) {
      case "Partly cloudy":
        return "https://i.ibb.co/ggJTzVM/partly-cloudy.png";
      case "Sunny":
        return "https://i.ibb.co/GJLGXDn/sunny.png";
      case "Clear":
        return "https://i.ibb.co/1bCK5HL/clear-night.png";
      case "Moderate or heavy rain shower":
        return "https://i.ibb.co/8Xjc7BX/light-rain-shower.png";
      case "Moderate rain":
        return "https://i.ibb.co/jLhyKf1/moderate-rain.png";
      case "Rain":
        return "https://i.ibb.co/8Xjc7BX/light-rain-shower.png";
      case "Light rain shower":
        return "https://i.ibb.co/8Xjc7BX/light-rain-shower.png";
      case "Patchy rain possible":
        return "https://i.ibb.co/cg9BbHd/patchy-rainy-possiable.png";
      case "Overcast":
        return "https://i.ibb.co/GptS0Z1/overcast.png";
      case "Fog":
        return "https://i.ibb.co/mCkVr1X/fog.png";
      default:
        return "https://i.ibb.co/8Xjc7BX/light-rain-shower.png";
    }
  };
  // function to get the searchInput value.
  const handleSearch = (e) => {
    e.preventDefault();
    setBackgroundImage("");
    if (e.target.searchInput.value === "") return;
    setQueryData(e.target.searchInput.value);
    e.target.searchInput.value = "";
  };
  if (data?.current && !backgroundImage) {
    const weatherCondition = data.current.condition.text;
    const backgroundImageStyle = {
      backgroundImage: `url(${getBackgroundImage(weatherCondition)})`,
    };
    setBackgroundImage(backgroundImageStyle);
  }
  return (
    <div className="max-w-[85rem] pt-0 pb-4 md:pb-1 md:pt-1 md:px-4 lg:mx-auto w-full lg:flex items-center justify-center">
      <div className="w-full border-none bg-[#5C9CE5] shadow-2xl min-h-[44rem] lg:rounded-[2.5rem] md:my-10 overflow-hidden  md:rounded-2xl border flex flex-col md:flex-row">
        <section className="w-full md:w-[30%] ">
          <div className="p-3 md:p-4 lg:p-10">
            <Navbar
              defaultStyle="text-slate-50 flex mb-12 md:hidden border-b-2 border-blue-300 pb-3"
              titleStyle="text-2xl"
            ></Navbar>
            <ToggleButton
              isLoading={isLoading}
              handleSearch={handleSearch}
            ></ToggleButton>
            <CityInformation
              searchError={searchError}
              isLoading={isLoading}
              data={data}
            ></CityInformation>
            <WeatherInfo
              isLoading={isLoading}
              current={data?.current}
            ></WeatherInfo>
          </div>
          {backgroundImage && (
            <div
              style={backgroundImage}
              className={`w-full h-[527px] hidden bg-no-repeat bg-cover md:block`}
            ></div>
          )}
        </section>
        <section className="w-full border-none md:w-[72%] bg-blue-100 p-3 md:p-4 lg:p-10 lg:rounded-[2.5rem] rounded-2xl md:rounded-2xl">
          <Navbar
            defaultStyle="hidden md:flex mb-6"
            titleStyle="text-2xl"
          ></Navbar>
          <HourlyWeatherInfo
            location={data?.location}
            isLoading={isLoading}
            forecast={data?.forecast}
          ></HourlyWeatherInfo>
          <div className="mt-8 md:mt-12 lg:mt-14">
            <h1 className="text-2xl font-bold mb-6">
              More Details of Today's weather
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-8">
              <Humidity
                isLoading={isLoading}
                current={data?.current}
              ></Humidity>
              <Wind isLoading={isLoading} current={data?.current}></Wind>
              <Precipitation
                isLoading={isLoading}
                current={data?.current}
              ></Precipitation>
              <UVindex isLoading={isLoading} forecast={data?.current}></UVindex>
              <Temperature
                isLoading={isLoading}
                temperature={data?.current}
              ></Temperature>
              <RainPossibility
                isLoading={isLoading}
                forecast={data?.forecast}
              ></RainPossibility>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
