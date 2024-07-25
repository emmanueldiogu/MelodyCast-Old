import { Navigate } from "react-router-dom";
import { useSearch } from "../providers/useSearch";

const PublicRoute = ({ children }) => {
  const { currentUser } = useSearch();

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
