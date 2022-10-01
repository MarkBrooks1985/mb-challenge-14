const editBlog = async (event) => {
  event.preventDefault();

  const id = document.querySelector("#disabled-text").value.trim();
  const title = document.querySelector("#title-entry").value.trim();
  const content = document.querySelector("#content-entry").value.trim();

  if (id && title && content) {
    if (response.ok) {
      const userData = await response.json();

      const user_id = userData.id;

      const putResponse = await fetch(`/api/blog/${blog_id}`, {
        method: "PUT",
        body: JSON.stringify({ id, title, content, blog_id }),
        headers: { "Content-Type": "application/json" },
      });

      if (putResponse.ok) {
        document.location.replace(`/blog/${blog_id}`);
      }
    }
  } else {
    alert("Must enter all values plus valid username");
  }
};

document.querySelector("#editBlogBtn").addEventListener("click", editBlog);
