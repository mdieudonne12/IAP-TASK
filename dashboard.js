document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("blog-form");
    const titleInput = document.getElementById("title");
    const dateInput = document.getElementById("date");
    const contentInput = document.getElementById("content");
    const postIdInput = document.getElementById("post-id");
    const blogList = document.getElementById("blog-list");
  
    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  
    function savePosts() {
      localStorage.setItem("blogPosts", JSON.stringify(posts));
    }
  
    function renderPosts() {
      blogList.innerHTML = "";
  
      if (posts.length === 0) {
        blogList.innerHTML = "<adress style='color:white;'>No blog posts yet.</adress>";
        return;
      }
  
      posts.forEach((post, index) => {
        const div = document.createElement("div");
        div.className = "blog-preview";
        div.innerHTML = `
          <h3>${post.title}</h3><br>
          
          <p>${post.date}</p><br>
          
          <p>${post.content.substring(0, 100)}...</p>
          <button onclick="editPost(${index})">✏️ Edit</button>
          <button onclick="deletePost(${index})" style="background-color:red;">🗑️ Delete</button>
        `;
        blogList.appendChild(div);
      });
    }
  
    // Submit form
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const newPost = {
        title: titleInput.value,
        date: dateInput.value,
        content: contentInput.value
      };
  
      const id = postIdInput.value;
  
      if (id) {
        posts[id] = newPost;
      } else {
        posts.push(newPost);
      }
  
      savePosts();
      renderPosts();
      form.reset();
      postIdInput.value = "";
    });
  
    // Attach edit/delete globally
    window.editPost = (index) => {
      const post = posts[index];
      titleInput.value = post.title;
      dateInput.value = post.date;
      contentInput.value = post.content;
      postIdInput.value = index;
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    window.deletePost = (index) => {
      if (confirm("Are you sure you want to delete this post?")) {
        posts.splice(index, 1);
        savePosts();
        renderPosts();
      }
    };
  
    // Initial render
    renderPosts();
  });
  