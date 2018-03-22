Vue.component("navbar",{
    template:`
    <nav class="navbar navbar-expand-lg">
    <div class="container">
    <a class="navbar-brand" href="index.html">Todo</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="complated.html">Completed Task <span class="sr-only">(current)</span></a>
        </li>
        </ul>
        <button class="btn btn-primary my-2 my-sm-0" type="submit" @click="logout">Logout</button>
    </div>
    </div>
</nav>
    `,
    methods:{
        logout: function () {
            this.$emit('logout');
        },
    }    
})