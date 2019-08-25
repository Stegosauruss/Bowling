'use strict';

function Bowling(){
  this._frame = 1;
  this.scores = [[],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null], [null,null]];
};

Bowling.prototype = {
  totalScore: function() {
    var score;
    score = 0
    var i;
    for(i = 1; i < this.getCurrentFrame(i); i ++) {
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

  _isStrike: function(frame) {
    if(this.scores[frame][0] == 10) { return true }
  },

  _isSpare: function(frame) {
    if(this.standardScore(frame) == 10) { return true }
  },

  throw: function(pins) {
    if(this.scores[this._frame][0] === null) {
      this.scores[this._frame][0] = pins
      if(pins == 10) {
        this.scores[this._frame][1] = 0
        this._frame++
      }
    } else {
      this.scores[this._frame][1] = pins
      this._frame++
    };
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
};
