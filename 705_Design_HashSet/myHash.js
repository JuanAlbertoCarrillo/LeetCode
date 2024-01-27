const MAX_KEY_SIZE = 1000000;

var MyHashSet = function() {
    this.values = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MyHashSet.prototype.add = function(value) {
    if(value<=MAX_KEY_SIZE){
        let key = (value%MAX_KEY_SIZE);
        this.values[key]=value;
    }
};

/** 
 * @param {number} value
 * @return {void}
 */
MyHashSet.prototype.remove = function(value) {
    if(value<=MAX_KEY_SIZE){
        let key = (value%MAX_KEY_SIZE);
        this.values[key]=0;
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(value) {
    if(value<=MAX_KEY_SIZE){
        let key = (value%MAX_KEY_SIZE);
        return this.values[key]===value;
    }
};