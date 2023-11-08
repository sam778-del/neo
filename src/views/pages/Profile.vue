
<template>
  <div id="profile-page">
    <!-- PROFILE HEADER -->
    <div class="profile-header">
      <div class="relative">
        <div class="cover-container rounded-t-lg">
          <img
            :src="require(`@/assets/images/${userCoverImg}`)"
            alt="user-profile-cover"
            class="responsive block"
          >
        </div>
      </div>

      <!-- <vx-navbar> -->
      <!-- </vx-navbar> -->
    </div>
    <!-- COL AREA -->

    <vs-row vs-w="12">
      <vs-col vs-lg="4" vs-sm="4" vs-xs="12">
        <div class="profile-card text-center">
          <vs-avatar size="170px" :src="require(`@/assets/images/user-1.jpg`)"/>
          <h4>Jane Doe</h4>
          <p>jane.doe@dummy.com</p>

          <vs-row vs-w="12" class="my-8">
            <vs-col vs-justify="center" vs-align="center" vs-lg="4" vs-sm="12" vs-xs="12">
              <h4>3,619</h4>
              <p>Followers</p>
            </vs-col>
            <vs-col vs-justify="center" vs-align="center" vs-lg="4" vs-sm="12" vs-xs="12">
              <h4>21</h4>
              <p>Following</p>
            </vs-col>
            <vs-col vs-justify="center" vs-align="center" vs-lg="4" vs-sm="12" vs-xs="12">
              <h4>214</h4>
              <p>Media</p>
            </vs-col>
          </vs-row>
          <vs-divider></vs-divider>
          <p>Hi ! My name is Jane Doe. I'm a UI/UX Designer from Paris, in France. I really enjoy photography and mountains.</p>
          <vs-divider></vs-divider>
        </div>

        <vs-card class="mt-10">
          <div slot="header">
            <h5>Followers</h5>
          </div>
          <vs-list>
            <vs-list-item title="Steve Jobes" subtitle="Top Contributor">
              <template slot="avatar">
                <vs-avatar size="large" :src="require(`@/assets/images/user-2.jpg`)"/>
              </template>
            </vs-list-item>
            <vs-list-item title="Steve Jobes" subtitle="Top Contributor">
              <template slot="avatar">
                <vs-avatar size="large" :src="require(`@/assets/images/user-3.jpg`)"/>
              </template>
            </vs-list-item>
            <vs-list-item title="Steve Jobes" subtitle="Top Contributor">
              <template slot="avatar">
                <vs-avatar size="large" :src="require(`@/assets/images/user-1.jpg`)"/>
              </template>
            </vs-list-item>
            <vs-list-item title="Steve Jobes" subtitle="Top Contributor">
              <template slot="avatar">
                <vs-avatar size="large" :src="require(`@/assets/images/user-2.jpg`)"/>
              </template>
            </vs-list-item>
            <vs-list-item title="Matt" subtitle="11 Points">
              <template slot="avatar">
                <vs-avatar size="large" :src="require(`@/assets/images/user-3.jpg`)"/>
              </template>
            </vs-list-item>
          </vs-list>
        </vs-card>
      </vs-col>
      <vs-col vs-lg="8" vs-sm="8" vs-xs="12">
        <div class="pt-8">
          <vs-tabs alignment="fixed">
            <vs-tab label="Profile">
              <div class="con-tab-ejemplo">
                <vs-card class="d-block mt-8">
                  <div slot="header">
                    <h3>About</h3>
                  </div>
                  <div>
                    <vs-list class="list-half">
                      <vs-list-item title="First Name" subtitle="Mariah"></vs-list-item>
                      <vs-list-item title="User Name" subtitle="Mariah"></vs-list-item>
                      <vs-list-item title="City:" subtitle="Los Angeles"></vs-list-item>
                      <vs-list-item title="Birthday:" subtitle="Jan 22, 1984"></vs-list-item>
                      <vs-list-item title="Website:" subtitle="abs.abs.abs"></vs-list-item>
                      <vs-list-item title="Email:" subtitle="mariah@Vendroid.com"></vs-list-item>
                      <vs-list-item title="Interests:" subtitle="Basketball, Web, Design, etc"></vs-list-item>
                    </vs-list>
                  </div>
                </vs-card>

                <vs-row vs-w="12">
                  <vs-col
                    vs-type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-lg="6"
                    vs-sm="4"
                    vs-xs="12"
                  >
                    <vs-card class="d-block">
                      <div slot="header">
                        <h3>Education</h3>
                      </div>
                      <div>
                        <vs-list>
                          <vs-list-item
                            title="Doctrate"
                            subtitle="E-Commerce/Electronic Commerce at UCLA"
                          ></vs-list-item>
                          <vs-list-item title="Master's" subtitle="St. Louis College, NY"></vs-list-item>
                          <vs-list-item
                            title="Bachelor's degree"
                            subtitle="E-Commerce/Electronic Commerce at UCLA"
                          ></vs-list-item>
                          <vs-list-item title="School" subtitle="St. Monica Junior High School"></vs-list-item>
                        </vs-list>
                      </div>
                    </vs-card>
                  </vs-col>
                  <vs-col
                    vs-type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-lg="6"
                    vs-sm="6"
                    vs-xs="12"
                  >
                    <vs-card class="d-block">
                      <div slot="header">
                        <h3>Experience</h3>
                      </div>
                      <div>
                        <vs-list>
                          <vs-list-item title="ABS" subtitle="Owner"></vs-list-item>
                          <vs-list-item title="CEO" subtitle="Mc. Dondon"></vs-list-item>
                          <vs-list-item
                            title="Teacher"
                            subtitle="Web Designer at Web Design School"
                          ></vs-list-item>
                          <vs-list-item title="Intern" subtitle="Sales at Sales Company Ltd."></vs-list-item>
                        </vs-list>
                      </div>
                    </vs-card>
                  </vs-col>
                </vs-row>
              </div>
            </vs-tab>
            <vs-tab label="Friends">
              <div class="con-tab-ejemplo mt-8">
                <vs-table :data="users">
                  <template slot="header">
                    <h3 class="mb-4">Users</h3>
                  </template>
                  <template slot="thead">
                    <vs-th>Email</vs-th>
                    <vs-th>Name</vs-th>
                    <vs-th>website</vs-th>
                    <vs-th>Nro</vs-th>
                  </template>

                  <template slot-scope="{data}">
                    <vs-tr
                      :state="indextr == 2 || indextr == 5?'success':indextr == 6?'danger':null"
                      :key="indextr"
                      v-for="(tr, indextr) in data"
                    >
                      <vs-td :data="data[indextr].email">
                        <div class="flex center">
                          <vs-avatar size="large" :src="require(`@/assets/images/user-1.jpg`)"/>
                          <span>{{data[indextr].email}}</span>
                        </div>
                      </vs-td>

                      <vs-td :data="data[indextr].username">{{data[indextr].username}}</vs-td>

                      <vs-td :data="data[indextr].id">{{data[indextr].website}}</vs-td>

                      <vs-td :data="data[indextr].id">{{data[indextr].id}}</vs-td>
                    </vs-tr>
                  </template>
                </vs-table>
              </div>
            </vs-tab>
            <vs-tab label="Projects">
              <div class="con-tab-ejemplo">
                <vs-row vs-justify="center" class="mt-8">
                  <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                    <vs-card actionable class="cardx">
                      <div slot="header">
                        <h3>Godric Gryffindor</h3>
                      </div>
                      <div slot="media">
                        <img :src="require(`@/assets/images/blog-1.jpg`)">
                      </div>
                      <div>
                        <div class="mb-2">
                          <span class="mb-1 vs-list--title mr-3">Client Name:</span>
                          <span>Bill Hobbeay</span>
                        </div>
                        <div class="mb-2">
                          <span class="mb-1 vs-list--title mr-3">Starting Date:</span>
                          <span>09 June 2014</span>
                        </div>
                        <div class="mb-2">
                          <span class="mb-1 vs-list--title mr-3">Completed On:</span>
                          <span>12 Oct 2017</span>
                        </div>
                        <div>
                          <span class="mb-1 vs-list--title mr-3">Budget:</span>
                          <span>$77890</span>
                        </div>
                        <div class="mt-3">
                          <h6 class="mb-1 vs-list--title mb-3">About Project</h6>
                          <span>Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
                        </div>
                      </div>
                      <div slot="footer">
                        <vs-row vs-justify="flex-end">
                          <vs-button color="primary" class="mr-2" icon="remove_red_eye"></vs-button>
                          <vs-button color="danger" icon="favorite"></vs-button>
                        </vs-row>
                      </div>
                    </vs-card>
                  </vs-col>
                  <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                    <vs-card actionable class="cardx">
                      <div slot="header">
                        <h3>Godric Gryffindor</h3>
                      </div>
                      <div slot="media">
                        <img :src="require(`@/assets/images/blog-2.jpg`)">
                      </div>
                      <div>
                        <div class="mb-2">
                          <span class="mb-1 vs-list--title mr-3">Client Name:</span>
                          <span>Bill Hobbeay</span>
                        </div>
                        <div class="mb-2">
                          <span class="mb-1 vs-list--title mr-3">Starting Date:</span>
                          <span>09 June 2014</span>
                        </div>
                        <div class="mb-2">
                          <span class="mb-1 vs-list--title mr-3">Completed On:</span>
                          <span>12 Oct 2017</span>
                        </div>
                        <div>
                          <span class="mb-1 vs-list--title mr-3">Budget:</span>
                          <span>$77890</span>
                        </div>
                        <div class="mt-3">
                          <h6 class="mb-1 vs-list--title mb-3">About Project</h6>
                          <span>Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
                        </div>
                      </div>
                      <div slot="footer">
                        <vs-row vs-justify="flex-end">
                          <vs-button color="primary" class="mr-2" icon="remove_red_eye"></vs-button>
                          <vs-button color="danger" icon="favorite"></vs-button>
                        </vs-row>
                      </div>
                    </vs-card>
                  </vs-col>
                  <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                    <vs-card actionable class="cardx">
                      <div slot="header">
                        <h3>Godric Gryffindor</h3>
                      </div>
                      <div slot="media">
                        <img :src="require(`@/assets/images/blog-2.jpg`)">
                      </div>
                      <div>
                        <div class="mb-2">
                          <span class="mb-1 vs-list--title mr-3">Client Name:</span>
                          <span>Bill Hobbeay</span>
                        </div>
                        <div class="mb-2">
                          <span class="mb-1 vs-list--title mr-3">Starting Date:</span>
                          <span>09 June 2014</span>
                        </div>
                        <div class="mb-2">
                          <span class="mb-1 vs-list--title mr-3">Completed On:</span>
                          <span>12 Oct 2017</span>
                        </div>
                        <div>
                          <span class="mb-1 vs-list--title mr-3">Budget:</span>
                          <span>$77890</span>
                        </div>
                        <div class="mt-3">
                          <h6 class="mb-1 vs-list--title mb-3">About Project</h6>
                          <span>Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
                        </div>
                      </div>
                      <div slot="footer">
                        <vs-row vs-justify="flex-end">
                          <vs-button color="primary" class="mr-2" icon="remove_red_eye"></vs-button>
                          <vs-button color="danger" icon="favorite"></vs-button>
                        </vs-row>
                      </div>
                    </vs-card>
                  </vs-col>
                  <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                    <vs-card actionable class="cardx">
                      <div slot="header">
                        <h3>Godric Gryffindor</h3>
                      </div>
                      <div slot="media">
                        <img :src="require(`@/assets/images/blog-1.jpg`)">
                      </div>
                      <div>
                        <div class="mb-2">
                          <span class="mb-1 vs-list--title mr-3">Client Name:</span>
                          <span>Bill Hobbeay</span>
                        </div>
                        <div class="mb-2">
                          <span class="mb-1 vs-list--title mr-3">Starting Date:</span>
                          <span>09 June 2014</span>
                        </div>
                        <div class="mb-2">
                          <span class="mb-1 vs-list--title mr-3">Completed On:</span>
                          <span>12 Oct 2017</span>
                        </div>
                        <div>
                          <span class="mb-1 vs-list--title mr-3">Budget:</span>
                          <span>$77890</span>
                        </div>
                        <div class="mt-3">
                          <h6 class="mb-1 vs-list--title mb-3">About Project</h6>
                          <span>Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
                        </div>
                      </div>
                      <div slot="footer">
                        <vs-row vs-justify="flex-end">
                          <vs-button color="primary" class="mr-2" icon="remove_red_eye"></vs-button>
                          <vs-button color="danger" icon="favorite"></vs-button>
                        </vs-row>
                      </div>
                    </vs-card>
                  </vs-col>
                </vs-row>
              </div>
            </vs-tab>
          </vs-tabs>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>



<script>
import { videoPlayer } from "vue-video-player";

import "video.js/dist/video-js.css";

export default {
  data() {
    return {
      isNavOpen: true,

      userPoll: "",

      userInfo: {
        profileImg: "user-13.jpg"
      },

      mediaExtensions: {
        img: ["jpg", "jpeg", "png", "bmp", "gif", "exif", "tiff"],

        video: ["avi", "flv", "wmv", "mov", "mp4", "3gp"]
      },

      suggestedFriends: [
        {
          name: "Carissa Dolle",

          avatar: "user-3.jpg",

          mutualFriends: 6
        },

        {
          name: "Liliana Pecor",

          avatar: "user-3.jpg",

          mutualFriends: 3
        },

        {
          name: "Isidra Strunk",

          avatar: "user-3.jpg",

          mutualFriends: 2
        },

        {
          name: "Gerald Licea",

          avatar: "user-3.jpg",

          mutualFriends: 1
        },

        {
          name: "Kelle Herrick",

          avatar: "user-3.jpg",

          mutualFriends: 1
        },

        {
          name: "Cesar Lee",

          avatar: "user-3.jpg",

          mutualFriends: 1
        },

        {
          name: "John Doe",

          avatar: "user-3.jpg",

          mutualFriends: 1
        },

        {
          name: "Tonia Seabold",

          avatar: "user-3.jpg",

          mutualFriends: 1
        }
      ],

      userCoverImg: "cover.jpg",

      userLatestPhotos: [
        "user-1.jpg",
        "user-2.jpg",
        "user-3.jpg",
        "user-1.jpg",
        "user-2.jpg",
        "user-3.jpg",
        "user-1.jpg",
        "user-2.jpg",
        "user-3.jpg"
      ],

      userPosts: [
        {
          author: "Leeanna Alvord",

          time: "Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)",

          isLiked: true,

          text:
            "I love jujubes wafer pie ice cream tiramisu. Chocolate I love pastry pastry sesame snaps wafer. Pastry topping biscuit lollipop topping I love lemon drops sweet roll bonbon. Brownie donut icing.",

          media: [
            {
              img: "user-3.jpg"
            }
          ],

          likes: 145,

          comments: 77,

          usersLiked: [
            {
              name: "Trina Lynes",

              img: "user-3.jpg"
            },

            {
              name: "Lilian Nenez",

              img: "user-3.jpg"
            },

            {
              name: "Alberto Glotzbach",

              img: "user-3.jpg"
            },

            {
              name: "George Nordick",

              img: "user-3.jpg"
            },

            {
              name: "Vennie Mostowy",

              img: "user-3.jpg"
            }
          ],

          commentbox: "",

          usersCommented: [
            {
              comment: "orthoplumbate morningtide naphthaline exarteritis",

              author: "Kitty Allanson",

              img: "user-3.jpg",

              time: "Mon Dec 10 2018 08:56:05 GMT+0000 (GMT)"
            },

            {
              comment: "blockiness pandemy metaxylene speckle coppy",

              author: "Jeanie Bulgrin",

              img: "user-3.jpg",

              time: "Mon Dec 10 2018 08:55:00 GMT+0000 (GMT)"
            }
          ]
        },

        {
          author: "Leeanna Alvord",

          time: "Mon Dec 11 2018 08:05:05 GMT+0000 (GMT)",

          isLiked: false,

          text:
            "Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake. Cupcake I love wafer cake. Halvah I love powder jelly I love cheesecake cotton candy tiramisu brownie.",

          media: [
            {
              img: "blog-2.jpg"
            }
          ],

          likes: 276,

          comments: 105,

          usersLiked: [
            {
              name: "Lai Lewandowski",

              img: "user-3.jpg"
            },

            {
              name: "Elicia Rieske",

              img: "user-3.jpg"
            },

            {
              name: "Darcey Nooner",

              img: "user-3.jpg"
            },

            {
              name: "Julee Rossignol",

              img: "user-3.jpg"
            },

            {
              name: "Jeffrey Gerondale",

              img: "user-3.jpg"
            }
          ],

          commentbox: "",

          usersCommented: [
            {
              comment: "I love cupcake danish jujubes sweet.",

              author: "Darcey Nooner",

              img: "user-3.jpg",

              time: "Mon Dec 11 2018 09:56:05 GMT+0000 (GMT)"
            },

            {
              comment: "Wafer I love brownie jelly bonbon tart apple pie",

              author: "Lai Lewandowski",

              img: "user-3.jpg",

              time: "Mon Dec 10 2018 09:50:00 GMT+0000 (GMT)"
            }
          ]
        },

        {
          author: "Leeanna Alvord",

          time: "Mon Dec 10 2018 12:05:05 GMT+0000 (GMT)",

          isLiked: false,

          text:
            "Wafer I love brownie jelly bonbon tart. Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake.",

          media: [
            {
              sources: [
                {
                  type: "video/mp4",

                  src: "http://vjs.zencdn.net/v/oceans.mp4"
                }
              ],

              poster: "https://goo.gl/xcCsDd"
            }
          ],

          likes: 269,

          comments: 98,

          usersLiked: [
            {
              name: "Vennie Mostowy",

              img: "user-3.jpg"
            },

            {
              name: "Elicia Rieske",

              img: "user-3.jpg"
            },

            {
              name: "Julee Rossignol",

              img: "user-3.jpg"
            },

            {
              name: "Darcey Nooner",

              img: "user-3.jpg"
            },

            {
              name: "Elicia Rieske",

              img: "user-3.jpg"
            }
          ],

          commentbox: "",

          usersCommented: [
            {
              comment: "I love cupcake danish jujubes sweet.",

              author: "Darcey Nooner",

              img: "user-3.jpg",

              time: "Mon Dec 11 2018 09:56:05 GMT+0000 (GMT)"
            },

            {
              comment: "Wafer I love brownie jelly bonbon tart apple pie",

              author: "Lai Lewandowski",

              img: "user-3.jpg",

              time: "Mon Dec 10 2018 09:50:00 GMT+0000 (GMT)"
            }
          ]
        }
      ],

      suggestedPages: [
        {
          img: "blog-1.jpg",

          title: "Rockose",

          type: "Company"
        },

        {
          img: "blog-2.jpg",

          title: "The Devil's",

          type: "Clothing Store"
        },

        {
          img: "blog-1.jpg",

          title: "The Magician",

          type: "Public Figure"
        },

        {
          img: "blog-2.jpg",

          title: "AC/DC",

          type: "Music"
        },

        {
          img: "blog-2.jpg",

          title: "eat hard",

          type: "restaurant / bar"
        },

        {
          img: "blog-1.jpg",

          title: "B4B",

          type: "Beauty Store"
        },

        {
          img: "blog-2.jpg",

          title: "Kylie Jenner",

          type: "Public Figure"
        },

        {
          img: "blog-2.jpg",

          title: "RDJ",

          type: "Actor"
        },

        {
          img: "page-06.jpg",

          title: "Taylor Swift",

          type: "Music"
        }
      ],

      polls: [
        {
          id: 59,

          title: "Who is the best actor in Marvel Cinematic Universe?",

          options: [
            {
              text: "RDJ",

              value: "rdj",

              voted: 58,

              usersVoted: [
                {
                  name: "Tonia Seabold",

                  avatar: "user-3.jpg"
                },

                {
                  name: "Carissa Dolle",

                  avatar: "user-3.jpg"
                },

                {
                  name: "Kelle Herrick",

                  avatar: "user-3.jpg"
                },

                {
                  name: "Len Bregantini",

                  avatar: "user-3.jpg"
                },

                {
                  name: "John Doe",

                  avatar: "user-3.jpg"
                },

                {
                  name: "Tonia Seabold",

                  avatar: "user-3.jpg"
                },

                {
                  name: "Dirk Fornili",

                  avatar: "user-3.jpg"
                }
              ]
            },

            {
              text: "Chris Hemsworth",

              value: "chris hemsworth",

              voted: 16,

              usersVoted: [
                {
                  name: "Liliana Pecor",

                  avatar: "user-3.jpg"
                },

                {
                  name: "Kasandra Nalevanko",

                  avatar: "user-3.jpg"
                }
              ]
            },

            {
              text: "mark ruffalo",

              value: "mark ruffalo",

              voted: 8,

              usersVoted: [
                {
                  name: "Lorelei Lacsamana",

                  avatar: "user-3.jpg"
                }
              ]
            },

            {
              text: "Chris Evans",

              value: "chris evans",

              voted: 16,

              usersVoted: [
                {
                  name: "Jeanie Bulgrin",

                  avatar: "user-3.jpg"
                },

                {
                  name: "Graig Muckey",

                  avatar: "user-3.jpg"
                }
              ]
            }
          ]
        }
      ],
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          website: "hildegard.org"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          website: "anastasia.net"
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          website: "ramiro.info"
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          website: "kale.biz"
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
          website: "demarco.info"
        },
        {
          id: 6,
          name: "Mrs. Dennis Schulist",
          username: "Leopoldo_Corkery",
          email: "Karley_Dach@jasper.info",
          website: "ola.org"
        },
        {
          id: 7,
          name: "Kurtis Weissnat",
          username: "Elwyn.Skiles",
          email: "Telly.Hoeger@billy.biz",
          website: "elvis.io"
        },
        {
          id: 8,
          name: "Nicholas Runolfsdottir V",
          username: "Maxime_Nienow",
          email: "Sherwood@rosamond.me",
          website: "jacynthe.com"
        },
        {
          id: 9,
          name: "Glenna Reichert",
          username: "Delphine",
          email: "Chaim_McDermott@dana.io",
          website: "conrad.com"
        },
        {
          id: 10,
          name: "Clementina DuBuque",
          username: "Moriah.Stanton",
          email: "Rey.Padberg@karina.biz",
          website: "ambrose.net"
        }
      ],

      twitterFeeds: [
        {
          authorAvatar: "user-3.jpg",

          authorUsername: "tiana59",

          authorDisplayName: "Tiana Vercetti",

          content:
            "I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups.",

          tags: ["js", "vuejs"],

          time: "Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)"
        },

        {
          authorAvatar: "user-3.jpg",

          authorUsername: "tiana59",

          authorDisplayName: "Tiana Vercetti",

          content:
            "Carrot cake cake gummies I love I love tiramisu. Biscuit marzipan cookie lemon drops.",

          tags: ["python"],

          time: "Mon Dec 11 2018 01:05:05 GMT+0000 (GMT)"
        },

        {
          authorAvatar: "user-3.jpg",

          authorUsername: "tiana59",

          authorDisplayName: "Tiana Vercetti",

          content:
            "I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups .",

          tags: [],

          time: "Mon Dec 10 2018 03:33:05 GMT+0000 (GMT)"
        },

        {
          authorAvatar: "user-3.jpg",

          authorUsername: "tiana59",

          authorDisplayName: "Tiana Vercetti",

          content:
            "Muffin candy caramels. I love caramels tiramisu jelly. Pie I love wafer. Chocolate cake lollipop tootsie roll cake.",

          tags: ["django", "vuejs"],

          time: "Mon Dec 9 2018 08:47:05 GMT+0000 (GMT)"
        }
      ],

      wasSidebarOpen: null
    };
  },

  computed: {
    mediaType() {
      return media => {
        if (media.img) {
          const ext = media.img.split(".").pop();

          if (this.mediaExtensions.img.includes(ext)) return "image";
        } else if (media.sources && media.poster) {
          // other validations

          return "video";
        }
      };
    },

    playerOptions() {
      return media => {
        return {
          height: "360",

          fluid: true,

          autoplay: false,

          muted: true,

          language: "en",

          playbackRates: [0.7, 1.0, 1.5, 2.0],

          sources: media.sources,

          poster: media.poster
        };
      };
    }
  },

  methods: {
    loadContent() {
      this.$vs.loading({
        background: this.backgroundLoading,

        color: this.colorLoading,

        container: "#button-load-more-posts",

        scale: 0.45
      });

      setTimeout(() => {
        this.$vs.loading.close("#button-load-more-posts > .con-vs-loading");
      }, 3000);
    }
  },

  components: {
    videoPlayer
  },

  mounted() {
    this.wasSidebarOpen = this.$store.state.reduceButton;

    this.$store.commit("TOGGLE_REDUCE_BUTTON", true);
  },

  beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit("TOGGLE_REDUCE_BUTTON", false);
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/profile.scss";
</style>