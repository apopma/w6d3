(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
  };

  View.prototype.bindEvents = function () {
  };

  View.prototype.makeMove = function ($square) {
  };

  View.prototype.setupBoard = function () {
    for (var i = 0; i < 3; i++) {
      var rowClass = "row"
      var $row = $("<ul>").addClass(rowClass);

      for (var j = 0; j < 3; j++) {
        var squareClass = "square"
        var $square = $("<li>").data("pos", [i, j]).addClass(squareClass);
        $row.append($square);
      }
      this.$el.append($row);
    }
  };
})();
