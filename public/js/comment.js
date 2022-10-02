const commentButton = document.getElementById("addComment");

const commentFormHandler = async function (event) {
  event.preventDefault();

  const body = document.getElementById("commentBody").innerHTML;

  if (body) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        body: body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.reload();
  }
};

commentButton.addEventListener("submit", commentFormHandler);
