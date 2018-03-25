Vue.component('todo-list',{
    template:`
        <div>
        <div class=row>
            <div div class="col-sm-3" v-for="(todo, index) in todos" v-if="todo.status == 'incomplate'">
            <div class="modal fade" :id="'exampleModal'+todo._id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">Edit Todo</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                <form>
                    <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Title:</label>
                    <input type="text" class="form-control" id="recipient-name" v-model="todo.task" @input="onChangeTitle">
                    </div>
                    <div class="form-group">
                    <label for="message-text" class="col-form-label">Description:</label>
                    <textarea class="form-control" id="message-text" v-model="todo.description" @input="onChangeDescription" ></textarea>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="editTodo(todo._id)">Edit Todo</button>
                </div>
            </div>
            </div>
            </div>          
            <div class="img-thumbnail">
            <div class="caption text-center">
                <h5>{{todo.task}}</h5>
                <p class="desc">{{todo.description}}</p>
                <p>
                    <button class="btn btn-outline-info" data-toggle="modal" :data-target="'#exampleModal'+todo._id"><span class="fa fa-pencil-square-o"></span></button>
                    <button class="btn btn-outline-danger" @click="remove(todo._id)"><span class="fa fa-trash"></span></button>
                </p>
            </div>
            <div class="col-sm-12">
            <button v-if="todo.status==='incomplate'" class="btn btn-sm btn-xs btn-danger btn-block" @click="changeIncomplate(todo._id)">{{todo.status}}</button>
            <button v-else class="btn btn-sm btn-xs btn-info btn-block" @click="changeComplate(todo._id)">{{todo.status}}</button>
            </div>
        </div>
        </div>
        </div>
        </div>
       
    `,
    props:['todos'],
    data() {
        return {
            task: '',
            description: ''
        }
    },
    methods:{
        onChangeTitle(e) {
            console.log(e)
            this.task = e.target.value
            this.$emit('payload', e.target.value)
        },
        onChangeDescription(e) {
            this.description = e.target.value
            this.$emit('payloaddesc', e.target.value)
        },
        remove: function (id) {
            this.$emit('delete', id);
        },
        editTodo:function(id){
            // alert(todo)
            this.$emit('edit', id);
        },
        changeIncomplate: function (id) {
            this.$emit('incomplate', id);
        },
        changeComplate: function (id) {
            this.$emit('complate', id);
        },
    }
})



