<script setup>
// defineProps([]) allows to use the data in the template. to be able to use it in Js, values needs to be assigned to const.
const { houseSelected, formSubmitted, fileSubmitted } = defineProps([
  "houseSelected",
  "formSubmitted",
  "fileSubmitted",
]);

let initialValues = {};

if (houseSelected) {
  const street = houseSelected.location.street;
  const [streetName, houseNumber, additionalNumber] = street.split(" ");
  initialValues = {
    streetName: streetName,
    houseNumber: houseNumber,
    numberAddition: additionalNumber,
    zip: houseSelected.location.zip,
    city: houseSelected.location.city,
    size: houseSelected.size,
    price: houseSelected.price,
    garage: houseSelected.garage,
    bedrooms: houseSelected.rooms.bedrooms,
    bathrooms: houseSelected.rooms.bathrooms,
    description: houseSelected.description,
    constructionYear: houseSelected.constructionYear,
  };
}
</script>


<template>
  <div class="container-clientinput">
    <div class="form-wrapper">
      <FormKit type="form" @submit="formSubmitted" :value="initialValues">
        <FormKit
          label-class="$reset labelvisual"
          type="text"
          name="streetName"
          id="streetName"
          label="Street name*"
          placeholder="Enter your street name"
          validation="required"
        />

        <FormKit
          type="text"
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
        <input
          type="file"
          @change="fileSubmitted"
          name="image"
          ref="fileInput"
        />

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
        <!-- <Button name="POST" /> -->
      </FormKit>
    </div>
  </div>
</template>

<style scoped>
.container-clientinput {
  display: flex;
  width: 100%;
  justify-content: center;
}
.form-wrapper {
  display: flex;
  align-self: center;
  width: fit-content;
  justify-content: center;
  margin-bottom: 5rem;
}
</style>