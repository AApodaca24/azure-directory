<template>
  <div class="map">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="8"
        style="display: flex;justify-content: center;"
        fill-height
      >
        <div id="datamap"></div>
      </v-col>
      <v-col cols="6" md="4">
        <div class="wrapper">
          <div class="tableData">
            <h1>{{ `${dept} Map` }}</h1>

            <tableMap
              :faculty="faculty"
              v-on:set-active="setActive"
              v-on:launch-user="launchUser"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
import gsap from 'gsap';
import tableMap from '../layout/mapTable';

export default {
  name: 'deptMap',
  components: { tableMap },
  data: () => ({
    dept: null,
    faculty: [],
    active: null,
    data: [],
  }),
  watch: {
    width(newWidth) {
      this.svgObject.attributes.width.value = newWidth;
    },
  },
  methods: {
    roomAnim(room) {
      const foundRoom = this.faculty.filter(f => f.Room === room);
      if (foundRoom.length > 0) {
        console.log(foundRoom);
        const el = document.getElementById(foundRoom[0].Room);
        const tl = gsap.timeline();
        tl.to(el, {
          duration: 2,
          scale: 3,
          ease: 'power1',
          transformOrigin: 'center',
        });
        tl.to(el, {
          duration: 2,
          scale: 1,
          ease: 'power1',
        });
      }
    },
    setActive(room) {
      this.active = room;
      this.roomAnim(room);
    },
    async getFaculty() {
      try {
        const { data } = await axios.get(
          `https://dfdirectory.azurewebsites.net/api/v1/faculty/dept/${this.dept.toUpperCase()}`
        );
        this.data = data;
        data.forEach(f => {
          const prop = { name: `${f.rank} ${f.name}`, Room: f.loc };
          this.faculty.push(prop);
        });
      } catch (err) {
        console.log(err);
      }
    },
    launchUser(room) {
      const faculty = this.data.filter(f => f.loc === room);
      this.$router.push({ name: 'User', params: { id: faculty[0]._id } });
    },
  },
  computed: {
    rooms() {
      return this.faculty.map(f => {
        const room = f.Room;
        return room;
      });
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
      const groups = document.querySelectorAll('g');
      const svgObj = document.querySelector('svg');
      svgObj.attributes.width.value = container.style.width;
      groups.forEach(p => {
        p.id = p.attributes[1].value;
        if (p.id !== this.dept) {
          p.addEventListener('mouseenter', e => this.roomAnim(e.target.id));
        }
      });
      const groupsArr = Array.from(groups);
      gsap.from(groupsArr, {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        stagger: 0.09,
        ease: 'elastic',
        force3D: true,
      });
      if (this.$route.query) {
        setTimeout(() => {
          this.roomAnim(this.$route.query.room);
        }, 2500);
      }
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      });
    };
    this.getFaculty();
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

#datamap {
  width: 1200px;
  height: 100%;
  position: relative;
  margin: 0 1em;
  padding: 4rem;
}
#datamap svg {
  position: absolute;
  padding: 4rem;
  z-index: 200;
}
.tableData {
  padding: 4em;
}
</style>
