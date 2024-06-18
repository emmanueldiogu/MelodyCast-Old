import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [todayForecast, setTodayForecast] = useState({});

  // Function to get props from child component
  const getSearchResult = useCallback((data) => {
    submitSearch(data);
  }, []);

  const submitSearch = (queryString) => {
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
        console.log(data);
      })
      .catch((e) => alert(`Fetch Error: ${e.message}`));

    // TODO: Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // TODO: Remove this line when implementing actual API call
  };

  const values = useMemo(
    () => ({ isLoading, todayForecast, getSearchResult }),
    [isLoading, todayForecast, getSearchResult]
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
