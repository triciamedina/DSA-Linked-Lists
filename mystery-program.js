// This function removes duplicates from a linked list
//

function WhatDoesThisProgramDo(lst) {
    // Start at the head
    let current = lst.head;
    // While current is not null
    while (current !== null) {
        // Set new node to current node
        let newNode = current;
        // While the next node is not null
        while (newNode.next !== null) {
            // If the value of the next node is equal to current node
            if (newNode.next.value === current.value) {
                // Set the pointer of the new node to two nodes away
                newNode.next = newNode.next.next;
            }
            else {
                // Otherwise move to next 
                newNode = newNode.next;
            }
        }
        // Move to next
        current = current.next;
    }
}