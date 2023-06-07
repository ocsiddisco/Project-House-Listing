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
        const data = await response.text();
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async createHouse(formData) {
      var requestOptionsCreate = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow",
      };

      try {
        const response = await fetch(houses_url, requestOptionsCreate);
        console.log("reseponse create", response);
        const data = await response.text();
        const parsedData = JSON.parse(data);

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
      var requestOptionsDelete = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        `${houses_url}/${houseId}`,
        requestOptionsDelete
      );
      const data = await response.text();
    },

    async editHouse(houseId, formData) {
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      var requestOptionsEdit = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          `${houses_url}/${houseId}`,
          requestOptionsEdit
        );
        const data = await response.text();

        // const parsedData = JSON.parse(data);
        // console.log("parsedData", parsedData);

        // add newly created house
        // if (parsedData.id != undefined) {
        //   this.uploadPhoto(parsedData.id);
        // }
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
