let div
let div1
let div2
let boton=document.getElementById("a")
boton.addEventListener("click",()=>{
    div=document.getElementById("1")
    div.classList.toggle('mostrar')
    div1.classList.add('mostrar1')
    div2.classList.add('mostrar2')
})

let boton1=document.getElementById("a1")
boton1.addEventListener("click",()=>{
    div1=document.getElementById("2")
    div1.classList.toggle('mostrar1')
    div.classList.add('mostrar')
    div2.classList.add('mostrar2')
})

let boton2=document.getElementById("a2")
boton2.addEventListener("click",()=>{
    div2=document.getElementById("3")
    div2.classList.toggle('mostrar2')
    div1.classList.add('mostrar1')
    div.classList.add('mostrar')
})