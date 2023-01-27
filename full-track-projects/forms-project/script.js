const form = document.querySelector("form")
const userPass = document.querySelector("#password")
const confirmPass = document.querySelector("#confirm-password")
const submitBtn = document.querySelector("button")





submitBtn.addEventListener("click", ()=>{
    if (userPass.value === confirmPass.value) {
        form.setAttribute("method", "post")
        submitBtn.setAttribute("type", "submit")
    } else {
        alert("Passwords don't match")
    }
})


