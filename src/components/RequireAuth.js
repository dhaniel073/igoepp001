import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ loginsession }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.loginsession?.find(loginsession => loginsession?.includes(loginsession))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;