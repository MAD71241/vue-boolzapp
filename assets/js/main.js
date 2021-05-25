/* Milestone 1:
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto 
*/


const app = new Vue({
    el: "#boolz",

    data: {
        isHidden: true,
        isActive: false,
        thisMessage: false,
        search: "",
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
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
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
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
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
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
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
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
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
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
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
        sendMessage() {
            const mySentMessage = new Object();
            const today = new Date();
            var now = dayjs().format('DD/MM/YYYY HH:mm:ss');
            mySentMessage.date = now;
            mySentMessage.text = app.newMessage;
            mySentMessage.status = "sent";
            app.contacts[app.counter].messages.push(mySentMessage);
            app.newMessage = "";
            setTimeout(app.autoReply, 1000);
        },
        autoReply() {
            const myReceivedMessage = new Object();
            const today = new Date();
            var now = dayjs().format('DD/MM/YYYY HH:mm:ss');
            myReceivedMessage.date = now;
            myReceivedMessage.text = "Ok";
            myReceivedMessage.status = "received";
            app.contacts[app.counter].messages.push(myReceivedMessage);
        },
        getMenu() {
            //funzione menu a scomparsa
            if (this.thisMessage == false) {
                this.thisMessage = true
            } else {
                this.thisMessage = false
            }

        }

    },
    computed: {
        searchList() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }

})
//cancellare un messaggio
/* app.tasks.splice(index, 1); */

//attivare messaggio
/* this.isActive = !this.isActive;
this.activeitem = item.name */