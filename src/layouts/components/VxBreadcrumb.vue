<template>
    <div class="vx-breadcrumb">
        <ul class="flex flex-wrap items-center">
            <li v-for="(link, index) in $route.meta.breadcrumb.slice(1,-1)" :key="index" class="inline-flex items-center">
                <router-link :to="link.url" v-if="link.url">{{ link.title }}</router-link>
                <span class="text-primary cursor-default" v-else>{{ link.title }}</span>
               
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name: 'vx-breadcrumb',
}
</script>