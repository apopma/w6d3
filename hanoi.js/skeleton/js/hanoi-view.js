(function () {
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var View = Hanoi.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  };

  View.prototype.setupTowers = function () {
    for (var i = 0; i < 3; i++) {
      var $pile = $("<div>").addClass("pile").addClass("pile-" + i);
      $pile.data("id", i);

      for (var j = 1; j <= 3; j++) {
        var $disc = $("<div>").addClass("disc").addClass("empty");
        $pile.append($disc);
      }

      this.$el.append($pile);
    }
  };

  View.prototype.render = function() {
    $(".disc").removeClass("size-1 size-2 size-3").addClass("empty");

    for (var i = 0; i < this.game.towers.length; i++) {
      var pile = this.game.towers[i];
      var $pile = $(".pile-" + i);

      var discIndex;
      for (var j = 0; j < pile.length; j++) {
        discIndex = 2 - j;
        $pile.children().eq(discIndex)
          .addClass("size-" + pile[j])
          .removeClass("empty");
      }
    }
  };
})();
