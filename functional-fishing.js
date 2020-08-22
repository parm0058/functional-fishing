/**
 * Function Fishing
 * A simple fishing game
 *
 * Rules:
 * To Eat: Must have at least 1 fish and a fire
 * To Make Fire: Must have a least 1 log of wood
 * To Fish: Must have at least 1 piece of bait and fire must be out
 * To Find Wood: The fire must be out.
 * To Find Bait: The fire must be out.
 */

/**
 * The game object stores the current game status
 */
// const randomInt = function (min, max) {
//   min = Math.ceil(min)
//   max = Math.floor(max)
//   // The maximum is inclusive and the minimum is inclusive
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }

// const settings = {
//   fireWood: 1,
// }


const game = {
  wood: 0,
  bait: 0,
  fish: 0,
  fire: false,
}
/**
 * fire
 * To start a fire:
 *    The fire must be out
 *    There must be at least 1 piece of wood
 *
 * To stop a fire:
 *    The fire must be going
 */

function fire () {
  if (game.fire) {
    game.fire = false;
    return "Your fire is off!"

  } else if (game.wood > 0 && game.fire === false) {
    game.fire = true;
    game.wood--;
    return "your fire is on"
  }
  else {

    return 'your do not have enough wood!'
  }
}


/**
 * fish
 * To go fishing:
 *    The fire must be out
 *    There must be at least 1 piece of bait
 */

function fish () {
  if (!game.fire) {
    if (game.bait >= 1) {
      game.fish++;
      game.bait--;
      return " You caught a fish"
    } else {
      return 'You do not have bait'
    }
  } else {
    return 'You have a fire on'
  }

}

/**
 * bait
 * To search for bait:
 *    The fire must be out
 */


function bait () {
  if (!game.fire) {
    game.bait++
    return 'You have one bait'
  } else {
    return 'You make fire on'
  }
}

/**
 * wood
 * To search for wood:
 *    The first must be out
 */

function wood () {
  if (!game.fire) {
    game.wood++
    return 'You have one wood'
  } else {
    return 'You make fire on'
  }
}

/**
 * eat
 * To eat a fish:
 *    There first must be going
 *    There must be at least 1 fish
 */

function eat () {
  if (game.fire) {
    if (game.fish >= 1) {
      game.fish--;
      return 'You have ate a fish'
    } else {
      return 'You do not have a fish'
    }
  }
  else {
    return "Your fire is off"
  }
}


/**
 * inventory
 * Shows the players current inventory
 */

function inventory () {
  let response = [];

  for (let item in game) {
    if (item === 'fire') {
      if (game[item] === true) {
        response.push(' fire is on')
      }
      else {
        response.push(' Fire is off')
      }
    }
    else {
      response.push(`${item} : ${game[item]}`)

    }

  }

  return response.join('\n')

}

/**
 * help
 * Display the game instructions.
 */
function help () {
  return `Welcome to Functional Fishing.
The text-based console fishing game.

Instructions: 
In this game you will catch, cook and eat fish. You will also search for wood and bait.

Commands:
To eat a fish, use eat()
To go fishing, use fish()
To start/stop a fire, use fire()
To search for bait, use bait()
To search for wood, use wood() 
To check the current inventory, use inventory()
To view these instructions, again, use help()`
}

console.log(help())
