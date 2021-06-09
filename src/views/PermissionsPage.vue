<template>
    <v-container>
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

<style>

</style>