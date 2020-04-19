function ListNode(val) {
  this.val = val;
  this.next = null;
}
// 暴力
var getKthFromEnd = function(head, k) {
  let length = 0
  let tmp = head
  let res = null
  while(tmp) {
    length ++
    tmp = tmp.next
  }

  let tmp2 = head
  let index = 0
  while(tmp2) {
    if(index === length - k )  { 
      return tmp2
    }
    index ++
    tmp2 = tmp2.next
  }
}

// 快慢指针

var getKthFromEnd = function(head, k) {
  let slow = head
  let fast = head
  let step = 0
  while(step !== k) {
    fast = fast.next
    step++
  }
  while(fast != null){
    fast = fast.next;
    slow = slow.next;
  }
  return slow
}

var a =  new ListNode('1')
var b =  new ListNode('2')

var c =  new ListNode('3')
var d =  new ListNode('4')

c.next = d
b.next = c
a.next = b

getKthFromEnd(a, 2)