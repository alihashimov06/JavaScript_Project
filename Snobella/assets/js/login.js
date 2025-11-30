
(function () {
  const form = document.querySelector("form");

  function showToast(message, bg = "#d00000") {
    Toastify({
      text: message,
      duration: 2000,
      close: true,
      style: {
        background: bg,
      },
    }).showToast();
  }

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      return showToast("Xanaları doldurun!");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) =>
        u.username.toLowerCase() === username.toLowerCase() &&
        u.password === password
    );

    if (!foundUser) {
      return showToast("Username və ya şifrə yanlışdır!");
    }

    localStorage.setItem("loggedUser", JSON.stringify(foundUser));

    showToast("Giriş uğurludur!", "#2a9d8f");

    setTimeout(() => {
      window.location.href = "index.html"; 
    }, 800);
  });
})();
