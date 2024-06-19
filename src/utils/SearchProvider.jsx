import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [todayForecast, setTodayForecast] = useState({});
  const [weatherImage, setWeatherImage] = useState([]);

  const getMusic = useCallback((description) => {
    fetch(``);
  }, []);

  const getImage = useCallback((description) => {
    fetch(`https://api.pexels.com/v1/search?query=${description}`, {
      method: "GET",
      headers: {
        Authorization:
          "rMB4CuVVrlCIG353m7MCI8xRyobzznDc18E9itHfaYIuKo7qNJGQuVxB",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message);
          });
        }
        return response.json();
      })
      .then((data) => setWeatherImage(data?.photos))
      .catch((e) => alert(`Fetch Error: ${e.message}`));
  }, []);

  const submitSearch = useCallback(
    (queryString) => {
      setIsLoading(true);
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${queryString}&units=metric&appid=816ae27a3e61fc6dcee0eef8b22a0394`
      )
        .then((response) => {
          if (!response.ok) {
            return response.json().then((errorData) => {
              throw new Error(errorData.message);
            });
          }
          return response.json();
        })
        .then((data) => {
          // Update today's forecast
          setTodayForecast(data);
          getImage(data?.weather?.[0]?.main);
          getMusic(data?.weather?.[0]?.description);
          setIsLoading(false);
        })
        .catch((e) => alert(`Fetch Error: ${e.message}`));
    },
    [getImage]
  );

  useEffect(() => {
    submitSearch("Toronto");
  }, [submitSearch]);

  // Function to get props from child component
  const getSearchResult = useCallback((data) => {
    submitSearch(data);
  }, [submitSearch]);


  const values = useMemo(
    () => ({ isLoading, todayForecast, getSearchResult, weatherImage }),
    [isLoading, todayForecast, getSearchResult, weatherImage]
  );

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSearch = () => {
  if (!useContext(SearchContext))
    throw new Error("useSearch must be used within a SearchProvider");
  return useContext(SearchContext);
};

export default SearchProvider;
