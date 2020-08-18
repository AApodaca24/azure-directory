<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="table">
          <vs-table max-items="10" pagination search :data="faculty">
            <template slot="header" >
              <h3>
                Members
              </h3>
            </template>
            <template slot="thead">
              <vs-th sort-key="dept">
                Department
              </vs-th>
              <vs-th sort-key="name">
                Name
              </vs-th>
              <vs-th>
                Location
              </vs-th>
              <vs-th>
                Rank/Grade
              </vs-th>
              <vs-th>
                Action
              </vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].dept">
                  {{ data[indextr].dept }}
                </vs-td>

                <vs-td :data="data[indextr].name">
                  {{ data[indextr].name }}
                </vs-td>

                <vs-td :data="data[indextr].loc">
                  {{ data[indextr].loc }}
                </vs-td>
                <vs-td :data="data[indextr].rank">
                  {{ data[indextr].rank }}
                </vs-td>
                <vs-td :data="data[indextr]._id">
                  <vs-button
                    radius
                    color="primary"
                    type="line"
                    icon="edit"
                    @click="$emit('set-active', data[indextr]._id)"
                  ></vs-button>
                  <vs-button
                    radius
                    color="danger"
                    type="line"
                    icon="delete"
                    @click="$emit('delete-item', data[indextr]._id)"
                  ></vs-button>
                  <vs-button
                    radius
                    color="success"
                    type="line"
                    icon="launch"
                    @click="$emit('navigate-to', data[indextr]._id)"
                  ></vs-button>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["faculty"],
};
</script>

<style scoped>
.row {
  width: 100vw;
  height: 100%;
}
.col {
  display: flex;
  flex: column;
  width: 85%;
  max-height: 90vh;
  margin: auto;
  padding: 1.2em;
  justify-content: center;
  align-items: center;
}
.table {
  width: 100%
}
</style>
