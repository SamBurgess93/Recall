console.log("hey");

let clickedCard = null;

function onCardClicked(e){
    const target = e.currentTarget;

    if (target === clickedCard || target.className.includes("done")) {
        return;
    }
    target.className = target.className
            .replace("color-hide", "")
            .trim();
            target.className += " done";
    
    if(!clickedCard) {
        clickedCard = target;       
    } else if (clickedCard){

        if(clickedCard.getAttribute("data-color") === 
        target.getAttribute("data-color")){
            console.log("cards are equal")
        } else {
            console.log("cards not equal")
        }
    }
    
}