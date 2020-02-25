const LinkedList = require('./linked-list')

function main() {
    let SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');

    SLL.remove('Husker');

    SLL.insertBefore('Athena', 1);
    SLL.insertAfter('Hotdog', 3);
    SLL.insertAt('Kat', 3);

    SLL.remove('Tauhida');

    let empty = new LinkedList

    const display = function(linkedList) {
        // Bouncer case
        // If the linked list has neither head or value it is empty
        if (!linkedList.head && !linkedList.value) {
            return null
        }

        // Base case
        if (linkedList.value && !linkedList.next) {
            return `${linkedList.value}`
        }

        if (linkedList.head) {
            if (linkedList.head.next) {
                return `${linkedList.head.value}\n${display(linkedList.head.next)}`
            }
        }

        if (linkedList.next) {
            return `${linkedList.value}\n${display(linkedList.next)}`
        }
    }

    const size = function(linkedList) {
        // Bouncer case
        // If the linked list has neither head or value it is empty
        if (!linkedList.head && !linkedList.value) {
            return 0
        }

        // Base case
        // If the linkedList contains a value but the 
        // pointer to the next node is null then return 1
        if (linkedList.value && !linkedList.next) {
            return 1
        } else {
            // General case
            if (linkedList.head) {
                if (linkedList.head.next) {
                    return 1 + size(linkedList.head.next)
                    
                }
            }
    
            if (linkedList.next) {
                return 1 + size(linkedList.next)
            }
        }
    }

    const isEmpty = function(linkedList) {
        if (!linkedList.head && !linkedList.value) {
            return true
        }

        return false
    }

    const findPrevious = function(linkedList, item) {
        // Bouncer case
        // If the linked list has neither head or value it is empty
        if (!linkedList.head && !linkedList.value) {
            return null
        }
        // If the item is at the head, then return null
        // because there are no nodes before the head
        if (linkedList.head && (linkedList.head.value === item)) {
            return null
        }

        // Base case
        if (linkedList.value && (linkedList.next.value === item)) {
            return linkedList.value
        }

        if (linkedList.head) {
            return findPrevious(linkedList.head.next, item)
        } else {
            return findPrevious(linkedList.next, item)
        }
    }

    const findLast = function(linkedList) {
        // If the linked list has neither head or value it is empty
        if (!linkedList.head && !linkedList.value) {
            return null
        }

        // If head pointer is null it is the only node
        if (linkedList.head && !linkedList.head.next) {
            return linkedList.head.value 
        }

        // If node is not the head and pointer is null
        // it is the last item
        if (!linkedList.head && !linkedList.next) {
            return linkedList.value
        }

        // If node is the head
        if (linkedList.head) {
            // Pass next node to function
            return findLast(linkedList.head.next)
        } else {
            // Otherwise pass the next node to function
            return findLast(linkedList.next)
        }
    }

    console.log(findLast(SLL))
}

main()