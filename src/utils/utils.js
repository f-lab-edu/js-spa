import router from "../router/router.js";

export function checkLogin(){
    return localStorage.getItem("user") !== null;
}

export function logout(){
    localStorage.removeItem("user");
    window.history.pushState({}, null, "/login");
    router();
}