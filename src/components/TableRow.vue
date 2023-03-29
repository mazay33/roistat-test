<template>
  <tr @click="toggleChildren">
    <td
      :style="{ paddingLeft: 10 + level * 20 + 'px' }"
      :class="[row.children ? 'table__cell--active' : '']"
      class="table__cell table__cell--left"
    >
      <span v-if="row.children">+</span>
      {{ row.name }}
      <span v-if="row.children">{{ row.children.length }}</span>
    </td>
    <td class="table__cell table__cell--right">{{ row.number }}</td>
  </tr>

  <TableRow
    v-if="showChildren"
    v-for="(child, index) in row.children"
    :key="index"
    :row="child"
    :level="level + 1"
  />
</template>

<script>
export default {
  name: 'TableRow',

  props: {
    row: {
      type: Object,
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      showChildren: true,
    }
  },

  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren
    },
  },
}
</script>

<style lang="scss" scoped>
.table__cell {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  &--active {
    cursor: pointer;
  }
  & td{
    display: flex;
  }
  & span:nth-child(2) {
    padding: 5px;
    border-radius: 100px ;
    background:#ccc;
  }
}

.table__cell--left {
  width: 50%;
  border-right: 1px solid #ccc;
}

.table__cell--right {
  width: 50%;
}
</style>
