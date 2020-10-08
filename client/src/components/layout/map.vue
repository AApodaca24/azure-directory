<template>
  <div class="map">
    THE MAP COMPONENT
    <v-container fluid>
      <v-row>
        <div class="wrapper">
          <div id="datamap"></div>
          <div class="tableData">
            <h1>{{ `${dept} Map` }}</h1>

            <tableMap :faculty="faculty" :set-active="setActive" />
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import DFL from '../../assets/maps/DFL.svg';
import axios from 'axios';
import tableMap from '../layout/mapTable';

export default {
  name: 'deptMap',
  components: { tableMap },
  data: () => ({
    rooms: [],
    dept: null,
    faculty: [],
    active: '',
  }),
  methods: {
    setActive(room) {
      this.active = room;
    },
    async getFaculty() {
      try {
        const { data } = await axios.get(
          `https://dfdirectory.azurewebsites.net/api/v1/faculty/dept/${this.dept.toUpperCase()}`
        );
        data.forEach(f => {
          const prop = { name: `${f.rank} ${f.name}`, Room: f.loc };
          this.faculty.push(prop);
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.dept = this.$route.params.dept;

    const ajax = new XMLHttpRequest();
    ajax.open(
      'GET',
      `https://dfimages01.blob.core.windows.net/dfdirectory/${this.dept}.svg`, 
      true
    );
    ajax.send();
    ajax.onload = () => {
      const container = document.getElementById('datamap');
      const svg = ajax.responseText;
      container.innerHTML = svg;
      const deptSVG = document.querySelector('svg')
      deptSVG.attributes.height.value = 800
      const paths = container.querySelectorAll('rect');
      paths.forEach(p => {
        this.rooms.push(p.attributes[1].value);
        p.id = p.attributes[1].value;
        p.addEventListener('mouseenter', e =>
          console.log(`Entered Room ${e.target.id}`)
        );
        p.addEventListener('mouseleave', e =>
          console.log(`Left Room ${e.target.id}`)
        );
      });
    };
    this.getFaculty();
    // const svgObj = document.getElementById('svg-main');
    // console.log(svgObj.contentDocument);
    // svgObj.addEventListener('load', () => {
    //   const doc = svgObj.contentDocument;
    //   console.log(doc);
    // });
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

#datamap {
  margin: 0 4em;
}

.tableData {
  margin-right: 2em;
  padding: 1.2em;
}
</style>
