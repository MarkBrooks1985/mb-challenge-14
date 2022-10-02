const editButton = document.getElementById("editBlog");
const blogId = document.getElementById("blogId");

const editBlog = async (event) => {
  event.preventDefault();

  const title = document.getElementById("blogTitle").innerHTML;
  const body = document.getElementById("blogBody").innerHTML;
  console.log(blogId, title, body);
  if (title && body) {
    const putResponse = await fetch(`/api/blog/${blogId}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });

    if (putResponse.ok) {
      document.location.replace(`/blog/${blogId}`);
    }
  } else {
    alert("Must enter all values");
  }
};

editButton.addEventListener("click", editBlog);
