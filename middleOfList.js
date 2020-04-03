// Write an algorithm to find the middle element of 
// a linked list. Note You may be tempted to add a 
// length property to your linked list class. The 
// length property is not a typical property of 
// linked list, therefore don't make any 
// modification to the linked list class that is 
// provided to you. Also, finding the size of the 
// linked list using the size() function and 
// dividing it by half will not find the correct 
// middle of the linked list. So, don't use either 
// of these approaches.

const LinkedList = require('./linked-list')

function main() {
    let SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.insertLast('Frodo');
    SLL.insertLast('Sam');
    SLL.insertLast('Pippin');
                            
    // Apollo -> Boomer -> Helo -> Husker -> Starbuck -> Tauhida -> Frodo -> Sam
    //                              middle
    //                                                              end

    const middleOfList = function(lst) {
        let middle = lst.head;
        let end = lst.head;

        while (end.next && end.next.next) {
            let prevMiddle = middle;
            let prevEnd = end;
            middle = prevMiddle.next;
            end = prevEnd.next.next;
        }

        return middle.value;
    }

    console.log(middleOfList(SLL))
              
}

main()