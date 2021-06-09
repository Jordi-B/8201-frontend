<template>
<v-container>
    <v-row>
        <v-spacer/>
        <v-col md="7">
        <v-row class="top-container">
            <TitledInfo bgColor="#2e303f" amountColor="#e5383b" :amount="wantedNumber" title="מבוקשים"></TitledInfo>
            <TitledInfo bgColor="#2e303f" amountColor="#cbc0d3" :amount="suspectsNumber" title="חשודים"></TitledInfo>
            <TitledInfo bgColor="#2e303f" amountColor="#2dc653" :amount="releasedNumber" title="שוחררו"></TitledInfo>
            <TitledInfo bgColor="#2e303f" amountColor="#619cd4" :amount="postsNumber" title="פוסטים"></TitledInfo>
        </v-row>
        </v-col>
        <v-spacer/>
    </v-row>
    <v-row>
        <v-spacer/>
        <v-col md="7">
            <v-row>
        <PostMonitor class="post-monitor"/>
        <v-spacer/>
        <commonWords class="common-words"></commonWords>
        </v-row>
        </v-col>
        <v-spacer/>
    </v-row>
</v-container>
</template>

<script>
import PostMonitor from '../components/PostMonitor';
import commonWords from '../components/commonWords';
import TitledInfo from '../components/TitledInfo';
import api from '../api/api';

export default {
    name: 'Home',
    components: {
        PostMonitor,
        commonWords,
        TitledInfo
    },
    data () {
        return {
            wantedNumber: 0,
            suspectsNumber: 0,
            releasedNumber: 0,
            postsNumber: 0
        }
    },
    async mounted() {
        let response = await api.lists().recentWanted();
        this.wantedNumber = response.data.length;
        response = await api.lists().recentSuspects();
        this.suspectsNumber = response.data.length;
        response = await api.lists().recentReleased();
        this.releasedNumber = response.data.length;
        response = await api.lists().recentPosts();
        this.postsNumber = response.data.length;
    }
}
</script>

<style scoped>

.home-container {
    display: flex;
    justify-content: space-around;
}

.common-words {
    margin-right: 4vw;
}

.top-container {
    display: flex;
    justify-content: space-between;
    margin-top: 6vh;
    margin-bottom: 5vh;
    margin-right: 2.7vw;
}

.box {
    background-color: #2e303f;
    height: 14vh;
    width: 9vw;
}

.last {
    margin-right: 4vw;
}

.post-monitor {
    margin-top: 3.2vh;
}

</style>