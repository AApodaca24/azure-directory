<template>
  <div class="dfMap">
    <div id="map"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'dfMap',
  data: () => ({
    svgObject: {},
    width: null,
    height: null,
    deptsEnum: [
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
  }),
  watch: {
    width(newHeight) {
      this.svgObject.attributes.width.value = newHeight;
    },
  },
  methods: {
    animate(dept) {
      const filtered = this.deptsEnum.filter(d => d === dept);
      if (filtered.length > 0) {
        const el = document.getElementById(filtered[0]);
        const tl = gsap.timeline();
        tl.to(el, {
          duration: .5,
          scale: 1.5,
          ease: 'power1',
          transformOrigin: 'center',
        });
        tl.to(el, {
          duration: .5,
          scale: 1,
          ease: 'power1',
        });
      }
    },
    onResize() {
      this.width = window.innerWidth * .9 ;
      this.height = window.innerHeight
    },
    loadMap(dept) {
      const filtered = this.deptsEnum.filter(d => d === dept);
      if (filtered.length > 0) {
        this.$router.push({ name: 'deptMap', params: { dept: filtered[0] } });
      }
    },
  },
  mounted() {
    const svgURI =
      'https://dfimages01.blob.core.windows.net/dfdirectory/DF.svg';
    const ajax = new XMLHttpRequest();
    ajax.open('GET', svgURI, true);
    ajax.send();
    ajax.onload = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight
      const container = document.getElementById('map');
      const svg = ajax.responseText;
      container.innerHTML = svg;
      const groups = document.querySelectorAll('g');
      const svgObj = document.querySelector('svg');
      this.svgObject = svgObj;
      svgObj.attributes.width.value = windowWidth * .9 ;
      svgObj.attributes.height.value = windowHeight;
      groups.forEach(g => {
        console.log(g.id);
        g.addEventListener('click', () => this.loadMap(g.id));
        g.addEventListener('mouseenter', e => this.animate(e.target.id));
        g.style.cursor = 'pointer'
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
    };
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style scoped>
.dfMap {
  height: 100%;
  display: grid;
  place-items: center;
}
</style>
