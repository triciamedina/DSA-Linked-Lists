// Write an algorithm to find the 3rd element from the end 
// of a linked list. Note You may be tempted to add a 
// length property to your linked list class. The length 
// property is not a typical property of linked list, 
// therefore don't make any modification to the linked 
// list class that is provided to you.

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
    // SLL.insertLast('Starbuck');
    // SLL.insertLast('Tauhida');
    // SLL.insertLast('Sam Gamgee')
    //                               X
    // Apollo -> Boomer -> Helo -> Husker -> Starbuck -> Tauhida

    const thirdFromEnd = function(lst) {
        let previous = null; //Apollo//Boomer//helo//Husker
        let current = lst.head; // Apollo //Boomer//Helo//Husker//Starbuck
        
        while(current.next.next) {
            previous = current;
            current = previous.next;
        }

        return previous.value;
    }

    console.log(thirdFromEnd(SLL))
              
}

main()