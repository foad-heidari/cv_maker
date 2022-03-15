import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppState } from "../redux/Store";

interface propsType {
  children: React.ReactNode
}

function RequireAuth(props: propsType) {
  const user = useSelector(
    (state: AppState) => state.user.user
  );

  return user ? <>{props.children}</> : <Navigate to="/login" replace />;
}

export default RequireAuth;