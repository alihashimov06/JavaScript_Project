document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let usernameSpan = document.querySelector(".username");
    let userLink = document.querySelector(".user-link");
    let logoutBtn = document.querySelector(".logout-btn");

function UpdateUserStatus() {
    let loggedUser = users.find(user => user.isLogined === true);

    if (loggedUser) {
        usernameSpan.textContent = loggedUser.userName;
        userLink.href = "#";

        logoutBtn.classList.add("d-none");
    } 
    else {
        usernameSpan.textContent = "Sign up";
        userLink.href = "register.html";

        logoutBtn.classList.add("d-none");
    }
}


    userLink.addEventListener("click", () => {
        let loggedUser = users.find(user => user.isLogined === true);
        if (loggedUser) {
            logoutBtn.classList.toggle("d-none");
        }
    });

    logoutBtn.addEventListener("click", () => {
        let loggedUser = users.find(user => user.isLogined === true);

        if (loggedUser) {
            loggedUser.isLogined = false;
            localStorage.setItem("users", JSON.stringify(users));
            UpdateUserStatus();
        }
    });

    UpdateUserStatus();
});
