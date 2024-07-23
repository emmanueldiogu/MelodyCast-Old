import { useContext } from "react";
import { SearchContext } from "./SearchProvider";

export const useSearch = () => {
    if (!useContext(SearchContext))
        throw new Error("useSearch must be used within a SearchProvider");
    return useContext(SearchContext);
};
