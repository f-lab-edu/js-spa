import Home from "../pages/Home.js";
import Login from "../pages/Login.js";
import Profile from "../pages/Profile.js";
import Error from "../pages/Error.js";
import {checkLogin} from "../utils/utils.js";

const routes = {
    "/": (target) => new Home(target),
    "/login": (target) => new Login(target),
    "/profile": (target) => new Profile(target),
    "/error": (target) => new Error(target),
}

export default function router(){
    const {pathname} = window.location;
    const rootElement = document.getElementById("root")

    const PageClass = routes[pathname] || routes["/error"];
    PageClass(rootElement);
}