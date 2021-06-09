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
            recentPosts: async () => {
                return await axios.get('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/posts/recent');
            },
            recentSuspects: async () => {
                return await axios.get('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects/new');
            },
            recentWanted: async () => {
                return await axios.get('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects/wanted/new');
            },
            recentReleased: async () => {
                return await axios.get('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects/released/new');
            },
            addNewWord: async (newWord) => {
                return await axios.post('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/words/add', newWord);
            },
            deleteWord: async (wordToDelete) => {
                return await axios.delete('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/words', {data: wordToDelete});
            },
            editWord: async (wordsToReplace) => {
                return await axios.post('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/words/replace', wordsToReplace);
            },
            postsAmount: async(profileId) => {
                return await axios.get(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/posts/counts28/${profileId}`);
            }
        }
    },
    profile() {
        return {
            getLicenseById : async (id) => {
                return await axios.get(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/licenses/${id}`)
            },
            getNumOfPostsById : async (id) => {
                return await axios.get(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/posts/person/count/${id}`)
            },
            getProfileById : async (id) => {
                return await axios.get(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects/suspect/${id}`)
            },
            getPermissionsById : async (id) => {
                return await axios.get(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/permissions/${id}`)
            }
        }
    }
}