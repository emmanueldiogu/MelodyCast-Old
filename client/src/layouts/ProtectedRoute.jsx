import { Navigate } from "react-router-dom";
import { useSearch } from "../providers/useSearch";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useSearch();

  if (!currentUser) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;
