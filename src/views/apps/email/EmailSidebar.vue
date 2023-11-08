<template>
    <div class="email__email-sidebar h-full">
        <div class="m-6 clearfix">
            <vs-button size="large" color="primary" class="w-full" icon-pack="feather" icon="icon-edit"  @click="activePrompt = true" type="border">New Mail</vs-button>

        </div>

        <!-- compose email -->
        <vs-prompt
            class="new-mail"
            vs-title="New Message"
            vs-accept-text= "Send"
            @vs-cancel="clearFields"
            @vs-accept="sendMail"
            @vs-close="clearFields"
            :vs-is-valid="validateForm"
            :vs-active.sync="activePrompt">
                <VuePerfectScrollbar class="scroll-area p-4" :settings="settings">
                    <form @submit.prevent>
                        <vs-input v-validate="'required|email'" name="mailTo" label-placeholder="To" v-model="mailTo" class="w-full mb-6" :danger="!validateForm && mailTo != ''" val-icon-danger="clear" :success="validateForm" val-icon-success="done" :color="validateForm ? 'success' : 'danger'" />
                        <vs-input name="mailSubject" label-placeholder="Subject" v-model="mailSubject" class="w-full mb-6" />
                     
                        <vs-textarea style="height:130px"/>
                    </form>
                </VuePerfectScrollbar>
        </vs-prompt>

        <VuePerfectScrollbar class="email-scroll-area" :settings="settings">
            <div class="px-6 pb-2 flex flex-col">

                <div class="flex items-center" :class="{'text-primary': mailFilter == 'inbox'}" @click="updateFilter('inbox')">
                    <div class="flex items-center mb-2 mr-2">
                        <feather-icon icon="MailIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'inbox'}, 'h-6 w-6']"></feather-icon>
                        <span class="text-lg ml-3">Inbox</span>
                    </div>
                    <vs-chip color="primary" v-if="unreadMails('inboxed') > 0">{{ unreadMails('inboxed') }}</vs-chip>
                </div>
                <div class="flex items-center mt-4 mb-2 cursor-pointer" :class="{'text-primary': mailFilter == 'sent'}" @click="updateFilter('sent')">
                    <feather-icon icon="SendIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'sent'}, 'h-6 w-6']"></feather-icon>
                    <span class="text-lg ml-3">Sent</span>
                </div>
                
                
                <div class="flex items-center items-center mt-4" :class="{'text-primary': mailFilter == 'spam'}" @click="updateFilter('spam')">
                    <div class="flex items-center mb-2 mr-2">
                        <feather-icon icon="InfoIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'spam'}, 'h-6 w-6']"></feather-icon>
                        <span class="text-lg ml-3">Spam</span>
                    </div>
                    <vs-chip color="primary" v-if="unreadMails('spam') > 0">{{ unreadMails('spam') }}</vs-chip>
                </div>
                <div class="flex items-center mt-4 mb-2 cursor-pointer" :class="{'text-primary': mailFilter == 'trash'}" @click="updateFilter('trash')">
                    <feather-icon icon="TrashIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'trash'}, 'h-6 w-6']"></feather-icon>
                    <span class="text-lg ml-3">Trash</span>
                </div>
            </div>
            <vs-divider></vs-divider>
           
        </VuePerfectScrollbar>
    </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default{
    props: {
        emailTags: {
            type: Array,
            required: true,
        },
        mailFilter: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            activePrompt: false,
            mailTo: '',
            mailSubject: '',
            mailCC: '',
            mailBCC: '',
            mailMessage: '',
            editorOption: {
                modules: {
                    toolbar: [['bold', 'italic', 'underline', 'strike', 'link', 'blockquote', 'code-block'], [{ 'header': 1 }, { 'header': 2 }], [{ 'list': 'ordered'}, { 'list': 'bullet' }], [{ 'font': [] }],],
                },
                placeholder: 'Message'
            },
            settings: {
                maxScrollbarLength: 60,
                wheelSpeed: 0.30,
            },
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.mailTo != '';
        },
        unreadMails() {
            return (mailType) => this.$store.getters['email/unreadMails'](mailType);
        },
        draftMails() {
            return this.$store.getters['email/NumdraftMails'];
        },
    },
    methods: {
        updateFilter(filterName) {
            this.$store.dispatch('email/updateMailFilter', filterName);
            this.$emit('closeSidebar', false);
        },
        // compose mail methods
        clearFields() {
            this.mailTo = '';
            this.mailSubject = '';
            this.mailCC = '';
            this.mailBCC = '';
            this.mailMessage = '';
        },
        sendMail() {},
    },
    components: {
        quillEditor,
        VuePerfectScrollbar
    }   
}
</script>