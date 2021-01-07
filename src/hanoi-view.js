// hanoi-view.js
import $ from 'jquery'

class View {
  constructor(game, element) {
    this.game = game;
    this.element = element;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for (var i = 0; i < 3; i++) {
      var tower = $("<ul>")
      tower.addClass(`tower tower${i}`);
      this.element.append(tower);
    }
  }

  render() {
    // for each of the three towers
    for (var i = 0; i < 3; i++) {
      // the tower is an array, entries are integers
      // representing the widths of the discs
      this.game.towers[i].forEach(width => {
        var disc = $("<li>");
        disc.addClass('disc');
        disc.attr('width', width)
        disc.text(`${width}`)
        $(`.tower${i}`).append(disc);
      });
    };
  }

  flagStartTower(event) {
    this.bubbleTowerEvent(event).addClass('startTower')
  }

  bubbleTowerEvent(event) {
    var bubbledTarget
    var $target = $(event.target)
    if ($target.is("li")) {
      bubbledTarget = $target.parent()
    } else {
      bubbledTarget = $target
    }
    return bubbledTarget
  }

  flagEndTower(event) {
    event.target.classList.add('endTower')
  }

  clearTowerFlags() {
    const towers = $('.tower')
    towers.removeClass('startTower', 'endTower')
  }
}

export default View
