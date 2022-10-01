// need to do new blog script
const newBlogHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#new-title").value.trim();
  const body = document.querySelector("#body-entry").value.trim();
  // const user = document.querySelector("#user-log").value.trim();

  if (title && body) {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log(response);

      document.location.replace("/");
      alert("New Blog Created!");
    }
  } else {
    alert("Must input title, body, and valid user!");
  }
};

document.querySelector("#newFormBtn").addEventListener("click", newBlogHandler);
