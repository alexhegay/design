let button = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
button.onclick = function(){
    button.classList.toggle("hamburger_active");
    nav.classList.toggle("nav_active");
}
let iframe = document.querySelector("iframe");//la variable dans laquelle iframe est entre
let wrapper = document.querySelector(".wrapper");//la variable dans laquelle wrapper est entre
iframe.onload = function(){//lorsque quelque chose est charge dans inframe la fonction est executee
    wrapper.classList.add("wrapper_active");//on ajouteun class a wraper pour qu'il apparesse
    setTimeout(() => {
        document.forms.massage.reset();
        wrapper.classList.remove("wrapper_active");//on ajouteun class a wraper pour qu'il apparesse
    }, 3000);
    
}