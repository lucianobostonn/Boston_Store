const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const itens = document.querySelectorAll(".item")
const dots = document.querySelectorAll(".dot")
const numberIndicator = document.querySelector(".numbers")
const list = document.querySelector(".list")



var active = 0
const total = itens.length


function update(direction) {

    document.querySelector(".item.active").classList.remove("active")
    document.querySelector(".dot.active").classList.remove("active")

    
    if(direction > 0){
        active = active + 1

        if(active >= total){
            active = 0
        }
    } 
    else if(direction < 0){
        active = active - 1

        if(active < 0){
            active = total - 1
        }
    }

    itens[active].classList.add("active")
    dots[active].classList.add("active")

    numberIndicator.innerHTML = `0${active+1}`
}


prevButton.addEventListener("click", function(){

    update(-1)
})


nextButton.addEventListener("click", function(){
    update(1)
})




setInterval(function() {
    update(1)
}, 2500)
