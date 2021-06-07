<template>
    <div>
        <v-card max-width="18vw"
        height="90vh"
        class="listCard"
        elevation=11>
        <p class="text-h3 text-center listTitle">מילים</p>
        <word :currentWord="currentWord"></word>
        </v-card>
    </div>
</template>

<script>
import word from './word';
export default {
    components: {
        word
    },
    data() {
        return {
            currentWord: { "word": "לדקור", "counter": 57, "percentageOfPosts": 34 }
        }
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
    /* display: flex;
    justify-content: center; */
        border: 2px solid #1e2238 !important;
}
.red {
    border: 0.1px solid #942226 !important;
}
.yellow {
    border: 0.1px solid #9c8d34 !important;
}
.listTitle {
    color: #ffffff;
    font-family: 'Heebo', sans-serif !important;
}
</style>