async function loadUsers() {
    try {
        const response = await fetch("http://localhost:5000/users");
        const users = await response.json();

        const profilesDiv = document.getElementById("profiles");
        profilesDiv.innerHTML = ""; // Wyczyść przed dodaniem nowych userów

        // Pobierz polubione i odrzucone profile z localStorage
        let likedUsers = JSON.parse(localStorage.getItem('likedUsers')) || [];
        let dislikedUsers = JSON.parse(localStorage.getItem('dislikedUsers')) || [];

        users.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("user-profile");

            // Sprawdź, czy użytkownik został polubiony lub odrzucony
            const isLiked = likedUsers.includes(user.id);
            const isDisliked = dislikedUsers.includes(user.id);

            userDiv.innerHTML = `
                <h2>${user.name}, ${user.age} lat</h2>
                <p>${user.city}</p>
                <img src="${user.photo}" alt="${user.name}">
                
                <div class="profile-buttons">
                    <button class="like-button" onclick="likeUser(${user.id})" ${isLiked ? 'disabled' : ''}>Like</button>
                    <button class="dislike-button" onclick="dislikeUser(${user.id})" ${isDisliked ? 'disabled' : ''}>Dislike</button>
                </div>
            `;

            profilesDiv.appendChild(userDiv);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

// Funkcja do polubienia użytkownika
function likeUser(userId) {
    let likedUsers = JSON.parse(localStorage.getItem('likedUsers')) || [];
    if (!likedUsers.includes(userId)) {
        likedUsers.push(userId);
        localStorage.setItem('likedUsers', JSON.stringify(likedUsers));
    }
    loadUsers();
}

// Funkcja do odrzucenia użytkownika
function dislikeUser(userId) {
    let dislikedUsers = JSON.parse(localStorage.getItem('dislikedUsers')) || [];
    if (!dislikedUsers.includes(userId)) {
        dislikedUsers.push(userId);
        localStorage.setItem('dislikedUsers', JSON.stringify(dislikedUsers));
    }
    loadUsers();
}
