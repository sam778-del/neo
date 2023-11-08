<template>
    <div id="theme-customizer">
        <vs-button @click.stop="active=!active" color="primary" type="filled" class="customizer-btn" icon-pack="feather" icon="icon-settings"></vs-button>
        <vs-sidebar hidden-background position-right v-model="active" click-not-close class="items-no-padding">
            <div class="h-full">
                <div class="customizer-header mt-6 flex items-center justify-between px-6">
                    <div>
                        <h4>Style Customizer</h4>
                    </div>
                    <feather-icon icon="XIcon" @click.stop="active = false" class="cursor-pointer"></feather-icon>
                </div>
                <vs-divider class="mb-0"></vs-divider>

                <VuePerfectScrollbar class="scroll-area--customizer pt-4 pb-6" :settings="settings">
                    <div class="px-6">

                        <!-- THEME -->
                        <div class="mt-4">
                            <h5 class="mb-4">Theme Mode</h5>
                            <div>
                                <vs-radio class="mr-4" v-model="theme" vs-value="light">Light</vs-radio> 
                                <vs-radio class="mr-4" v-model="theme" vs-value="dark">Dark</vs-radio>
                                <vs-radio v-model="theme" vs-value="semi-dark">Default</vs-radio>
                            </div>
                        </div>
                        <vs-divider></vs-divider>

                         <!-- COLLAPSE SIDEBAR -->
                        <div class="mt-4 flex justify-between">
                            <h5 class="mb-2">Collapse Sidebar</h5>
                            <vs-switch v-model="reduced_sidebar"/>
                        </div>
                        <vs-divider></vs-divider>
                        <!-- THEME COLORS -->
                        <div>
                            <h5 class="mb-4">Theme Color</h5>
                            <ul class="clearfix">
                                <li @click="updatePrimaryColor(color)" v-for="color in themeColors" class="w-10 cursor-pointer h-10 rounded-lg m-2 float-left" :style="{backgroundColor: color}" :class="{'shadow-outline': color == primaryColor}" :key="color"></li>
                                <li @click="updatePrimaryColor(customPrimaryColor)" class="w-10 cursor-pointer h-10 rounded-lg m-2 float-left" :style="{backgroundColor: customPrimaryColor}" :class="{'shadow-outline': customPrimaryColor == primaryColor}"></li>
                               

                            </ul>
                        </div>
                        <vs-divider></vs-divider>
                        <!-- NAVBAR COLOR -->
                        <div class="mt-4">
                            <h5 class="mb-4">Navbar Color</h5>
                            <ul class="clearfix">
                                <li @click="navbarColorLocal = '#fff'" class="w-10 cursor-pointer h-10 rounded-lg m-2 float-left bg-white border border-solid border-grey-light" :class="{'shadow-outline': '#fff' == navbarColorLocal}"></li>
                                <li @click="navbarColorLocal = color" v-for="color in themeColors" class="w-10 cursor-pointer h-10 rounded-lg m-2 float-left" :style="{backgroundColor: color}" :class="{'shadow-outline': color == navbarColorLocal}" :key="color"></li>
                                <li @click="navbarColorLocal = customNavbarColor" class="w-10 cursor-pointer h-10 rounded-lg m-2 float-left" :style="{backgroundColor: customNavbarColor}" :class="{'shadow-outline': customNavbarColor == navbarColorLocal}"></li>
                              
                            </ul>
                        </div>
                        <vs-divider></vs-divider>

                      
                    </div>
                </VuePerfectScrollbar>
            </div>
        </vs-sidebar>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
    props: {
        navbarType: {
            type: String,
            required: true,
        },
        navbarColor: {
            type: String,
            required: true,
            default: "#fff",
        },
        footerType: {
            type: String,
            required: true,
        },
        routerTransition: {
            type: String,
            required: true,
        },
        hideScrollToTop: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            active: false,
            themeColors: ['#293462', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'],
            customPrimaryColor: '#3DC9B3',
            customNavbarColor: '#3DC9B3',
            // routerTransitionsList: [
            //     { text: 'Zoom Fade', value: 'zoom-fade' },
            //     { text: 'Slide Fade', value: 'slide-fade' },
            //     { text: 'Fade Bottom', value: 'fade-bottom' },
            //     { text: 'Fade', value: 'fade' },
            //     { text: 'Zoom Out', value: 'zoom-out' },
            //     { text: 'None', value: 'none' },
            // ],
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
        }
    },
    computed: {
        theme: {
            get() {
                return this.$store.state.theme;
            },
            set(val) {
                this.$store.dispatch('updateTheme', val);
            }
        },
        reduced_sidebar: {
            get() { return this.$store.state.reduceButton },
            set(val) { this.$store.commit('TOGGLE_REDUCE_BUTTON', val) }
        },
        navbarTypeLocal: {
            get() { return this.navbarType; },
            set(val) { this.$emit('updateNavbar', val) }
        },
        navbarColorLocal: {
            get() { return this.navbarColor; },
            set(val) { this.$emit('updateNavbarColor', val) }
        },
        footerTypeLocal: {
            get() { return this.footerType; },
            set(val) { this.$emit('updateFooter', val) }
        },
        routerTransitionLocal: {
            get() { return this.routerTransition; },
            set(val) { this.$emit('updateRouterTransition', val) }
        },
        primaryColor: {
            get() { return this.$store.state.themePrimaryColor },
            set(val) { this.$store.commit('UPDATE_PRIMARY_COLOR', val) }
        },
        hideScrollToTopLocal: {
            get() { return this.hideScrollToTop },
            set(val) { this.$emit('toggleHideScrollToTop', val) }
        },
    },
    methods: {
        updatePrimaryColor(color) {
            this.primaryColor = color;
            this.$vs.theme({ primary: color });
        }
    },
    components: {
        VuePerfectScrollbar,
    }
}
</script>

<style lang="scss">
#theme-customizer {
    .vs-sidebar{
        position: fixed;
        z-index: 52000;
        width: 400px;
        max-width: 90vw;
        @apply shadow-lg;
    }
}

.customizer-btn{
    position: fixed;
    top:50%;
    right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    z-index: 50000;

  
}

.scroll-area--customizer {
    height: calc(100% - 5rem);
}
</style>
