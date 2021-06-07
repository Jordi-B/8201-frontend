<template>
<v-container>
    <v-row>
        <v-col>
        <PostMonitor/>
        </v-col>
        <v-col>
        <commonWords></commonWords>
        </v-col>
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

</style>