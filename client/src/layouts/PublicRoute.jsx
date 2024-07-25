import { Navigate } from "react-router-dom";
import { useSearch } from "../providers/useSearch";

const PublicRoute = ({ children }) => {
  const { isAuth } = useSearch();

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
