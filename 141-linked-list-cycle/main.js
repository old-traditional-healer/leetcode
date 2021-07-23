/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slow = fast = head

    while (slow !== null && fast !== null) {
        if (fast.next === null) return false

        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            return true
        }
    }

    return false
};
