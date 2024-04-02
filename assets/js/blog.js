const blogPosts = document.querySelector("#blogposts")
const storedPosts = JSON.parse(localStorage.getItem('sumbitPost'))

// I need to append the stored post to the boxes
const post = document.createElement('p');
post.textContent = storedPosts.post;
console.log(storedPosts);

blogPosts.appendChild(post)