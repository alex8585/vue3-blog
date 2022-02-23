import { defineStore } from "pinia";

import axios from "axios";
const url = import.meta.env.VITE_API_URL + "/api/v1";

interface Image {
  id: number;
  original_url: string;
}
interface Art {
  id?: number;
  title?: string;
  description?: string;
  media?: Image[];
  thumbs?: [];
}
interface Arts {
  items: Art[];
}
interface State {
  arts: Arts;
  art: Art;
}

export const useBlogStore = defineStore({
  id: "counter",
  state: () =>
    <State>{
      arts: {
        items: [],
      },
      art: {},
    },
  getters: {
    items: (state) => state.arts.items,
  },
  actions: {
    async fetchArts() {
      const res = await axios.get<Arts>(`${url}/arts?page=1&perPage=6`);

      const data = res.data as Arts;
      this.arts = data;
    },
    async fetchArt(id: number) {
      const res = await axios.get<Art>(`${url}/arts/${id}`);
      const data = res.data as Art;
      this.art = data;
    },
  },
});
