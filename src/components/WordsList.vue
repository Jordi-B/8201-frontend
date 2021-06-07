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
        class="headline red lighten-2 dialog-title"
        primary-title
        >
        הינך עומד להוסיף מילה חדשה למילים המנוטרות
        </v-card-title>

        <v-card-text>
            מילה זו תיווסף למאגר המילים המנוטרות, חישבו היטב לפני הוספת מילה חדשה למאגר
        </v-card-text>
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
            words: []
        }
    },
    computed: {
        filteredWords() {
            return this.words.map(word => word.word).filter(word => word.includes(this.search));
        }
    },

    methods: {
        addNewWord() {
            this.words.push({ word: this.newWord });
            this.newWord = '';
            this.dialog = false;
        },

        deleteWord(wordTitle) {
            this.words = this.words.filter(word => word.word !== wordTitle);
        },

        editWord({ wordToEdit, newWord }) {
            this.words.find(word => word.word === wordToEdit).word = newWord;
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
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');



.words-list-card {
    background-color: #111633 !important;
    text-align: center;
    border: 2px solid #1e2238 !important;
}

.dialog-card {
    text-align: center;
}

.title {
    color: white !important;
    font-weight:1200;
    font-size: 6em;
}

.title-description {
    color: white;
    font-weight:lighter;
}

.new-item-button {
    display: inline;
    margin-bottom: 10px;
}

.search-field {
    background-color: rgb(0, 0, 177);
    color: white;
    direction: rtl;
}

.dialog-input {
    direction: rtl;
}

.text-input {
    direction: rtl;
    width: 80%;
    margin-left: 2vh;
}
</style>