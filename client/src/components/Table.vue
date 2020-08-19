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
                    If you would like to see the department page listing click
                    on the departments menu for a list of departments
                  </p>
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
                :items="faculty"
                :search="search"
              >
                <template v-slot:item.action="{ item }">
                  <vs-button
                    radius
                    color="primary"
                    type="line"
                    icon="edit"
                    @click="$emit('set-active', item._id)"
                  ></vs-button>
                  <vs-button
                    radius
                    color="danger"
                    type="line"
                    icon="delete"
                    @click="$emit('delete-item', item._id)"
                  ></vs-button>
                  <vs-button
                    radius
                    color="success"
                    type="line"
                    icon="launch"
                    @click="$emit('navigate-to', item._id)"
                  ></vs-button>
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
  name: "Table",
  props: ["faculty"],
  data() {
    return {
      headers: [
        {
          text: "Department",
          value: "dept",
        },
        { text: "Name", value: "name", align: "start", sortable: true },
        { text: "Rank/Grade", value: "rank" },
        { text: "Location", value: "loc" },
        { text: "Action", value: "action" },
      ],
    };
  },
};
</script>

<style scoped></style>
