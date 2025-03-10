const loadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => showUser(data));
};

const showUser = (users) => {
    // for(let i=0; i<users.length; i++){
    //     const user = users[i]
    //     console.log(user)
    // }


    const userContainer = document.getElementById("customers");
    for(const user of users){
        console.log(user.name);
        const li = document.createElement("li");
        li.innerText = user.name;
        userContainer.appendChild(li);
    }
}