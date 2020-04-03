// Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.

// 1->4->7->7->7

const LinkedList = require('./LinkedList');

let sortedList = new LinkedList();
sortedList.insertLast(7); //pr
sortedList.insertLast(7); 
sortedList.insertLast(7); 
sortedList.insertLast(7);
sortedList.insertLast(7);
sortedList.insertLast(7);// curr// next

function removeDuplicates(lst) {
  let previous = lst.head; // 7
  let current = previous.next; // 7
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

  if (previous.value === current.value) {
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
      arr.push(linkedList.head.value);
      if (linkedList.head.next) {
          return display(linkedList.head.next, arr);
      }
    }

    if (linkedList.next) {
        arr.push(linkedList.value);
        return display(linkedList.next, arr);
    }

    return arr;
}

display(removeDuplicates(sortedList));