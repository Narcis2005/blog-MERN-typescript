import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUserByToken } from "../redux/slices/auth";

const CheckLoginStatus = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserByToken());
    }, [pathname]);

    return null;
};
export default CheckLoginStatus;
