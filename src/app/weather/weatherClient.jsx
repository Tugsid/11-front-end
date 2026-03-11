export const metadata = {
    title: "Weather",
    description: "Weather page",
  };
  
  import WeatherClient from "./WeatherClient";
  
  export default function Page() {
    return <WeatherClient />;
  }