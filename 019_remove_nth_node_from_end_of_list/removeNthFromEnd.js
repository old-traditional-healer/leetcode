/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let right = head, // 右指针
        left = head; // 左指针

    // 1, 右指针移动 n 位
    for (let i = 0; i < n; i++) {
        right = right.next;
    }

    // !! 如果 right = null, 表示需要删除头结点
    if (right === null) {
        return head.next;
    }

    // 2, 左右同时移动，直至右指针到最后，此刻左指针即要删除的指针
    while (right.next != null) {
        left = left.next;
        right = right.next;
    }

    // 3, 删除指针
    left.next = left.next.next;

    return head;
};