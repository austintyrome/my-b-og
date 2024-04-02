const blogForm = document.querySelector("#blog-form");
const username = document.querySelector("#username");
const title = document.querySelector("#title");
const post = document.querySelector("#post");

blogForm.addEventListener("submit", function (event) {

    event.preventDefault()
    const submitPost = {
        username: username.value,
        title: title.value,
        post: post.value.trim(),
    };
    
    localStorage.setItem('sumbitPost', JSON.stringify(submitPost));
    
    window.location.href = "blog.html";
});
