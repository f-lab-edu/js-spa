import Component from "../utils/Component.js";
import router from "../router/router.js"
import {checkLogin} from "../utils/utils.js";

export default class Login extends Component{

    login(event){
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        localStorage.setItem("user", JSON.stringify({username, email: "", bio: ""}))
        window.history.pushState({}, null, "/")
        router();
    }

    render() {
        if(checkLogin()) {
            window.history.pushState({}, null, "/");
            router();
        }else{
            super.render();
        }
    }

    template() {
        return `
        <main class="bg-gray-100 flex items-center justify-center min-h-screen">
          <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
            <form id="login-form">
              <div class="mb-4">
                <input type="text" id="username" name="username" placeholder="이메일 또는 전화번호" class="w-full p-2 border rounded">
              </div>
              <div class="mb-6">
                <input type="password" id="password" name="password" placeholder="비밀번호" class="w-full p-2 border rounded">
              </div>
              <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
            </form>
            <div class="mt-4 text-center">
              <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
            </div>
            <hr class="my-6">
            <div class="text-center">
              <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
            </div>
          </div>
        </main>
        `;
    }

    setEvent() {
        this.target.querySelector("#login-form").addEventListener("submit", this.login)
    }

}