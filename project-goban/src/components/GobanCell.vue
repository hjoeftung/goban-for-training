<template>
  <div :class="classes" @click="placeStone">
    <div v-if="stone && (!blind || last)" :class="stoneClasses"></div>
    <div
      v-else
      class="preview"
      :class="previewClass"
      @mouseenter="addPreview"
      @focus="addPreview"
      @touchstart="addPreview"
      @mouseleave="removePreview"
      @touchend="removePreview"
      @blur="removePreview"></div>
    <div v-if="star" class="star"></div>
  </div>
</template>

<script>

export default {
  name: 'GobanCell.vue',
  props: {
    row: Number,
    cell: Number,
    stone: String,
    move: Boolean,
    last: Boolean,
    blind: Boolean
  },
  data() {
    return {
      classes: ['cell'],
      star: false,
      previewClass: ''
    };
  },
  methods: {
    placeStone() {
      this.$emit('stone', this.row, this.cell);
      this.removePreview();
    },
    addPreview() {
      this.previewClass = this.move ? 'preview_black' : 'preview_white';
    },
    removePreview() {
      this.previewClass = '';
    }
  },
  computed: {
    stoneClasses() {
      const lastClass = this.last && !this.blind ? 'last' : '';
      return ['stone', this.stone, lastClass];
    }
  },
  created() {
    this.removePreview();
    if (this.row === 1) {
      this.classes.push('top');
    } else if (this.row === 19) {
      this.classes.push('bottom');
    }
    if (this.cell === 1) {
      this.classes.push('left');
    } else if (this.cell === 19) {
      this.classes.push('right');
    }
    if ((this.row === 4 && this.cell === 4)
      || (this.row === 4 && this.cell === 16)
      || (this.row === 16 && this.cell === 4)
      || (this.row === 16 && this.cell === 16)
      || (this.row === 10 && this.cell === 10)
      || (this.row === 10 && this.cell === 4)
      || (this.row === 10 && this.cell === 16)
      || (this.row === 4 && this.cell === 10)
      || (this.row === 16 && this.cell === 10)) {
      this.star = true;
    }
  }
};
</script>

<style scoped>
  .cell {
    width: calc(100vw / 19);
    height: calc(100vw / 19);
    position: relative;
    background-color: bisque;
    flex-shrink: 0;
  }

  @media only screen and (min-width: 768px) {
    .cell {
      width: 30px;
      height: 30px;

    }
  }
  @media only screen and (min-width: 1440px) {
    .cell {
      width: 35px;
      height: 35px;

    }
  }

  .cell::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #333;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 10;
  }

  .left::before {
    width: 50%;
    left: 50%;
  }

  .right::before {
    width: 50%;
  }

  .cell::after {
    content: '';
    width: 1px;
    height: 100%;
    background-color: #333;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 10;
  }

  .top::after {
    height: 50%;
    top: 50%;
  }

  .bottom::after {
    height: 50%;
  }

  .star {
    background-color: #000;
    border-radius: 50%;
    position: absolute;
    height: 5px;
    width: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
  }

  .stone {
    height: 96%;
    width: 96%;
    margin-top: 2%;
    margin-left: 2%;
    border-radius: 50%;
    position: relative;
    z-index: 100;
  }

  .white {
    background-image: radial-gradient(#f1f1f1, #999);
  }

  .black {
    background-image: radial-gradient(#555, #000);
  }

  .last:after {
    content: '';
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    border: 2px solid royalblue;
    z-index: 150;
  }

  .preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    border-radius: 50%;
    z-index: 75;
  }

  .preview_black {
    background-image: radial-gradient(#555, #000);
  }

  .preview_white {
    background-image: radial-gradient(#f1f1f1, #999);
  }

  @media only screen and (min-width: 380px) {
    .cell {
      width: 20px;
      height: 20px;

    }
  }

  @media only screen and (min-width: 768px) {
    .cell {
      width: 25px;
      height: 25px;

    }

    .star {
      width: 7px;
      height: 7px;
    }
  }

  @media only screen and (min-width: 1200px) and (min-height: 700px) {
    .cell {
      width: 30px;
      height: 30px;

    }
  }

  @media only screen and (min-width: 1440px) {
    .cell {
      width: 35px;
      height: 35px;

    }
  }
</style>
