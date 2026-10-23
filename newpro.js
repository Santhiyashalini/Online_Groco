let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let header=document.querySelector('.header-2');
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick=()=>{
    loginForm.classList.remove('active');
}

window.onscroll=()=>{
   menu.classList.remove("fa-times");
   navbar.classList.remove('active');
   if(window.scrollY > 150){
    header.classList.add('active');
   }
   else{
    header.classList.remove('active');
   }
}
document.getElementById("postmethod").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('usernumber').value;
    const subject = document.getElementById('subject').value;
    const textarea = document.getElementById('textarea').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            number: number,
            subject: subject,
            textarea: textarea
        })
    })
    .then(response => response.json())
    .then(resolved => {
        console.log(resolved);  // Previously displayed the submitted data inside "postmethod"  
    })
    .catch(error => console.log(error));   // Clears the input fields after submission
    document.getElementById('username').value = "";
    document.getElementById('email').value = "";
    document.getElementById('usernumber').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('textarea').value = "";
  });
document.getElementById("srhbtn").addEventListener("click", function() {
    let searchInput = document.getElementById("search-box").value.toLowerCase().trim();
    let categories = document.querySelectorAll(".col");

    let found = false;

    categories.forEach(category => {
        let categoryName = category.querySelector("h3").innerText.toLowerCase().trim();
        let categoryImg = category.querySelector("img");

        if (categoryName.includes(searchInput)) {
            category.scrollIntoView({ behavior: "smooth", block: "center" });

            // Apply blinking effect
            categoryImg.classList.add("blink-effect");

            // Remove blinking effect after a few seconds
            setTimeout(() => {
                categoryImg.classList.remove("blink-effect");
            }, 2000);

            found = true;
        }
    });

    if (!found) {
        alert(" Sry Products are not found!");
    }
});
function formsubmit() {
    event.preventDefault(); // Prevent the default form submission
    document.getElementById("form2").reset(); // Clears all input fields
}


