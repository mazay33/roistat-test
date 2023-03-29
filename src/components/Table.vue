<template>
  <table class="table">
    <thead>
      <tr>
        <th
          class="table__header table__header--left"
          @click="toggleSortOrder('name')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            id="filter"
          >
            <path
              fill="#000"
              fill-rule="evenodd"
              d="M7 3a1 1 0 0 0-1 1v1.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-9.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-1-1zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm9-5a1 1 0 0 0-1 1v8.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-2.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-1-1zm1 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Имя
        </th>
        <th
          class="table__header table__header--right"
          @click="toggleSortOrder('number')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            id="filter"
          >
            <path
              fill="#000"
              fill-rule="evenodd"
              d="M7 3a1 1 0 0 0-1 1v1.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-9.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-1-1zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm9-5a1 1 0 0 0-1 1v8.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-2.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-1-1zm1 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Номер
        </th>
      </tr>
    </thead>
    <tbody>
      <TableRow
        v-for="(row, index) in sortedTableData"
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
  data() {
    return {
      sortColumn: '',
      sortOrder: '',
    }
  },
  methods: {
    toggleSortOrder(column) {
      if (this.sortColumn === column) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortColumn = column
        this.sortOrder = 'asc'
      }
    },
  },
  components: {
    TableRow,
  },

  computed: {
    ...mapState(['tableData']),
    sortedTableData() {
      const sortedData = (data) => {
        if (this.sortColumn) {
          data = data.sort((a, b) => {
            const aValue = a[this.sortColumn]
            const bValue = b[this.sortColumn]

            if (this.sortOrder === 'asc') {
              return aValue > bValue ? 1 : -1
            } else {
              return aValue < bValue ? 1 : -1
            }
          })
        }
        data.forEach((row) => {
          if (row.children) {
            row.children = sortedData(row.children)
          }
        })
        return data
      }
      return sortedData(this.tableData)
    },
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
    cursor: pointer;
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
