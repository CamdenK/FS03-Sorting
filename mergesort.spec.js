describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])
  });
  it('is able to split an array with an odd number of values', function(){
    expect(split([1,2,3,4,5])).toEqual([[1,2,3],[4,5]])
  });
});

describe('Merge Array function', function() {
  it('combines two sorted arrays', function(){
    expect(merge([1,2],[3,4])).toEqual([1,2,3,4])
  })
  it('properly adds to sorted arrays that are non sequential', function(){
    expect(merge([1,2,4],[3,5,6])).toEqual([1,2,3,4,5,6])
  })
})

describe('MergeSort function', function(){
  it ('returns an empty array when an empty array is passed', function(){
    expect(mergeSort([])).toEqual([])
  })
  it('returns the same array when a single value is passed', function(){
    expect(mergeSort([1])).toEqual([1])
  })
  it('properly sorts an array with a ton of values and repeats', function(){
    expect(mergeSort([4,77,2,409,2,4,70])).toEqual([ 2, 2, 4, 4, 70, 77, 409 ])
  })
})
