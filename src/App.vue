<script>
import Match from './components/Match.vue';

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