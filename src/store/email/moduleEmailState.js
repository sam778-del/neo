import emails from '@/views/apps/email/mails'

export default {
    mails: emails,
    mail_filter: 'inbox',
    mailTags: [
        { text: 'Personal', value : 'personal', color:"success"},
        { text: 'Company', value: 'company', color:"primary"},
        { text: 'Important', value: 'important', color:"warning"},
        { text: 'Private', value: 'private', color:"danger"},
    ],
    mailSearchQuery: '',
}