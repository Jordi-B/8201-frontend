<template>
    <div>
        <span class="text-h6 card-title">מילים נפוצות</span>
        <v-card width="16vw"
        height="53vh"
        class="listCard"
        elevation=11>
        <div class="container listText titles-container">
            <p>כמות</p>
            <p>שימוש</p>
            <p>מילה</p>
        </div>
            <v-progress-circular
            indeterminate
            color="blue"
            v-if="isLoading"
            class="load-bar"
            size="80"
            ></v-progress-circular>
        <div v-else>
        <div v-for="(currentWord, index) in commonWords" :key="index">
            <word :currentWord="currentWord"></word>
        </div>
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
            commonWords: [],
            isLoading: true
        }
    },
    async mounted() {
        const response = await api.lists().wordsList();
        this.isLoading = false;
        const words = response.data;
        this.commonWords = words.filter(word => word.percentageOfPosts > 0).sort((first, second) => first.counter - second.counter);
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
    overflow: auto;
    border: 2px solid #1e2238 !important;
}
.red {
    border: 0.1px solid #942226 !important;
}
.listText p {
    color: #ffffff;
    font-weight: bolder;
}
.titles-container {
    height:  1vh;
    margin-top: 1.5vh;
    font-family: 'Heebo', sans-serif !important;
}

.card-title {
    color: #ffffff;
    direction: rtl;
    display: block;
    font-family: 'Heebo', sans-serif !important;
}

.load-bar {
    margin-top: 8vh;
    margin-left: 6vw;
}

.container {  
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>