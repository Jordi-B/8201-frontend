<template>
    <!-- <div class="list-item">
        <div class="text-h7 title">{{ title }}</div>
        <slot></slot>
    </div> -->

        <v-list-item class="list-item">
            <v-list-item-icon v-if="!editing && editable">
                <v-icon @click="editItem" class="pencil">mdi-pencil</v-icon>
                <v-icon @click="deleteItem(title)" class="delete-button">mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-icon v-else-if="editable">
                <v-icon @click="changeWord" class="confirm-edit-button">mdi-check-outline</v-icon>
                <v-icon @click="editing = false" class="close-edit-button">mdi-close</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title class="title" v-if="!editing">{{ title }}</v-list-item-title>
            <v-text-field 
            v-else
            class="text-input" 
            :placeholder="title"
            dark
            dense
            v-model="newWord"
            ></v-text-field>
          </v-list-item-content>
          <slot></slot>
        </v-list-item>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        title: {
            type: String,
            default: ''
        },
        editable: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            editing: false,
            newWord: ''
        }
    },
    methods: {
        deleteItem() {
            this.$emit('delete', this.title);
        },

        editItem() {
            this.editing = !this.editing;
        },

        changeWord() {
            this.$emit('edit', { wordToEdit: this.title, newWord: this.newWord });
        }
    }
}
</script>

<style scoped>
.list-item {
    background-color: rgb(61, 61, 131);
    text-align: right;
    margin-top: 3px;
    border-radius: 2px;
}

.title {
    color: white;
    margin-right: 1vh;
}

.pencil {
    color:rgb(238, 238, 238);
}

.delete-button {
    color: rgb(236, 79, 79);
}

.text-input {
    direction: rtl;
}

.confirm-edit-button {
    color: green;
}

.close-edit-button {
    color: red;
}
</style>