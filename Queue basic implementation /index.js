
class Queue {
    constructor(){
        this.items = []
    }
    onqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length === 0 
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()
console.log(queue.isEmpty())

queue.onqueue(10)
queue.onqueue(20)
queue.onqueue(30)
console.log(queue.size())
queue.print()
console.log(queue.dequeue())
console.log(queue.peek())