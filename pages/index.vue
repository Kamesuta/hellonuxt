<template>
  <section class="section">
    <div class="columns is-multiline">
      <Card class="column is-4-desktop is-6-tablet is-12-mobile" v-for="card in cards" :key="card" :name="card" />
      <div class="column is-4-desktop is-6-tablet is-12-mobile card button is-notification" v-on:click="addCard()" >heisusi</div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Card from '~/components/Card.vue'

export default {
  name:"index",
  components: {
    Card
  },
  data() {
    return {
      cards: ["card1","card2","card3"]
    }
  },
  methods: {
    addCard: function() {
      this.cards.push(`card${this.cards.length+1}`)
    }
  }
}
</script>