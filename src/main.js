import router from "./router/router.js";

import HomePage from "./pages/HomePage.js";
import ProfilePage from "./pages/ProfilePage.js";
import LoginPage from "./pages/LoginPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";

router.add("/", (root) => HomePage(root));
router.add("/profile", (root) => ProfilePage(root));
router.add("/login", (root) => LoginPage(root));
router.add("error", (root) => NotFoundPage(root));

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
