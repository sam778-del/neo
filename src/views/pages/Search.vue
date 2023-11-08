<template>
  <div id="search-page">
    <div class="search-block flex items-center justify-center">
      <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="9">
          <vs-input class="w-100" size="large" placeholder="Type Anything.."/>
        </vs-col>
        <vs-col vs-w="3">
          <vs-button size="large">Search</vs-button>
        </vs-col>
      </vs-row>
    </div>
    <div class="search-result">
      <h2 class="flex justify-center my-6">
        About
        <span class="text-warning mx-3">24 results</span> found lorem ipsum.
      </h2>
      <div class="search-result-list">
        <vs-row vs-w="12">
          <vs-col vs-w="6" class="mb-8">
            <h3 class="mb-3">Noureis - Responsive Website Template</h3>
            <a
              href="https://lusaxweb.github.io/vuesax/layout/#flex-alignment"
            >https://lusaxweb.github.io/vuesax/layout/#flex-alignment</a>
            <p
              class="mt-3"
            >Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor</p>
          </vs-col>
          <vs-col vs-w="6" class="mb-8">
            <h3 class="mb-3">Noureis - Responsive Website Template</h3>
            <a
              href="https://lusaxweb.github.io/vuesax/layout/#flex-alignment"
            >https://lusaxweb.github.io/vuesax/layout/#flex-alignment</a>
            <p
              class="mt-3"
            >Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor</p>
          </vs-col>
          <vs-col vs-w="6" class="mb-8">
            <h3 class="mb-3">Noureis - Responsive Website Template</h3>
            <a
              href="https://lusaxweb.github.io/vuesax/layout/#flex-alignment"
            >https://lusaxweb.github.io/vuesax/layout/#flex-alignment</a>
            <p
              class="mt-3"
            >Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor</p>
          </vs-col>
          <vs-col vs-w="6" class="mb-8">
            <h3 class="mb-3">Noureis - Responsive Website Template</h3>
            <a
              href="https://lusaxweb.github.io/vuesax/layout/#flex-alignment"
            >https://lusaxweb.github.io/vuesax/layout/#flex-alignment</a>
            <p
              class="mt-3"
            >Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor</p>
          </vs-col>
          <vs-col vs-w="6" class="mb-8">
            <h3 class="mb-3">Noureis - Responsive Website Template</h3>
            <a
              href="https://lusaxweb.github.io/vuesax/layout/#flex-alignment"
            >https://lusaxweb.github.io/vuesax/layout/#flex-alignment</a>
            <p
              class="mt-3"
            >Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor</p>
          </vs-col>
          <vs-col vs-w="6" class="mb-8">
            <h3 class="mb-3">Noureis - Responsive Website Template</h3>
            <a
              href="https://lusaxweb.github.io/vuesax/layout/#flex-alignment"
            >https://lusaxweb.github.io/vuesax/layout/#flex-alignment</a>
            <p
              class="mt-3"
            >Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor</p>
          </vs-col>
        </vs-row>
      </div>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";

export default {
  data() {
    return {
      searchQuery: "Modern Admin",
      currentPage: 1,
      knowledgePanel: {
        img: ["modern.jpg"],
        title: "Modern Admin - Clean Bootstrap 4 Dashboard HTML Template",
        subtitle: "Clean Bootstrap 4 Dashboard HTML Template",
        description:
          "Clean Bootstrap 4 Dashboard HTML Template + Bitcoin Dashboard can be used for any type of web applications: Project Management, eCommerce backends, CRM, Analytics, Fitness or any custom admin panels.",
        info: [
          { title: "1,367", subtitle: "Sales" },
          { title: "74", subtitle: "Comments" },
          { title: "5", subtitle: "Ratings" }
        ],
        externalLink: {
          title: "View on Themeforest",
          icon: "ExternalLinkIcon",
          url:
            "https://themeforest.net/item/modern-admin-clean-bootstrap-4-dashboard-html-template/21430660"
        },
        resultMetaList: [
          { name: "Bootstrap", value: "v4.13 updated" },
          { name: "Created", value: "Mar 8 2018" },
          { name: "Last Update", value: "Nov 28 2018" },
          { name: "Documentation", value: "Well Documented" },
          { name: "Layout", value: "Responsive" }
        ],
        suggestedSearches: [
          {
            name: "Apex",
            img: "1-apex.png",
            url:
              "https://themeforest.net/item/apex-angular-4-bootstrap-admin-template/20774875"
          },
          {
            name: "Convex",
            img: "3-convex.png",
            url:
              "https://themeforest.net/item/convex-angular-bootstrap-admin-dashboard-template/22424619"
          },
          {
            name: "Materialize",
            img: "4-materialize.png",
            url:
              "https://themeforest.net/item/materialize-material-design-admin-template/11446068"
          },
          {
            name: "Stack",
            img: "2-stack.png",
            url:
              "https://themeforest.net/item/stack-responsive-bootstrap-4-admin-template/20039431"
          }
        ]
      },
      searchResults: [
        {
          title: "Modern Admin - Clean Bootstrap 4 Dashboard HTML Template",
          linkUrl: "https://www.google.com/",
          resultUrl: "https://www.google.com/",
          metaData: {
            ratings: 5,
            info: ["25 reviews", "25.00 USD", "In Stock"]
          },
          time: "Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)",
          description:
            "Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups muffin halvah lollipop. Chocolate cake oat cake tiramisu marzipan sugar plum. Donut sweet pie oat cake dragée fruitcake cotton candy lemon drops. Sweet roll wafer bear claw tiramisu oat cake.",
          sitelinks: [
            {
              title: "Dashboard",
              url: "https://www.google.com/",
              description:
                "Halvah marzipan icing chocolate caramels candy canes carrot cake dragée apple pie. Croissant oat cake gummies biscuit."
            },
            {
              title: "UI Components",
              url: "https://www.google.com/",
              description:
                "Brownie lollipop chocolate bar chocolate cake macaroon. Bonbon chocolate tootsie roll chocolate."
            },
            {
              title: "Form Elements",
              url: "https://www.google.com/",
              description:
                "Lollipop cake wafer. Candy chocolate toffee icing. Chocolate cake cupcake toffee chupa chups topping."
            },
            {
              title: "Support",
              url: "https://www.google.com/",
              description:
                "Carrot cake sweet soufflé cake bear claw lollipop. Muffin sugar plum chupa chups liquorice cotton candy halvah danish cake."
            },
            {
              title: "Charts",
              url: "https://www.google.com/",
              description:
                "Gingerbread chupa chups toffee jelly chocolate cake tiramisu marshmallow. Donut tiramisu chocolate marshmallow."
            },
            {
              title: "Documentation",
              url: "https://www.google.com/",
              description:
                "Powder brownie candy toffee soufflé. Gingerbread sweet roll gingerbread icing macaroon."
            }
          ]
        },
        {
          title: "Attire bench - Quick win shoot me an email",
          linkUrl: "https://www.google.com/",
          resultUrl: "https://www.google.com/",
          resultImg: "search-result.jpg",
          metaData: {
            ratings: 4.5,
            info: ["17 reviews", "12 votes", "28.00 USD", "In Stock"]
          },
          time: "Mon Feb 23 2017 07:45:00 GMT+0000 (GMT)",
          description:
            "Tiramisu soufflé gummies ice cream liquorice gingerbread sweet roll. Cake cotton candy candy ice cream muffin donut soufflé danish. Dessert jelly beans wafer cheesecake. Sugar plum gingerbread caramels candy canes gummi bears bear claw donut. Oat cake cookie tiramisu sweet halvah sugar plum. Dessert danish oat cake."
        },
        {
          title: "Microdosing - deep v actually schlitz chia",
          linkUrl: "https://www.google.com/",
          resultUrl: "https://www.google.com/",
          description:
            "Wafer liquorice sweet roll jelly beans cake soufflé. Oat cake marzipan chocolate cake sesame snaps jujubes. Dragée biscuit dessert. Chocolate muffin wafer. Sugar plum icing tootsie roll gummi bears marzipan candy canes biscuit."
        },
        {
          title: "Aesthetic neutra freegan, mlkshk literally",
          linkUrl: "https://www.google.com/",
          resultUrl: "https://www.google.com/",
          time: "Mon Jun 30 2017 10:30:00 GMT+0000 (GMT)",
          description:
            "Donut jelly cake chupa chups powder chocolate cake cheesecake. Wafer macaroon sweet roll gingerbread cheesecake gummi bears. Marzipan jujubes sweet roll tootsie roll cookie apple pie brownie bear claw jelly beans."
        },
        {
          title: "iCell - disrupt butcher pitchfork.",
          linkUrl: "https://www.google.com/",
          resultUrl: "https://www.google.com/",
          time: "Mon DEC 12 2015 08:39:00 GMT+0000 (GMT)",
          description:
            "Cake fruitcake cake caramels jelly beans chocolate bar. Macaroon gingerbread pastry. Gummies ice cream chocolate lollipop brownie cotton candy. Topping cotton candy brownie. Cake tiramisu macaroon sugar plum. Sweet cotton candy powder tootsie roll candy gummies brownie lollipop. Sweet muffin pudding."
        }
      ]
    };
  },
  computed: {
    playerOptions() {
      return media => {
        return {
          height: "360",
          fluid: true,
          // rmeove this comment if you want to autoplay
          // autoplay: true,
          muted: true,
          language: "en",
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: media.sources,
          poster: media.poster
        };
      };
    }
  },
  methods: {},
  components: {
    videoPlayer
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/search.scss";
</style>