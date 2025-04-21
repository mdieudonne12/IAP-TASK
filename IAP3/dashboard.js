document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("blog-form");
    const titleInput = document.getElementById("title");
    const dateInput = document.getElementById("date");
    const contentInput = document.getElementById("content");
    const postIdInput = document.getElementById("post-id");
    const blogList = document.getElementById("blog-list");
  
    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  
    // Render blog posts
    function renderPosts() {
      blogList.innerHTML = "";
      if (posts.length === 0) {
        blogList.innerHTML = "<p>No blog posts yet.</p>";
        return;
      }
  
      posts.forEach((post, index) => {
        const postEl = document.createElement("div");
        postEl.classList.add("blog-preview");
        postEl.innerHTML = `
          <h3>${post.title}</h3>
          <p><em>${post.date}</em></p>
          <p>${post.content.substring(0, 100)}...</p>
          <button onclick="editPost(${index})">Edit</button>
          <button onclick="deletePost(${index})" style="margin-left:10px;color:red;">Delete</button>
        `;
        blogList.appendChild(postEl);
      });
    }
  
    // Save blog post
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const newPost = {
        title: titleInput.value,
        date: dateInput.value,
        content: contentInput.value
      };
  
      const postId = postIdInput.value;
  
      if (postId) {
        // Editing existing post
        posts[postId] = newPost;
      } else {
        // Adding new post
        posts.push(newPost);
      }
  
      localStorage.setItem("blogPosts", JSON.stringify(posts));
      form.reset();
      postIdInput.value = "";
      renderPosts();
    });
  
    window.editPost = function(index) {
        const post = posts[index];
        titleInput.value = post.title;
        dateInput.value = post.date;
        contentInput.value = post.content;
        postIdInput.value = index;
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
      
      window.deletePost = function(index) {
        if (confirm("Are you sure you want to delete this post?")) {
          posts.splice(index, 1);
          localStorage.setItem("blogPosts", JSON.stringify(posts));
          renderPosts();
        }
      };
      
  
    // Initial render
    renderPosts();
  });
  