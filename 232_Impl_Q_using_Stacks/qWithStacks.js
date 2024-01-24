/**
 * Implement a first in first out (FIFO) queue using only two stacks. 
 * The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 * Implement the MyQueue class:
 *   void push(int x) Pushes element x to the back of the queue.
 *   int pop() Removes the element from the front of the queue and returns it.
 *   int peek() Returns the element at the front of the queue.
 *   boolean empty() Returns true if the queue is empty, false otherwise.
 *  
 * Notes:
 * You must use only standard operations of a stack, which means only push to top, 
 * peek/pop from top, size, and is empty operations are valid.
 * 
 * Depending on your language, the stack may not be supported natively. 
 * You may simulate a stack using a list or deque (double-ended queue) 
 * as long as you use only a stack's standard operations.
 */
class Stack{
    constructor(){
        this.stack = [];
    }
    
    //push
    pushStack(element){
        this.stack.push(element);
    }

    //pop
    popStack(){
        if(!this.isEmpty()){
            return this.stack.pop();
        }
    }

    //peek
    peekStack(){
        if(!this.isEmpty()){
            return this.stack[this.stack.length-1];
        } 
    }
    //isEmpty
    isEmpty(){
        return (this.stack.length===0);
    }
}


var MyQueue = function() {
    this.q = new Stack();
    this.qRev = new Stack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.q.pushStack(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.qRev.isEmpty()){
        return this.qRev.popStack();
    }else if(!this.q.isEmpty()){
        while(!this.q.isEmpty()){
            this.qRev.pushStack(this.q.popStack());
        }
        return this.qRev.popStack();
    }
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.qRev.isEmpty()){
        return this.qRev.peekStack();
    }else if(!this.q.isEmpty()){
        while(!this.q.isEmpty()){
            this.qRev.pushStack(this.q.popStack());
        }
        return this.qRev.peekStack();
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (this.q.isEmpty()&&this.qRev.isEmpty());
};
