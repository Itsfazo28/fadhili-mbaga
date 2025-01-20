document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Allow any username and password to loging
            if (username&& password) {
                localStorage.setItem("loggedIn", "true");
                window.location.href = "index.html";
            } else {
                alert("Invalid credentials");
            }
        });
    }

    const newsContainer = document.getElementById("news-container");
    if (newsContainer) {
        // Check if user is logged in
        if (localStorage.getItem("loggedIn") === "true") {
            // Fetch and display news
            fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY")
                .then(response => response.json())
                .then(data => {
                    data.articles.forEach(article => {
                        const newsItem = document.createElement("div");
                        newsItem.innerHTML = `<h2>${article.title}</h2><p>${article.description}</p>`;
                        newsContainer.appendChild(newsItem);
                    });
                });
        } else {
            window.location.href = "login.html";
        }
    }
});