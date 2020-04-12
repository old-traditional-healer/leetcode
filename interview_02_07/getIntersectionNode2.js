// 暴力法

var getIntersectionNode = function(headA, headB) {
  if (headA==null||headB==null){
    //若有一个链表为空，则不可能有相交
    return null
  }
  let curA = headA
  let curB = headB
  while (curA !==null && curA.next !== null ) {
    curB=headB
    while(curB!==null && curB.next !==null) {
      if(curA==curB){
        return curA
      }
      curB = curB.next
    }
    curA = curA.next
  }
  return null
}

// 保存引用法

var getIntersectionNode = function(headA, headB) {
  const set = new Set()
  let curA = headA
  while(curA !== null) {
    set.add(curA)
    curA = curA.next
  }
  let curB=headB
  while(curB !== null) {
    if(set.has(curB)) {
      return curB
    }
    curB = curB.next
  }
  return null
}