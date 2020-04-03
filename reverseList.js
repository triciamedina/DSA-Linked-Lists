// Reverse a list
// Write an algorithm to reverse a linked list. 
// The time complexity of your algorithm should be linear (O(n)). 
// For this exercise, notice we are not asking you just to print 
// the linked list in reverse or use another linked list to store 
// the value in reverse order. Your program should reverse the 
// direction of a given singly linked list. In other words, all 
// pointers should point backward. BONUS: Solve this problem using 
// both recursive and iterative algorithms.

const LinkedList = require('./linked-list')

function main() {
    let SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');

    const reverseList = function(lst) {
        let previous = null; 
        let current = lst.head; 
        let next = current; 
        while (current) {
            next = current.next; 
            current.next = previous; 
            previous = current; 
            current = next; 
        }
        lst.head = previous;
        return lst;
    }

    // Apollo -> Boomer -> Helo -> Husker -> Starbuck -> Tauhida

    function reverseLstRecursive(lst, previous=null, current=lst.head, next=current) {
        // previous = previous || null; 
        // current = current || lst.head; 
        // next = next || current; 
        
        if (!current) {
            lst.head = previous;
        } else {
            next = current.next; 
            current.next = previous; 
            previous = current; 
            current = next; 
            return reverseLstRecursive(lst, previous, current, next)
        }

        lst.head = previous;
        return lst;
    }
    
    const display = function(linkedList, arr) {
        arr = arr || [];

        // Edge case (if list is empty)
        if (!linkedList.head && !linkedList.value) {
            return arr;
        }

        // Base case
        if (linkedList.value && !linkedList.next) {
            arr.push(linkedList.value);
        }

        if (linkedList.head) {
            if (linkedList.head.next) {
                arr.push(linkedList.head.value);
                return display(linkedList.head.next, arr);
            }
        }

        if (linkedList.next) {
            arr.push(linkedList.value);
            return display(linkedList.next, arr);
        }

        return arr;
    }

    console.log(display(reverseLstRecursive(SLL)))
              
}

main()