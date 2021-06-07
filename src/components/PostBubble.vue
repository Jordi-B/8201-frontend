<template>
    <div class="post-bubble">
        <img :src="img" class="author-pic">
        <div class="author text"> {{ author }} </div> 
        <div class="text"> השתמש במילים </div> 
        <div class="words text"> {{ words.join(', ') }} </div>
        <div class="time">{{ timeSince }}</div>
    </div>
    
</template>

<script>
import moment from 'moment';

export default {
    name: 'PostBubble',
    props: {
        author: {
            type: String,
            default: 'משתמש'
        },
        words: {
            type: Array,
            default: () => ['לדקור', 'מוות']
        },
        postDate: {
            type: String,
            default: '2021-01-01T23:28:56.782Z'
        },
        img: {
            type: String,
            default: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
    },

    computed: {
        timeSince() {
            return moment(this.postDate).fromNow();
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');

* {
    font-family: 'Heebo', sans-serif !important;
}
.post-bubble {
    background-color: rgb(214, 214, 214);
    height: 8.3vh;
    border-radius: 20px;
    width: 29vw;
    margin-left: 2.5vw;
    display: flex;
    flex-direction: row-reverse;
    margin-top: 2vh;
    margin-bottom: 2vh;
    position: relative;
}

.author {
    font-weight: bolder;
    margin-right: 1vw;
    font-family: 'Heebo', sans-serif !important;
}

.words {
    color: rgb(187, 52, 187);
    font-weight: bolder;
    font-family: 'Heebo', sans-serif !important;
}

.author-pic {
    align-self: center;
    margin-right: 10px;
    height: 6vh;
    margin-top: 15px;
    border-radius: 200px;
    width: 3.2vw;
}

.time {
    position: absolute;
    margin-right: 20px;
    font-size: 14.5px;
}

.text {
    margin-left: 0.5vw;
    margin-top: 3.2vh;
    font-size: 1.25vw;
    font-family: 'Heebo', sans-serif !important;
}
</style>