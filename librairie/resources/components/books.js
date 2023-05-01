import {Nosql} from "../data/nosql.js"

export default{
    data(){
        return {
            db : [],
            v : 'tab'
        }
    },

    methods : {
        goTo(view){
            this.v = view
        }
    },

    mounted(){
        Nosql.path = "resources/data/livres.json"
        Nosql.load((data) => {
            this.db = data
            console.log(data)
        })
    },

    template : `
    <div class="stats">
        <h3 class="view-title">Books</h3>
    </div>
    <br><br>
    <div class="data">
        <div class="table-title s1">
            <div class="row">
                <div class="col-1"><h4>#</h4></div>
                <div class="col-4"><h4>Titre</h4></div>
                <div class="col-4"><h4>Auteur</h4></div>
                <div class="col-2"><h4>Qté</h4></div>
                <div class="col-1"><h4></h4></div>
            </div>
        </div>
        <div class="table s2">
            <div class="row" v-for = "el, i in db">
                <div class="col-1"><h4>{{i + 1}}</h4></div>
                <div class="col-4"><h4>{{el.titre}}</h4></div>
                <div class="col-4"><h4>{{el.auteur}}</h4></div>
                <div class="col-2"><h4>{{el.nombre}}</h4></div>
                <div class="col-1"><span class="btn-pink">&plus;</span></div>
            </div>            
        </div>
    </div>
    `
}