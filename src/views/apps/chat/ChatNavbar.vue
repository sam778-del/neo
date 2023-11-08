
<template>
    <div v-if="userId != null" class="chat__header">
        <vs-navbar class="p-4 flex navbar-custom" color="white" type="flat">
            <div class="relative flex mr-4">
                <feather-icon icon="MenuIcon" class="mr-4 cursor-pointer" v-if="isSidebarCollapsed" @click.stop="$emit('openContactsSidebar')"></feather-icon>
                <vs-avatar class="m-0" size="40px" :src="require(`@/assets/images/user-1.jpg`)" @click.stop="$emit('showProfileSidebar', userId)" />
                <div class="h-3 w-3 border-white border border-solid rounded-full absolute pin-r pin-b" :class="'bg-' + getStatusColor(false)"></div>
            </div>
            <h6>{{ contactName }}</h6>
            <vs-spacer></vs-spacer>
            <vs-button class="btnx" type="danger-line-down">Icons</vs-button>
    <vs-dropdown >
      <vs-button class="btn-drop vue-icon" type="danger-line-down" icon="more_vert" color="#000"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Setting
        </vs-dropdown-item>
        <vs-dropdown-item>
          Audio Call
        </vs-dropdown-item>
        <vs-dropdown-item>
          Video Call
        </vs-dropdown-item>
        <vs-dropdown-item>
         Block
        </vs-dropdown-item>
      
      </vs-dropdown-menu>
    </vs-dropdown>

        </vs-navbar>
    </div>
</template>

<script>
import contacts from './contacts'

export default{
    props: {
        userId: {
            type: Number,
            required: true,
        },
        isPinnedProp: {
            type: Boolean,
            required: true,
        },
        isSidebarCollapsed: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            contacts: contacts,
            isPinnedLocal: this.isPinnedProp,
        }
    },
    watch: {
        isPinnedProp(val) {
            this.isPinnedLocal = val;
        }
    },
    computed: {
        contactIndex() {
            return contacts.findIndex(contact => contact.id == this.userId);
        },
        userImg() {
            if(this.contactIndex === -1) {
                return this.$store.state.AppActiveUser.img;
            }else{
                return this.contacts[this.contactIndex].img;
            }
        },
        contactName() {
            if(this.contactIndex === -1) {
                return this.$store.state.AppActiveUser.name;
            }else{
                return this.contacts[this.contactIndex].name;
            }
        },
        getStatusColor() {
            return (isActiveUser) => {
                const userStatus = this.getUserStatus(isActiveUser);

                if(userStatus == "online"){
                    return "success"
                }else if(userStatus == "do not disturb"){
                    return "danger"
                }else if(userStatus == "away"){
                    return "warning"
                }else{
                    return "grey"               
                }
            }
        },
    },
    methods: {
        getUserStatus(isActiveUser) {
            return (isActiveUser) ? this.$store.state.AppActiveUser.status : this.contacts[this.contactIndex].status;
        },
        toggleIsPinned() {
            const chatData = this.$store.getters['chat/chatDataOfUser'](this.userId);
            if(chatData) {
                const payload = {id: this.userId, value: !this.isPinnedLocal};
                this.$store.dispatch('chat/toggleIsPinned', payload)
            }else{
                this.$emit('toggleIsChatPinned', !this.isPinnedLocal)
            }
            this.isPinnedLocal = !this.isPinnedLocal
        }
    },
}
</script>