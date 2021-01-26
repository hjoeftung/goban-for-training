<template>
  <div class="col col-12 col-lg-5">
    <p class="text-center h5">
      Пленники: <span aria-label="белых">⚫</span>{{ captives.black }}
      <span aria-label="черных">⚪</span>{{ captives.white }}
    </p>
    <div class="my-2 controls">
      <b-button-toolbar class="d-flex justify-content-start" aria-label="Меню гобана">
        <b-button class="m-1" variant="info" @click="newGame">Новая игра</b-button>
        <b-button class="m-1" variant="info" @click="revert">Вернуть ход</b-button>
        <b-dropdown class="m-1" variant="info" right text="Выбрать пресет">
          <b-dropdown-item @click="preset('atari')">Атари-го</b-dropdown-item>
          <b-dropdown-item @click="preset('corner')">Выживание в углу</b-dropdown-item>
          <b-dropdown-item @click="preset('full')">Выживание по всей доске</b-dropdown-item>
          <b-dropdown-item @click="preset('center')">Выживание в центре</b-dropdown-item>
          <b-dropdown-item @click="preset('colorless')">Одноцветное го</b-dropdown-item>
        </b-dropdown>
        <b-form-checkbox
          class="m-1 d-none d-md-block"
          v-model="showCoords"
          @change="toggleCoords"
          name="check-button"
          size="lg"
          switch>
          Показывать координаты
        </b-form-checkbox>
        <b-form-checkbox
          class="m-1 d-none d-md-block"
          v-model="isBlind"
          @change="toggleBlind"
          name="check-button"
          size="lg"
          switch>
          Игра вслепую
        </b-form-checkbox>
      </b-button-toolbar>
    </div>
  </div>
</template>

<script>
import eventBus from '../event-bus';

export default {
  name: 'Controls',
  data() {
    return {
      showCoords: true,
      isBlind: false,
      captives: {
        black: 0,
        white: 0,
      }
    };
  },
  methods: {
    newGame() {
      return new Promise(resolve => {
        this.$bvModal.msgBoxConfirm('Вы уверены?', {
          okVariant: 'info',
          cancelVariant: 'outline-dark',
          okTitle: 'Да, начать новую игру',
          cancelTitle: 'Нет, вернуться',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(confirmation => {
            if (confirmation) {
              eventBus.$emit('new-game');
              resolve(true);
            }
            resolve(false);
          });
      });
    },
    revert() {
      eventBus.$emit('revert');
    },
    preset(variant) {
      this.newGame()
        .then(confirm => {
          if (confirm) {
            eventBus.$emit('preset', variant);
          }
        });
    },
    toggleCoords() {
      eventBus.$emit('toggle-coords');
    },
    toggleBlind() {
      eventBus.$emit('toggle-blind');
    }
  },
  created() {
    eventBus.$on('captives-change', (color, newNumber) => {
      this.captives[color] = newNumber;
    });
  }
};

</script>

<style scoped>
  @media only screen and (min-width: 1440px) {
    .controls {
      margin-left: 50px;
    }
  }

</style>
