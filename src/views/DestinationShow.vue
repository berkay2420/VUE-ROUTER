<template>
<div>
  <section v-if="destination">
    <h1>{{ destination.name }}</h1>
    <GoBack/>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{destination.description}}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Top experiences in {{destination.name }}</h2>
    <div class="cards">
      <router-link 
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{name:'experience.show', params:{experienceSlug: experience.slug}}"
        >
        <ExperienceCard
          :experience="experience"
        />
      </router-link>
    </div>
    <router-view />
  </section>
</div>
</template>

<script>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue';
import GoBack from '@/components/GoBack.vue';
export default {
  components:{ExperienceCard,GoBack},
  props:{
    id: {type: Number, required:true}
  },
  computed:{
    destination(){
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    }
    
  }
  // FETHING DATA FROM https://travel-dummy-api.netlify.app/
  // data(){
  //   return {
  //     destination: null
  //   }
  // },
  // computed: {
  //   destinationId(){
  //     return parseInt(this.$route.params.id)
  //   },
  //   // destination(){
  //   //   return sourceData.destinations.find(destination => destination.id === this.destinationId)
  //   // }
  // },
  // methods:{
  //   async initData(slug){
  //     try {
  //       const response = await fetch(`https://travel-dummy-api.netlify.app/${slug}.json`);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       this.destination = await response.json();
  //     }catch (error) {
  //       console.error("Fetch error in initData:", error);
  //     }
  //   }
  // },
  // async created(){
  //   try {
  //     this.initData(this.$route.params.slug)
  //     // this.$watch(
  //     //   () => this.$route.params.slug,
  //     //   async (newSlug) =>{
  //     //     await this.initData(newSlug);
  //     //   }
  //     // )
  //   }catch (error) {
  //     console.error("Fetch error:", error);
  //   }
  // }
}
</script>