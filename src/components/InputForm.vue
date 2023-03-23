<script setup>
import { computed } from "vue";
import { useHouseStore } from "../stores/houses";
const store = useHouseStore();

const houses = computed(() => {
  return store.houses;
});

// const onFileChanged = (event) => {
//   const file = event.target.files[0];
//   formData.append("image", selectedFile, selectedFile.name);
// };

const onSubmit = (event) => {
  const formData = new FormData(event.target);

  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }
  store.createHouse(formData);
};
</script>


<template>
  <div>
    <div>
      <button>back</button>
      <h2>Create new listing</h2>
    </div>
    <form @submit.prevent="onSubmit">
      <label>Street name*</label>
      <input
        type="text"
        placeholder="Enter the street name"
        name="streetName"
      />
      <div>
        <div>
          <label>House number*</label>
          <input
            type="text"
            placeholder="Enter house number"
            name="houseNumber"
          />
        </div>
        <div>
          <label>Addition (optional)</label>
          <input type="text" placeholder="e.g A" name="numberAddition" />
        </div>
      </div>
      <label>Postal code*</label>
      <input type="text" placeholder="e.g 1000AA" name="zip" />
      <label>City*</label>
      <input type="text" placeholder="e.g Utrecht" name="city" />
      <label>Upload picture (PNG or JPG)*</label>
      <input type="file" name="image" ref="fileInput" />
      <label>Price*</label>
      <input type="text" placeholder="e.g E150000" name="price" />
      <div>
        <div>
          <label>Size*</label>
          <input type="text" placeholder="e.g 60m2" name="size" />
        </div>
        <div>
          <label>Garage*</label>
          <select name="hasGarage">
            <option disabled value="">Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <label>Bedrooms*</label>
          <input type="text" placeholder="Enter amout" name="bedrooms" />
        </div>
        <div>
          <label>Bathrooms*</label>
          <input type="text" placeholder="Enter amout" name="bathrooms" />
        </div>
      </div>
      <label>Construction data*</label>
      <input type="text" placeholder="e.g 1990" name="constructionYear" />
      <label>Description*</label>
      <textarea
        type="text"
        placeholder="Enter description"
        name="description"
      ></textarea>
      <button type="submit">POST</button>
    </form>
  </div>
</template>