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


let card = document.querySelector(".draw")

//MAKE A CARD
card.addEventListener('click', function(){

  let cardMake = document.createElement("img")
  let card4 = deck[(Math.floor(Math.random()* 52))]

  card.appendChild(cardMake)
  cardMake.setAttribute("src", card4.img)
  cardMake.setAttribute("class", "carrd")
  cardMake.setAttribute("data-val", card4.value)
  cardMake.setAttribute("data-type", card4.type)
let cardValue = document.querySelectorAll(".carrd")
let val = 0
let type = []
for(let i = 0; i < cardValue.length; i++){
  val += Number(cardValue[i].dataset.val)
  if(cardValue[i].dataset.type === "face" || "ace"){
    type.push(cardValue[i].dataset.type)
  }
}
console.log(val)
console.log(type)

if (type.includes("face") && type.includes("ace") && cardValue.length === 2){
  console.log("Blackjack!")
}
})




//game stuff

  let card1 = deck[(Math.floor(Math.random()* 51))].img
  let card2 = deck[(Math.floor(Math.random()* 51))]

  let value = (card1.value + card2.value)
   console.log(deck.length)

   function draw2(){

     if(value > 21){
       console.log("busted!")
     }
     else if (value === 21){
       console.log("Blackjack!")
     }
     else if(value < 21){
       console.log("you got " + value + "!")
     }
     return [card1, card2]
   }

   draw2()
