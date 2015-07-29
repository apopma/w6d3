(function () {
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var View = Hanoi.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
  };

  View.prototype.setupTowers = function () {
    for (var i = 0; i < 3; i++) {
      var $pile = $("<div>").addClass("pile");
      $pile.data("id", i);

      if (i === 0) {
        for (var j = 3; j > 0; j--) {
          var $disc = $("<div>").addClass("disc");
          $disc.data("size", j);
          $pile.append($disc);
        }
      }

      this.$el.append($pile);
    }
  };
})();
