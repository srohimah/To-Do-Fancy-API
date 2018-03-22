Vue.component('complated',{
    template:`
    <div>
    <div class=row>
        <div div class="col-sm-3" v-for="(todo, index) in todos" v-if="todo.status == 'complate'">         
        <div class="img-thumbnail">
        <div class="caption text-center">
            <h5>{{todo.task}}</h5>
            <p class="desc">{{todo.description}}</p>
            <p class="completedAt">created : {{getDate(todo.createdAt)}}</p>
            <p class="completedAt">completed : {{getDate(todo.compleeted_date)}}</p>
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
    methods:{
        changeIncomplate: function (id) {
            this.$emit('incomplate', id);
        },
        changeComplate: function (id) {
            this.$emit('complate', id);
        },
        getDate:function(date){
            var NowMoment = moment();
            var NowDate = new Date();
            return moment(date).format('MMMM Do YYYY, h:mm:ss')
        }
    }
})
