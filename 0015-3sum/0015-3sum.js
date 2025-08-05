/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) 
{
      const freq = new Map();
    const result = new Set();

    for (const num of nums) 
    {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const unique = Array.from(freq.keys());

    if (freq.get(0) >= 3) 
    {
        result.add("0,0,0");
    }
    for (const x of unique) 
    {
        if (freq.get(x) >= 2) 
        {
            const y = -2 * x;
            if (y !== x && freq.has(y)) 
            {
                const triplet = [x, x, y].sort((a, b) => a - b);
                result.add(triplet.toString());
            }
        }
    }
    for (let i = 0; i < unique.length; i++) 
    {
        const a = unique[i];
        for (let j = i + 1; j < unique.length; j++) 
        {
            const b = unique[j];
            const c = -a - b;
            if (!freq.has(c)) continue;

            if ((c === a || c === b) && freq.get(c) < 2) continue;
            if (c === a && c === b && freq.get(c) < 3) continue;

            const triplet = [a, b, c].sort((x, y) => x - y);
            result.add(triplet.toString());
        }
    }

    return Array.from(result).map(str => str.split(',').map(Number));
}