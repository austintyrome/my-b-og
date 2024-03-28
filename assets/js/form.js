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
});

// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission
    
//     // Get the input value
//     const inputValue = document.getElementById('inputText').value;
    
//     // Redirect to a new page (replace 'newpage.html' with your desired page)
//     window.location.href = './assets/blog.html';

//     // Alternatively, you can update content dynamically on the same page
//     // Example: document.getElementById('content').innerText = 'Submitted: ' + inputValue;
// });