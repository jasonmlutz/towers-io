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
    event.target.classlist.add('startTower')
  }

  flagEndTower(event) {
    event.target.classList.add('endTower')
  }

  clearTowerFlags() {
    const towers = $('.tower')
    towers.forEach( function(tower) {
      tower.removeClass('startTower')
      tower.removeClass('endTower')
    })
  }
}

export default View
