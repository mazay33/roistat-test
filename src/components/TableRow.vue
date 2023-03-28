<template>
  <tr>
    <td :style="{ paddingLeft: 10 + level * 20 + 'px' }" class="table__cell table__cell--left">
      {{ row.name }}
    </td>
    <td class="table__cell table__cell--right">{{ row.number }}</td>
  </tr>
  <TableRow
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
}
</script>

<style lang="scss" scoped>
.table__cell {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

.table__cell--left {
  width: 50%;
  border-right: 1px solid #ccc;
}

.table__cell--right {
  width: 50%;
}
</style>