const sim = document.getElementById("sim")
const nao = document.getElementById("nao")

const tela1 = document.getElementById("tela1")
const tela2 = document.getElementById("tela2")
const tela3 = document.getElementById("tela3")

const abrir = document.getElementById("abrir")


// botão não fugir

nao.addEventListener("mouseover",()=>{

const x = Math.random() * (window.innerWidth - 100)
const y = Math.random() * (window.innerHeight - 60)

nao.style.position="fixed"
nao.style.left=x+"px"
nao.style.top=y+"px"

})


// clicar sim

sim.addEventListener("click",()=>{

confete()

tela1.classList.add("hidden")
tela2.classList.remove("hidden")

})


// abrir presente

abrir.addEventListener("click",()=>{

tela2.classList.add("hidden")
tela3.classList.remove("hidden")

})



// corações

function criarCoracao(){

const heart=document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"

heart.style.fontSize=(15+Math.random()*25)+"px"

heart.style.animationDuration=(4+Math.random()*4)+"s"

document.getElementById("hearts").appendChild(heart)

setTimeout(()=>{

heart.remove()

},7000)

}

setInterval(criarCoracao,400)


// confete

function confete(){

for(let i=0;i<120;i++){

const c=document.createElement("div")

c.classList.add("confete")

c.style.left=Math.random()*100+"vw"

c.style.background=`hsl(${Math.random()*360},100%,50%)`

c.style.animationDuration=(2+Math.random()*2)+"s"

document.body.appendChild(c)

setTimeout(()=>{

c.remove()

},3000)

}

}