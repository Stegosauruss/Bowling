'use strict';

describe('Bowling:', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling()
  });

  describe('#totalScore', function() {
    it('the score starts at 0', function(){
      expect(bowling.totalScore()).toEqual(0)
    });

    it('after a frame the total score is increased', function(){
      bowling.throw(3)
      bowling.throw(4)
      expect(bowling.totalScore()).toEqual(7)
    });

    it('after two frames the score has increased', function(){
      bowling.throw(3)
      bowling.throw(4)
      bowling.throw(2)
      bowling.throw(7)
      expect(bowling.totalScore()).toEqual(16)
    });
  });

  describe('#getCurrentFrame', function() {
    it('after a frame the frame is increased', function(){
      bowling.throw(3)
      bowling.throw(4)
      expect(bowling.getCurrentFrame()).toEqual(2)
    });
  });

  describe('#frameDisplay', function() {
    it('after a standard frame', function(){
      bowling.throw(5)
      bowling.throw(2)
      expect(bowling.frameDisplay(1)).toEqual(7)
    });

    it('after a spare', function(){
      bowling.throw(5)
      bowling.throw(5)
      expect(bowling.frameDisplay(1)).toEqual('/')
    });
  });
});
