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
let message = document.querySelector(".message")

//PLAYER DRAW
  let drawMe = document.querySelector(".player")
let drawP = function(){
  let cardMake = document.createElement("img")
  //MAKE MY CARD RANDOM
  let random = Math.floor(Math.random()*deck.length)
  let card = deck[random]
deck.splice(random, 1)

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
    cardMake.setAttribute("src", 'img/Red_back.jpg')
    cardMake.setAttribute("class", "cardD")
    cardMake.setAttribute("data-val", 0)
    cardMake.setAttribute("data-type", "num")
}

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
    if (playerVal === 21 && typeP.includes("ace") === true){
        blackJackP = true;
    }
    if (dealerVal === 21 && typeD.includes("ace") === true){
      blackJackD = true;
    }
}

//CHECK FOR BLACKJACK
let jackBlack = function(){
  let revealCard = document.querySelector('img:nth-child(2)')
  let hiddenCard = document.querySelector('img:nth-child(3)')

if (blackJackP === true && blackJackD === true){
  message.innerHTML = "Double Blackjack?!"
revealCard.setAttribute("class", "cardD")
hiddenCard.setAttribute("class", "cardD hide")
}
else if (blackJackP === true && blackJackD === false){
  message.innerHTML = "player has Blackjack!"
  revealCard.setAttribute("class", "cardD")
  hiddenCard.setAttribute("class", "cardD hide")
}
else if (blackJackP === false && blackJackD === true){
  message.innerHTML = "Dealer has Blackjack!"
  revealCard.setAttribute("class", "cardD")
  hiddenCard.setAttribute("class", "cardD hide")
}
else{
  message.innerHTML = "Dealer must hit on 16."
}
}

//REMOVE DRAW BUTTON
function ridDraw(){
  let targetDraw = document.querySelector(".draw")
  let targetHit = document.querySelector(".hit")
  let targetStay = document.querySelector(".stay")
  targetHit.setAttribute("class", ".draw btn")
  targetDraw.setAttribute("class", ".draw btn hide")
  targetStay.setAttribute("class", ".draw btn")
}

let valCalcP = function(){
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
          message.innerHTML = "Player Busted!"
      }
  }

  let valCalcD = function(){
  let cardValueD = document.querySelectorAll(".cardD")
  dealerVal = 0;
    for(let i = 0; i < cardValueD.length; i++){
    dealerVal += Number(cardValueD[i].dataset.val)
    }
        if(typeD.includes("ace", "ace") && dealerVal > 21){
            dealerVal -= 10
            valCalcD()
        }
        if(typeD.includes("ace") && dealerVal > 21){
            dealerVal -= 10
            valCalcD()
          }
        if(dealerVal >21){
          message.innerHTML = "Dealer Busted"
        }
        else{
          if(dealerVal < 17){
            drawD()
            valCalcD()
          }
          else{
            if(playerVal > dealerVal){
              message.innerHTML = "Player Wins"
            }
            else if(playerVal < dealerVal){
              message.innerHTML = "Dealer Wins"
            }
            else{
              message.innerHTML = "Score Tied!"
            }
          }
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
  ridDraw()
  console.log(dealerVal)
  console.log(playerVal)
})
let hitBtn = document.querySelector(".hit")
hitBtn.addEventListener('click', function(){
valCalcP()
console.log(playerVal)
})

let stayBtn = document.querySelector(".stay")
stayBtn.addEventListener('click', function(){
  valCalcD()
  console.log(dealerVal)

    let revealCard = document.querySelector('img:nth-child(2)')
    let hiddenCard = document.querySelector('img:nth-child(3)')
    revealCard.setAttribute("class", "cardD")
    hiddenCard.setAttribute("class", "cardD hide")
})

let refreshBtn = document.querySelector(".refresh")
refreshBtn.addEventListener('click', function(){
  document.location.reload()
})
