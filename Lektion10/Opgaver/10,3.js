class StringStack {
    constructor() {
        this.stack = [];
    }
    
    push(str) {
        this.stack.push(str);
    }

    pop() {
        return this.stack.pop();
    }
}

let stack = new StringStack();
stack.push("Hello");
stack.push("World");
console.log(stack.pop());
console.log(stack.pop());

