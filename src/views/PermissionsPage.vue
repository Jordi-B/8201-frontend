<template>
    <v-container>
        <div v-if="$store.state.isManager">
        <v-row>
            <v-col sm="4"></v-col>
            <v-col sm="2.5">
                <users-list title="מנהלים" :isManager=true :listItems="allManagers"></users-list>           
            </v-col>
            <v-col sm="2.5">
                <users-list title="משתמשים" :listItems="allUsers"></users-list>
            </v-col>
            <v-col sm="3"></v-col>
        </v-row>
        </div>
        <div v-else>
            <img class="lock" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lock_font_awesome.svg/1200px-Lock_font_awesome.svg.png"/>
            <h1 class="warning-title">אינך מורשה לצפות בעמוד זה</h1>
        </div>
    </v-container>
</template>

<script>
import UsersList from "../components/UsersList.vue";
import api from '../api/api';

export default {
    components : {
        UsersList
    },
    data() {
        return {
            allUsers: [],
            allManagers: []
        }
    },
    async mounted() {
        let response = await api.permissions().getAllUsers();
        this.allUsers = response.data;
        response = await api.permissions().getAllManagers();
        this.allManagers = response.data;
    }
}
</script>

<style scoped>

.lock {
    width: 550px;
    height: 550px;
    object-fit: contain;
    margin-left: 30vw;
}

.warning-title {
    color: rgb(255, 255, 255);
    margin-left: 34vw;
}

</style>