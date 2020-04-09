
function ListNode(val) {
  this.val = val;
  this.next = null;
}


var hasCycle = function(head) {
  const wp = new WeakMap()
  while (head) {
    if (wp.has(head)) {
      return true
    } else {
      wp.set(head)
    }
    head = head.next
  }
  return false
}