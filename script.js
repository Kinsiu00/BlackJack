deck = [
  {id: "spadeA", type: "ace", value: 11, img: "img/AS.jpg"},
  {id: "spadeK", type: "face", value: 10, img: "img/KS.jpg"},
  {id: "spadeQ", type: "face", value: 10, img: "img/QS.jpg"},
  {id: "spadeJ", type: "face", value: 10, img: "img/JS.jpg"},
  {id: "spade10", type: "num", value: 10, img: "img/10S.jpg"},
  {id: "spade9", type: "num", value: 9, img: "img/9S.jpg"},
  {id: "spade8", type: "num", value: 8, img: "img/8S.jpg"},
  {id: "spade7", type: "num", value: 7, img: "img/7S.jpg"},
  {id: "spade6", type: "num", value: 6, img: "img/6S.jpg"},
  {id: "spade5", type: "num", value: 5, img: "img/5S.jpg"},
  {id: "spade4", type: "num", value: 4, img: "img/4S.jpg"},
  {id: "spade3", type: "num", value: 3, img: "img/3S.jpg"},
  {id: "spade2", type: "num", value: 2, img: "img/2S.jpg"},

  {id: "heartA", type: "ace", value: 11, img: "img/AH.jpg"},
  {id: "heartK", type: "face", value: 10, img: "img/KH.jpg"},
  {id: "heartQ", type: "face", value: 10, img: "img/QH.jpg"},
  {id: "heartJ", type: "face", value: 10, img: "img/JH.jpg"},
  {id: "heart10", type: "num", value: 10, img: "img/10H.jpg"},
  {id: "heart9", type: "num", value: 9, img: "img/9H.jpg"},
  {id: "heart8", type: "num", value: 8, img: "img/8H.jpg"},
  {id: "heart7", type: "num", value: 7, img: "img/7H.jpg"},
  {id: "heart6", type: "num", value: 6, img: "img/6H.jpg"},
  {id: "heart5", type: "num", value: 5, img: "img/5H.jpg"},
  {id: "heart4", type: "num", value: 4, img: "img/4H.jpg"},
  {id: "heart3", type: "num", value: 3, img: "img/3H.jpg"},
  {id: "heart2", type: "num", value: 2, img: "img/2H.jpg"},

  {id: "cloverA", type: "ace", value: 11, img: "img/AC.jpg"},
  {id: "cloverK", type: "face", value: 10, img: "img/KC.jpg"},
  {id: "cloverQ", type: "face", value: 10, img: "img/QC.jpg"},
  {id: "cloverJ", type: "face", value: 10, img: "img/JC.jpg"},
  {id: "clover10", type: "num", value: 10, img: "img/10C.jpg"},
  {id: "clover9", type: "num", value: 9, img: "img/9C.jpg"},
  {id: "clover8", type: "num", value: 8, img: "img/8C.jpg"},
  {id: "clover7", type: "num", value: 7, img: "img/7C.jpg"},
  {id: "clover6", type: "num", value: 6, img: "img/6C.jpg"},
  {id: "clover5", type: "num", value: 5, img: "img/5C.jpg"},
  {id: "clover4", type: "num", value: 4, img: "img/4C.jpg"},
  {id: "clover3", type: "num", value: 3, img: "img/3C.jpg"},
  {id: "clover2", type: "num", value: 2, img: "img/2C.jpg"},

 {id: "diamondA", type: "ace", value: 11, img: "img/AD.jpg"},
 {id: "diamondK", type: "face", value: 10, img: "img/KD.jpg"},
 {id: "diamondQ", type: "face", value: 10, img: "img/QD.jpg"},
 {id: "diamondJ", type: "face", value: 10 , img: "img/JD.jpg"},
 {id: "diamond10", type: "num", value: 10, img: "img/10D.jpg"},
 {id: "diamond9", type: "num", value: 9, img: "img/9D.jpg"},
 {id: "diamond8", type: "num", value: 8, img: "img/8D.jpg"},
 {id: "diamond7", type: "num", value: 7, img: "img/7D.jpg"},
 {id: "diamond6", type: "num", value: 6, img: "img/6D.jpg"},
 {id: "diamond5", type: "num", value: 5, img: "img/5D.jpg"},
 {id: "diamond4", type: "num", value: 4, img: "img/4D.jpg"},
  {id: "diamond3", type: "num", value: 3, img: "img/3D.jpg"},
 {id: "diamond2", type: "num", value: 2, img: "img/2D.jpg"},]

//GLOBAL VARIABLE
let blackJackP = false;
let blackJackD = false;
let dealerTurn = false;
let playerVal = 0;
let dealerVal = 0;
let typeP = []
let typeD = []

//PLAYER DRAW
  let drawMe = document.querySelector(".player")
let drawP = function(){
  let cardMake = document.createElement("img")
  //MAKE MY CARD RANDOM
  let random = Math.floor(Math.random()*deck.length)
  let card = deck[random]
deck.splice(random, 1)
// console.log(deck.length)
// console.log(card)


  drawMe.appendChild(cardMake)
  cardMake.setAttribute("src", card.img)
  cardMake.setAttribute("class", "cardP")
  cardMake.setAttribute("data-val", card.value)
  cardMake.setAttribute("data-type", card.type)
}
//DEALER DRAW

let stayMe = document.querySelector(".dealer")
let drawD = function(){
  let cardMake = document.createElement("img")
  //MAKE MY CARD RANDOM
  let random = Math.floor(Math.random()*deck.length)
  let card = deck[random]
deck.splice(random, 1)
// console.log(deck.length)
// console.log(card)

  stayMe.appendChild(cardMake)
  cardMake.setAttribute("src", card.img)
  cardMake.setAttribute("class", "cardD")
  cardMake.setAttribute("data-val", card.value)
  cardMake.setAttribute("data-type", card.type)
}

//DEALER DRAW HIDDEN
let drawDH = function(){
  let cardMake = document.createElement("img")
  //MAKE MY CARD RANDOM
  let random = Math.floor(Math.random()*deck.length)
  let card = deck[random]
deck.splice(random, 1)
// console.log(deck.length)
// console.log(card)

  stayMe.appendChild(cardMake)
  cardMake.setAttribute("src", card.img)
  cardMake.setAttribute("class", "cardD hide")
  cardMake.setAttribute("data-val", card.value)
  cardMake.setAttribute("data-type", card.type)


}
  //DEALER DRAW HIDDEN PLACEHOLDER
  let drawDHP = function(){
    let cardMake = document.createElement("img")

    stayMe.appendChild(cardMake)
    cardMake.setAttribute("src", 'img/Gray_back.jpg')
    cardMake.setAttribute("class", "cardD")
    cardMake.setAttribute("data-val", 0)
    cardMake.setAttribute("data-type", "num")
}
    //this actually isn't working correctly, still works though.

//INIT CALCULATION

let checkVal = function(){
  let cardValueP = document.querySelectorAll(".cardP")
  // let typeP = []
  for(let i = 0; i < cardValueP.length; i++){
    if(cardValueP[i].dataset.type === "face" || "ace"){
      typeP.push(cardValueP[i].dataset.type)
      //this actually isn't working correctly, still works though.
      }
    playerVal += Number(cardValueP[i].dataset.val)

  }
  let cardValueD = document.querySelectorAll(".cardD")
  // let typeD = []
  for(let i = 0; i < cardValueD.length; i++){
    if(cardValueD[i].dataset.type === "face" || "ace"){
      typeD.push(cardValueD[i].dataset.type)
      //this actually isn't working correctly, still works though.
      }
    dealerVal += Number(cardValueD[i].dataset.val)
}
// console.log(typeD)
// console.log(dealerVal)
// console.log(typeP)
// console.log(playerVal)

    if (playerVal === 21 && typeP.includes("ace") === true){
        blackJackP = true;
    }
    if (dealerVal === 21 && typeD.includes("ace") === true){
      blackJackD = true;
    }
}


//VALUE CALCULATION

//CHECK FOR BLACKJACK
let jackBlack = function(){
  let revealCard = document.querySelector('img:nth-child(2)')
  let hiddenCard = document.querySelector('img:nth-child(3)')
  // console.log(revealCard)
  // console.log(hiddenCard)


if (blackJackP === true && blackJackD === true){
  console.log("both blackjack")
revealCard.setAttribute("class", "cardD")
hiddenCard.setAttribute("class", "cardD hide")
}
else if (blackJackP === true && blackJackD === false){
  console.log("player wins with blackjack")
  revealCard.setAttribute("class", "cardD")
  hiddenCard.setAttribute("class", "cardD hide")
}
else if (blackJackP === false && blackJackD === true){
  console.log("dealer wins with blackjack")
  revealCard.setAttribute("class", "cardD")
  hiddenCard.setAttribute("class", "cardD hide")
}
else{
  console.log("no blackjack, continue")
}
}

// //REMOVE DRAW BUTTON
// function ridDraw(){
//   let targetbtn = document.querySelectorAll("btn")
// if
//   targetbtn.setAttribute("class", ".draw hide")
// }

let valCalc = function(){
drawP()
let cardValueP = document.querySelectorAll(".cardP")
playerVal = 0;
  for(let i = 0; i < cardValueP.length; i++){
  playerVal += Number(cardValueP[i].dataset.val)
  }
      if(typeP.includes("ace") && playerVal > 21){
          playerVal -= 10
          console.log("exceeded 21, value now " + playerVal)
      }

      if(typeP.includes("ace", "ace") && playerVal > 21){
          playerVal -= 10
          console.log("exceeded 21, value now " + playerVal)
        }
      else if(playerVal > 21){
          console.log("bust")
      }
  }

//PLAYER PHASE
let drawBtn = document.querySelector(".draw")
drawBtn.addEventListener('click', function(){
  drawP()
  drawP()
  drawDH()
  drawDHP()
  drawD()
  checkVal()
  jackBlack()
  // ridDraw()
  console.log(playerVal)
})
let hitBtn = document.querySelector(".hit")
hitBtn.addEventListener('click', function(){
valCalc()
console.log(playerVal)
})





//STAY PHASE
// let stayMe = document.querySelector(".dealer")
