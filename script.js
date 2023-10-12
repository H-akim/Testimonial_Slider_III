var user_texts = document.getElementsByClassName("user_text");
var user_pics = document.getElementsByClassName("user_pic");

function showf(){
    for(user_pic of user_pics){
        user_pic.classList.remove("active_pic");
    }
    for(user_text of user_texts){
        user_text.classList.remove("active_text");
    }
    let i  = Array.from(user_pics).indexOf(event.target);
    user_pics[i].classList.add("active_pic");
    user_texts[i].classList.add("active_text");
}