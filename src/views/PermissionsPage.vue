<template>
    <v-container>
        <v-row>
            <v-col>
                <users-list title="מנהלים" :listItems="allManagers()"></users-list>           
            </v-col>
            <v-col>
                <users-list title="משתמשים" :listItems="allUsers()"></users-list>
            </v-col>
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
    methods : {
        allUsers : async function () {
            const response = await api.permissions().getAllUsers();
            return response.data;
        },
        allManagers : async function () {
            const response = await api.permissions().getAllManagers();
            return response.data;
        }
    }
}
</script>

<style>

</style>