import { useDispatch } from "react-redux";
import { useErrorToast, useSuccessToast } from "./useToast";
import { removeCredentials } from "../Redux/Features/usersAuthSlice";
import { useLogoutMutation } from "../Redux/Services/usersAuthApiSlice";

const useLogout = () => {
    const dispatch = useDispatch();
    const [logout] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            const response = await logout().unwrap();
            if (response.ok) {
                dispatch(removeCredentials());
                useSuccessToast({ msg: response.message });
            }
        } catch (err) {
            console.log(err.data.message);
            useErrorToast({ msg: err.data.message });
        }
    };

    return { logoutHandler };
};

export default useLogout;
