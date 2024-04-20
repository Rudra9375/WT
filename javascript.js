function display() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;

    if (x === "Rudra" && y === "1234567") {
        
        window.open("index.html", "_blank");
    }
     else if (x === "" && y==="") {
            alert("Username and password field can't remain empty");
        } else(x !== "rudra" &&  y !== "1234567")
            alert("Incorrect username or password");
         
    }

function password(){
           let password=document.getElementById("a").value;
           let password2=document.getElementById("b").value;
           let c=document.getElementById("e").value;

           if(password==password2){
            return true;
           }
           else{
            alert("enter the same password");
           }

          
}
