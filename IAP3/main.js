// Get blog posts from localStorage and render them
document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-posts");

  let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  if (posts.length >=0) {
    posts.slice().reverse().forEach(post => {
      const postEl = document.createElement("div");
      postEl.classList.add("blog-preview");
      postEl.innerHTML = `
        <h3>${post.title}</h3>
        <p><em>${post.date}</em></p>
        <p>${post.content.substring(0, 100)}...</p>
      `;
      blogContainer.appendChild(postEl);
    });
}
    else{
        
            blogContainer.innerHTML = "<p>No blog posts yet.</p>";
          
    }
  
});
