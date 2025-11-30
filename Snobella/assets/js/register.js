
(function () {
  const form = document.querySelector("form");

  function showToast(message, bg = "#d00000") {
    if (window.Toastify) {
      Toastify({
        text: message,
        duration: 2000,
        close: true,
        style: {
          background: bg,
        },
      }).showToast();
    } else {
      alert(message);
    }
  }

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const nameRegex = /^[A-Za-z]{3,}$/;
    const usernameRegex = /^[A-Za-z]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!name || !username || !email || !password) {
      return showToast("Bütün xanaları doldurun!");
    }

    if (!nameRegex.test(name)) {
      return showToast("Ad minimum 3 hərf olmalıdır və rəqəm simvol olmaz!");
    }

    if (!usernameRegex.test(username)) {
      return showToast(
        "Username minimum 3 hərf olmalıdır və rəqəm simvol olmaz!"
      );
    }

    if (!emailRegex.test(email)) {
      return showToast("Email düzgün formatda deyil!");
    }

    if (!passRegex.test(password)) {
      return showToast(
        "Şifrə min 8 simvol, 1 böyük, 1 kiçik hərf və 1 rəqəm olmalıdır!"
      );
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const duplicateUser = users.find(
      (u) =>
        u.username.toLowerCase() === username.toLowerCase() ||
        u.email.toLowerCase() === email.toLowerCase()
    );

    if (duplicateUser) {
      return showToast("Username və ya Email artıq istifadə olunub!");
    }

    const newUser = {
      id: Date.now(),
      name,
      username,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    showToast("Qeydiyyat uğurludur!", "#2a9d8f");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 800);
  });
})();
