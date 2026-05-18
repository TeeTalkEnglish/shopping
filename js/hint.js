const allHints = document.querySelectorAll("details");

allHints.forEach(hint => {

    hint.addEventListener("toggle", () => {

        if(hint.open){
            console.log("Hint opened");
        }

    });

});