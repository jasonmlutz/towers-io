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
    for (var i = 0; i < 3; i++) {
      this.game.towers[i].forEach(width => {
        var disc = $("<li>");
        disc.addClass('disc');
        disc.attr('width', width)
        disc.text(`${width}`)
        $(`.tower${i}`).append(disc);
      });
    };
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

  startTowerSelected() {
    return $('.tower').hasClass('startTower')
  }

  towerSelection(event) {
    const bubbledTarget = this.bubbleTowerEvent(event);
    if (bubbledTarget.hasClass('startTower')) {
      bubbledTarget.removeClass('startTower')
    } else if (this.startTowerSelected()) {
      bubbledTarget.addClass('endTower')
      this.clearTowerFlags()
    } else {
      bubbledTarget.addClass('startTower')
    }
  }

  clearTowerFlags() {
    const towers = $('.tower')
    towers.removeClass('startTower endTower')
  }
}

export default View
