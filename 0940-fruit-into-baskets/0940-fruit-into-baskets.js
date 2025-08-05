/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) 
{
   let max = 0;
   let i = 0;
   const basket = new Map();

   for (let j = 0; j < fruits.length; j++) 
   {
        const fruit = fruits[j];
        basket.set(fruit, (basket.get(fruit) || 0) + 1);

        while (basket.size > 2) 
        {
            const leftFruit = fruits[i];
            basket.set(leftFruit, basket.get(leftFruit) - 1);

            if (basket.get(leftFruit) === 0) 
            {
                basket.delete(leftFruit);
            }
            i++;
        }

        max = Math.max(max, j - i + 1);
    }

    return max;

}
const fruits = [1, 2, 1, 2, 3];
console.log(totalFruit(fruits)); 