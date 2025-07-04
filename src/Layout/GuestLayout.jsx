import { Outlet } from "react-router-dom";
import Header from "../Components/Header.jsx";

export default function GuestLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}