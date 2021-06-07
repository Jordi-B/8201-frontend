<template>
    <div>
        <v-card max-width="16vw"
        height="70vh"
        class="listCard"
        elevation=11>
        <div class="container listText titles-container">
            <p>כמות</p>
            <p>שימוש</p>
            <p>מילה</p>
        </div>
        <div v-for="(currentWord, index) in commonWords" :key="index">
            <word :currentWord="currentWord"></word>
        </div>
        </v-card>
    </div>
</template>

<script>
import api from '../api/api';
import word from './word';
export default {
    components: {
        word
    },
    data() {
        return {
            commonWords: []
        }
    },
    async mounted() {
        const response = await api.lists().wordsList();
        this.commonWords = response.data;
    }
}
</script>

<style scoped>
.listCard {
    background-color: #111633 !important;
    overflow: auto;
}
.listText p {
    color: #ffffff;
    font-weight: bolder;
}
.titles-container {
    height:  1vh;
    margin-top: 1.5vh;
}
</style>