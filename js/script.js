$(() => {
    console.log(ready!);
    $("form#whichLanguage").submit(function (event) {
        event.preventDefault();

        const experience = $("select#experience").val();
        const intentions = $("select#intentions").val();
        const applications = $("select#applications").val();
        const interest = $("select#interest").val();
        const syntax = $("select#syntax").val();
        let language;

        if (experience === "none this is new to me") {
            language = "javascript";

        }
        else if (intentions === "I'm even cooler full sofware engineer for me!") {
            language = "ruby";

        }
        else if (applications === "Front-end for me please!" && syntax === "A bit but I'm good at following") {
            language = "javascript";

        }
        else if (interest === "NO HTML is the devil!!") {
            language = "python";

        }
        else {
            language = "ruby";


            $("#language").text(language);
            $("#yourMatch").show();
            $("#whichLanguage").show();
        };
    });
})