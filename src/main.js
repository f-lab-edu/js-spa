import router from "./router/router.js";

import homePage from "./pages/Home.js";
import profilePage from "./pages/Profile.js";
import loginPage from "./pages/Login.js";
import errorPage from "./pages/Error.js";

router.add("/", (root) => homePage(root));
router.add("/profile", (root) => profilePage(root));
router.add("/login", (root) => loginPage(root));
router.add("error", (root) => errorPage(root));

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  const path = window.location.pathname;
  router.render(path, root);
});

window.addEventListener("popstate", () => {
  const root = document.querySelector("#root");
  const path = window.location.pathname;
  router.render(path, root);
});
