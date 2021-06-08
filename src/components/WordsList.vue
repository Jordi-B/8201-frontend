<template>
    <v-card class="words-list-card"
    width="12vw"
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
        class="headline blue darken-3 dialog-title"
        primary-title
        >
        הוספת מילה חדשה למאגר המילים המנוטרות
        </v-card-title>

        <v-card-text>
            מילה זו תיווסף למאגר המילים המנוטרות, חישבו היטב לפני הוספת מילה חדשה למאגר
        </v-card-text>
        <span v-if="alreadyExists" class="error-span">המילה כבר קיימת</span>
        <v-text-field class="dialog-input" v-model="newWord"></v-text-field>
        <v-btn color="blue darken-1" text @click="dialog = false; newWord = ''">סגור</v-btn>
        <v-btn color="blue darken-1" text @click="addNewWord">שמור</v-btn>
    </v-card>
    </v-dialog>
    <ListItem>
        <v-text-field 
        class="text-input" 
        placeholder="חפש מילה"
        dark
        dense
        v-model="search"
        ></v-text-field>
    </ListItem>
    <div v-for="word in filteredWords" :key="word">
      <ListItem editable :title="word" @delete="deleteWord" @edit="editWord" />
    </div>
    </v-card>
</template>

<script>
import ListItem from './ListItem.vue';
import api from '../api/api';

export default {
    name: 'WordsList',
    components: {
        ListItem
    },
    props: {
        title: {
            type: String,
            default: "Title"
        },
        description: {
            type: String,
            default: "Description"
        }
    },
    data() {
        return {
            search: '',
            dialog: false,
            newWord: '',
            words: [],
            alreadyExists: false
        }
    },
    computed: {
        filteredWords() {
            return this.words.map(word => word.word).filter(word => word.includes(this.search));
        }
    },

    methods: {
        async addNewWord() {
            try {
                if(this.words.find(word => word.word === this.newWord)) {
                    this.alreadyExists = true;
                } else {
                    this.words.push({ word: this.newWord });
                    await api.lists().addNewWord({word: this.newWord});
                    this.newWord = '';
                    this.alreadyExists = false;
                    this.dialog = false;
                }
            } catch (err) {
                alert('ארעה שגיאה בשרת, נסה שוב מאוחר יותר');
                this.dialog = false;
            }
        },

        async deleteWord(wordTitle) {
            try {
                this.words = this.words.filter(word => word.word !== wordTitle);
                await api.lists().deleteWord({"word": wordTitle});
            } catch (err) {
                alert('ארעה שגיאה בשרת, נסה שוב מאוחר יותר');
            }
        },

        async editWord({ wordToEdit, newWord }) {
            try {
                this.words.find(word => word.word === wordToEdit).word = newWord;
                await api.lists().editWord({"addWord": newWord, "deleteWord": wordToEdit});    
            } catch (err) {
                alert('ארעה שגיאה בשרת, נסה שוב מאוחר יותר');
            }
        }
    },

    async mounted() {
        const response = await api.lists().wordsList();
        const data = response.data;
        this.words = data;
    }
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