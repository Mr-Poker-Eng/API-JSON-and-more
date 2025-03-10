const handlePost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      displayPost(data);
    });
};


const displayPost = (posts) => {
    const postContainer = document.getElementById("postContainer");
    for(const post of posts){
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
        <h1>${post.userId}</h1>
        <h1>${post.id}</h1>
        <p>${post.title}</p>
        <p>${post.body}</p>
        <button>detail</button>
        `;
        postContainer.appendChild(div)
    }
}

const handleUpdate = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

const handleCreate = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}