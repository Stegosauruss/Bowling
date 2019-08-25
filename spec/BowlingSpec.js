'use strict';

describe('Bowling:', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling()
  });

  it('the score starts at 0', function(){
    expect(bowling.getCurrentScore()).toEqual(0)
  });

  it('after a frame the score is increased', function(){
    bowling.throw(3)
    bowling.throw(4)
    expect(bowling.getCurrentScore()).toEqual(7)
  });

  it('after two frames the score has increased', function(){
    bowling.throw(3)
    bowling.throw(4)
    bowling.throw(2)
    bowling.throw(7)
    expect(bowling.getCurrentScore()).toEqual(16)
  });

  it('after a frame the frame is increased', function(){
    bowling.throw(3)
    bowling.throw(4)
    expect(bowling.getCurrentFrame()).toEqual(2)
  });

  it('after a spare / is shown', function(){
    bowling.throw(5)
    bowling.throw(5)
    expect(bowling.frameDisplay(1)).toEqual('/')
  });
});