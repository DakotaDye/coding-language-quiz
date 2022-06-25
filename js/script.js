function hideResults(){
    let javaScript = document.getElementById("javaScript");
    let python = document.getElementById("python");
    let ruby = document.getElementById("ruby");
    let reset = document.getElementById("reset");
    reset.style.display= "none";
    javaScript.style.display = "none";
    python.style.display = "none";
    ruby.style.display = "none";

 window.addEventListener("load", function () {
         hideResults();
         let form = document.querySelector("quiz");
         form.addEventListener("submit", function (event) {
             event.preventDefault();
             const experience = document.querySelector("input[name='experience']:checked").value;
             const intentions = document.querySelector("input[name= 'intentions']:checked").value;
             if (experience === "No experience" && intentions === "simple web development") {
                 javaScript.removeAttribute("style");
                 python.style.display = "none";
                 ruby.style.display = "none";
             } else if (experience === "plenty of experience" && intentions === "I'm even cooler so full software engineer for me!") {
                 python.removeAttribute("style");
                 javaScript.style.display = "none";
                 ruby.style.display = "none";
             } else {
                 ruby.removeAttribute("style");
                 javaScript.style.display = "none";
                 python.style.display = "none";
             };
             event.preventDefault();
             reset.removeAttribute("style");
             let survey = document.getElementById("survey");
             survey.style.display = "none";

         });
         let experience = document.getElementById("experience");
         let intentions = document.getElementById("intentions");
         let applications = document.getElementById("applications");
         let interest = document.getElementById("interest");
         let syntax = document.getElementById("syntax");
         resetBtn.addEventListener("click", function () {
             reset.style.display = "none";
             ruby.style.display = "none";
             javaScript.style.display = "none";
             python.style.display = "none";
             experience.value = null;
             intentions.value = null;
             applications.value = null;
             interest.value = null;
             syntax.value = null;
             survey.removeAttribute("style");
         });
     });
};    