import { defineStore } from "pinia";

import axios from "axios";
const url = import.meta.env.VITE_API_URL + "/api/v1";
export const useBlogStore = defineStore({
  id: "counter",
  state: () => ({
    arts: [],
    art: Object,
  }),
  getters: {
    items: (state) => state.arts.items,
  },
  actions: {
    async fetchArts() {
      const res: [] = await axios.get(`${url}/arts?page=1&perPage=6`);
      this.arts = res.data;
    },
    async fetchArt(id) {
      const res: [] = await axios.get(`${url}/arts/${id}`);
      this.art = res.data;
    },
  },
});
