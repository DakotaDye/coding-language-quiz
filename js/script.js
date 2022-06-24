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
        const experience = document.querySelector("input[name='experience']:checked").value;
        const intentions = document.querySelector("input[name= 'intentions']:checked").value;
        if (experience === "No experience" && intentions === "simple web development") {
            javaScript.removeAttribute("style");
            python.style.display = "none";
            ruby.style.display = "none";
        } else if (experience === "plenty of experience" && intentions === "I'm even cooler so full software engineer for me!");{
            python removeAttribute("style");
            javaScript.style.display = "none";
            ruby.style.display = "none";
        } else {
            ruby.removeAttribute("style");
            javaScript.style.display = "none";
            python.style.display = "none";
        };
        
    })
})