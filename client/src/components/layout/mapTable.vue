<template>
  <div class="table">
    <v-card>
      <v-card-title>
        <v-text-field
          v-if="faculty.length >= 1"
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-if="faculty.length >= 1"
        :headers="headers"
        :items="faculty"
        :search="search"
        :item-class="tableClass"
      >
        <template v-slot:item.action="{ item }">
          <v-flex
            style="display: flex;flex-flow:row wrap:justify-content:center;"
          >
            <v-btn icon @click="$emit('set-active', item.Room)"
              ><v-icon>location_on</v-icon></v-btn
            >
            <v-btn icon @click="$emit('launch-user', item.Room)"
              ><v-icon>account_circle</v-icon></v-btn
            >
          </v-flex>
        </template>
      </v-data-table>
      <v-flex class="text-center fill-height pa-2" v-else>
        <p>No Department Members have been added to this directory</p>
        <p>To add new members, please login</p></v-flex
      >
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'tableMap',
  props: {
    faculty: Array,
  },
  data: () => ({
    search: '',
    headers: [
      {
        text: 'Faculty',
        align: 'start',
        filterable: false,
        value: 'name',
      },
      {
        text: 'Office #',
        align: 'start',
        filterable: false,
        value: 'Room',
      },
      {
        text: '',
        value: 'action',
      },
    ],
  }),
  methods: {
    test(x) {
      this.$emit('set-active', x.Room);
    },
    tableClass() {
      return 'myTableClass';
    },
  },
};
</script>

<style>
.myTableClass td {
  font-size: 1.3rem !important;
  padding: 0.8rem !important;
}
</style>
