(function () {
  const authLink = document.getElementById("authUser");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  if (!authLink) return;

  if (loggedUser) {
    authLink.textContent = loggedUser.username;
    authLink.href = "#";

    authLink.addEventListener("click", () => {
      localStorage.removeItem("loggedUser");
      window.location.reload();
    });
  } else {
    authLink.textContent = "Sign Up";
    authLink.href = "register.html";
  }
})();
