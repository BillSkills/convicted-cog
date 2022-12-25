<script>
import Match from '../components/Match.vue';

export default {
  components: {
    Match
  },
  data() {
    return {
      tournament: {
        name: "Finals",
        children: [
          {
            name: "Semi-Finals",
            children: [
              {
                name: "Quarter-Finals",
                children: []
              },
              {
                name: "Quarter-Finals",
                children: []
              }
            ]
          },
          {
            name: "Semi-Finals",
            children: []
          }
        ]
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>GGST Tournament Tracker</h1>
    <ul class="tournamentBracket">
      <Match :fight="tournament" />
    </ul>
  </div>
</template>

<style>
h1 {
  font-family: ggst-impact;
  text-align: center;
}

main {
  display: grid;
  align-items: center;
}

.tournamentBracket {
  width: 100%;
  height: auto;
  text-align: center;
}

.tournamentBracket ul {
  padding: 20px;
  position: relative;
}

.tournamentBracket li {
  padding: 10px;
  display: inline-table;
  text-align: center;
  list-style-type: none;
  position: relative;
}
</style>