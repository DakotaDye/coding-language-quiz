function hideResults(){
    let javaScript = document.getElementById("javaScript");
    let python = document.getElementById("python");
    let ruby = document.getElementById("ruby");
    let reset = document.getElementById("reset");
    reset.style.display = "none";
    javaScript.style.display = "none";
    python.style.display = "none";
    ruby.style.display = "none";
}
window.addEventListener("load", function(){
    hideResults();
    let form = document.querySelector("quiz")
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const 
    })
})