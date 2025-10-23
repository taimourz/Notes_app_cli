

const results = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        this.tasks.forEach( (t) => {
            if(!t["completed"]){
                console.log(t["text"])
            }
        })
    }
}





const results = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return (
            this.tasks.filter(ele => {
                return ele.completed === false
            })
        )
    }
}




const results = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return (
            this.tasks.filter(ele => ele.completed == false)
        )
    }
}


const results = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return (
            this.tasks.filter((ele) => !ele.completed)
        )
    }
}


const results = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        const tasksToDo =  (
            this.tasks.filter((ele) => !ele.completed)
        )
        return tasksToDo
    }
}


const results = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return (this.tasks.filter((ele) => { return !ele.completed}))
    }
}

console.log(results.getTasksToDo())

