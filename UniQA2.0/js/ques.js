// AskQuestion

const qForm = document.querySelector(".quesForm");
const title = document.querySelector(".v3_4836");
const category = document.querySelector(".v3_4837");
const tags = document.querySelector(".v3_4838");
const quesBody = document.querySelector(".v3_4843");
const qSubmit = document.querySelector(".v3_4844");

qSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    db.collection('Questions').doc().set({
        Title: title.value,
        Category: category.value,
        Tags: tags.value,
        Body: quesBody.value,
    }).then(() => {
        window.location.href= "C:/Users/nishk/OneDrive/Desktop/uniqa/UniQA2.0/Home/index.html";
    })
});