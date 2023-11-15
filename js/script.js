const { createApp } = Vue;

createApp({
    data() {
        return {
            todo:
            {
                item: "",
            },

            newTodo: [],

            currentIndex: 0,
        }
    },
    methods: {
        addThing: function () {

            this.newTodo.push({ ...this.todo });

            this.todo.item = "";
        },
        removeThing: function(position) {

            this.newTodo.splice(position, 1);
        }

    }
})

    .mount("#app")

