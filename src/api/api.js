import axios from 'axios';
export default {
    lists() {
        return {
            wordsList: async () => {
                return await axios.get('http://localhost:3000/words');
            },
            suspectsList: async () => {
                return await axios.get('http://localhost:3000/suspects');
            },
            usersList: async () => {
                return await axios.get('http://localhost:3000/users');
            },
            recentPosts: async () => {
                return await axios.get('http://localhost:3000/recentPosts');
            }
        }
    }
}