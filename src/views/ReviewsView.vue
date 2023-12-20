<template>
    <div>
        <h1>Reviews view</h1>
        <!-- {{$store.state.greeting}} -->
        <div v-for="i of $store.state.aboutme" v-bind:key="i.id">
            <div>

             <h2>{{i.name}}</h2>
             <p>{{i.Description}}</p>
             
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    components : {
        
    },
    methods : {
        fetchAboutData : function(){
            this.$store.dispatch('fetchAboutData')
        }
    },
    mounted(){
        this.fetchAboutData()
    }
}
</script>
<style>
    
</style>