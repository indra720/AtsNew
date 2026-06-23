import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ModalOnlyForHome = ({ setOpenModal }) => {
    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname !== "/")
            return;
        const timer = setTimeout(() => {
            setOpenModal(true);
        }, 8000);
        return () => clearTimeout(timer);
    }, [pathname]);
    return null;
};
export default ModalOnlyForHome;
