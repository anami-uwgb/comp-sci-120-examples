    function updateName() {
        const name = prompt("Enter a new name");
        
        // JavaScript formatter string 
        button.textContent = `Player 1: ${name}`;
    }

    
    const button = document.querySelector("button");
    button.addEventListener("click", updateName);