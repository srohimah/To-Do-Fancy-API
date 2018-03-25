new Vue({
    el :"#app",
    data : {
            task : '',
            description : '',
            todos: [],
            
    },
    created:function(){
        axios({
            method : 'get',
            url : 'http://localhost:3000/todo/task/',
            headers:{
                token : localStorage.apptoken
            }
        }).then(todolist=>{
            console.log(todolist)
            this.todos = todolist.data.tasks.map(val=>val)
        }).catch(err=>console.log(err))
    },
    methods: {
        getpayloadtitle(title) {
            this.task = title
        },
        getpayloaddescription(desc) {
            this.description = desc
        },
        changeIncomplate(id){
            axios({
                method : 'put',
                url : `http://localhost:3000/todo/task/complate/${id}`,
                headers:{
                    token : localStorage.apptoken
                },
            }).then(data=>{
                location.reload();
            }).catch(err=>console.log(err))
        },
        changeComplate(id){
            axios({
                method : 'put',
                url : `http://localhost:3000/todo/task/incomplate/${id}`,
                headers:{
                    token : localStorage.apptoken
                },
            }).then(data=>{
                location.reload();
            }).catch(err=>console.log(err))
        },
        add() {
            axios({
                method : 'post',
                url : 'http://localhost:3000/todo/task/',
                headers:{
                    token : localStorage.apptoken
                },
                data:{
                    task: this.task,
                    description : this.description,
                }
            }).then((response)=>{
                this.name = "";
                this.description = "";
                location.reload();
            }).catch(err=>console.log(err))
            
        },
        edit_Todo(id){
            console.log(id)
            axios({
                method : 'put',
                url : `http://localhost:3000/todo/task/${id}`,
                headers:{
                    token : localStorage.apptoken
                },
                data:{
                    task: this.task,
                    description : this.description,
                }
            }).then((response)=>{
                console.log('respons,..', response)
                window.location.href="index.html";
            }).catch(err=>console.log(err))
        },
        deleteTodo(id){
            let x = confirm('are you sure want to delete this todo ?')
                if(x === false){
                    return
                }
            axios({
                method : 'delete',
                url : `http://localhost:3000/todo/task/${id}`,
                headers:{
                    token : localStorage.apptoken
                },
            }).then(data=>{
                console.log(data)
            location.reload();
            }).catch(err=>console.log(err))
        },
        logout(){      
            console.log('hereee')
            localStorage.clear()    
            window.location.href="login.html"
            // FB.logout(function (response){
            //     window.location.href="login.html"
            // })
        }
    }
})