// vue keep-alive 实现最大缓存组件数量 剔除最不常用组件原理
// 思路 利用Map的keys方法返回一个新的迭代对象，其中包含 Map 对象中所有的键，并以插入 Map 对象的顺序排列
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.cache = new Map()
  this.max = capacity
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
      let val = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, val)
      return val
  }
  return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
      this.cache.delete(key)
  } else if(this.cache.size >= this.max) {
      this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key, value)
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/