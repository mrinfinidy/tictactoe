const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')
const tiles = Array.from(document.querySelectorAll('.tile'))
const playerDisplay = document.querySelector('.playerDisplay')
const announce = document.querySelector('.announce')
let firstToken = ''

// Define countries with country code and flag that a player can choose from
const countries = new Map()
countries.set('af', '🇦🇫')
countries.set('ar', '🇦🇷')
countries.set('at', '🇦🇹')
countries.set('ba', '🇧🇦')
countries.set('bg', '🇧🇬')
countries.set('cm', '🇨🇲')
countries.set('cn', '🇨🇳')
countries.set('co', '🇨🇴')
countries.set('hr', '🇭🇷')
countries.set('cz', '🇨🇿')
countries.set('eg', '🇪🇬')
countries.set('fr', '🇨🇵')
countries.set('de', '🇩🇪')
countries.set('gr', '🇬🇷')
countries.set('hu', '🇭🇺')
countries.set('ch', '🇨🇭')
countries.set('gb', '🇬🇧')
countries.set('us', '🇺🇸')

// Game setup
let board = ['', '', '', '', '', '', '', '', ''] 
const currentPlayer = {
    type: 'x',
    countryX: null,
    countryXName: '',
    countryO: null,
    countryOName: ''
}
let isGameActive = 'true'

const playerXWon = 'playerXWon'
const playerOWon = 'playerOWon'
const tie = 'tie'

/* 
 * Board Layout
 * [0] [1] [2]
 * [3] [4] [5]
 * [6] [7] [8]
 */
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Game Logic
function validateResult() {
    let gameWon = false
    for (let i = 0; i < 8; i++) {
        const winningCondition = winningConditions[i]
        const tileA = board[winningCondition[0]]
        const tileB = board[winningCondition[1]]
        const tileC = board[winningCondition[2]]
        if (tileA === '' || tileB === '' || tileC === '') {
            continue
        }
        if (tileA === tileB && tileB === tileC) {
            gameWon = true
            break
        }
    }

    if (gameWon) {
        announceState(currentPlayer.type === 'x' ? playerXWon : playerOWon)
        isGameActive = false
        return
    }
    
    if (!board.includes('')) {
        announceState(tie)
    }
}

const announceState = (gameState) => {
    announce.style.display = 'block'
    switch(gameState) {
        case playerOWon:
            announce.innerHTML = `Player <span class="playerO">${currentPlayer.countryOName}</span> Won`
            break
        case playerXWon:
            announce.innerHTML = `Player <span class="playerX">${currentPlayer.countryXName}</span> Won`
            break
        case tie:
            announce.innerText = 'Tie'
    }
    announce.style.display = 'hide'
}


const isValidMove = (tile) => {
    if (tile.innerText !== '') {
        return false
    }
    return true
}

const updateBoard = (index) => {
    board[index] = currentPlayer.type
}

const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer.type}`)
    if (currentPlayer.type === 'x') {
        currentPlayer.type = 'o'
        playerDisplay.innerText = currentPlayer.countryOName
    } else {
        currentPlayer.type = 'x'
        playerDisplay.innerText = currentPlayer.countryXName
    }
    playerDisplay.classList.add(`player${currentPlayer.type}`)
}

const playerMove = (tile, index) => {
    if (isValidMove(tile) && isGameActive) {
        tile.innerText = currentPlayer.type === 'x' ? currentPlayer.countryX : currentPlayer.countryO
        tile.classList.add(`player${currentPlayer.type}`)
        updateBoard(index)
        validateResult()
        changePlayer()
    }
}

tiles.forEach((tile, index) => {
    tile.addEventListener('click', () => playerMove(tile, index))
})


// Start game --> choose countries and then play
function start() {
    document.getElementById('start').style.display = 'none'
    document.getElementById('tokenSelection').style.display = 'block'
}

// Players choose their country
// Players 1 and 2 must choose different countries
function confirmToken() {
    tokens = document.getElementById('tokens')
    if (currentPlayer.countryX === null) {
        currentPlayer.countryX = countries.get(tokens.value)
        currentPlayer.countryXName = tokens.options[tokens.selectedIndex].text
        firstToken = tokens.value
        document.getElementById('chooseToken').innerText = 'Choose a flag Player 2'
    } else if (currentPlayer.countryO === null) { 
        if (firstToken === tokens.value) {
            document.getElementById('chooseToken').innerText = 'Choose another country'
            return
        }
        currentPlayer.countryO = countries.get(tokens.value)
        currentPlayer.countryOName = tokens.options[tokens.selectedIndex].text
        firstToken = ''
        playerDisplay.innerText = currentPlayer.countryXName
        document.getElementById('chooseToken').innerText = 'Choose a flag Player 1'
        document.getElementById('tokenSelection').style.display = 'none'
        document.querySelector('.tictactoe').style.display = 'block'
    }
}

// Reset game
function reset() {
    board = ['', '', '', '', '', '', '', '', ''] 
    isGameActive = true
    
    if (currentPlayer.type === 'o') {
        changePlayer
    } 

    tiles.forEach(tile => {
        tile.innerText = ''
        tile.classList.remove('playerX')
        tile.classList.remove('playerO')
    })

    currentPlayer.type = 'x'
    currentPlayer.countryX = null
    currentPlayer.countryXName = ''
    currentPlayer.countryO = null
    currentPlayer.countryOName = ''

    announce.style.display = 'none'
    document.querySelector('.tictactoe').style.display = 'none'
    document.getElementById('start').style.display = 'block'
}

// Mobile menu
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active')
    mobileNav.classList.toggle('is-active')
})
