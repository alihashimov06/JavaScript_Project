document.addEventListener("DOMContentLoaded", () => {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let form = document.querySelector("form");

  let name = document.querySelector("#name");
  let userName = document.querySelector("#username");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  form.addEventListener("submit", Register);

  function Register(e) {
    e.preventDefault();

    if (password.value.length < 6) {
      sweetToast("Password must be at least 6 characters!", "error");
      return;
    }

    let existUser = users.some(
      (user) => user.userName === userName.value || user.email === email.value
    );

    if (existUser) {
      sweetToast("This username or email already exists!", "error");
      return;
    }

    let newUser = {
      name: name.value,
      userName: userName.value,
      email: email.value,
      password: password.value,
      isLogined: false,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    sweetToast("Registration successful!", "success");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1250);
  }
});

function sweetToast(message, type = "success") {
  let colors = {
    success: "#ffffffff",
    error: "#ff0000ff",
    info: "#e0f000ff",
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
      background: "#ffffff",
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
