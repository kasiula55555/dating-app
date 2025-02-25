async function loadUsers() {
    try{
    const response = await  fetch("http://localhost:5000/users");
    const users = await response.json()

    const profilesDiv = document.getElementById("profiles");
    profilesDiv.innerHTML="";//czyczesnie zanim dodam nowych userow

    users.forEach(user=>{
        const userDiv = document.createElement("div");
        userDiv.innerHTML=`

        <h2>${user.name},${user.age} lat</h2>
        <p>${user.city}</p>
            <img src="${user.photo}" alt="${user.name}">
        `;
        profilesDiv.appendChild(userDiv);
    })
}catch(erroe){
    comsole.error("Error",error);
}
}