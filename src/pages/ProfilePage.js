import { Footer } from "../components/template/Footer.js";
import { Header } from "../components/template/Header.js";
import router from "../router/router.js";

const ProfilePage = (root) => {
  const { username, email, bio } = JSON.parse(localStorage.getItem("user"));

  root.innerHTML = `
      <div class="bg-gray-100 min-h-screen flex justify-center">
          <div class="max-w-md w-full">
            ${Header()}
            <main class="p-4">
              <div class="bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">내 프로필</h2>
                <form id="profile-form">
                  <div class="mb-4">
                    <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
                    <input type="text" id="username" name="username" value="${username}" class="w-full p-2 border rounded">
                  </div>
                  <div class="mb-4">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
                    <input type="email" id="email" name="email" value="${email}" class="w-full p-2 border rounded">
                  </div>
                  <div class="mb-6">
                    <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
                    <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded">${bio}</textarea>
                  </div>
                  <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">프로필 업데이트</button>
                </form>
              </div>
            </main>
            ${Footer()}
          </div>
      </div>
  `;

  const profileForm = root.querySelector("#profile-form");

  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // 아래와 같이 작성하면 브라우저에서는 오류가 안 나는데 테스트에서 오류남
    // const username = e.target.username.value;
    // const email = e.target.email.value;
    // const bio = e.target.bio.value;
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);
    localStorage.setItem("user", JSON.stringify(user));
    router.render("/profile", root);
  });
};

export default ProfilePage;
