<template>
    <div>
        <v-card max-width="18vw"
        height="8vh"
        elevation=11
        class="wordCard">
        <div class="container">
            <p class="text-subtitle-1 infoText">{{currentWord.counter}}</p>
        <v-progress-circular 
        :rotate="-90"
        :size="50"
        :width="6"
        :value="45"
        color="#619cd4"
        sm="4">
        {{currentWord.percentageOfPosts}}%
        </v-progress-circular>
            <p class="text-h5 listTitle infoText">{{currentWord.word}}</p>
        </div>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        currentWord: Object
    }
}
</script>

<style scoped>
.wordCard {
    background-color: #2e303f !important;
    margin-bottom: 1vh;
    display: flex;
    justify-content: space-evenly;
}
.infoText {
    color: #ffffff !important;
    color: #619cd4;
    direction: rtl;
}
</style>