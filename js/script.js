//1.Select ligne1, prix, increase, decrease, delete, quant, total, image
let quantite = document.querySelectorAll('.quant')
console.log('quantite:', quantite)
console.log("------quantite[0]: ", parseInt(quantite[0].value)+1)

let inc = document.querySelectorAll('.increase')
console.log('inc:', inc)

let ligne = document.querySelectorAll('.ligne1')
console.log('ligne:', ligne)

let prix = document.querySelectorAll('.prix')
console.log('prix:', prix)

let dec = document.querySelectorAll('.decrease')
console.log('dec:', dec)

let del = document.querySelectorAll('.delete')
console.log('del:', del)

let total = document.querySelector('.total')
console.log('prixTotal:', total)

let image = document.querySelectorAll('.image')
console.log('like:', image)

//2. write function calculatePrice the call it
function calculateTotalPrice() {
    //calculate total price using for loop
    let price = 0
    for(let i=0; i<prix.length; i++){
        console.log("quantite[i]: ", quantite[i].value)
        console.log("prix[i]: ", prix[i].textContent)
        price = price + quantite[i].value * parseInt(prix[i].textContent)
    }
    console.log("price = ", price)
    //display total price
    total.textContent = `Total: ${price} DA`
    return total
}
calculateTotalPrice()
//3. Add event to increment buttons => use for
// increment 
for (let i = 0; i < inc.length; i++){
    inc[i].addEventListener('click', inrementation) 
    function inrementation(){
        quantite[i].value++ 
        calculateTotalPrice()
    }
}


//4. Add event to decrement buttons => use for
// decrement 
for (let i = 0; i < dec.length; i++){
    dec[i].addEventListener('click', decrementation) 
    function decrementation(){
        if(quantite[i].value > 0){
            quantite[i].value--
            calculateTotalPrice()
        }
    }
}


//5. Add event to delete buttons  => use for
for(let i = 0; i < del.length; i++){
    del[i].addEventListener('click', deletion)
    function deletion(){
        ligne[i].remove()
        quantite[i].value = 0
        calculateTotalPrice()
    }
}
//6. Add event to like icons (if icon is red make it black else make it red)
for(let i = 0; i < image.length; i++){
    image[i].addEventListener('click', like)
    function like() {
        if(image[i].style.color == 'black'){
            image[i].style.color = 'red'
        }
        else {
            image[i].style.color = 'black'
        }
    }
}
     












 
    



//3. Add event to increment buttons => use for
//4. Add event to decrement buttons => use for
//5. Add event to delete buttons  => use for
//6. Add event to like icons ( if icon is red make it black else make it red)

