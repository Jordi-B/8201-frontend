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
.post-monitor-sheet {
    background-color: #111633 !important;
    border: 1px solid rgb(185, 185, 185);
    width: 40vw;
    height: 60vh;
    height: 100%;
}

.title {
    color: white;
    direction: rtl;
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

.filter-search {
    direction: rtl;
}
</style>