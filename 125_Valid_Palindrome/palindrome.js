/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newStr= s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    
    for (let i = 0; i < newStr.length; i++) {
        if((newStr.charAt(i)!==newStr.charAt(newStr.length-i-1))){
            return false;
        }
    }

    return true;   
};


// var isPalindrome = function(s) {
//     let sLow=s.toLowerCase();
//     let newStr = sLow;
        
//     for (let i = 0; i < sLow.length; i++) {
//         if(!isAlphaNumeric(sLow.charCodeAt(i))){
//             newStr=newStr.replace(sLow.charAt(i),'');
//         }
//     }
    
//     for (let i = 0; i < newStr.length; i++) {
//         if((newStr.charAt(i)!==newStr.charAt(newStr.length-i-1))){
//             return false;
//         }
//     }
//     return true;
        
// };

// function isAlphaNumeric(code) {
//     return !(!(code > 47 && code < 58) && !(code > 96 && code < 123));
// };
    