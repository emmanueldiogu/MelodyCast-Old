import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [todayForecast, setTodayForecast] = useState({});
  const [weatherImage, setWeatherImage] = useState([]);
  const [musicResult, setMusicResult] = useState([]);

  const getMusic = useCallback((description) => {
    fetch(
      `https://itunes.apple.com/search?term=${description}&media=musicVideo&limit=15`
    )
      .then(async (response) => {
        console.log(response);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data?.results);
        setMusicResult(data?.results);
      })
      .catch((e) => {
        alert(`Fetch Error: ${e.message}`);
        setIsLoading(false);
      });
  }, []);

  const getImage = useCallback((description) => {
    fetch(`https://api.pexels.com/v1/search?query=${description}`, {
      method: "GET",
      headers: {
        Authorization:
          "rMB4CuVVrlCIG353m7MCI8xRyobzznDc18E9itHfaYIuKo7qNJGQuVxB",
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
        return response.json();
      })
      .then((data) => setWeatherImage(data?.photos))
      .catch((e) => {
        alert(`Fetch Error: ${e.message}`);
        setIsLoading(false);
      });
  }, []);

  const submitSearch = useCallback(
    (queryString) => {
      setIsLoading(true);
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${queryString}&units=metric&appid=816ae27a3e61fc6dcee0eef8b22a0394`
      )
        .then(async (response) => {
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
          return response.json();
        })
        .then((data) => {
          // Update today's forecast
          setTodayForecast(data);
          getImage(data?.weather?.[0]?.main);
          getMusic(data?.weather?.[0]?.main);
          setIsLoading(false);
        })
        .catch((e) => {
          alert(`Fetch Error: ${e.message}`);
          setIsLoading(false);
        });
    },
    [getImage, getMusic]
  );

  useEffect(() => {
    submitSearch("Toronto");
  }, [submitSearch]);

  // Function to get props from child component
  const getSearchResult = useCallback(
    (data) => {
      submitSearch(data);
    },
    [submitSearch]
  );

  const values = useMemo(
    () => ({
      isLoading,
      todayForecast,
      getSearchResult,
      weatherImage,
      musicResult,
    }),
    [isLoading, todayForecast, getSearchResult, weatherImage, musicResult]
  );

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
