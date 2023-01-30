<script>
const API_URL = `http://localhost:7200`;

export default {
  data: () => ({
    patients: null,
    drugs:null
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
      const url = `${API_URL}/drugs`;
      this.drugs = await (await fetch(url)).json();
    },
    
  },
};
</script>

<template>
  <h1>Latest Vue Core Commits</h1>
    <div id="app">
      <button @click="fetchData">Retrieve drugs</button>
    </div>
  <template v-for="drug in drugs">
    <label :for="drugs">{{ drug }}</label>
  </template>
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
