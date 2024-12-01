import BagsandFootwear from "./data/BagsandFootwear.js"
import BeautyandHealth from "./data/BeautyandHealth.js"
import Electronics from "./data/Electronics.js"
import HomeandKitchen from "./data/HomeandKitchen.js"
import JewelleryandAccessories from "./data/JewelleryandAccessories.js"
import Kids from "./data/Kids.js"
import Men from "./data/Men.js"
import WomenEthnic from "./data/WomenEthnic.js"
import WomenWestern from "./data/WomenWestern.js"

let inputSearchEl=document.querySelector(".inputsearch")
let recentInput=[]
let formInputEl=document.getElementById("Input form")
const listofRecentEl=document.querySelector(".listofRecent")

//console.log(inputSearchE1)
inputSearchEl.addEventListener("keydown",()=>{
    console.log(inputSearchEl)
    if(inputSearchEl.value){
        document.getElementById("closesearch").style.display="block"
    }
    else{
        document.getElementById("closesearch").style.display="none"

    }
})
formInputEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    let listofRecentHTMLEl = ""
    recentInput.unshift(inputSearchEl.value)
    console.log(recentInput)
    if(recentInput.length > 0){
        for(let i=0;i<recentInput.length;i++){
            listofRecentHTMLEl+=`
            <div class="recentItemn">
                     <div class="recenicon">
                          <img src="./img/recenticon.png" alt="recent">
                       </div>
                       <p>${recentInput[i]}</p>
            </div>
            `
        }
        listofRecentEl.innerHTML = listofRecentHTMLE1
        
    }
})

//function reusable 
function renderSubMenu(id,data){
    let temp= document.getElementById(id)

function tempFunc(){
    return data.map(el =>{
           let list="";
   list=el.data.map(element =>`<p>${element}</p>`).join(" ")
   
        return `
        <div class="column">
         <h4>${el.heading}</h4>
         ${list}
            
   </div>
   `        
    }).join("")
}
temp.innerHTML=tempFunc()

}




// WomenEthic

renderSubMenu("womenEthic",WomenEthnic)

// WomenWestern
renderSubMenu("womenWestern",WomenWestern)

//men

renderSubMenu("men",Men)

//kids

renderSubMenu("kids",Kids)

// home and kitchen

renderSubMenu("HomeAndKitchen",HomeandKitchen)

//beautyAndHealth

renderSubMenu("beautyAndHealth",BeautyandHealth)

//jewellery

renderSubMenu("JewelleryAndAccessories",JewelleryandAccessories)

//bag and footwear
renderSubMenu("BagsFootwearid",BagsandFootwear)

//electronics
renderSubMenu("ElectronicsId",Electronics)
