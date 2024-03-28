const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const blogPosts = document.querySelector("#blogposts")
const storedPosts = JSON.stringify(localStorage.getItem('sumbitPost'))
// I need to append the stored post to the boxes