<template>
  <div>
    <div class="table">
      <v-row no-gutters>
        <v-col></v-col>
        <v-col cols="8">
          <v-layout class="mt-3">
            <v-flex class="mx-auto" style="width:100%">
              <v-card>
                <v-container>
                  <h2>Welcome to the Directory</h2>
                  <p>
                    Here you will find a list of all the members in the
                    directory. If you would like to add a new member, please
                    click the add button
                  </p>
                  <p>
                    If you would like to see the listings by department click on
                    the departments menu for a list of departments
                  </p>
                  <v-select
                    v-model="selectedDept"
                    :items="deptsEnum"
                    label="Department"
                    solo
                    clearable="true"
                  ></v-select>
                </v-container>
                <v-container>
                  <v-btn
                    :to="{ name: 'newForm' }"
                    class="ma-2"
                    tile
                    color="indigo"
                    dark
                    >Add New</v-btn
                  >
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout class="mt-3">
            <v-card class="mx-auto" style="width:100%">
              <v-card-title>
                Members
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="deptFaculty"
                :search="search"
                :loading="loading"
                loading-text="Please Wait for Members..."
              >
                <template v-slot:item.action="{ item }">
                  <v-flex style="display: flex;flex-flow:row wrap:justify-content:center;">
                    <v-btn
                      color="orange lighten-1"
                      small
                      @click="$emit('set-active', item._id)"
                      class="ma-3"
                    >
                      <v-icon>create</v-icon>
                    </v-btn>
                    <v-btn
                      color="red accent-4"
                      small
                      dark
                      @click="$emit('delete-item', item._id)"
                      class="ma-3"
                    >
                      <v-icon>delete_outline</v-icon>
                    </v-btn>
                    <v-btn
                      color="blue darken-4"
                      small
                      dark
                      @click="$emit('navigate-to', item._id)"
                      class="ma-3"
                    >
                      <v-icon>launch</v-icon>
                    </v-btn>
                  </v-flex>
                </template>
              </v-data-table>
            </v-card>
          </v-layout>
        </v-col>
        <v-col></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['faculty', 'loading'],
  data() {
    return {
      search: '',
      selectedDept: null,
      deptsEnum: [
        'DF',
        'DFAN',
        'DFAS',
        'DFB',
        'DFBL',
        'DFC',
        'DFCE',
        'DFCS',
        'DFEC',
        'DFEG',
        'DFEI',
        'DFME',
        'DFENG',
        'DFF',
        'DFIP',
        'DFH',
        'DFK',
        'DFL',
        'DFLIB',
        'DFM',
        'DFMI',
        'DFMS',
        'DFP',
        'DFPS',
        'DFPY',
        'DFR',
        'DFS',
        'DFT',
      ],
      headers: [
        {
          text: 'Department',
          value: 'dept',
        },
        { text: 'Name', value: 'name', align: 'start', sortable: true },
        { text: 'Rank/Grade', value: 'rank' },
        { text: 'Location', value: 'loc' },
        { text: 'Action', value: 'action' },
      ],
    };
  },
  computed: {
    deptFaculty() {
      if (this.selectedDept === null || this.selectedDept === undefined) {
        return this.faculty;
      } else {
        const filtered = this.faculty.filter(f => f.dept === this.selectedDept);
        return filtered;
      }
    },
  },
};
</script>

<style scoped></style>
