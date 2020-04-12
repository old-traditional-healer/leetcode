// 双指针

const getIntersectionNode = function(headA, headB) {
  if (headA == null || headB == null) {
    return null
  }
  let curA = headA
  let curB = headB
  while( curA !== curB ) {
    curA = (curA==null) ? headB : curA.next
    curB = (curA==null) ? headA : curB.next

  }
  return curA
}