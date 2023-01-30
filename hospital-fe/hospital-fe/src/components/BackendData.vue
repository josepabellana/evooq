<script>
const API_URL = `http://localhost:7200`;
import { Quarantine } from 'hospital-lib';
export default {
  data: () => ({
    quarantine: Quarantine,
    patients:{},
    drugs:[]
  }),

  created() {
    // fetch on init
    this.fetchData();
  },

  watch: {
    // re-fetch whenever currentBranch changes
    currentBranch: "fetchData",
  },

  methods: {
    async fetchData() {
      let patients = {
        'F':0,
        'X':0,
        'T':0,
        'H':0,
        'D':0,
      };
      let url = `${API_URL}/patients`;
      let response = await (await fetch(url)).json();
      let arr = response.split(",");
      for (let i = 0; i < arr.length; i++) {
        if (patients[arr[i]]) patients[arr[i]] += 1;
        else patients[arr[i]] = 1;
      }
      this.patients = patients;
      let quarantine = new Quarantine(patients);
      console.log(quarantine)
      url = `${API_URL}/drugs`;
      this.drugs = await (await fetch(url)).json();
      quarantine.setDrugs(this.drugs)
      console.log(quarantine)
    },
  },
};
</script>

<template>
  <h1>Latest Vue Core Commits</h1>
  <div id="app">
    <button @click="fetchData">Get Data</button>
  </div>
  <div>
    Drugs:
    <template v-for="drug in drugs">
      <label :for="drugs"> {{ drug }}</label>
    </template>
  </div>
  <div>
  Patients:
  <div v-for="(value, name) in patients">{{ name }}: {{ value }}</div>
  </div>
</template>

<style>
a {
  text-decoration: none;
  color: #42b883;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
</style>
