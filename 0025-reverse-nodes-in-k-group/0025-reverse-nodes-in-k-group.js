/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}  
 */
var reverseKGroup = function(head, k) 
{
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;

    while(curr != null)
    {
        let tail = curr;
        let count = 0;

      while(curr != null && count < k)
      {
        curr = curr.next;
        count++;
      }
      if(count < k)
      {
        prev.next = tail;
      }
      else
      {
        prev.next = reverseLL(tail,k);
        prev = tail;
      }
    }
    return dummy.next;
}

function reverseLL(groupHead, k)
{
    let prev = null;
    let curr = groupHead;
    let count = 0;

    while(groupHead != null && count < k)
    {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
        count++
    }
    return prev;
}