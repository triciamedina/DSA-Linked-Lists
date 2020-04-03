// Write an algorithm to find whether a linked list has a cycle (i.e., whether
// a node in the list has its next value pointing to an earlier node in the 
// list). For this exercise, create a linked list with the name CycleList. Be 
// sure to insert nodes in the list so that it has a cycle. Then test your 
// program with a cycleList function.

const LinkedList = require('./LinkedList')

function main() {
    let CycleList = new LinkedList();

    CycleList.insertFirst('Apollo'); 
    CycleList.insertLast('Boomer');  
    CycleList.insertLast('Helo');
    CycleList.insertLast('Husker');
    CycleList.insertLast('Starbuck');// prev 
    CycleList.insertLast('Tauhida');// current

    let head = CycleList.head;
    let prev = null;
    let current = head;
    while (current.next) {
        prev =  current;
        current = prev.next;
    }
    current.next = head;            
    // Apollo -> Boomer -> Helo -> Husker -> Starbuck -> Tauhida 
    //    i                                                                                                                              
    //    j                                                                                                                                                                                                                                 

    const isACycle = function(lst) {
        let i = lst.head;
        let j = lst.head;

        while(j.next && j.next.next) {
            let prevI = i;
            i = prevI.next;
            let prevJ = j;
            j = prevJ.next.next;
            if (i.value === j.value) {
                console.log(i, j)
                return true;
            }
        }
        console.log(i, j)
        return false;
    }

    console.log(isACycle(CycleList))    
}

main()