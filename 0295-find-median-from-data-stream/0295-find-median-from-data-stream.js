var MedianFinder = function()
 {
    this.arr = [];
 }
 
MedianFinder.prototype.addNum = function(num) 
{
    for(let i = 0; i < this.arr.length; i++)
    {
        if(this.arr[i] > num)
        {
            this.arr.splice(i, 0, num);
            return;
        }
    }
    this.arr.push(num);
}
   
MedianFinder.prototype.findMedian = function() 
{
    let mid = (this.arr.length / 2) >> 0;
    if(this.arr.length % 2)
    {
        return this.arr[mid];
    }
    return (this.arr[mid] + this.arr[mid - 1]) / 2;
}