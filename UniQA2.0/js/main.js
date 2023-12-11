// Sign Up

const signUp = document.querySelector(".SignUpForm")
const submit = document.querySelector(".v3_3958");
const username = document.querySelector(".Name");
const email = document.querySelector(".Email");
const pass = document.querySelector(".Password1");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    db.collection('User').doc().set({
        Username: username.value,
        Email: email.value,
        Password: pass.value,
    }).then(() => {
        window.location.href= "C:/Users/nishk/OneDrive/Desktop/uniqa/UniQA2.0/Home/index.html";
    })
});

