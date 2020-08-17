<template>
  <div>
        <vs-table max-items="10" pagination search :data="faculty">
      <template slot="header">
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

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="data[indextr].dept">
            {{data[indextr].dept}}
          </vs-td>

          <vs-td :data="data[indextr].name">
            {{data[indextr].name}}
          </vs-td>

          <vs-td :data="data[indextr].loc">
            {{data[indextr].loc}}
          </vs-td>
          <vs-td :data="data[indextr].rank">
            {{data[indextr].rank}}
          </vs-td>
          <vs-td :data="data[indextr]._id">
            <vs-button radius color="primary" type="line" icon="edit"></vs-button>
            <vs-button radius color="danger" type="line" icon="delete"></vs-button>
          </vs-td>
        </vs-tr>
      </template>


    </vs-table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["faculty"],
};
</script>

<style scoped></style>
