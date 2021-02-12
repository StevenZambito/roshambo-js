function main() {
  let playerOneChoice
  let playerTwoChoice

  // Player One chooses ROCK

  const playerOneClickRock = () => {
    playerOneChoice = 'rock'
    document.querySelector('.rock-player').classList.add('player-border')
    document.querySelector('.paper-player').disabled = true
    document.querySelector('.scissors-player').disabled = true
    document.querySelector('.lizard-player').disabled = true
    document.querySelector('.yoda-player').disabled = true
    declareWinner()
  }
  const playerOneChoosesRock = document.querySelector('.rock-player')
  playerOneChoosesRock.addEventListener('click', playerOneClickRock)

  // Player One chooses PAPER

  const playerOneClickPaper = () => {
    playerOneChoice = 'paper'
    document.querySelector('.rock-player').disabled = true
    document.querySelector('.paper-player').classList.add('player-border')
    document.querySelector('.scissors-player').disabled = true
    document.querySelector('.lizard-player').disabled = true
    document.querySelector('.yoda-player').disabled = true
    declareWinner()
  }
  const playerOneChoosesPaper = document.querySelector('.paper-player')
  playerOneChoosesPaper.addEventListener('click', playerOneClickPaper)

  // Player One chooses SCISSORS

  const playerOneClickScissors = () => {
    playerOneChoice = 'scissors'
    document.querySelector('.rock-player').disabled = true
    document.querySelector('.paper-player').disabled = true
    document.querySelector('.scissors-player').classList.add('player-border')
    document.querySelector('.lizard-player').disabled = true
    document.querySelector('.yoda-player').disabled = true
    declareWinner()
  }

  const playerOneChoosesScissors = document.querySelector('.scissors-player')
  playerOneChoosesScissors.addEventListener('click', playerOneClickScissors)

  // Player One Chooses LIZARD

  const playerOneClickLizard = () => {
    playerOneChoice = 'lizard'
    document.querySelector('.rock-player').disabled = true
    document.querySelector('.paper-player').disabled = true
    document.querySelector('.scissors-player').disabled = true
    document.querySelector('.lizard-player').classList.add('player-border')
    document.querySelector('.yoda-player').disabled = true
    declareWinner()
  }

  const playerOneChoosesLizard = document.querySelector('.lizard-player')
  playerOneChoosesLizard.addEventListener('click', playerOneClickLizard)

  // Player One Chooses YODA

  const playerOneClickYoda = () => {
    playerOneChoice = 'yoda'
    document.querySelector('.rock-player').disabled = true
    document.querySelector('.paper-player').disabled = true
    document.querySelector('.scissors-player').disabled = true
    document.querySelector('.lizard-player').disabled = true
    document.querySelector('.yoda-player').classList.add('player-border')
    declareWinner()
  }

  const playerOneChoosesYoda = document.querySelector('.yoda-player')
  playerOneChoosesYoda.addEventListener('click', playerOneClickYoda())

  // Player Two Chooses ROCK

  const playerTwoClickRock = () => {
    playerTwoChoice = 'rock'
    document.querySelector('.rock-p2').classList.add('p2-border')
    document.querySelector('.paper-p2').disabled = true
    document.querySelector('.scissors-p2').disabled = true
    document.querySelector('.lizard-p2').disabled = true
    document.querySelector('.yoda-p2').disabled = true
    declareWinner()
  }

  const playerTwoChoosesRock = document.querySelector('.rock-p2')
  playerTwoChoosesRock.addEventListener('click', playerTwoClickRock)

  // Player  Two chooses PAPER

  const playerTwoClickPaper = () => {
    playerTwoChoice = 'paper'
    document.querySelector('.rock-p2').disabled = true
    document.querySelector('.paper-p2').classList.add('p2-border')
    document.querySelector('.scissors-p2').disabled = true
    document.querySelector('.lizard-p2').disabled = true
    document.querySelector('.yoda-p2').disabled = true
    declareWinner()
  }
  const playerTwoChoosesPaper = document.querySelector('.paper-p2')
  playerTwoChoosesPaper.addEventListener('click', playerTwoClickPaper)

  // Player Two chooses SCISSORS

  const playerTwoClickScissors = () => {
    playerTwoChoice = 'scissors'
    document.querySelector('.rock-p2').disabled = true
    document.querySelector('.paper-p2').disabled = true
    document.querySelector('.scissors-p2').classList.add('p2-border')
    document.querySelector('.lizard-p2').disabled = true
    document.querySelector('.yoda-p2').disabled = true
    declareWinner()
  }

  const playerTwoChoosesScissors = document.querySelector('.scissors-p2')
  playerTwoChoosesScissors.addEventListener('click', playerTwoClickScissors)

  // Player Two Chooses LIZARD

  const playerTwoClickLizard = () => {
    playerTwoChoice = 'lizard'
    document.querySelector('.rock-p2').disabled = true
    document.querySelector('.paper-p2').disabled = true
    document.querySelector('.scissors-p2').disabled = true
    document.querySelector('.lizard-p2').classList.add('p2-border')
    document.querySelector('.yoda-p2').disabled = true
    declareWinner()
  }

  const playerTwoChoosesLizard = document.querySelector('.lizard-p2')
  playerTwoChoosesLizard.addEventListener('click', playerTwoClickLizard)

  // Player Two Chooses YODA

  const playerTwoClickYoda = () => {
    playerTwoChoice = 'yoda'
    document.querySelector('.rock-p2').disabled = true
    document.querySelector('.paper-p2').disabled = true
    document.querySelector('.scissors-p2').disabled = true
    document.querySelector('.lizard-p2').disabled = true
    document.querySelector('.yoda-p2').classList.add('p2-border')
    declareWinner()
  }

  const playerTwoChoosesYoda = document.querySelector('.yoda-p2')
  playerTwoChoosesYoda.addEventListener('click', playerTwoClickYoda)

  // Player chooses RESET GAME

  // const playerClickReset = () => {
  //   playerOneChoice = ''
  //   computerChoice =
  //     computerChoicesArray[
  //       Math.floor(Math.random() * computerChoicesArray.length)
  //     ]
  //   document.querySelector('.rock-player').disabled = false
  //   document.querySelector('.paper-player').disabled = false
  //   document.querySelector('.scissors-player').disabled = false
  //   document.querySelector('.rock-player').classList.remove('player-border')
  //   document.querySelector('.paper-player').classList.remove('player-border')
  //   document.querySelector('.scissors-player').classList.remove('player-border')
  //   document.querySelector('.rock-computer').classList.remove('computer-border')
  //   document
  //     .querySelector('.paper-computer')
  //     .classList.remove('computer-border')
  //   document
  //     .querySelector('.scissors-computer')
  //     .classList.remove('computer-border')
  //   document.querySelector('.results-text').innerHTML =
  //     '<img src="https://i.gifer.com/3PvG.gif" width="300px" style="border: solid #ffe81f">'
  //   document.querySelector('.results-texts').innerHTML = 'Choose!'
  // }
  // const playerChoosesReset = document.querySelector('.reset')
  // playerChoosesReset.addEventListener('click', playerClickReset)

  // Declare Winner

  const declareWinner = () => {
    if (playerOneChoice === 'rock' && playerTwoChoice === 'rock') {
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.pinimg.com/originals/98/58/a0/9858a0097510206aaff4c3aeafe32e3d.gif" width="300px" style="border: solid #FFFFFF">'
      document.querySelector('.results-texts').innerHTML = "It's a tie!"
    }

    if (playerOneChoice === 'rock' && playerTwoChoice === 'paper') {
      document.querySelector('.results-text').innerHTML =
        '<img src="https://media.giphy.com/media/xTiIzFfQlzj8caUOGI/giphy.gif" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'You lose!'
    }

    if (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') {
      document.querySelector('.results-text').innerHTML =
        '<img src="https://thumbs.gfycat.com/CompassionateSolidGaur-max-1mb.gif" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Winner!'
    }

    if (playerOneChoice === 'paper' && playerTwoChoice === 'rock') {
      document.querySelector('.rock-computer').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.webp" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Winner!'
    }

    if (playerOneChoice === 'paper' && playerTwoChoice === 'paper') {
      document.querySelector('.paper-computer').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.pinimg.com/originals/98/58/a0/9858a0097510206aaff4c3aeafe32e3d.gif" width="300px" style="border: solid #FFFFFF">'
      document.querySelector('.results-texts').innerHTML = "It's a tie!"
    }

    if (playerOneChoice === 'paper' && playerTwoChoice === 'scissors') {
      document.querySelector('.scissors-computer').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://media.giphy.com/media/3o84szW0PrWZyUv0mA/giphy.gif" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'You lose!'
    }

    if (playerOneChoice === 'scissors' && playerTwoChoice === 'rock') {
      document.querySelector('.rock-computer').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.imgur.com/plUr2WC.gif" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'You lose!'
    }

    if (playerOneChoice === 'scissors' && playerTwoChoice === 'paper') {
      document.querySelector('.paper-computer').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.giphy.com/media/l1AsElwgf3qkDOotW/giphy.webp" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Winner!'
    }

    if (playerOneChoice === 'scissors' && playerTwoChoice === 'scissors') {
      document.querySelector('.scissors-computer').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.pinimg.com/originals/98/58/a0/9858a0097510206aaff4c3aeafe32e3d.gif" width="300px" style="border: solid #FFFFFF">'
      document.querySelector('.results-texts').innerHTML = "It's a tie!"
    }
  }
}

document.addEventListener('DOMContentLoaded', main)
