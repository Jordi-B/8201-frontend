import axios from 'axios';
const BASE_URL = 'http://localhost:8083';
// const PROD_SERVER = 'http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz';

export default {
    lists() {
        return {
            wordsList: async () => {
                return await axios.get(`${BASE_URL}/api/words`);
            },
            suspectsList: async () => {
                return await axios.get(`${BASE_URL}/api/suspects`);
            },
            recentPosts: async () => {
                return await axios.get(`${BASE_URL}/api/posts/recent`);
            },
            recentSuspects: async () => {
                return await axios.get(`${BASE_URL}/api/suspects/new`);
            },
            recentWanted: async () => {
                return await axios.get(`${BASE_URL}/api/suspects/wanted/new`);
            },
            recentReleased: async () => {
                return await axios.get(`${BASE_URL}/api/suspects/released/new`);
            },
            addNewWord: async (newWord) => {
                return await axios.post(`${BASE_URL}/api/words/add`, newWord);
            },
            deleteWord: async (wordToDelete) => {
                return await axios.delete(`${BASE_URL}/api/words`, {data: wordToDelete});
            },
            editWord: async (wordsToReplace) => {
                return await axios.post(`${BASE_URL}/api/words/replace`, wordsToReplace);
            },
            postsAmount: async(profileId) => {
                return await axios.get(`${BASE_URL}/api/posts/counts28/${profileId}`);
            }
        }
    },
    profile() {
        return {
            getLicenseById : async (id) => {
                return await axios.get(`${BASE_URL}/api/licenses/${id}`)
            },
            getNumOfPostsById : async (id) => {
                return await axios.get(`${BASE_URL}/api/posts/person/count/${id}`)
            },
            getProfileById : async (id) => {
                return await axios.get(`${BASE_URL}/api/suspects/suspect/${id}`)
            },
            getPermissionsById : async (id) => {
                return await axios.get(`${BASE_URL}/api/permissions/${id}`)
            }
        }
    }
}