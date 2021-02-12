function main() {
  let playerChoice
  const computerChoicesArray = ['rock', 'paper', 'scissors']

  let computerChoice =
    computerChoicesArray[
      Math.floor(Math.random() * computerChoicesArray.length)
    ]

  // Player chooses ROCK

  const playerClickRock = () => {
    playerChoice = 'rock'
    document.querySelector('.paper-player').disabled = true
    document.querySelector('.scissors-player').disabled = true
    document.querySelector('.rock-player').classList.add('player-border')
    declareWinner()
  }
  const playerChoosesRock = document.querySelector('.rock-player')
  playerChoosesRock.addEventListener('click', playerClickRock)

  // Player chooses PAPER

  const playerClickPaper = () => {
    playerChoice = 'paper'
    document.querySelector('.rock-player').disabled = true
    document.querySelector('.scissors-player').disabled = true
    document.querySelector('.paper-player').classList.add('player-border')
    declareWinner()
  }
  const playerChoosesPaper = document.querySelector('.paper-player')
  playerChoosesPaper.addEventListener('click', playerClickPaper)

  // Player chooses SCISSORS

  const playerClickScissors = () => {
    playerChoice = 'scissors'
    document.querySelector('.rock-player').disabled = true
    document.querySelector('.paper-player').disabled = true
    document.querySelector('.scissors-player').classList.add('player-border')
    declareWinner()
  }

  const playerChoosesScissors = document.querySelector('.scissors-player')
  playerChoosesScissors.addEventListener('click', playerClickScissors)

  // Player chooses RESET GAME

  const playerClickReset = () => {
    playerChoice = ''
    computerChoice =
      computerChoicesArray[
        Math.floor(Math.random() * computerChoicesArray.length)
      ]
    document.querySelector('.rock-player').disabled = false
    document.querySelector('.paper-player').disabled = false
    document.querySelector('.scissors-player').disabled = false
    document.querySelector('.rock-player').classList.remove('player-border')
    document.querySelector('.paper-player').classList.remove('player-border')
    document.querySelector('.scissors-player').classList.remove('player-border')
    document.querySelector('.rock-computer').classList.remove('computer-border')
    document
      .querySelector('.paper-computer')
      .classList.remove('computer-border')
    document
      .querySelector('.scissors-computer')
      .classList.remove('computer-border')
    document.querySelector('.results-text').innerHTML =
      '<img src="https://i.gifer.com/3PvG.gif" width="300px" style="border: solid #ffe81f">'
    document.querySelector('.results-texts').innerHTML = 'Choose!'
  }
  const playerChoosesReset = document.querySelector('.reset')
  playerChoosesReset.addEventListener('click', playerClickReset)

  // Declare Winner

  const declareWinner = () => {
    if (playerChoice === 'rock' && computerChoice === 'rock') {
      document.querySelector('.rock-computer').classList.add('computer-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.pinimg.com/originals/98/58/a0/9858a0097510206aaff4c3aeafe32e3d.gif" width="300px" style="border: solid #FFFFFF">'
      document.querySelector('.results-texts').innerHTML = "It's a tie!"
    }

    if (playerChoice === 'rock' && computerChoice === 'paper') {
      document.querySelector('.paper-computer').classList.add('computer-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://media.giphy.com/media/xTiIzFfQlzj8caUOGI/giphy.gif" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'You lose!'
    }

    if (playerChoice === 'rock' && computerChoice === 'scissors') {
      document
        .querySelector('.scissors-computer')
        .classList.add('computer-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://thumbs.gfycat.com/CompassionateSolidGaur-max-1mb.gif" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Winner!'
    }

    if (playerChoice === 'paper' && computerChoice === 'rock') {
      document.querySelector('.rock-computer').classList.add('computer-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.webp" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Winner!'
    }

    if (playerChoice === 'paper' && computerChoice === 'paper') {
      document.querySelector('.paper-computer').classList.add('computer-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.pinimg.com/originals/98/58/a0/9858a0097510206aaff4c3aeafe32e3d.gif" width="300px" style="border: solid #FFFFFF">'
      document.querySelector('.results-texts').innerHTML = "It's a tie!"
    }

    if (playerChoice === 'paper' && computerChoice === 'scissors') {
      document
        .querySelector('.scissors-computer')
        .classList.add('computer-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://media.giphy.com/media/3o84szW0PrWZyUv0mA/giphy.gif" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'You lose!'
    }

    if (playerChoice === 'scissors' && computerChoice === 'rock') {
      document.querySelector('.rock-computer').classList.add('computer-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.imgur.com/plUr2WC.gif" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'You lose!'
    }

    if (playerChoice === 'scissors' && computerChoice === 'paper') {
      document.querySelector('.paper-computer').classList.add('computer-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.giphy.com/media/l1AsElwgf3qkDOotW/giphy.webp" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Winner!'
    }

    if (playerChoice === 'scissors' && computerChoice === 'scissors') {
      document
        .querySelector('.scissors-computer')
        .classList.add('computer-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.pinimg.com/originals/98/58/a0/9858a0097510206aaff4c3aeafe32e3d.gif" width="300px" style="border: solid #FFFFFF">'
      document.querySelector('.results-texts').innerHTML = "It's a tie!"
    }
  }
}

document.addEventListener('DOMContentLoaded', main)
