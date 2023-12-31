let hexMass = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
let span = document.querySelector('span')
let button = document.querySelector('button')
button.addEventListener('click',function(){
    let hex = HexGenerate()
    document.body.style.backgroundColor = hex
    span.textContent = hex
})
function HexGenerate(){
    let hex = '#'
    for(let i = 0; i < 6; i++){
        hex += hexMass[GetRandom()]
    }
    return hex
}
function GetRandom(){
    return Math.floor(Math.random() * hexMass.length)
}
