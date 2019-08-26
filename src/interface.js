$( document ).ready(function() {
  var bowling;
  bowling = new Bowling()

  $("#submit").click(function() {
    var score = parseInt($("#throw").val());
    var frame = bowling.getCurrentFrame()
    bowling.throw(score);
    if(bowling.isFirstThrow() == true) {
      addRow(frame)
    }
    if(bowling.gameOver == true) {
      addRow(frame)
      gameOverEvent()
    }
  })

  var addRow = function(frame){
    frameEvents(frame)
    $("#bowling-frames").append("<tr><td>" + frame + "</td><td>" + bowling.scores[frame][0] +  "</td><td>" + bowling.scores[frame][1] + "</td><td>" + bowling.frameDisplay(frame) + "</td><td>" + bowling.totalScore() + "</td></tr>")
  }

  var frameEvents = function(frame) {
    if(bowling.standardScore(frame) > 10) {
      changeGif("cheater")
      changeMessage("Smokey, this is not Vietnam, this is bowling. There are rules.")
    } else if(bowling.isStrike(frame)) {
      changeGif("strike")
      changeMessage("STRIKE: I'm throwing rocks tonight. Mark it, Dude.")
    } else if(bowling.isSpare(frame)) {
      changeGif("spare")
      changeMessage("SPARE: Mark it, Dude.")
    } else if(bowling.standardScore(frame) == 0) {
      changeGif("zero")
      changeMessage("Mark it zero. Next frame.")
    }
  }

  var gameOverEvent = function() {
    if(bowling.totalScore() == 300) {
      changeGif("perfect-game")
      changeMessage("PERFECT GAME: Shut the fuck up, Donny")
    } else if(bowling.totalScore() == 0) {
      changeGif("gutter-game")
      changeMessage("GUTTER GAME: Forget it Donny, you're out of your element!")
    } else {
      changeGif("game-over")
      changeMessage("GAME OVER: you scored " + bowling.totalScore() + ", The Dude Abides")      
    }
  }

  var changeGif = function(gif) {
    $("#gif").attr('class', gif)
  }

  var changeMessage = function(message) {
    $("#game-message").text(message)
  }
});