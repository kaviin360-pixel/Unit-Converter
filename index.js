const inputEl=document.getElementById("input-el")
const convertBtn=document.getElementById("convert-btn")
let lengthEl=document.getElementById("length-el")
let volumeEl=document.getElementById("volume-el")
let massEl=document.getElementById("mass-el")

lengthEl.textContent = ""
volumeEl.textContent = ""
massEl.textContent = ""

convertBtn.addEventListener("click",function(){
    let inputValue=Number(inputEl.value)
    let lengthFeetValue = inputValue*3.28084
    lengthFeetValue = lengthFeetValue.toFixed(3)
    let feetLengthValue = (1/3.28084)*inputValue
    feetLengthValue = feetLengthValue.toFixed(3)
    let literGallonValue = inputValue*0.264172
    literGallonValue = literGallonValue.toFixed(3)
    let gallonLiterValue = (1/0.264172)*inputValue
    gallonLiterValue = gallonLiterValue.toFixed(3)
    let kiloPoundValue = inputValue*2.20462
    kiloPoundValue = kiloPoundValue.toFixed(3)
    let poundKiloValue = (1/2.20462)*inputValue
    poundKiloValue = poundKiloValue.toFixed(3)
    let lenStr=`${inputValue} meters = ${lengthFeetValue} feet | ${inputValue} feet = ${feetLengthValue} meters`
    let litStr=`${inputValue} liters = ${literGallonValue} gallons | ${inputValue} gallons = ${gallonLiterValue} liters`
    let massStr=`${inputValue} kilos = ${kiloPoundValue} pounds | ${inputValue} pounds = ${poundKiloValue} kilos`
    lengthEl.textContent = lenStr
    volumeEl.textContent = litStr
    massEl.textContent = massStr
})