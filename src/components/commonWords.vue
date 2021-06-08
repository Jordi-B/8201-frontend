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
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');

* {
    font-family: 'Heebo', sans-serif !important;
}
.listCard {
    background-color: #111633 !important;
<<<<<<< HEAD
    overflow: auto;
=======
    /* display: flex;
    justify-content: center; */
        border: 2px solid #1e2238 !important;
}
.red {
    border: 0.1px solid #942226 !important;
>>>>>>> 402b6db1fff705629cca25f801586e6bcb4c4bdb
}
.listText p {
    color: #ffffff;
<<<<<<< HEAD
    font-weight: bolder;
}
.titles-container {
    height:  1vh;
    margin-top: 1.5vh;
=======
    font-family: 'Heebo', sans-serif !important;
>>>>>>> 402b6db1fff705629cca25f801586e6bcb4c4bdb
}
</style>