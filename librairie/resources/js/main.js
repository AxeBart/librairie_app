import home from "../components/home.js"
import books from "../components/books.js"
import stats from "../components/stats.js"
import parametres from "../components/parametres.js"

const {createApp} = Vue

createApp({
    data(){
        return{
            isSeen : 'books'
        }
    },
    components : {
        'home' : home,
        'books': books,
        'stats': stats,
        'parametres': parametres,
    },

    methods : {
       on_switch(obj){
            this.isSeen = obj
            console.log(obj)
       }
    }
}).mount("#app")
