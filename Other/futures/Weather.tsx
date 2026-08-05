// import { useState, useEffect } from "react";
// // 🎨 Font Awesome 6 Icons (අවශ්‍ය නම් වෙනත් weather icons ද පාවිච්චි කල හැක)
// import { FaCloudSunRain } from "react-icons/fa6";

// interface WeatherData {
//   temp: number;
//   condition: string;
//   alert: string;
// }

// export default function LiveWeatherCard() {
//   const [weather, setWeather] = useState<WeatherData | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // 🌍 1. පරිශීලකයාගෙන් Location Permission ඉල්ලීම සහ ඛණ්ඩාංක ලබා ගැනීම
//     if (!navigator.geolocation) {
//       setError("Geolocation is not supported by your browser.");
//       setLoading(false);
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;

//         // 🔑 ඔබේ API Key එක මෙතනට දමන්න (උදාහරණයක් ලෙස WeatherAPI පාවිච්චි කර ඇත)
//         const API_KEY = "32411404acc205e21ca0d8b86eb22d7e";
//         const API_URL = `https://openweathermap.com${API_KEY}&q=${latitude},${longitude}`;

//         try {
//           // 🌐 2. කාලගුණ දත්ත Fetch කිරීම
//           const response = await fetch(API_URL);
//           const data = await response.json();

//           if (response.ok) {
//             // ලංකාවේ වනාන්තර/කඳුවල ක්ෂණික වැසි ඇතිවිය හැකි නිසා දේශීයව Alert එකක් සකසමු
//             let safetyAlert = "Conditions are stable for trekking.";
//             if (
//               data.current.condition.text.toLowerCase().includes("rain") ||
//               data.current.condition.text.toLowerCase().includes("shower")
//             ) {
//               safetyAlert = "Expect sudden rain inside high trails.";
//             }

//             setWeather({
//               temp: Math.round(data.current.temp_c),
//               condition: data.current.condition.text,
//               alert: safetyAlert,
//             });
//           } else {
//             setError("Failed to fetch weather data.");
//           }
//         } catch (err) {
//           setError("Network error occurred.");
//         } finally {
//           setLoading(false);
//         }
//       },
//       (geoError) => {
//         // User permission reject කලොත් හෝ error එකක් ආවොත් default කොළඹ දත්ත පෙන්වමු
//         setError("Location permission denied. Showing Colombo weather.");
//         fetchDefaultWeather();
//       },
//     );
//   }, []);

//   // 🏙️ Permission නැති වුණොත් Default කොළඹ කාලගුණය පෙන්වන Function එක
//   const fetchDefaultWeather = async () => {
//     const API_KEY = "32411404acc205e21ca0d8b86eb22d7e";
//     const API_URL = `https://openweathermap.com${API_KEY}&q=Colombo`;
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       if (response.ok) {
//         setWeather({
//           temp: Math.round(data.current.temp_c),
//           condition: data.current.condition.text,
//           alert: "Allow location access for real-time trail alerts.",
//         });
//       }
//     } catch {
//       setError("Error loading fallback weather.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="hidden md:flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md max-w-sm mt-6 animate-pulse">
//         <div className="w-8 h-8 bg-zinc-800 rounded-full"></div>
//         <div className="flex-1 space-y-2">
//           <div className="h-2 bg-zinc-800 rounded w-1/3"></div>
//           <div className="h-3 bg-zinc-800 rounded w-2/3"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="hidden md:flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md max-w-sm mt-6 animate-[fadeIn_0.5s_ease-out]">
//       <span className="text-3xl text-emerald-400">
//         <FaCloudSunRain />
//       </span>
//       <div>
//         <p className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest">
//           Live Weather (SL)
//         </p>
//         <p className="text-white text-xs font-bold mt-0.5">
//           {weather
//             ? `${weather.temp}°C · ${weather.condition}`
//             : "Weather Unavailable"}
//         </p>
//         <p className="text-[11px] text-gray-400 font-light leading-snug mt-1">
//           {weather ? weather.alert : error}
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { FaCloudSunRain } from "react-icons/fa6";

interface WeatherData {
  temp: number;
  condition: string;
  alert: string;
}

export default function LiveWeatherCard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // 🔑 ඔබේ OpenWeather API Key එක මෙතනට දමන්න
        const API_KEY = "32411404acc205e21ca0d8b86eb22d7e";

        // 🌐 OpenWeather 2.5 Current Weather API URL එක (units=metric දැමීමෙන් Celsius වලින් ලැබේ)
        const API_URL = `https://openweathermap.org${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

        try {
          const response = await fetch(API_URL);
          const data = await response.json();

          if (response.ok) {
            const conditionText = data.weather[0].main; // උදා: Rain, Clouds, Clear
            let safetyAlert = "Conditions are stable for trekking.";

            if (
              conditionText.toLowerCase().includes("rain") ||
              conditionText.toLowerCase().includes("drizzle")
            ) {
              safetyAlert = "Expect sudden rain inside high trails.";
            }

            setWeather({
              temp: Math.round(data.main.temp),
              condition: data.weather[0].description, // වඩාත් පැහැදිලි විස්තරයක් (light rain වගේ)
              alert: safetyAlert,
            });
          } else {
            // API එකෙන් එන වැරැද්ද බලාගැනීමට (උදා: Invalid API Key)
            setError(`API Error: ${data.message}`);
            fetchDefaultWeather();
          }
        } catch (err) {
          setError("Network error occurred.");
          fetchDefaultWeather();
        } finally {
          setLoading(false);
        }
      },
      (geoError) => {
        // 🔄 geoError මෙතනදී පාවිච්චි කර TypeScript warning එක නැති කලා
        console.warn("Geolocation warning:", geoError.message);
        setError("Location access denied. Showing Colombo weather.");
        fetchDefaultWeather();
      },
    );
  }, []);

  // 🏙️ Fallback: කොළඹ කාලගුණය පෙන්වීම (OpenWeather URL එකට අනුව සකසා ඇත)
  const fetchDefaultWeather = async () => {
    const API_KEY = "32411404acc205e21ca0d8b86eb22d7e";
    const API_URL = `https://openweathermap.org${API_KEY}&units=metric`;
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (response.ok) {
        setWeather({
          temp: Math.round(data.main.temp),
          condition: data.weather[0].description,
          alert: "Allow location access for real-time trail alerts.",
        });
      }
    } catch {
      setError("Error loading fallback weather.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="hidden md:flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md max-w-sm mt-6 animate-pulse">
        <div className="w-8 h-8 bg-zinc-800 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-2 bg-zinc-800 rounded w-1/3"></div>
          <div className="h-3 bg-zinc-800 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md max-w-sm mt-6 animate-[fadeIn_0.5s_ease-out]">
      <span className="text-3xl text-emerald-400">
        <FaCloudSunRain />
      </span>
      <div>
        <p className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest">
          Live Weather (SL)
        </p>
        <p className="text-white text-xs font-bold mt-0.5 capitalize">
          {weather
            ? `${weather.temp}°C · ${weather.condition}`
            : "Weather Unavailable"}
        </p>
        <p className="text-[11px] text-gray-400 font-light leading-snug mt-1">
          {weather ? weather.alert : error}
        </p>
      </div>
    </div>
  );
}
