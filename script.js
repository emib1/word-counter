const inputField = document.querySelector(".container input");
const submit = document.querySelector(".count");
const resultField = document.querySelector(".result");


resultField.classList.add("hide");
submit.addEventListener("click", function(e){
    e.preventDefault();
    if(inputField.value === ""){
      resultField.textContent = "Please write a word";
      resultField.classList.remove("hide");

      setTimeout(function(){
        resultField.classList.add("hide");
    },10000);
}
    else{
        resultField.classList.remove("hide");
        input = inputField.value; 
        results = input.length;
        resultField.textContent = `Length: ${results}`;
    };
});
