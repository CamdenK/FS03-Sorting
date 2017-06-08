var split = function(wholeArray){
  if(wholeArray.length > 1)
  {
    var half = Math.ceil(wholeArray.length /2)
    return[wholeArray.slice(0,half),wholeArray.slice(half)]
  }
  return
}

var merge = function(leftArr,rightArr)
{
  var out = []
  var leftVal
  var rightVal
  while(leftArr.length && rightArr.length)
  {
    leftVal = leftArr[0]
    rightVal = rightArr[0]
    if( leftVal < rightVal)
    {
      out.push(leftArr.shift())
    }
    else
    {
      out.push(rightArr.shift())
    }
  }
  return out.concat(leftArr).concat(rightArr)
}

var mergeSort = function(array)
{
  if(array.length < 2)
  {
    return array
  }
  var halves = split(array)

  return merge(mergeSort(halves[0]),mergeSort(halves[1]))

}
