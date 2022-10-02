const deleteButton = document.getElementById("deleteBlog");
const blogId = document.getElementById("datePosted").dataset.blogid;
const handleDeleteBlog = async (event) => {
  event.preventDefault();

  const id = document
    .querySelector("[data-blogID]")
    .getAttribute("data-blogID");
  if (id) {
    const delResponse = await fetch(`/api/blog/${blogId}`, {
      method: "DELETE",
    });

    if (delResponse.ok) {
      //if successful, redirect browser to home page
      document.location.replace("/");
      alert("Blog successfully deleted!");
    }
  }
};

deleteButton.addEventListener("click", handleDeleteBlog);
