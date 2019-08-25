'use strict';

function Bowling(){
  this._frame = 1;
  this.gameOver = false
  this.scores = [[],[false,false],[false,false],[false,false],[false,false],[false,false],[false,false],[false,false],[false,false],[false,false],[false,false],[false,false], [false,false]];
};

Bowling.prototype = {
  throw: function(pins) {
    if(this.gameOver == true) { return }

    if(this.scores[this._frame][0] === false) {
      this.scores[this._frame][0] = pins;
      if(pins == 10) {
        this.scores[this._frame][1] = 0;
        this._nextFrame();
      }
    } else {
      this.scores[this._frame][1] = pins
      this._nextFrame();
    };
  },

  totalScore: function() {
    var score;
    score = 0
    var i;
    for(i = 1; (i < this.getCurrentFrame() && i < 11); i ++) {
      score += this.frameScore(i)
    };
    return score;
  },

  getCurrentFrame: function() {
    return this._frame;
  },

  frameScore: function(frame) {
    if(this._isStrike(frame)) {
      return this.strikeScore(frame);
    } else if(this._isSpare(frame)) {
      return this.spareScore(frame);
    } else {
      return this.standardScore(frame);
    }
  },

  standardScore: function(frame) {
    return this.scores[frame].reduce((a,b) => a + b, 0)
  },

  spareScore: function(frame) {
    return 10 + this.scores[frame + 1][0]
  },

  strikeScore: function(frame) {
    if(this._isStrike(frame + 1)) {
      return 20 + this.scores[frame + 2][0]
    }
    return 10 + this.standardScore(frame + 1)
  },

  frameDisplay: function(frame) {
    if(this._isStrike(frame)) {
      return 'X'
    }else if(this._isSpare(frame)) {
      return '/'
    } else {
      return this.standardScore(frame);
    }
  },

  _nextFrame: function() {
    if((this._isStrike(10) && this.getCurrentFrame() == 12) || (this._isSpare(10) && this.getCurrentFrame() == 11) || (this._isStandard(10) && (this.scores[10][1] !== false))) {
      this.gameOver = true
      return
    }
    this._frame++
  },

  _isStrike: function(frame) {
    if(this.scores[frame][0] == 10) { return true }
  },

  _isSpare: function(frame) {
    if(this.standardScore(frame) == 10 && this.scores[frame][1] != 0) { return true }
  },

  _isStandard: function(frame) {
    if(this.standardScore(frame) < 10) { return true }
  },
};
