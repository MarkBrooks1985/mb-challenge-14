// need to do new blog script
const newBlogHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#new-title").value.trim();
  const body = document.querySelector("#body-entry").value.trim();
  // const user = document.querySelector("#user-log").value.trim();

  if (title && body) {
    await fetch("/api/blog/newblog", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });
    document.location.replace("/dashboard");
  }
};
document.querySelector("#newFormBtn").addEventListener("click", newBlogHandler);
