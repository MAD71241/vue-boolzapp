/* Milestone 1:
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto 
*/


const app = new Vue({
    el: "#boolz",

    data: {
        search: "",
        textSearch: "",
        newMessage: "",
        currentContact: 0,
        counter: 0,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        isActive: false,
                        indice: "",
                        isHighlighted: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        isActive: false,
                        indice: "",
                        isHighlighted: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        isActive: false,
                        indice: "",
                        isHighlighted: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        isActive: false,
                        indice: "",
                        isHighlighted: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        isActive: false,
                        indice: "",
                        isHighlighted: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        isActive: false,
                        indice: "",
                        isHighlighted: false
                    }
                ],
            },

            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        isActive: false,
                        indice: "",
                        isHighlighted: false

                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        isActive: false,
                        indice: "",
                        isHighlighted: false

                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        isActive: false,
                        indice: "",
                        isHighlighted: false
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        isActive: false,
                        indice: "",
                        isHighlighted: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        isActive: false,
                        indice: "",
                        isHighlighted: false
                    }
                ],
            },
            {
                name: 'Samir',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        isActive: false,
                        indice: "",
                        isHighlighted: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        isActive: false,
                        indice: "",
                        isHighlighted: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        isActive: false,
                        indice: "",
                        isHighlighted: false
                    }
                ],
            }
        ],

    },

    methods: {
        userSelector(index) {
            app.currentContact = index;
        },
        messageSelector(index) {
            app.counter = index;
        },
        /* funzione invio messaggio */
        sendMessage() {
            const mySentMessage = new Object()
            const today = new Date()
            var now = dayjs().format('DD/MM/YYYY HH:mm:ss')
            mySentMessage.date = now
            mySentMessage.text = app.newMessage
            mySentMessage.status = "sent"
            mySentMessage.isActive = false
            mySentMessage.indice = ""
            mySentMessage.isHighlighted = false
            app.contacts[app.counter].messages.push(mySentMessage)
            app.newMessage = ""
            setTimeout(app.autoReply, 1000)
        },

        /* funzione per risposta automatica */
        autoReply() {
            const myReceivedMessage = new Object()
            const today = new Date()
            var now = dayjs().format('DD/MM/YYYY HH:mm:ss')
            myReceivedMessage.date = now
            myReceivedMessage.text = "Ok"
            myReceivedMessage.status = "received"
            myReceivedMessage.isActive = false
            myReceivedMessage.indice = ""
            myReceivedMessage.isHighlighted = false
            app.contacts[app.counter].messages.push(myReceivedMessage)
        },
        /* apertura e chiusura menu a tendina */
        SelectItem(message, index) {
            message.indice = index
            if (message.indice == index && message.isActive == false) {
                message.isActive = true;
            } else {
                message.isActive = false;
            }
        },
        /* funzione per eliminare il messaggio selezionato */
        deleteMessage(message, index) {
            const activeMessages = app.contacts[app.counter].messages
            console.log(activeMessages);
            if (message.indice == index) {
                activeMessages.splice(index, 1)
            }

        },
        /* funzione per ricercare un messaggio nella chat */
        searchMessage(index) {
            return app.contacts[index].messages.filter(message => {
                if (message.text.toLowerCase().includes(app.textSearch.toLowerCase())) {
                    message.isHighlighted = true
                } else {
                    message.isHighlighted = false
                }
            })
        }
    },
    /* filtro in tempo reale dei contatti */
    computed: {
        searchList() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }

})