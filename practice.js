const LinkedList = require('./linked-list')

const findLoop = function(node) {
    let runner1 = node;
    let runner2 = node;

    while (true) {
        if(!node.next) {
            return false;
        }

        runner1 = node.next;
        runner2 = node.next.next;

        if(!runner2) {
            return false;
        }
        
        const isEqual = runner1 === runner2;

        if (isEqual) {
            return true;
        }
    }
}