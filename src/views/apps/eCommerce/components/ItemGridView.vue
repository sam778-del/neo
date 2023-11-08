
<template>
 
            <vs-card class="grid-view-item mb-base overflow-hidden">
                <template slot="no-body">

                    <!-- ITEM IMAGE -->
                    <div class="item-img-container bg-white h-64 flex items-center justify-center mb-4">
                        <img :src="item.image" :alt="item.name" class="grid-view-img px-4">
                    </div>
                    <div class="item-details px-4">
                        <div class="my-4">
                            <h5 class="truncate font-semibold mb-1">{{ item.name }}</h5>
                            <!-- <p class="item-description  text-sm">{{ item.description }}</p> -->
                        </div>
                        <!-- RATING & PRICE -->
                        <div class="flex justify-between items-center mb-5">
                           <h6 class="font-bold">${{ item.price }}</h6>
                            <div class="flex text-warning">
                                <span class="mr-2">{{ item.rating }}</span>
                              
                            </div>
                            
                        </div>

                        <!-- TITLE & DESCRIPTION -->
                       
                    </div>

                    <!-- SLOT: ACTION BUTTONS -->
                    <slot name="action-buttons" />
                </template>
            </vs-card>
  
</template>

<script>
export default{
    props: {
        item: {
            type: Object,
            required: true
        },
    },
}
</script>

<style lang="scss" scoped>
.grid-view-item {
    .grid-view-img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        transition: .35s;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 4px 25px 0px rgba(0,0,0,.25);

        .grid-view-img{
            opacity: 0.9;
        }        
    }
}
</style>