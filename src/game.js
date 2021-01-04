class Game {
  constructor(height) {
    let startTower = [];
    for (var i = 0; i < height; i++) {
      startTower.push(height-i);
    }
    this.towers = [startTower, [], []];
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    // only begin these checks if both indcies are in bounds
    if ([0,1,2].includes(startTowerIdx) && [0,1,2].includes(endTowerIdx)) {
      // return false if startTower is empty
      let startTower = this.towers[startTowerIdx];
      let endTower = this.towers[endTowerIdx];
      if (startTower.length === 0) {
        return false
      }
      // return true if endTower is empty
      if (endTower.length === 0) {
        return true
      }
      // compare 'top' elements of startTower and endTower
      let startTowerTop = startTower[startTower.length - 1];
      let endTowerTop = endTower[endTower.length - 1];
      if (startTowerTop < endTowerTop) {
        return true;
      } else {
        return false;
      }
    } else {
      // at least one index is out of bounds
      return false
    }
  }

  isWon(height) {
    return (this.towers[1].length === height || this.towers[2].length === height )
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      let startTower = this.towers[startTowerIdx];
      let endTower = this.towers[endTowerIdx];
      let mover = startTower.pop();
      endTower.push(mover);
      return true;
    } else {
      return false
    }
  }

  print() {
    this.towers.forEach(tower => {
      let towerDisplay = '|' + tower.join('-');
      console.log(towerDisplay);
    })
  }

  promptMove(reader, callback) {
    // print the stacks
    this.print();
    // ask user for move selection
    reader.question('starting tower index: ', function (numString1) {
      let startTowerIdx = parseInt(numString1);
      reader.question('ending tower index: ', function (numString2) {
        let endTowerIdx = parseInt(numString2);
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  run(reader, completionCallback, height) {
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log('invalid move!');
      }
      if (!this.isWon(height)) {
        // game is not won, continue!
        this.run(reader, completionCallback, height);
      } else {
        this.print();
        console.log('you win!');
        completionCallback();
      }
    });
  }
};

module.exports = Game;
