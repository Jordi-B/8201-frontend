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
.post-bubble {
    background-color: rgb(214, 214, 214);
    height: 10.5vh;
    border-radius: 20px;
    width: 32.5vw;
    margin-left: 2.5vw;
    display: flex;
    flex-direction: row-reverse;
    margin-top: 2vh;
    margin-bottom: 2vh;
}

.author {
    font-weight: bolder;
    margin-right: 1vw;
}

.words {
    color: rgb(187, 52, 187);
    font-weight: bolder;
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
    align-self: flex-start;
    position: absolute;
    margin-right: 20px;
}

.text {
    margin-left: 0.5vw;
    margin-top: 3.2vh;
    font-size: 1.45vw;
}
</style>