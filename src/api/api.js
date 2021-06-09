import axios from 'axios';
const BASE_URL = 'http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz';
// const PROD_SERVER = 'http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;



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
            },
            logIn: async (username, password) => {
                return await axios.post(`${BASE_URL}/api/users/login`, { username, password });
            },
            toggleWanted: async (suspectId) => {
                return await axios.patch(`${BASE_URL}/api/suspects/suspect/toggle/wanted`, { id: suspectId });
            }
        }
    },
    permissions()  {
        return {
            getAllManagers: async () => {
                return await axios.get('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/users/managers')
            },
            getAllUsers: async () => {
                return await axios.get('http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/users/managers/false')
            },
            addNewUser: async (username, password) => {
                return await axios.post("http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/users/add",{username, password});
            },
            addNewManager: async (username, password) => {
                return await axios.post("http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/users/add/manager", {username, password});
            },
            deleteUser: async (username) => {
                return await axios.delete("http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/users", { data: { username: username } });
            }
        }
    }
}

export { axios };