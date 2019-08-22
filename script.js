const CARDSARRAY = [
  {
    name:"amelia",
    img:"images/amelia-close-350_40071288.jpg"
  },
  {
    name:"blackRose",
    img:"images/Black_Roses_Tinted_350.jpg"
  },
  {
    name:"bluePink",
    img:"images/Blue-Pink-Purple1-350_85e15aa1.jpg"
  },
  {
    name:"blueTinted",
    img:"images/Blue_Tinted_Roses_Close_Up_350_985dbbbe.jpg"
  },
  {
    name:"freedomFunza",
    img:"images/freedom-funza-closeup-350_dcfa6c1d.jpg"
  },
  {
    name:"greenLimeaid",
    img:"images/green-limeaid-rose-350_16de586b.jpg"
  },
  {
    name:"santanaOrange",
    img:"images/Santana_Orange_Rose_Close-350.jpg"
  },
  {
    name:"UniquePink",
    img:"images/Sweet_Unique_Pink_Rose_Close350_89fe203e.gif"
  },
  {
    name:"tiara",
    img:"images/Tiara-Closeup-500.jpg"
  },
  {
    name:"peachRose",
    img:"images/Versilia_Peach_Rose_Close500_389ab0e7.jpg"
  },
  {
    name:"WhiteTibetRose",
    img:"images/WhiteTibetRose.jpg"
  },
  {
    name:"yellowKingRoses",
    img:"images/Yellow-King-Roses-Closeup-350_917459cb.jpg"
  },
]

count = 0
gusses = []

let mainGameArray = CARDSARRAY.concat(CARDSARRAY)

mainGameArray.sort(function(){
  return (0.5-Math.random())
})

const GAME = document.getElementById("game")

const GRID = document.createElement('section')
GRID.setAttribute('class','grid')

GAME.appendChild(GRID)

mainGameArray.forEach(function(item){
  const div = document.createElement('div')
  div.classList.add('card')
  div.dataset.name = item.name

  const back = document.createElement('div')
  back.classList.add('back')
  back.style.backgroundImage = `url(${item.img})`

  const front = document.createElement('div')
  front.classList.add('front')

  GRID.appendChild(div)
  div.appendChild(back)
  div.appendChild(front)


})

GRID.addEventListener("click",function(event){
  let clicked = event.target

  if(clicked.nodeName==="SECTION"){
    return
  }

  if(count<2){
    console.log(clicked.classList[2]);
    if(clicked.classList[1]=="selected"){
      return

    }
    clicked.classList.add("selected")
    gusses.push(clicked)
    checkGusses()

  }
})

function checkGusses(){
  let delay = 500

  if(count<1){
    count++
    return
  }else{
    first = gusses[0]
    second = gusses[1]
    firstGuess = first.parentNode.dataset.name
    secondGuess = second.parentNode.dataset.name


    if(firstGuess==secondGuess){
      first.classList.add('match')
      second.classList.add('match')
    }else{
      setTimeout(function(){
        first.classList.remove('selected')
        second.classList.remove('selected')
      },delay)

    }
    count = 0
    gusses = []
  }
}
