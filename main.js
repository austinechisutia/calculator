
function buttonClick(input) {
    form.display.value += input;
}
function calculate() {
    try{
    form.display.value = eval(form.display.value);
    }
    catch(e) {
        form.display.value = "Invalid Input";
    } 

}
function clearDisplay(){
    form.display.value = "";
}
