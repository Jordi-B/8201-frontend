<template>
    <v-card class="words-list-card"
    width="10%"
    height="90%"
    elevation="11"
    outlined
    >
    <v-card-text>
      <div class="text-h2 title">{{ title }}</div>
      <div class="title-description">{{ description }}</div>
    </v-card-text>
    <v-btn class="new-item-button" color="purple" icon outlined depressed fab x-small dark>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <ListItem>
        <v-text-field 
        class="text-input" 
        dark
        v-model="search"
        ></v-text-field>
    </ListItem>
    <div v-for="word in filteredWords" :key="word">
      <ListItem :title="word"/>
    </div>
    </v-card>
</template>

<script>
import ListItem from './ListItem.vue';

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
        },
        words: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            search: ''
        }
    },
    computed: {
        filteredWords() {
            return this.words.filter(word => word.includes(this.search));
        }
    }
}
</script>

<style scoped>
.words-list-card {
    background-color: #111633 !important;
    text-align: center;
    border: 1.6px solid rgb(126, 126, 126) !important;
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
    margin-left: 6.8vw;
    display: inline;
}

.search-field {
    background-color: rgb(0, 0, 177);
    color: white;
    direction: rtl;
}

.text-input {
    direction: rtl;
    width: 80%;
    margin-left: 2vh;
}

</style>