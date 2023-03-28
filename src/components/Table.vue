<template>
  <table class="table">
    <thead>
      <tr>
        <th class="table__header table__header--left">Имя</th>
        <th class="table__header table__header--right">Номер</th>
      </tr>
    </thead>
    <tbody>
      <TableRow
        v-for="(row, index) in tableData"
        :key="index"
        :row="row"
        :level="0"
      />
    </tbody>
  </table>
</template>

<script>
import { mapState } from 'vuex'
import TableRow from './TableRow.vue'

export default {
  name: 'Table',

  components: {
    TableRow,
  },

  computed: {
    ...mapState(['tableData']),
  },
}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  margin-top: 1rem;

  &__header {
    font-weight: bold;
    padding: 1rem;
    text-align: left;
    border-bottom: 2px solid #ccc;
  }

  &__header--left {
    width: 50%;
    border-right: 1px solid #ccc;
  }

  &__header--right {
    width: 50%;
  }

  &__cell {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }

  &__cell--left {
    width: 50%;
    border-right: 1px solid #ccc;
  }

  &__cell--right {
    width: 50%;
  }
}
</style>
