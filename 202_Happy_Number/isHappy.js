/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n){
    const myMap = new Map();

    while (n!=1) {
        let sum = 0;
        let numbers = String(n).split('').map(Number);
        
        numbers.forEach((number) => {sum=sum+(number*number)});

        if(myMap.has(sum)){
            return false;
        }

        myMap.set(sum,false);
        n=sum;
    }

    return true;
}