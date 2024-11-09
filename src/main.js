import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import Error from "./pages/Error.js";

function render(page){
    document.querySelector('#root').innerHTML = page;
}

function login(e){
    e.preventDefault();
    const username = e.target.querySelector("input[type=text]").value;
    const password = e.target.querySelector("input[type=password]").value;

    if(!username || !password){
        return;
    }

    localStorage.setItem("isLogin", true);
    window.history.pushState({}, null, "/")
    render(Home())
}

function checkLogin(){
    return localStorage.getItem("isLogin") === "true";
}

function logout(){
    localStorage.setItem("isLogin", false);
    window.history.pushState({}, null, "/login")
    render(Login())
}

const routes = {
    "/": () => {
        const isLogin = checkLogin();
        if(isLogin){
            render(Home())
            document.querySelector("#logout-btn").addEventListener("click", logout)
        }else{
            window.history.pushState({}, null, "/login")
            render(Login())
        }

    },
    "/login": () => {
        render(Login())
        document.getElementById("login-form").addEventListener("submit", login)
    },
    "/profile": () => {
        const isLogin = checkLogin();
        if(isLogin){
            render(Profile())
            document.querySelector("#logout-btn").addEventListener("click", logout)
        }else{
            window.history.pushState({}, null, "/login")
            render(Login())
        }
    }
}

function router(){
    const {pathname} = window.location;

    const renderedPage = routes[pathname];
    if(!renderedPage){
        render(Error())
        return;
    }

    renderedPage();
}

document.addEventListener("DOMContentLoaded", router);
window.addEventListener("popstate", router)
