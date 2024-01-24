/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 * Example 1:
 * Input: s = "()"
 * Output: true
 * 
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Example 3:
 * Input: s = "(]"
 * Output: false
 * 
 * Constraints:
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 */
class Stack{
    constructor(){
        this.stack = [];
        this.head = 0;
    }
    
    //push
    pushStack(element){
        this.stack[this.head]=element;
        this.head=this.head+1;
    }

    //pop
    popStack(){
        if(!this.isEmpty()){
            this.stack.pop();
            this.head=this.head-1;
        }
    }

    //peek
    peekStack(){
        if(this.isEmpty()){
            return null;
        }else{
            return this.stack[this.head-1];
        } 
    }

    isEmpty(){
        return (this.head===0);
    }
}

function isValid(inStr){
    let myStack = new Stack();
    let isOpen=false;
    if(inStr.length>1 && inStr.length%2===0){
        for(let i=0; i<inStr.length; i++){
            // console.log("----------------------------------Run: " + i)
            let parenthesis = inStr.charAt(i);
            if(parenthesis==='(' || parenthesis==='[' || parenthesis==='{' ){
                myStack.pushStack(parenthesis);
                isOpen=true;
            }else{
                if(i===0){
                    return false
                }else{
                    
                    let parenthesisOnTop = myStack.peekStack();
                    
                    if(parenthesisOnTop==='{' && parenthesis==='}'){
                        isOpen=false;
                        myStack.popStack();
                    }else if(parenthesisOnTop==='[' && parenthesis===']'){
                        isOpen=false;
                        myStack.popStack();
                    }else if(parenthesisOnTop==='(' && parenthesis===')'){
                        isOpen=false;
                        myStack.popStack();
                    }else{
                        return false;
                    }
                } 
            } 
        }
        console.log(myStack.head)
        if(isOpen || myStack.head>0){
            return false;
        }

        return true;

    }else{
        return false;
    }
}

let inStr_1 = "[[[]";
console.log(inStr_1)
console.log(isValid(inStr_1))

//_________________________________________________________:::::::: OTHER SOLUTIONS

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//     const stack = [];
//     const brackets = {
//         '(': ')',
//         '{': '}',
//         '[': ']',
//     };

//     for (let char of s) {
//         if (brackets[char]) {
//             stack.push(char);
//         } else {
//             const last = stack.pop();
//             if (brackets[last] !== char) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// };


//---------------------------------------------------------------------------------

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     let arr=[];

//     for(let i=0;i<s.length;i++){
//       if(s.charAt(i) =='(' || s.charAt(i) =='{' || s.charAt(i) =='['){
//             arr.push(s.charAt(i));
//       }
//       else{
//         if(arr.length >0 && s.charAt(i) ==')' && arr[arr.length -1] =='('){
//           arr.pop();
//         }
//         else if( arr.length >0 && s.charAt(i) =='}' && arr[arr.length -1] =='{'){
//           arr.pop();
//         }
//         else if(arr.length >0 && s.charAt(i) ==']' && arr[arr.length -1] =='['){
//           arr.pop();
//         }else
//         return false;
//       }
//     }
//     if(arr.length == 0){
//         return true;
//       }
//       else{
//         return false;
//       }

// };