import axios from 'axios';
export default {
    lists() {
        return {
            wordsList: async () => {
                return await axios.get('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/words');
            },
            suspectsList: async () => {
                return await axios.get('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects');
            },
            usersList: async () => {
                return await axios.get('http://localhost:3000/users');
            },
            recentPosts: async () => {
                return await axios.get('http://localhost:3000/recentPosts');
            },
            addNewWord: async (newWord) => {
                return await axios.post('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/words/add', newWord);
            },
            deleteWord: async (wordToDelete) => {
                return await axios.delete('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/words/delete', wordToDelete);
            },
            editWord: async (wordsToReplace) => {
                return await axios.post('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/words/replace', wordsToReplace);
            }
        }
    }
}