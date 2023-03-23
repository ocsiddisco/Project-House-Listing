import { defineStore } from "pinia";

var myHeaders = new Headers();
myHeaders.append("X-Api-Key", "<hidden>");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

// var requestOptionsCreate = {
//   method: "POST",
//   headers: myHeaders,
//   body: formdata,
//   redirect: "follow",
// };

// //option api store
// export const useHouseStore = defineStore("house", () => {
//   const houses = ref([]);
//   const formData = ref({});

//   const sortByPrice = computed((houses) => {
//     houses.sort((a, b) => parseInt(a.price) - parseInt(b.price));
//   });

//   const sortBySize = computed((houses) => {
//     houses.sort((a, b) => parseInt(a.size) - parseInt(b.size));
//   });

//   return { houses, formData, sortByPrice, sortBySize };
// });

// setup store
export const useHouseStore = defineStore("house", {
  state: () => ({
    houses: [],
    formData: {},
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
  },
  actions: {
    async fetchHouses() {
      try {
        const response = await fetch("<hidden>", requestOptions);
        const data = await response.json();
        this.houses = data;
        // console.log("data", data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async createHouse(fd) {
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: fd,
        redirect: "follow",
      };

      // for (var pair of formData.entries()) {
      //   console.log("formdata in store", pair[0] + ", " + pair[1]);
      // }
      try {
        const response = await fetch("<hidden>", requestOptions);
        console.log("response", response);
        const data = await response.text();
        console.log("data", data);
        // add newly created house
        this.houses.push(data);
        const uploadPhoto = await fetch("<hidden>", requestOptions);
        uploadPhoto();

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
    // async uploadImage((data.id), image) {
    //   const response = await fetch(
    //    "<hidden>",
    //     requestOptions
    //   );
    //   console.log("response", response);
    //   const data = await response.text();
    //   console.log("data", data);
    // },
  },
});
