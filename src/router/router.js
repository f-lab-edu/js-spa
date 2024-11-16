const routes = {};

const checkLogin = () => {
  return !!localStorage.getItem("user");
};

const render = (path, root) => {
  let destination = routes[path];

  if (!destination) {
    destination = routes["error"];
  } else {
    const isLogin = checkLogin();

    if (path === "/login" && isLogin) {
      path = "/";
      destination = routes[path];
    }

    if (path !== "/login" && !isLogin) {
      path = "/login";
      destination = routes[path];
    }
  }

  window.history.pushState(null, null, path);
  destination(root);

  const links = root.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const path = e.target.pathname;
      if (path === "/login") {
        localStorage.removeItem("user");
      }
      render(path, root);
    });
  });
};

const add = (path, pageComponent) => {
  routes[path] = pageComponent;
};

export default {
  add,
  render,
};
