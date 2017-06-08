describe('Bubble Sort', function(){
    beforeEach(function () {
        spyOn( window, 'swapping' ).and.callThrough();
    });
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect( window.swapping.calls.count()).toEqual(0)
  });
  it('handles single items', function () {
      expect( bubbleSort([1])).toEqual( [1]);
        expect( window.swapping.calls.count()).toEqual(0)
  });
  it('handles multiple items', function () {
      expect( bubbleSort([1,2,3,4])).toEqual( [1,2,3,4]);
    expect( window.swapping.calls.count()).toEqual(0)
      expect( bubbleSort([1,5,9,3,4])).toEqual( [1,3,4,5,9])
    expect( window.swapping.calls.count()).toEqual(4)
  });

});



