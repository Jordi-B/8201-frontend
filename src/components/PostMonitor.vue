<template>
    <v-sheet
    elevation="8"
    outlined
    rounded
    shaped
    class="post-monitor-sheet"
    >
    <v-card-text class="title-container">
        <v-row>
            <v-col md="3">
      <v-text-field placeholder="סנן" v-model="filterInput" dark class="filter-search"/>
      </v-col>
      <v-col md="9">
      <div class="text-h2 title">ניטור</div>
      </v-col>
      </v-row>
    </v-card-text>
    <div v-for="post in filteredPosts" :key="post.postDate">
      <PostBubble :author="post.person.firstName + ' ' + post.person.lastName"
                  :words="post.badWords"
                  :postDate="post.postDate"
                  :img="post.person.person_img_url" />
    </div>
    <h1 class="no-results-text" v-if="filteredPosts.length === 0">לא נמצאו תוצאות</h1>
    </v-sheet>
</template>

<script>
import PostBubble from './PostBubble';
import api from '../api/api';

export default {
    name: 'PostMonitor',
    components: {
        PostBubble
    },
    data() {
        return {
            filterInput: '',
            posts: []
        }
    },

    computed: {
        filteredPosts() {
            return this.posts.filter(post => {
                const fullName = post.person.firstName + ' ' + post.person.lastName;
                const badWords = post.badWords.join(' ');
                return fullName.includes(this.filterInput) || badWords.includes(this.filterInput);
            })
        }
    },

    async mounted() {
        const response = await api.lists().recentPosts();
        const data = response.data;
        this.posts = data;
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');

* {
    font-family: 'Heebo', sans-serif !important;
}

.post-monitor-sheet {
    background-color: #111633 !important;
    width: 33vw;
    height: 53vh;
    overflow: auto;
        border: 2px solid #1e2238 !important;
}

.text-h2 {
    font-family: 'Heebo', sans-serif !important;
}

.title {
    color: white;
    direction: rtl;
    font-family: 'Heebo', sans-serif !important;
}

.title-container {
    justify-content: flex-end;
    display: flex;
}

.filter-words-checkbox {
    color: green
}

.checkbox {
    color:  white !important;
}

.no-results-text {
    color: red;
    margin-top: 12.5vh;
    text-align: center;
}

.filter-search {
    direction: rtl;
}

::-webkit-scrollbar {
    width: 2.5px;
}

::-webkit-scrollbar-thumb {
    background: rgb(163, 163, 163);
}
</style>