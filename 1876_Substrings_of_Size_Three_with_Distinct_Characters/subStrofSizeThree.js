/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    //number of good substrings found
    let goodSubString = 0;

    //validate s constraints
    if(s.length>=1 && s.length<=100){
        
        //pointer and defined size declaration to slice s string
        let left=0, right=0, size=3;

        //iterate over the string
        for(let i=0; i<s.length; i++){

            //define sub string limits
            left=i;
            right=i+size;
            
            //slice s to create substring
            let subString = s.slice(left, right);
            
            //break the code for substrings < specified size
            if(subString.length!==size){
                break;
            }

            // create a set (unique values) to identify if substring is good
            if(new Set(subString).size===size){

                //increment our goodSubString counter
                goodSubString++;
            }
        }
    }
    //return value
    return goodSubString;
};