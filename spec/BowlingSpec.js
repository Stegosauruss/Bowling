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

  it('after a frame the frame is increased', function(){
    bowling.throw(3)
    bowling.throw(4)
    expect(bowling.getCurrentFrame()).toEqual(2)
  });
});