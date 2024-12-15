function buttonBool() {
    currentMessage = document.getElementById("button").innerHTML
    console.log(currentMessage)
    if (currentMessage === "ON"){
        document.getElementById("button").innerHTML = "OFF"
    } else {
        document.getElementById("button").innerHTML = "ON"
    }  
}