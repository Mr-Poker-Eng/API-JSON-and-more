// const handleUser = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch(error => console.log("the error is: ", error))
// };

// handleUser();

// const num1 = 10;
// const num2 = 20;
// const result = num1 + num2;

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log(result);
// console.log("munim");

const handleUser2 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } 
  catch {
    console.log('there was an error');
  }
};

handleUser2();
