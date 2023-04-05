import { defineStore } from "pinia";

const api_key = import.meta.env.VITE_API_KEY;
const houses_url = import.meta.env.VITE_HOUSES_URL;

var myHeaders = new Headers();
myHeaders.append("X-Api-Key", api_key);

export const useHouseStore = defineStore("house", {
  state: () => ({
    houses: [],
    image: {},
  }),
  getters: {
    getHouses(state) {
      return state.houses;
    },

    count: (state) => state.houses.length,

    // slice makes a copy of the state array to avoid modifying the state //
    sortByPrice: (state) => {
      state.houses = state.houses.sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
      return state.houses;
    },

    sortBySize: (state) => {
      state.houses = state.houses.sort(
        (a, b) => parseInt(a.size) - parseInt(b.size)
      );
      return state.houses;
    },

    filter: (state) => {
      state.houses = houses.value((house) => {
        return (
          house.location
            .streetName()
            .toLowerCase()
            .indexOf(search.value.toLowerCase()) != -1
        );
      });
    },

    getFile(state) {
      return state.file;
    },
  },
  actions: {
    async fetchHouses() {
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(houses_url, requestOptions);
        const data = await response.json();
        this.houses = data;
        // console.log("data", data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async uploadPhoto(houseId) {
      var formdata = new FormData();

      formdata.append("image", this.image, this.image.name);

      var requestOptionsUpload = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };
      try {
        const response = await fetch(
          `${houses_url}/${houseId}/upload`,
          requestOptionsUpload
        );
        console.log("response upload", response);
        const data = await response.text();
        console.log("data upload", data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async createHouse(fd) {
      var requestOptionsCreate = {
        method: "POST",
        headers: myHeaders,
        body: fd,
        redirect: "follow",
      };

      try {
        const response = await fetch(houses_url, requestOptionsCreate);
        const data = await response.text();
        const parsedData = JSON.parse(data);
        console.log("data", parsedData);

        // add newly created house
        if (parsedData.id != undefined) {
          this.uploadPhoto(parsedData.id);
        }
        this.houses.push(data);
        // or fetch again full collection
        // fetchHouses()

        // get ID and move to house details
        // navigate to /house/{id}
        // id is data.id
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async delete(houseId) {
      console.log("here");
      var requestOptionsDelete = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        `${houses_url}/${houseId}`,
        requestOptionsDelete
      );
      console.log("response", response);
      const data = await response.text();
      console.log("data", data);
    },

    async editHouse(houseId, formdata) {
      var requestOptionsEdit = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          `${houses_url}/${houseId}`,
          requestOptionsEdit
        );
        const data = await response.text();
        const parsedData = JSON.parse(data);
        console.log("data", parsedData);

        // add newly created house
        if (parsedData.id != undefined) {
          this.uploadPhoto(parsedData.id);
        }
        this.houses.push(data);
        // or fetch again full collection
        // fetchHouses()

        // get ID and move to house details
        // navigate to /house/{id}
        // id is data.id
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
