// 本来思路是把链表接在一起，然后判断是否有环，但是leetcode不让我改，算了。

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let tmp = headA
  while(tmp.next !== null) {
    tmp = tmp.next
  }
  tmp.next = headB
  console.log(headA)
  return judegeCircle(headA)
};

// // 判断链表是否有环
// var judegeCircle = function(node) {
//   let map = new Map()
//   while(node !== null) {
//     if(map.has(node)) return true
//     map.set(node)
//     node = node.next
//   }
// }

// 判断有环2 

var judegeCircle = function(node) {
  if(node == null || node.next == null) return false
  let slow = node
  let fast = node.next
  while(fast !== null && fast.next!==null ) {
    if(slow === fast) return true
    slow = slow.next
    fast = fast.next.next
  }
  return false
}

var a =  new ListNode('1')
var b =  new ListNode('2')

var c =  new ListNode('3')
var d =  new ListNode('4')
a.next = b
c.next = d


console.log('a', a, c)
getIntersectionNode(a, c)
