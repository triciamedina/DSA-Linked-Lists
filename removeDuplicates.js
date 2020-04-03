// Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.

// 1->4->7->7->7

const LinkedList = require('./LinkedList');

let sortedList = new LinkedList();
sortedList.insertLast(1);
sortedList.insertLast(4);
sortedList.insertLast(7);
sortedList.insertLast(7);
sortedList.insertLast(7);
sortedList.insertLast(7);

function removeDuplicates(lst) {
  let previous = lst.head; // 1
  let current = previous.next; // 4
  let next = current.next; // 7 
  while (next) {
    if (previous.value === current.value) {
      previous.next = next;
      current = next;
      next = current.next;
    } else {
      previous = current;
      current = previous.next;
      next = current.next;
    }
  }
  if (previous.value == current.value) {
    previous.next = null;
  }
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

console.log(display(removeDuplicates(sortedList)));