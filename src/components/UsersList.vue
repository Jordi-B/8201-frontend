<template>
    <v-card class="words-list-card"
    width="16vw"
    height="90vh"
    elevation="11"
    outlined
    >
    <v-card-text>
      <div class="text-h2 title">{{ title }}</div>
      <div class="title-description">{{ description }}</div>
    </v-card-text>
    <v-dialog
    v-model="dialog"
    width="500"
    >
    <template v-slot:activator="{ on }">
    <v-btn class="new-item-button" v-on="on" v-if="true" color="purple" icon outlined depressed fab x-small dark>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    </template>
    
    <v-card class="dialog-card">
        <v-card-title
        class="headline blue darken-3 dialog-title "
        
        primary-title
        >
        <div id="dialog-title">
           הוספת משתמש חדש 
        </div>
        </v-card-title>

        <v-card-text>
            משתמש זה יתווסף לרשימת המשתמשים
        </v-card-text>
        <span v-if="alreadyExists" class="error-span">המשתמש קיים</span>
        <v-text-field class="dialog-input mx-3" v-model="username" placeholder='שם משתמש'></v-text-field>
        <v-text-field class="dialog-input mx-3" v-model="password" type="password" placeholder='סיסמה'></v-text-field>
        <v-btn color="blue darken-1" text @click="dialog = false; username = ''; password = ''; alreadyExists = false;">סגור</v-btn>
        <v-btn color="blue darken-1" text @click="addNewUser">שמור</v-btn>
    </v-card>
    </v-dialog>
    <user-item>
        <v-text-field 
        class="text-input" 
        placeholder="חפש משתמש"
        dark
        dense
        v-model="search"
        ></v-text-field>
    </user-item>
    <span class="no-words" v-if="filteredWords.length === 0">אין משתמשים</span>
    <div v-for="user in filteredWords" :key="user.username">
      <user-item :title="user.username" @delete="deleteWord" />
    </div>
    </v-card>
</template>

<script>
import UserItem from './UserItem.vue';
import api from '../api/api';

export default {
    name: 'UsersList',
    components: {
        UserItem
    },
    props: {
        title: {
            type: String,
            default: "Title"
        },
        description: {
            type: String,
            default: ""
        },
        listItems: {
            type: Promise,
            required: true
        }
    },
    data() {
        return {
            search: '',
            dialog: false,
            users : [],
            usename: '',
            password: '',
            alreadyExists: false
        }
    },
    async created () {
        this.users = await this.listItems;
    },
    computed: {
        filteredWords() {
            return this.users.map(user => user.username).filter(user => user.includes(this.search));
        }
    },

    methods: {
        async addNewUser() {
            try {
                if(this.users.find(user => user.username === this.username)) {
                    this.alreadyExists = true;
                } else {
                    this.users.push({ user: this.userName });
                    await api.permissions().addNewUser(this.username, this.password);
                    this.username = '';
                    this.password = '';
                    this.alreadyExists = false;
                    this.dialog = false;
                }
            } catch (err) {
                alert('ארעה שגיאה בשרת, נסה שוב מאוחר יותר');
                this.dialog = false;
            }
        },

        async deleteUser(usernameToDelete) {
            try {
                this.users = this.users.filter(user => user.username !== usernameToDelete);
                await api.permissions().deleteUser({usernameToDelete});
            } catch (err) {
                alert('ארעה שגיאה בשרת, נסה שוב מאוחר יותר');
            }
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');

* {
    font-family: 'Heebo', sans-serif !important;
}

.words-list-card {
    background-color: #111633 !important;
    text-align: center;
    border: 2px solid #1e2238 !important;
    font-family: 'Heebo', sans-serif !important;
    overflow: auto;
}
#dialog-title {
    margin-left: 125px;
}

.no-words {
    color:crimson;
}

.dialog-card {
    text-align: center;
    font-family: 'Heebo', sans-serif !important;
}

.title {
    color: white !important;
    font-weight:1200;
    font-size: 6em;
    font-family: 'Heebo', sans-serif !important;
}

.title-description {
    color: white;
    font-weight:lighter;
    font-family: 'Heebo', sans-serif !important;
}

.new-item-button {
    display: inline;
    margin-bottom: 10px;
}

.error-span {
    color: red;
}

.search-field {
    background-color: rgb(0, 0, 177);
    color: white;
    direction: rtl;
    font-family: 'Heebo', sans-serif !important;
}

.dialog-input {
    direction: rtl;
    font-family: 'Heebo', sans-serif !important;
}

.headline {
    color: white;
    font-family: 'Heebo', sans-serif !important;
}

.text-input {
    direction: rtl;
    width: 80%;
    margin-left: 2vh;
    font-family: 'Heebo', sans-serif !important;
}

::-webkit-scrollbar {
    width: 2.5px;
}

::-webkit-scrollbar-thumb {
    background: rgb(163, 163, 163);
}

</style>