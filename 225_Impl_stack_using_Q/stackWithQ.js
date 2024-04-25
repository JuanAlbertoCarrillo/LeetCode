class MyQueue {
    constructor(){
        this.q = [];
    }

    enqueue(element){
        this.q.push(element);
    }

    dequeue(){
        let dqElement=null;
        if(this.q.length>0){
            dqElement=this.q[0];
            this.q=this.q.slice(1,this.q.length);
        }
        return dqElement;
    }

    isEmpty(){
        return (this.q.length===0)
    }

    peek(){
        return this.q[0];
    }

    getSize(){
        return this.q.length;
    }

    getLast(){
        return this.q[this.q.length-1]
    }

};

var MyStack = function() {
    this.q1 = new MyQueue();
    this.q2 = new MyQueue();
    this.last =null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    if(this.q1.isEmpty() && !this.q2.isEmpty()){
        this.q2.enqueue(x);
        this.last=x;
    }else if(!this.q1.isEmpty() && this.q2.isEmpty()){
        this.q1.enqueue(x);
        this.last=x;
    }else if(this.q1.isEmpty() && this.q2.isEmpty()){
        this.q1.enqueue(x);
        this.last=x;
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let q1Size = this.q1.getSize();
    let q2Size = this.q2.getSize();

    if(q1Size===q2Size){
        //Do nothing, queues are empty.
    }else if(q1Size>q2Size){
        return transfer(this.q1,this.q2);
    }else if(q1Size<q2Size){
        return transfer(this.q2,this.q1);
    } 
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let q1Size = this.q1.getSize();
    let q2Size = this.q2.getSize();

    if(q1Size===q2Size){
        //Do nothing, queues are empty.
    }else if(q1Size>q2Size){
        return this.q1.getLast();
    }else if(q1Size<q2Size){
        return this.q2.getLast();
    }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return (this.q1.isEmpty() && this.q2.isEmpty())
};

function transfer( fromQueue, toQueue){
    let dequeueElement = null;
    while(fromQueue.getSize()>1){
        dequeueElement = fromQueue.dequeue();
        toQueue.enqueue(dequeueElement);
    }
    if(fromQueue.getSize()===1){
        dequeueElement = fromQueue.dequeue();
    }
    return dequeueElement;
}