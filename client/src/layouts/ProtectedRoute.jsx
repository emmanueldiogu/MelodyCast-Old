import { Navigate } from "react-router-dom";
import { useSearch } from "../providers/useSearch";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useSearch();

  if (!isAuth) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;
