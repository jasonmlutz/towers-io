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
      tower.attr('toweridx', i)
      this.element.append(tower);
    }
  }

  render() {
    for (var i = 0; i < 3; i++) {
      $(`ul[toweridx=${i}]`).empty();
      this.game.towers[i].forEach(width => {
        var disc = $("<li>");
        disc.addClass('disc');
        disc.attr('width', width)
        disc.text(`${width}`)
        $(`ul[toweridx=${i}]`).append(disc);
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
      this.game.move(...this.movePrep())
      this.render()
      this.clearTowerFlags()
    } else {
      bubbledTarget.addClass('startTower')
    }
  }

  clearTowerFlags() {
    const towers = $('.tower')
    towers.removeClass('startTower endTower')
  }

  fetchTower(className) {
    const tower = $(`.${className}`)
    return tower.attr('toweridx')
  }

  movePrep() {
    const startTowerIdx = this.fetchTower('startTower')
    const endTowerIdx = this.fetchTower('endTower')
    return [parseInt(startTowerIdx), parseInt(endTowerIdx)]
  }
}

export default View
