import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import Error from "./pages/Error.js";

function render(page){
    document.querySelector('#root').innerHTML = page;
}

const routes = {
    "/": () => Home(),
    "/login": () => Login(),
    "/profile": () => Profile()
}

document.addEventListener("DOMContentLoaded", (e)=>{
    const {pathname} = window.location;

    const renderTarget = routes[pathname];
    console.log(renderTarget)
    if(!renderTarget){
        render(Error())
    }

    render(renderTarget());
});
