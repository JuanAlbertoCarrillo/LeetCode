/**
 * @param {number} k
 */
let MyCircularQueue = function(k) {
    this.q = [];
    this.size = k;
    this.tail = -1;
    this.head = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()){
        return false;
    }else{

        if(this.head===-1){
            this.head=this.head+1;
        }

        this.tail=this.tail+1;
        this.q[this.tail]=value;

        if(this.tail===this.size-1){
            this.tail=-1;
        }

        return true;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()){
        return false;
    }else{

        // Check if head has reached tail [0,0], [1,1], ... [n,n].
        if(this.head===this.tail){ 
            // As head has reached tail, queue will be empty so we reset values.
            this.head=-1;
            this.tail=-1;
        }else{
            if(this.head===-1){         // Validate Head dead zone (-1).
                this.head=this.head+1;  // Set to element [0] of array to be dequeue.
            }
            this.head=this.head+1;      // Point head to next element on queue, as prevuious head was dequeued.
            if(this.head>=this.size){   // As we reached the size, send Head to dead zone
                this.head=-1;
            }
        }
        
        return true;
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()){
        return -1;
   }else if(this.head===-1){
       return this.q[this.head+1];
   }else{
       return this.q[this.head];
   }
};

/**
 * Gets the last item from the queue. If the queue is empty, return -1
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()){
        return -1;
    }else if(this.tail===-1){       // Validate Tail dead zone (-1).
        return this.q[this.size-1]; 
    }else{
        return this.q[this.tail];    
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return(this.tail===-1 && this.head===-1)
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.tail===this.head-1);
};
