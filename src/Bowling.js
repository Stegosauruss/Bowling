'use strict';

function Bowling(){
  this._frame = 1;
  this._scores = [[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null]];
};

Bowling.prototype = {
  totalScore: function() {
    var score;
    score = 0
    var i;
    for(i = 1; i < this.getCurrentFrame(); i ++) {
      score += this.frameScore(i)
    };
    return score;
  },

  getCurrentFrame: function() {
    return this._frame;
  },

  frameScore: function(frame) {
    return this._scores[frame - 1].reduce((a,b) => a + b, 0)
  },

  throw: function(pins) {
    if(this._scores[this._frame - 1][0] === null) {
      this._scores[this._frame - 1][0] = pins
    } else {
      this._scores[this._frame - 1][1] = pins
      this._frame++
    };
  },

  frameDisplay: function(frame) {
    if(this.frameScore(frame) == 10) {
      return '/'
    } else {
      return this.frameScore(frame);
    }
  }
};
