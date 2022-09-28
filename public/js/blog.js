const handleDeleteBlog = async (event) => {
  event.preventDefault();

  const id = document
    .querySelector("[data-blogID]")
    .getAttribute("data-blogID");

  const response = await fetch(`/api/blog/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    //if successful, redirect browser to home page
    document.location.replace("/");
    alert("Blog successfully deleted!");
  }
};

document
  .querySelector("#deleteBlog")
  .addEventListener("click", handleDeleteBlog);
