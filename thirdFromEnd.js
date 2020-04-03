// Write an algorithm to find the 3rd element from the end 
// of a linked list. Note You may be tempted to add a 
// length property to your linked list class. The length 
// property is not a typical property of linked list, 
// therefore don't make any modification to the linked 
// list class that is provided to you.

const LinkedList = require('./LinkedList')

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