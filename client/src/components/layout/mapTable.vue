<template>
  <div class="table">
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr style="text-align:center;">
            <th class="text-left" style="font-size:2em;padding:.8em;">
              Name
            </th>
            <th class="text-left" style="font-size:2em;padding:.8em;">
              Office Number
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in faculty" :key="index" @click="$emit('set-active', item.Room)" style="text-align:center;">
            <td style="font-size:1.2em;padding:.8em;text-align:left;">{{ item.name }}</td>
            <td style="font-size:1.2em;padding:.8em;">{{ item.Room }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'tableMap',
  props: {
      faculty: Array
  }
};
</script>

<style scoped></style>
