<template>
    <div>
        <h1>Tasks</h1>

        <div v-for="i of $store.state.projects" v-bind:key="i.id">
            <div>
                <h2>{{i.taskName}}</h2>
                <p>link: {{i.github}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components : {

    },
    methods: {
        fetchProjectsData : function(){
            this.$store.dispatch('fetchProjectsData')
        }
    },
    mounted(){
        this.fetchProjectsData()
    }
}
</script>
<style>
    
</style>