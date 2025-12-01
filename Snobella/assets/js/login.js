document.addEventListener("DOMContentLoaded", () => {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let form = document.querySelector("form");

  let username = document.querySelector("#username");
  let password = document.querySelector("#password");

  form.addEventListener("submit", Login);

  function Login(e) {
    e.preventDefault();

    let existUser = users.find(
      (user) =>
        (user.userName == username.value || user.email == username.value) &&
        user.password == password.value
    );

    if (existUser) {
      existUser.isLogined = true;
      localStorage.setItem("users", JSON.stringify(users));
      sweetToast("User login successfully!", "success");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1250);
    } else {
      sweetToast("Invalid username or password!", "error");
    }
  }
});

function sweetToast(message, type = "success") {
  let colors = {
    success: "#ffffffff",
    error: "#e74c3c",
    info: "#caff0cff",
  };

  Toastify({
    text: message,
    duration: 1250,
    gravity: "top",
    position: "right",
    close: true,
    stopOnFocus: true,
    escapeMarkup: false,
    style: {
      color: "#333",
      borderRadius: "14px",
      padding: "14px 22px",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.18)",
      borderLeft: `6px solid ${colors[type]}`,
      fontSize: "15px",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      animation: "slideIn .4s ease",
    },
    offset: {
      x: 20,
      y: 20,
    },
  }).showToast();
}
