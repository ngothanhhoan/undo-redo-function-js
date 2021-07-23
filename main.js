class UndoStack {
    constructor(){
        this.items = [];
    }

    getContens() {
        let content =[];
        for(let i in UndoStack.items) {
            content.push(undoStack.items[i])
        }
        return content ;
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if(this.items.length ===0){
            console.log('this is empty')
        } else {
            return this.items.pop();
        }
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    length() {
        return this.items.length;
    }
};

class RedoStack {
    constructor() {
        this.items = [];
    }

    push(value) {
    this.items.push(value);   
    }

    pop() {
        if(this.items.length === 0){
            console.log('this is empty')
        } else {
            return this.items.pop();
        }
    }

    peek() {
        return this.items[this.items.length -1 ]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    length() {
        return this.items.length;
    }
};

function undo() {
    if(undoStack.length() >=1) {
        undoItem = undoStack.pop()
    } else {
        throw new Error("Already at newest change");
    }
}

function redo() {
    if(undoStack.length() >=1) {
        redoItem = redoStack.pop()
        undoStack.push(redoItem)
    } else {
        throw new Error("Already at newest change");
    }
}

let undoStack =new UndoStack();
let redoStack = new RedoStack();

undoStack.push('case 1')
undoStack.push('case 2')
undoStack.push('case 3')
undoStack.push('case 4')
undoStack.push('case 5')
undoStack.push('case 6')

//Undo
undo()
undo()

//Redo
// redo()
// redo()
// redo() 

console.log(undoStack.getContents())