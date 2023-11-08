<template>
<div class="relative">
		<vs-navbar class="vx-navbar navbar-custom jov-navbar-wrapper" :color="navbarColor" :class="classObj">
   <!-- SEARCHBAR -->

      <div class="bars-button">
         
      <button @click="$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true)"><i class="fas fa-bars fa-lg"  ></i></button> 
     </div>
         <div class="vue-search-bar">
                  <vs-input icon="search"/>
               </div>
               <!-- SM - OPEN SIDEBAR BUTTON -->
               <template v-if="breakpoint != 'md'">
                  <!-- STARRED PAGES MORE -->
                  <div class="vx-navbar__starred-pages--more-dropdown" v-if="starredPagesMore.length">
                     <vs-dropdown vs-custom-content vs-trigger-click>
                        <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" class="cursor-pointer p-2"></feather-icon>
                        <vs-dropdown-menu>
                           <ul class="vx-navbar__starred-pages-more--list">
                              <draggable v-model="starredPagesMore" :group="{name: 'pinList'}" class="cursor-move">
                                 <li class="starred-page--more flex items-center cursor-pointer" v-for="page in starredPagesMore" :key="page.url" @click="$router.push(page.url)">
                                    <feather-icon svgClasses="h-5 w-5" class="ml-2 mr-1" :icon="page.labelIcon"></feather-icon>
                                    <span class="px-2 pt-2 pb-1">{{ page.label }}</span>
                                 </li>
                              </draggable>
                           </ul>
                        </vs-dropdown-menu>
                     </vs-dropdown>
                  </div>

            
               </template>


               <vs-spacer></vs-spacer>

               <!-- I18N -->
               <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer mr-5">
                  <span class="cursor-pointer flex i18n-locale"><img class="h-4 w-5" :src="require(`@/assets/images/flags/${$i18n.locale}.png`)" :alt="$i18n.locale" /><span class="hidden sm:block ml-2">{{ getCurrentLocaleData.lang }}</span></span>
                  <vs-dropdown-menu class="w-48 i18n-dropdown">
                     <vs-dropdown-item @click="updateLocale('en')"><img class="h-4 w-5 mr-1" src="@/assets/images/flags/en.png" alt="en" /> &nbsp;ENG</vs-dropdown-item>
                     <vs-dropdown-item @click="updateLocale('fr')"><img class="h-4 w-5 mr-1" src="@/assets/images/flags/fr.png" alt="fr" /> &nbsp;FR</vs-dropdown-item>
                     <vs-dropdown-item @click="updateLocale('de')"><img class="h-4 w-5 mr-1" src="@/assets/images/flags/de.png" alt="de" /> &nbsp;DE</vs-dropdown-item>
                     <vs-dropdown-item @click="updateLocale('pt')"><img class="h-4 w-5 mr-1" src="@/assets/images/flags/pt.png" alt="pt" /> &nbsp;PT</vs-dropdown-item>
                  </vs-dropdown-menu>
               </vs-dropdown>

               

                

               <!-- NOTIFICATIONS -->
               <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
                  <feather-icon icon="BellIcon" class="cursor-pointer mt-1 sm:mr-6 mr-2" :badge="unreadNotifications.length"></feather-icon>
                  <vs-dropdown-menu class="notification-dropdown dropdown-custom">

                     <div class="notification-top text-center p-5">
                        <!-- <h3 class="text-white">{{ unreadNotifications.length }} New</h3> -->
                        <p class="text-primary border-bottom">Notifications</p>
                     </div>

                     <VuePerfectScrollbar ref="mainSidebarPs" class="scroll-area--nofications-dropdown p-0 mb-10" :settings="settings">
                     <ul class="bordered-items">
                        <li v-for="ntf in unreadNotifications" :key="ntf.index" class="flex justify-between px-4 py-4 notification cursor-pointer">
                           <div class="flex items-start">
                              <feather-icon :icon="ntf.icon" :svgClasses="[`text-${ntf.category}`, 'stroke-current mr-1 h-6 w-6']"></feather-icon>
                              <div class="mx-2">
                                 <span class="font-medium block notification-title" :class="[`text-${ntf.category}`]">{{ ntf.title }}</span>
                                 <small>{{ ntf.msg }}</small>
                              </div>
                           </div>
                           <small class="mt-1 whitespace-no-wrap">{{ elapsedTime(ntf.time) }}</small>
                        </li>
                     </ul>
                     </VuePerfectScrollbar>
                        <div class="
                              checkout-footer
                              fixed
                              pin-b
                              rounded-b-lg
                              text-primary
                              w-full
                              p-2
                              font-semibold
                              text-center
                              border
                              border-b-0
                              border-l-0
                              border-r-0
                              border-solid
                              border-grey-light
                              cursor-pointer">
                              <span>View All</span>
                        </div>
                  </vs-dropdown-menu>
               </vs-dropdown>

               <!-- USER META -->
               <div class="cog-meta flex items-center">
                  <!-- <div class="text-right leading-tight hidden sm:block">
                     <p class="font-semibold">{{ user_displayName }}</p>
                     <small>Online</small>
                  </div> -->
                  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
                     <div class="con-img ml-3">
                        <i class="fa fa-cog fa-lg" aria-hidden="true"></i>
                     </div>
                     <vs-dropdown-menu>
                        <ul style="min-width: 9rem">
                           <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="$router.push('/pages/profile')"><feather-icon icon="UserIcon" svgClasses="w-4 h-4"></feather-icon> <span class="ml-2">Profile</span></li>
                           <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="$router.push('/apps/email')"><feather-icon icon="MailIcon" svgClasses="w-4 h-4"></feather-icon> <span class="ml-2">Inbox</span></li>
                           <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="$router.push('/apps/chat')"><feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4"></feather-icon> <span class="ml-2">Chat</span></li>
                           <vs-divider class="m-1"></vs-divider>
                           <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="logout"><feather-icon icon="LogOutIcon" svgClasses="w-4 h-4"></feather-icon> <span class="ml-2">Logout</span></li>
                        </ul>
                     </vs-dropdown-menu>
                  </vs-dropdown>
               </div>
      </vs-navbar>
</div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import VxAutoSuggest from '@/components/vx-auto-suggest/VxAutoSuggest.vue';
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import draggable from 'vuedraggable'

export default {
   name: "the-navbar",
    props: {
        navbarColor: {
            type: String,
            default: "#fff",
        },
    },
    data() {
        return {
            navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
            searchQuery: '',
            showFullSearch: false,
            unreadNotifications: [
                { index: 0, title: '1 New Message From John', msg: 'Hi, How are You?', icon: 'MessageSquareIcon', time: 'Wed Feb 29 2020 07:45:23 GMT+0000 (GMT)', category: 'primary' },
                { index: 0, title: '2 New Message From Billy', msg: 'Hi, How are You?', icon: 'MessageSquareIcon', time: 'Wed Feb 29 2020 07:45:23 GMT+0000 (GMT)', category: 'primary' },
                { index: 0, title: '1 New Message From Noah', msg: 'Hi, How are You?', icon: 'MessageSquareIcon', time: 'Wed Feb 29 2020 07:45:23 GMT+0000 (GMT)', category: 'primary' },
            ],
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
            autoFocusSearch: false,
            showBookmarkPagesDropdown: false,
        }
    },
    watch: {
        '$route'() {
            if (this.showBookmarkPagesDropdown) this.showBookmarkPagesDropdown = false
        }
    },
    computed: {
         isSidebarActive: {
            get() {
                return this.$store.state.isSidebarActive
            },
            set(val) {
              this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', val)
            }
        },
        // HELPER
        sidebarWidth() {
            return this.$store.state.sidebarWidth;
        },
        breakpoint() {
            return this.$store.state.breakpoint;
        },

        // NAVBAR STYLE
        classObj() {
            if (this.sidebarWidth == "default") return "navbar-default"
            else if (this.sidebarWidth == "reduced") return "navbar-reduced"
            else if (this.sidebarWidth) return "navbar-full"
        },

        // I18N
        getCurrentLocaleData() {
            const locale = this.$i18n.locale;
            if (locale == "en") return { flag: "us", lang: 'English' }
            else if (locale == "pt") return { flag: "br", lang: 'Portuguese' }
            else if (locale == "fr") return { flag: "fr", lang: 'French' }
            else if (locale == "de") return { flag: "de", lang: 'German' }
        },

        // BOOKMARK & SEARCH
        data() {
            return this.$store.state.navbarSearchAndPinList;
        },
        starredPages() {
            return this.$store.state.starredPages;
        },
        starredPagesLimited: {
            get() {
                return this.starredPages.slice(0, 10);
            },
            set(list) {
                this.$store.dispatch('arrangeStarredPagesLimited', list);
            }
        },
        starredPagesMore: {
            get() {
                return this.starredPages.slice(10);
            },
            set(list) {
                this.$store.dispatch('arrangeStarredPagesMore', list);
            }
        },

        // CART DROPDOWN
        cartItems() {
            return this.$store.state.eCommerce.cartItems.slice().reverse();
        },

        // PROFILE
        user_displayName() {
            return JSON.parse(localStorage.getItem('userInfo')).displayName
        },
        activeUserImg() {
            return JSON.parse(localStorage.getItem('userInfo')).photoURL || this.$store.state.AppActiveUser.img;
        }
    },
    methods: {
        updateLocale(locale) {
            this.$i18n.locale = locale;
        },
        showSidebar() {
            this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
        },
        selected(item) {
            this.$router.push(item.url)
            this.showFullSearch = false;
        },
        actionClicked(item) {
            // e.stopPropogation();
            this.$store.dispatch('updateStarredPage', { index: item.index, val: !item.highlightAction });
        },
        showNavbarSearch() {
            this.showFullSearch = true;
        },
        showSearchbar() {
            this.showFullSearch = true;
        },
        elapsedTime(startTime) {
            let x = new Date(startTime);
            let now = new Date();
            var timeDiff = now - x;
            timeDiff /= 1000;

            var seconds = Math.round(timeDiff);
            timeDiff = Math.floor(timeDiff / 60);

            var minutes = Math.round(timeDiff % 60);
            timeDiff = Math.floor(timeDiff / 60);

            var hours = Math.round(timeDiff % 24);
            timeDiff = Math.floor(timeDiff / 24);

            var days = Math.round(timeDiff % 365);
            timeDiff = Math.floor(timeDiff / 365);

            var years = timeDiff;

            if (years > 0) {
                return years + (years > 1 ? ' Years ' : ' Year ') + 'ago';
            } else if (days > 0) {
                return days + (days > 1 ? ' Days ' : ' Day ') + 'ago';
            } else if (hours > 0) {
                return hours + (hours > 1 ? ' Hrs ' : ' Hour ') + 'ago';
            } else if (minutes > 0) {
                return minutes + (minutes > 1 ? ' Mins ' : ' Min ') + 'ago';
            } else if (seconds > 0) {
                return seconds + (seconds > 1 ? `${seconds} sec ago` : 'just now');
            }

            return 'Just Now'
        },
        logout() {
            // if user is logged in via auth0
            if (this.$auth.profile) this.$auth.logOut();

            // if user is looged in via firebase
            const firebaseCurrentUser = firebase.auth().currentUser

            if (firebaseCurrentUser) {
                firebase.auth().signOut().then(() => {
                    this.$router.push('/pages/login')
                    localStorage.removeItem('userInfo');
                })
            }
            // Change role on logout. Same value as initialRole of acj.js
            this.$acl.change('admin')
            localStorage.removeItem('userRole');
        },
        outside: function() {
            this.showBookmarkPagesDropdown = false
        },

        // CART DROPDOWN
        removeItemFromCart(item) {
            this.$store.dispatch('eCommerce/toggleItemInCart', item)
        }
    },
    directives: {
        'click-outside': {
            bind: function(el, binding) {
                const bubble = binding.modifiers.bubble
                const handler = (e) => {
                    if (bubble || (!el.contains(e.target) && el !== e.target)) {
                        binding.value(e)
                    }
                }
                el.__vueClickOutside__ = handler
                document.addEventListener('click', handler)
            },

            unbind: function(el) {
                document.removeEventListener('click', el.__vueClickOutside__)
                el.__vueClickOutside__ = null

            }
        }
    },
    components: {
        VxAutoSuggest,
        VuePerfectScrollbar,
        draggable
    },
}
</script>
