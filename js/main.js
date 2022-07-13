// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

app = new Vue ({
    el: '#app',
    data: {
        emailList: [],
    },
    methods: {

        //funzione per inserire la mail nella lista (link boolean)
        pushRandomEmail: function() {
            // utilizzo axios ricorda il link pagina markup
            axios.get ('https://flynn.boolean.careers/exercises/api/random/mail')
            .then ((response) =>{
                console.log (response.data.response);
                this.emailList.push (response.data.response);
            });
        }
    },
    created() {
        this.pushRandomEmail ();
    }
}) 