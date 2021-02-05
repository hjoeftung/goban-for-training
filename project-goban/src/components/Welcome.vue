<template>
  <b-modal id="welcome-modal" @ok="submit">
    Ваш ник:
    <form @submit.prevent="submit">
      <b-form-input v-model="value" placeholder="Ник"></b-form-input>
    </form>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    socket: Object
  },
  data() {
    return {
      value: ''
    };
  },
  computed: {
    ...mapGetters(['names', 'currName'])
  },
  methods: {
    submit() {
      if (this.currName && this.names.black === this.currName) {
        this.$store.dispatch('toggleSeat', { color: 'black' });
        this.$store.dispatch('toggleSeat', { color: 'black', name: this.value });
      } else if (this.currName && this.names.white === this.currName) {
        this.$store.dispatch('toggleSeat', { color: 'white' });
        this.$store.dispatch('toggleSeat', { color: 'white', name: this.value });
      }
      if (this.value) {
        this.$store.dispatch('changeName', this.value);
        this.socket.sendName(this.value);
        document.cookie = `name=${this.value}`;
      }
      this.$bvModal.hide('welcome-modal');
    }
  },
  mounted() {
    // const nameRow = document.cookie
    //   .split('; ')
    //   .find(row => row.startsWith('name'));
    // if (nameRow) {
    //   const name = nameRow.split('=')[1];
    //   this.$store.dispatch('changeName', name);
    // } else {
    //   this.$bvModal.show('welcome-modal');
    // }
    this.$bvModal.show('welcome-modal');
  }
};

</script>
