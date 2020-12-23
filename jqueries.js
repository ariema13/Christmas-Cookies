function showDiv(select){
    document.getElementById('front-image').style.display = "none";
    if(select.value=='crinkles'){
        document.getElementById('crinkles').style.display = "block";
        document.getElementById('spritz').style.display = "none";
        document.getElementById('peanut-butter-kisses').style.display = "none";

    } else if(select.value=='spritz'){
        document.getElementById('crinkles').style.display = "none";
        document.getElementById('spritz').style.display = "block";
        document.getElementById('peanut-butter-kisses').style.display = "none";
    } else if(select.value=='kisses'){
        document.getElementById('crinkles').style.display = "none";
        document.getElementById('spritz').style.display = "none";
        document.getElementById('peanut-butter-kisses').style.display = "block";
    }
 } 