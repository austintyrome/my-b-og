const blogForm = document.querySelector("#blog-form")
blogForm.addEventListener("submit",function(event){
    event.preventDefault()
    const username = document.querySelector("#username").value
    const title = document.querySelector("#title").value
    const post = document.querySelector("#post").value
    console.log(username, title, post)
})