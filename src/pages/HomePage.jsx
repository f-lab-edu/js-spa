/** @jsx createVNode */
import { createVNode } from "../lib";
import Header from "../components/templates/Header";
import Navigation from "../components/templates/Navigation";
import Footer from "../components/templates/Footer";

import PostForm from "../components/posts/PostForm";
import Post from "../components/posts/Post";

import { globalStore } from "../stores";

export const HomePage = () => {
  const { loggedIn, posts } = globalStore.getState();
  return (
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        <Header />
        <Navigation loggedIn={loggedIn} />
        <main class="p-4">
          {loggedIn && <PostForm />}
          <div id="posts-container" class="space-y-4">
            {posts.map((post) => (
              <Post post={post} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
