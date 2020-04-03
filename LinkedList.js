class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, key) {

        let currNode = this.head;
        let previousNode = this.head;

        // If key points to head
        if (key === 0) {
            this.insertFirst(item)
        }
        else {
            let count = 0;
            // Count to node
            while (count < key) {
                // Return null if key isn't found
                if (currNode.next === null) {
                    return null;
                }
                else {
                    count++;
                    previousNode = currNode
                    currNode = currNode.next
                }
            }
            // Insert new node
            previousNode.next = new _Node(item, currNode);
        }
    }

    insertAfter(item, key) {

        let currNode = this.head;
        let previousNode = this.head;
        
        // Count to node
        let count = 0;

        while (count <= key) {

            // Return null if key isn't found
            if (currNode === null) {
                return null;
            }
            else {
                count++;
                previousNode = currNode
                currNode = currNode.next
            }
        }

        // If key refers to last item
        if (currNode === null) {
            // Insert new node and set next pointer to null
            previousNode.next = new _Node(item, null);
        }
        else {
            // Otherwise, insert new node and set next pointer to next node
            previousNode.next = new _Node(item, currNode);
        }
    }

    insertAt(item, key) {
        // Keep track of previous
        let previousNode = this.head; 
        // Start at head
        let currNode = this.head;
        // Keep track of next
        let nextNode = this.head;

        // If key points to head
        if (key === 0) {
            // Insert node at head and set pointer to the next node
            this.head = new _Node(item, this.head.next)
        }
        else {
            // Count to node
            let count = 0;
            
            while (count < key) {
                // Return null if key isn't found
                if (nextNode === null) {
                    return null;
                }
                else {
                    count++;
                    previousNode = currNode 
                    currNode = currNode.next 
                    nextNode = currNode.next
                }
            }

            // key points to last item
            if (nextNode === null) {
                // Insert new node and set next pointer to null
                previousNode.next = new _Node(item, null);
            }
            else {
                // Otherwise, insert new node and set next pointer to next node
                previousNode.next = new _Node(item, nextNode);
            }
        }
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

module.exports = LinkedList;