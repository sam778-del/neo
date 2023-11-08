
<template>
    <div id="demo-basic-card">
        <vs-row>
            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                 <vs-card>
                  <div slot="header">
                  <h3>
                     Hello world !
                  </h3>
                  </div>
                  <div>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </div>
                  <div slot="footer">
                  <vs-row vs-justify="flex-end">
                     <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
                     <vs-button color="primary" icon="turned_in_not"></vs-button>
                     <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
                  </vs-row>
                  </div>
               </vs-card>
            </vs-col>
            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                  <vs-card>
                  <div slot="header">
                  <h3>
                     Hello world !
                  </h3>
                  </div>
                  <div>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </div>
                
               </vs-card>
            </vs-col>
        </vs-row>
         <vs-row vs-justify="center">
               <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                  <vs-card class="cardx">
                  <div slot="header">
                     <h3>
                        Hello world !
                     </h3>
                  </div>
                  <div slot="media">
                     <img src="@/assets/images/blog-1.jpg">
                  </div>
                  <div>
                     <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </div>
                  <div slot="footer">
                     <vs-row vs-justify="flex-end">
                        <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
                        <vs-button color="primary" icon="turned_in_not"></vs-button>
                        <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
                     </vs-row>
                  </div>
                  </vs-card>
               </vs-col>
               <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                  <vs-card class="cardx">
                  <div slot="header">
                     <h3>
                        Nisi ut aliquip ex ea commodo consequat
                     </h3>
                  </div>
                  <div slot="media">
                     <img src="@/assets/images/blog-2.jpg">
                  </div>
                  <div>
                     <span>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </div>
                  <div slot="footer">
                     <vs-row vs-justify="flex-end">
                        <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
                        <vs-button color="primary" icon="turned_in_not"></vs-button>
                        <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
                     </vs-row>
                  </div>
                  </vs-card>
               </vs-col>
         </vs-row>
        <!-- CARD WITH TABS COMPONENT -->
      <vs-row>
           <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                  <vs-card>
                     <vs-tabs>
                           <vs-tab vs-label="HTML">
                              <div class="mt-3">
                                 <p>Lollipop chocolate cake muffin pudding biscuit cheesecake. Pudding biscuit caramels jelly beans caramels. Pie macaroon wafer danish sweet caramels. Icing jelly-o cotton candy sweet roll brownie marshmallow marzipan icing. Candy canes apple pie icing. Tart macaroon pastry caramels chocolate bar. Gummies cupcake sesame snaps chocolate cookie sugar plum bear claw. Cheesecake chocolate cake dessert bear claw candy tiramisu soufflé.</p>
                              </div>
                           </vs-tab>
                           <vs-tab vs-label="JS">
                              <div class="mt-3">
                                 <p>Wafer sesame snaps toffee brownie liquorice danish icing fruitcake croissant. Gingerbread chocolate cake danish pie gingerbread. Muffin donut fruitcake powder jelly lemon drops cheesecake. Croissant oat cake carrot cake tiramisu halvah. Cupcake cupcake wafer muffin topping danish cheesecake croissant. Liquorice donut liquorice lollipop sesame snaps lollipop ice cream macaroon danish. Cupcake chocolate cake chupa chups gummi bears macaroon.</p>
                              </div>
                           </vs-tab>
                           <vs-tab vs-label="OUTPUT">
                              <div class="mt-3">
                                 <p>Cookie cheesecake fruitcake sweet roll gummi bears marzipan marshmallow marshmallow. Cheesecake muffin jujubes chocolate cake carrot cake jujubes croissant. Cake toffee carrot cake topping oat cake lemon drops toffee toffee marzipan. Gingerbread toffee marshmallow marshmallow caramels brownie donut cake. Cheesecake candy topping tart cotton candy chocolate bar jujubes powder chupa chups. Cupcake candy soufflé jelly beans. Icing lollipop tiramisu oat cake dessert.</p>
                              </div>
                           </vs-tab>
                     </vs-tabs>
                  </vs-card>
            </vs-col>
              <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                  <vs-card>
                     <vs-tabs>
                           <vs-tab vs-label="HTML">
                              <div class="mt-3">
                                 <p>Lollipop chocolate cake muffin pudding biscuit cheesecake. Pudding biscuit caramels jelly beans caramels. Pie macaroon wafer danish sweet caramels. Icing jelly-o cotton candy sweet roll brownie marshmallow marzipan icing. Candy canes apple pie icing. Tart macaroon pastry caramels chocolate bar. Gummies cupcake sesame snaps chocolate cookie sugar plum bear claw. Cheesecake chocolate cake dessert bear claw candy tiramisu soufflé.</p>
                              </div>
                           </vs-tab>
                           <vs-tab vs-label="JS">
                              <div class="mt-3">
                                 <p>Wafer sesame snaps toffee brownie liquorice danish icing fruitcake croissant. Gingerbread chocolate cake danish pie gingerbread. Muffin donut fruitcake powder jelly lemon drops cheesecake. Croissant oat cake carrot cake tiramisu halvah. Cupcake cupcake wafer muffin topping danish cheesecake croissant. Liquorice donut liquorice lollipop sesame snaps lollipop ice cream macaroon danish. Cupcake chocolate cake chupa chups gummi bears macaroon.</p>
                              </div>
                           </vs-tab>
                           <vs-tab vs-label="OUTPUT">
                              <div class="mt-3">
                                 <p>Cookie cheesecake fruitcake sweet roll gummi bears marzipan marshmallow marshmallow. Cheesecake muffin jujubes chocolate cake carrot cake jujubes croissant. Cake toffee carrot cake topping oat cake lemon drops toffee toffee marzipan. Gingerbread toffee marshmallow marshmallow caramels brownie donut cake. Cheesecake candy topping tart cotton candy chocolate bar jujubes powder chupa chups. Cupcake candy soufflé jelly beans. Icing lollipop tiramisu oat cake dessert.</p>
                              </div>
                           </vs-tab>
                     </vs-tabs>
                  </vs-card>
               </vs-col>
      </vs-row>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default{
    data() {
        return {
            // card 1
            card_1: {
                contentImg1: 'content-img-1.jpg',
                title: 'Neor',
                subtitle: 'Trendsetter Themes',
                subtitle_2: '2020',
            },

            // card 2
            card_2: {
                contentImg2: 'content-img-2.jpg',
               title: 'Neor',
                subtitle: 'Trendsetter Themes',
                footer_text_left_value: '$ 4785.78',
                footer_text_left_label: 'Income',
                footer_text_right_value: '12 June 2019',
                footer_text_right_label: 'Delivery Date',
            },

            // card 3
            card_3: {
                contentImg3: 'content-img-3.jpg',
                title: 'Neor',
                progress_done_per: 75,
                current_progress: '$ 5975',
                progress_goal: '$ 8000',
                btn_left_text: 'Add More',
                btn_right_text: 'Remove'

            },

            // card 4
            card_4: {
                userImg: 'user-1.jpg',
                name: 'Zoila Legore',
                profession: 'Backend Dev',
                btn_1_text: 'Follow',
                btn_2_text: 'Message',
                footer_text_1_icon: 'StarIcon',
                footer_text_1: '4.9',
                footer_text_2_icon: 'BriefcaseIcon',
                footer_text_2: '37 Projects',
            },

            // card_5
            card_5: {
                userImg: 'user-2.jpg',
                name: 'Wilhelmina Jamal',
                profession: 'Frontend Dev',
                user_meta_1_title: 568,
                user_meta_1_label: 'Uploads',
                user_meta_2_title: '78.6K',
                user_meta_2_label: 'Followers',
                user_meta_3_title: 112,
                user_meta_3_label: 'Following',
                btn_text: 'Follow'
            },


            // card 6
            card_6: {
                userImg: 'user-3.jpg',
                name: 'Jonell Binion',
                profession: 'Designer',
                progress_done_per: 72,
                current_progress: '720 Points',
                progress_goal: '1000',
                btn_left_text: 'Follow',
                btn_right_text: 'Message'
            },

            card_7: {
                overlay_img: 'card-image-6.jpg',
                title: 'Beautiful Overlay',
                text: 'Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups muffin halvah lollipop.',
            },

            // card 9
            card_9: {
                title: 'Neor',
                subtitle: 'Trendsetter Themes',
                img: 'content-img-4.jpg',
                footer_text_1_icon: 'ThumbsUpIcon',
                footer_text_1: 368,
                footer_text_2_icon: 'MessageSquareIcon',
                footer_text_2: 341,
                footer_text_3_icon: 'ThumbsDownIcon',
                footer_text_3: 23,
            },

            name: '',
            email: '',
            msg: '',

            playerOptions: {
                height: '460',
                fluid: true,
                autoplay: false,
                muted: true,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [ { type: "video/mp4", src: "http://vjs.zencdn.net/v/oceans.mp4" } ],
                poster: 'https://goo.gl/xcCsDd',
            },
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
            chatMsgInput: '',
            chatMsg: [
                { senderImg: 'user-1.jpg', msg: 'Cake sesame snaps cupcake gingerbread', isSent: false },
                { senderImg: 'user-2.jpg', msg: 'Apple pie pie jujubes chupa chups muffin', isSent: true },
                { senderImg: 'user-3.jpg', msg: 'Chocolate cake', isSent: false },
                { senderImg: 'user-1.jpg', msg: 'Donut sweet pie oat cake dragée fruitcake', isSent: true },
                { senderImg: 'user-2.jpg', msg: 'Liquorice chocolate bar jelly beans icing', isSent: false },
                { senderImg: 'user-3.jpg', msg: 'Pudding candy', isSent: true },
            ]
        }
    },
    components: {
        VuePerfectScrollbar,
        videoPlayer
    },
    mounted() {
        // this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    }   
}
</script>

<style lang="scss">
#demo-basic-card {
    .overlay-card {
        .vx-card__collapsible-content {
            max-height: 485px;
        }
    }
    
    .chat-card-log {
        height: 360px;

        .chat-sent-msg {
            background-color: #f2f4f7 !important;
        }
    }

    .card-video {
        .video-js {
            height: 370px;
        }
    }
}
</style>