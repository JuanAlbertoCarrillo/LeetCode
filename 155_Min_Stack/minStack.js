var MinStack = function() {
    this.stack = [];
    this.headStack = 0;
    this.minValStack = [];
    this.headMinStack = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.isEmpty()){
        this.minValStack[this.headMinStack]=val;
        this.headMinStack=this.headMinStack+1;
    }else{
        if(val<=this.minValStack[this.headMinStack-1]){
            this.minValStack[this.headMinStack]=val;
            this.headMinStack=this.headMinStack+1;
        }
    }
    this.stack[this.headStack]=val;
    this.headStack=this.headStack+1;
};

/**
 * @return {number}
 */
MinStack.prototype.isEmpty = function(){
    return (this.headStack===0);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

    if(!this.isEmpty()){
        if(this.stack[this.headStack-1]===this.minValStack[this.headMinStack-1]){
            this.minValStack.pop();
            this.headMinStack=this.headMinStack-1;
        }
        this.stack.pop();
        this.headStack=this.headStack-1;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.isEmpty()){
        return null;
    }else{
        return this.stack[this.headStack-1];
    } 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minValStack[this.headMinStack-1];
};

//_________________________________________________________:::::::: OTHER SOLUTIONS


// var MinStack = function() {
//     this.stack =[];
//     this.min_stack = [];
//     };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
//     this.stack.push(val)
//     if(this.min_stack.length===0||  val <= this.getMin()){
//         this.min_stack.push(val);
//     }
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//    const popped = this.stack.pop();
//     if(popped === this.getMin()){
//         this.min_stack.pop()
//     }
//     return popped;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     if(this.stack.length===0){
//         return -1;
//     }
//     else{
//         return this.stack[this.stack.length-1];
//     }
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     if(this.min_stack.length===0){
//         return -1;
//     }
//     else{
//         return this.min_stack[this.min_stack.length-1];
//     }
// };



//---------------------------------------------------------------------------------

// var MinStack = function () {
//     this.arr = [];
//     this.min = [];
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function (val) {
//     this.arr.push(val);
//     this.min.push(!this.min.length || val < this.min[this.min.length - 1] ? val : this.min[this.min.length - 1]);
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//     this.arr.pop();
//     this.min.pop();
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//     return this.arr[this.arr.length - 1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//     return this.min[this.min.length - 1];
// };
