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
    },
    profile() {
        return {
            getLicenseById : async (id) => {
                return await axios.get(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/licenses/${id}`)
            },
            getNumOfPostsById : async (id) => {
                return await axios.get(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/posts/count/${id}`)
            },
            getProfileById : async (id) => {
                return await axios.get(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects/suspect/${id}`)
            }
        }
    }
}