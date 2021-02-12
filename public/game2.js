function main() {
  let playerOneChoice
  let playerTwoChoice

  // Player One chooses ROCK

  const playerOneClickRock = () => {
    playerOneChoice = 'rock'
    document.querySelector('.p1-chosen').innerHTML = 'Chosen: &#10003'
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
    document.querySelector('.p1-chosen').innerHTML = 'Chosen: &#10003'
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
    document.querySelector('.p1-chosen').innerHTML = 'Chosen: &#10003'
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
    document.querySelector('.p1-chosen').innerHTML = 'Chosen: &#10003'
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
    document.querySelector('.p1-chosen').innerHTML = 'Chosen: &#10003'
    declareWinner()
  }

  const playerOneChoosesYoda = document.querySelector('.yoda-player')
  playerOneChoosesYoda.addEventListener('click', playerOneClickYoda)

  // Player Two Chooses ROCK

  const playerTwoClickRock = () => {
    playerTwoChoice = 'rock'
    document.querySelector('.p2-chosen').innerHTML = 'Chosen: &#10003'
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
    document.querySelector('.p2-chosen').innerHTML = 'Chosen: &#10003'
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
    document.querySelector('.p2-chosen').innerHTML = 'Chosen: &#10003'
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
    document.querySelector('.p2-chosen').innerHTML = 'Chosen: &#10003'
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
    document.querySelector('.p2-chosen').innerHTML = 'Chosen: &#10003'
    declareWinner()
  }

  const playerTwoChoosesYoda = document.querySelector('.yoda-p2')
  playerTwoChoosesYoda.addEventListener('click', playerTwoClickYoda)

  // Player chooses RESET GAME

  const playerClickReset = () => {
    playerOneChoice = ''
    playerTwoChoice = ''

    document.querySelector('.p1-chosen').innerHTML = 'Chosen: -'
    document.querySelector('.p2-chosen').innerHTML = 'Chosen: -'

    document.querySelector('.rock-player').disabled = false
    document.querySelector('.rock-p2').disabled = false
    document.querySelector('.paper-player').disabled = false
    document.querySelector('.paper-p2').disabled = false
    document.querySelector('.scissors-player').disabled = false
    document.querySelector('.scissors-p2').disabled = false
    document.querySelector('.lizard-player').disabled = false
    document.querySelector('.lizard-p2').disabled = false
    document.querySelector('.yoda-player').disabled = false
    document.querySelector('.yoda-p2').disabled = false

    document.querySelector('.rock-player').classList.remove('player-border')
    document.querySelector('.paper-player').classList.remove('player-border')
    document.querySelector('.scissors-player').classList.remove('player-border')
    document.querySelector('.lizard-player').classList.remove('player-border')
    document.querySelector('.yoda-player').classList.remove('player-border')

    document.querySelector('.rock-p2').classList.remove('p2-border')
    document.querySelector('.paper-p2').classList.remove('p2-border')
    document.querySelector('.scissors-p2').classList.remove('p2-border')
    document.querySelector('.lizard-p2').classList.remove('p2-border')
    document.querySelector('.yoda-p2').classList.remove('p2-border')

    document.querySelector('.results-text').innerHTML =
      '<img src="https://i.gifer.com/3PvG.gif" width="300px" style="border: solid #ffe81f">'
    document.querySelector('.results-texts').innerHTML = 'Choose!'
  }
  const playerChoosesReset = document.querySelector('.reset')
  playerChoosesReset.addEventListener('click', playerClickReset)

  // Declare Winner

  const declareWinner = () => {
    // Rock
    if (playerOneChoice === 'rock' && playerTwoChoice === 'rock') {
      document.querySelector('.rock-player').classList.add('player-border')
      document.querySelector('.rock-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.pinimg.com/originals/98/58/a0/9858a0097510206aaff4c3aeafe32e3d.gif" width="300px" style="border: solid #FFFFFF">'
      document.querySelector('.results-texts').innerHTML = "It's a tie!"
    }

    if (playerOneChoice === 'rock' && playerTwoChoice === 'paper') {
      document.querySelector('.rock-player').classList.add('player-border')
      document.querySelector('.paper-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://media.giphy.com/media/3ohuAnWilO3JcRtCMw/giphy.gif" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'Player 2 wins!'
    }

    if (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') {
      document.querySelector('.rock-player').classList.add('player-border')
      document.querySelector('.scissors-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://thumbs.gfycat.com/CompassionateSolidGaur-max-1mb.gif" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Player 1 wins!'
    }

    if (playerOneChoice === 'rock' && playerTwoChoice === 'lizard') {
      document.querySelector('.rock-player').classList.add('player-border')
      document.querySelector('.lizard-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.gifer.com/7NSh.gif" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Player 1 wins!'
    }

    if (playerOneChoice === 'rock' && playerTwoChoice === 'yoda') {
      document.querySelector('.rock-player').classList.add('player-border')
      document.querySelector('.yoda-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://thumbs.gfycat.com/CompassionateSolidGaur-max-1mb.gif" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'Player 2 wins!'
    }
    // Paper
    if (playerOneChoice === 'paper' && playerTwoChoice === 'rock') {
      document.querySelector('.paper-player').classList.add('player-border')
      document.querySelector('.rock-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.webp" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Player 1 wins!'
    }

    if (playerOneChoice === 'paper' && playerTwoChoice === 'paper') {
      document.querySelector('.paper-player').classList.add('player-border')
      document.querySelector('.paper-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.pinimg.com/originals/98/58/a0/9858a0097510206aaff4c3aeafe32e3d.gif" width="300px" style="border: solid #FFFFFF">'
      document.querySelector('.results-texts').innerHTML = "It's a tie!"
    }

    if (playerOneChoice === 'paper' && playerTwoChoice === 'scissors') {
      document.querySelector('.paper-player').classList.add('player-border')
      document.querySelector('.scissors-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://media.giphy.com/media/3ohuAx4bMIeoa2LcXu/giphy.gif" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'Player 2 wins!'
    }

    if (playerOneChoice === 'paper' && playerTwoChoice === 'lizard') {
      document.querySelector('.paper-player').classList.add('player-border')
      document.querySelector('.lizard-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://media.giphy.com/media/3o84sCIUu49AtNYkDK/giphy.gif" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'Player 2 wins!'
    }

    if (playerOneChoice === 'paper' && playerTwoChoice === 'yoda') {
      document.querySelector('.paper-player').classList.add('player-border')
      document.querySelector('.yoda-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://m0.joe.ie/wp-content/uploads/2017/11/29164846/Impressive.gif" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Player 1 wins!'
    }
    // Scissors
    if (playerOneChoice === 'scissors' && playerTwoChoice === 'rock') {
      document.querySelector('.scissors-player').classList.add('player-border')
      document.querySelector('.rock-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://imagesvc.meredithcorp.io/v3/mm/gif?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2016%2F03%2F09%2Fchewie-hug.gif" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'Player 2 wins!'
    }

    if (playerOneChoice === 'scissors' && playerTwoChoice === 'paper') {
      document.querySelector('.scissors-player').classList.add('player-border')
      document.querySelector('.paper-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.giphy.com/media/l1AsElwgf3qkDOotW/giphy.webp" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Player 1 wins!'
    }

    if (playerOneChoice === 'scissors' && playerTwoChoice === 'scissors') {
      document.querySelector('.scissors-player').classList.add('player-border')
      document.querySelector('.scissors-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.pinimg.com/originals/98/58/a0/9858a0097510206aaff4c3aeafe32e3d.gif" width="300px" style="border: solid #FFFFFF">'
      document.querySelector('.results-texts').innerHTML = "It's a tie!"
    }

    if (playerOneChoice === 'scissors' && playerTwoChoice === 'lizard') {
      document.querySelector('.scissors-player').classList.add('player-border')
      document.querySelector('.lizard-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.pinimg.com/originals/9c/5d/08/9c5d08a88b7986777a9d883493254d5b.gif" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Player 1 wins!'
    }

    if (playerOneChoice === 'scissors' && playerTwoChoice === 'yoda') {
      document.querySelector('.scissors-player').classList.add('player-border')
      document.querySelector('.yoda-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.chzbgr.com/full/9031977472/hD9728A7A/reaction-gif-of-sand-people-celebrating-trimumph-in-star-wars-movie" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'Player 2 wins!'
    }
    // Lizard
    if (playerOneChoice === 'lizard' && playerTwoChoice === 'rock') {
      document.querySelector('.lizard-player').classList.add('player-border')
      document.querySelector('.rock-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://media.giphy.com/media/3ofSBzgAwE3X3EtddK/giphy.gif" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'Player 2 wins!'
    }
    if (playerOneChoice === 'lizard' && playerTwoChoice === 'paper') {
      document.querySelector('.lizard-player').classList.add('player-border')
      document.querySelector('.paper-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://media1.tenor.com/images/5a7c7eb65ef76173e060b10e3707646b/tenor.gif" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Player 1 wins!'
    }
    if (playerOneChoice === 'lizard' && playerTwoChoice === 'scissors') {
      document.querySelector('.lizard-player').classList.add('player-border')
      document.querySelector('.scissors-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://64.media.tumblr.com/ce92d1e7a8ba2430c190d2f55ed75611/tumblr_ppz0z5fA591qf5hjqo9_540.gifv" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'Player 2 wins!'
    }
    if (playerOneChoice === 'lizard' && playerTwoChoice === 'lizard') {
      document.querySelector('.lizard-player').classList.add('player-border')
      document.querySelector('.lizard-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.pinimg.com/originals/98/58/a0/9858a0097510206aaff4c3aeafe32e3d.gif" width="300px" style="border: solid #FFFFFF">'
      document.querySelector('.results-texts').innerHTML = "It's a tie!"
    }
    if (playerOneChoice === 'lizard' && playerTwoChoice === 'yoda') {
      document.querySelector('.lizard-player').classList.add('player-border')
      document.querySelector('.yoda-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.gifer.com/WEx9.gif" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Player 1 wins!'
    }
    // Yoda
    if (playerOneChoice === 'yoda' && playerTwoChoice === 'rock') {
      document.querySelector('.yoda-player').classList.add('player-border')
      document.querySelector('.rock-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://imperialtalker.files.wordpress.com/2019/04/coruscant-victory.gif?w=400&zoom=2" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Player 1 wins!'
    }
    if (playerOneChoice === 'yoda' && playerTwoChoice === 'paper') {
      document.querySelector('.yoda-player').classList.add('player-border')
      document.querySelector('.paper-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://64.media.tumblr.com/e424febd9230f4cf3147ad6e1a83a536/tumblr_myh0pepzkK1s6w6foo1_400.gif" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'Player 2 wins!'
    }
    if (playerOneChoice === 'yoda' && playerTwoChoice === 'scissors') {
      document.querySelector('.yoda-player').classList.add('player-border')
      document.querySelector('.scissors-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.makeagif.com/media/7-02-2016/6rbgQQ.gif" width="300px" style="border: solid rgb(55, 132, 214)">'
      document.querySelector('.results-texts').innerHTML = 'Player 1 wins!'
    }
    if (playerOneChoice === 'yoda' && playerTwoChoice === 'lizard') {
      document.querySelector('.yoda-player').classList.add('player-border')
      document.querySelector('.lizard-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://64.media.tumblr.com/577a4d86a3cce7f96b7158bbb823a73f/tumblr_inline_o0x80vejVx1qgp297_500.gifv" width="300px" style="border: solid rgb(229, 17, 21)">'
      document.querySelector('.results-texts').innerHTML = 'Player 2 wins!'
    }
    if (playerOneChoice === 'yoda' && playerTwoChoice === 'yoda') {
      document.querySelector('.yoda-player').classList.add('player-border')
      document.querySelector('.yoda-p2').classList.add('p2-border')
      document.querySelector('.results-text').innerHTML =
        '<img src="https://i.pinimg.com/originals/98/58/a0/9858a0097510206aaff4c3aeafe32e3d.gif" width="300px" style="border: solid #FFFFFF">'
      document.querySelector('.results-texts').innerHTML = "It's a tie!"
    }
  }
}

document.addEventListener('DOMContentLoaded', main)
