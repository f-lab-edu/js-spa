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

    if (path === "/profile" && !isLogin) {
      path = "/login";
      destination = routes[path];
    }
  }

  window.history.pushState(null, null, path);
  destination(root);

  const links = root.querySelectorAll("nav li");
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

  window.addEventListener("error", (e) => {
    console.error(e);
    const errorBoundary = `
      <div id="error-boundary" class="fixed bottom-4 left-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg transition-opacity duration-300 hover:opacity-75" role="alert">
        <div class="flex justify-between items-center">
          <div>
            <strong class="font-bold">오류 발생!</strong>
            <span class="block sm:inline ml-1">${
              e.message || "알 수 없는 오류가 발생했습니다."
            }</span>
          </div>
        </div>
      </div>
    `;

    root.querySelector("#error-boundary")?.remove();
    root.innerHTML += errorBoundary;
  });
};

const add = (path, pageComponent) => {
  routes[path] = pageComponent;
};

export default {
  add,
  render,
};
