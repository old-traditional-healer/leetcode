// @link https://leetcode-cn.com/problems/reverse-linked-list/
// 反转一个单链表。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let [pre, cur] = [null, head]

    while(cur) {
        let tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    }

    return pre
};
