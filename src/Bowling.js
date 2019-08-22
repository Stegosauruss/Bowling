'use strict';

function Bowling(){
  this.STARTING_SCORE = 0
  this._score = this.STARTING_SCORE
  this._frame = 1
  this._firstThrow = false
  this._secondThrow = false
};

Bowling.prototype = {
  getCurrentScore: function() {
    return this._score;
  },

  getCurrentFrame: function() {
    return this._frame;
  },

  throw: function(pins) {
    if(this._firstThrow === false) {
      this._firstThrow = pins;
    } else {
      this._secondThrow = pins;
      this._endFrame();
    };
  },

  _endFrame: function() {
    this._frame++
    this._score += this._firstThrow + this._secondThrow
    this._firstThrow = false
    this._secondThrow = false
  },
};
