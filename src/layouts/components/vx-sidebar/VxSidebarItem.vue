<template>
    <div :class="[{'vs-sidebar-item-active':activeLink}, {'disabled-item pointer-events-none': isDisabled}]" class="vs-sidebar--item" v-if="canSee">
        <router-link v-if="to" :to="to" :class="[{'router-link-active': activeLink}]" :target="target" exact>
            <vs-icon v-if="icon" :icon-pack="iconPack" :icon="icon">
            </vs-icon>
            <slot></slot>
        </router-link>
        <a v-else :target="target" :href="href">
            <vs-icon v-if="icon" :icon-pack="iconPack" :icon="icon">
            </vs-icon>
            <slot></slot>
        </a>
    </div>
</template>

<script>
export default {
    name: 'VxSidebarItem',
    props: {
        icon: {
            default: "",
            type: String
        },
        iconSmall: {
            default: false,
            type: Boolean,
        },
        iconPack: {
            default: 'fa',
            type: String
        },
        href: {
            default: '#',
            type: String
        },
        to: {
            default: null,
            type: String
        },
        index: {
            default: null,
            type: [String, Number]
        },
        // featherIcon: {
        //     default: true,
        //     type: Boolean,
        // },
        target: {
            default: '_self',
            type: String,
        },
        isDisabled: {
            default: false,
            type: Boolean
        }
    },
    data() {
        return {
            activeLink: false,
        }
    },
    watch: {
        '$route'() {
            this.CheckIsActive()
        }
    },
    methods: {
        CheckIsActive() {
            if (this.to) {
                if (this.$route.path.slice(1).includes(this.to.slice(1)) && this.to.slice(1)) this.activeLink = true
                else this.activeLink = false
            }
        }
    },
    computed: {
        canSee() {
            this.$acl.check(this.$store.state.userRole);
            if(this.to) {
                return this.$acl.check(this.$router.match(this.to).meta.rule)
            }
            return true
        }
    },
    updated() {
        this.CheckIsActive();
    }
}
</script>