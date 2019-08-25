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

    it('after one frame', function(){
      bowling.throw(3)
      bowling.throw(4)
      expect(bowling.totalScore()).toEqual(7)
    });

    it('after two frames', function(){
      bowling.throw(3)
      bowling.throw(4)
      bowling.throw(2)
      bowling.throw(7)
      expect(bowling.totalScore()).toEqual(16)
    });

    it('after a spare', function(){
      bowling.throw(3)
      bowling.throw(7)
      bowling.throw(2)
      expect(bowling.totalScore()).toEqual(12)
    });

    it('after a standard strike', function() {
      bowling.throw(10);
      bowling.throw(2);
      bowling.throw(3);
      expect(bowling.totalScore()).toEqual(20)
    })
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

    it('after a strike', function(){
      bowling.throw(10)
      expect(bowling.frameDisplay(1)).toEqual('X')
    });
  });
});
