<template>
    <div>
        <h1>Intro View</h1>
        <!-- {{$store.state.greeting}} -->
        <div v-for="i of $store.state.greeting" v-bind:key="i.welcome">
            {{i.welcome}}
        </div>
    
    </div>
</template>
<script>
export default {
    components : {
        
    },
    methods : {
        fetchGreetingData: function(){
            this.$store.dispatch('fetchGreetingData')
        }
    },
    mounted(){
        this.fetchGreetingData()
    }
}
</script>
<style>
    
</style>