<template>
<v-container>
    <v-row>
        <v-spacer/>
        <v-col md="8">
        <v-row class="top-container">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box last"></div>
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

export default {
    name: 'Home',
    components: {
        PostMonitor,
        commonWords
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
    margin: 4vw;
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