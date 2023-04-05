<script setup>
import { computed, ref } from "vue";
import { useHouseStore } from "../stores/houses";
import GoBackGrey from "./GoBackGrey.vue";
const store = useHouseStore();

const houses = computed(() => {
  return store.houses;
});

const file = computed(() => {
  return store.file;
});

const complete = ref(false);

const onFileChanged = (event) => {
  const photo = event.target.files[0];
  const file = new File([photo], photo.name);
  store.image = file;
};

const onSubmit = (data) => {
  console.log({ data });

  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  //formdata console log will return empty, to get the data inside, see code bellow
  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }

  store.createHouse(formData);
};
</script>


<template>
  <div>
    <div>
      <GoBackGrey />
      <h2>Create new listing</h2>
    </div>
    <FormKit type="form" @submit="onSubmit">
      <label>test</label>
      <FormKit
        type="text"
        name="streetName"
        id="streetName"
        label="Street name*"
        placeholder="Enter your street name"
        validation="required"
      />

      <FormKit
        type="text"
        s
        name="houseNumber"
        id="houseNumber"
        label="House number*"
        placeholder="Enter house number"
        validation="required"
      />

      <FormKit
        type="text"
        name="numberAddition"
        id="numberAddition"
        label="Addition (optional)"
        placeholder="e.g A"
      />

      <FormKit
        type="text"
        name="zip"
        id="zip"
        label="Postal code*"
        placeholder="e.g 1000AA"
        validation="required"
      />

      <FormKit
        type="text"
        name="city"
        id="city"
        label="City*"
        placeholder="e.g Utrecht"
        validation="required"
      />

      <label>Upload picture (PNG or JPG)*</label>
      <input type="file" @change="onFileChanged" name="image" ref="fileInput" />
      <!-- <FormKit
        type="file"
        label="Upload picture (PNG or JPG)*"
        name="image"
        accept=".jpg,.png,.pdf"
        validation="required"
        @change="onFileChanged"
      />  -->

      <FormKit
        type="text"
        name="price"
        id="price"
        label="Price*"
        placeholder="e.g E150000"
        validation="required"
      />

      <FormKit
        type="text"
        name="size"
        id="size"
        label="Size*"
        placeholder="e.g 60m2"
        validation="required"
      />

      <FormKit
        type="select"
        name="garage"
        id="garage"
        label="Garage*"
        placeholder="Select"
        validation="required"
        :options="['Yes', 'No']"
      />

      <FormKit
        type="text"
        name="bedrooms"
        id="bedrooms"
        label="Bedrooms*"
        placeholder="Enter amout"
        validation="required"
      />

      <FormKit
        type="text"
        name="bathrooms"
        id="bathrooms"
        label="Bathrooms*"
        placeholder="Enter amout"
        validation="required"
      />

      <FormKit
        type="text"
        name="constructionYear"
        id="constructionYear"
        label="Contruction data*"
        placeholder="e.g 1990"
        validation="required"
      />

      <FormKit
        type="textarea"
        name="description"
        id="description"
        label="Description*"
        placeholder="Enter description"
        validation="required"
      />
    </FormKit>

    <!-- <form @submit.prevent="onSubmit">
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
      <input type="file" @change="onFileChanged" name="image" ref="fileInput" />

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
    </form> -->
  </div>
</template>