export default [
  {
    url: "/dashboard",
    name: "Dashboard",
    slug: "dashboard",
    icon: "fas fa-tachometer-alt",
    i18n: "Dashboard",
  },
  {
    header: "Apps",
    i18n: "Apps",
  },
  {
    url: "/apps/email",
    name: "Email",
    slug: "email",
    icon: "fas fa-envelope-open-text",
    i18n: "Email",
  },
  {
    url: "/apps/chat",
    name: "Chat",
    slug: "chat",
    icon: "fas fa-comment-alt",
    i18n: "Chat",
  },
  {
    url: "/apps/calendar",
    name: "Calendar",
    slug: "calendar",
    icon: "far fa-calendar-alt",
    i18n: "Calendar",
  },
  {
    header: "UI Elements",
    i18n: "UIElements",
  },
  {
    url: null,
    name: "Grid",
    slug: "grid",
    icon: "fab fa-uikit",
    i18n: "Grid",
    submenu: [
      {
        url: '/ui-elements/grid/vuesax',
        name: "Vuesax",
        slug: "gridVuesax",
        i18n: "Vuesax",
      }
    ]
  },
  {
    url: null,
    name: "Card",
    slug: "card",
    icon: "fas fa-grip-horizontal",
    i18n: "Card",
    submenu: [
      {
        url: '/ui-elements/card/basic',
        name: "Basic",
        slug: "basicCards",
        i18n: "Basic",
      },
      {
        url: '/ui-elements/card/card-actions',
        name: "Card Actions",
        slug: "cardActions",
        i18n: "CardActions",
      }
    ]
  },
  {
    url: "/ui-elements/table",
    name: "Table",
    slug: "table",
    icon: "fas fa-table",
    i18n: "Table",
  },
  {
    url: null,
    name: "Components",
    icon: "fas fa-columns",
    tag: "20+",
    slug: 'components',
    tagColor: "primary",
    i18n: "Components",
    submenu: [
      {
        url: '/components/alert',
        name: "Alert",
        slug: "componentAlert",
        i18n: "Alert",
      },
      {
        url: '/components/avatar',
        name: "Avatar",
        slug: "componentAvatar",
        i18n: "Avatar",
      },
      {
        url: '/components/breadcrumb',
        name: "Breadcrumb",
        slug: "componentBreadcrumb",
        i18n: "Breadcrumb",
      },
      {
        url: '/components/button',
        name: "Button",
        slug: "componentButton",
        i18n: "Button",
      },
      {
        url: '/components/chip',
        name: "Chip",
        slug: "componentChip",
        i18n: "Chip",
      },
      {
        url: '/components/collapse',
        name: "Collapse",
        slug: "componentCollapse",
        i18n: "Collapse",
      },
      {
        url: '/components/dialogs',
        name: "Dialogs",
        slug: "componentDialog",
        i18n: "Dialogs",
      },
      {
        url: '/components/divider',
        name: "Divider",
        slug: "componentDivider",
        i18n: "Divider",
      },
      {
        url: '/components/dropdown',
        name: "DropDown",
        slug: "componentDropDown",
        i18n: "DropDown",
      },
      {
        url: '/components/list',
        name: "List",
        slug: "componentList",
        i18n: "List",
      },
      {
        url: '/components/loading',
        name: "Loading",
        slug: "componentLoading",
        i18n: "Loading",
      },
      {
        url: '/components/navbar',
        name: "Navbar",
        slug: "componentNavbar",
        i18n: "Navbar",
      },
      {
        url: '/components/notifications',
        name: "Notifications",
        slug: "componentNotifications",
        i18n: "Notifications",
      },
      {
        url: '/components/pagination',
        name: "Pagination",
        slug: "componentPagination",
        i18n: "Pagination",
      },
      {
        url: '/components/popup',
        name: "Popup",
        slug: "componentPopup",
        i18n: "Popup",
      },
      {
        url: '/components/progress',
        name: "Progress",
        slug: "componentProgress",
        i18n: "Progress",
      },
      {
        url: '/components/sidebar',
        name: "Sidebar",
        slug: "componentSidebar",
        i18n: "Sidebar",
      },
      {
        url: '/components/slider',
        name: "Slider",
        slug: "componentSlider",
        i18n: "Slider",
      },
      {
        url: '/components/tabs',
        name: "Tabs",
        slug: "componentTabs",
        i18n: "Tabs",
      },
      {
        url: '/components/tooltip',
        name: "Tooltip",
        slug: "componentTooltip",
        i18n: "Tooltip",
      },
      {
        url: '/components/upload',
        name: "Upload",
        slug: "componentUpload",
        i18n: "Upload",
      },
    ]
  },
  {
    header: "Forms",
    i18n: "Forms",
  },
  {
    url: null,
    name: "Form Elements",
    icon: "fas fa-id-card-alt",
    tagColor: "danger",
    i18n: "FormElements",
    submenu: [
      {
        url: '/forms/form-elements/select',
        name: "Select",
        slug: "formElementSelect",
        i18n: "Select",
      },
      {
        url: '/forms/form-elements/switch',
        name: "Switch",
        slug: "formElementSwitch",
        i18n: "Switch",
      },
      {
        url: '/forms/form-elements/checkbox',
        name: "Checkbox",
        slug: "formElementCheckbox",
        i18n: "Checkbox",
      },
      {
        url: '/forms/form-elements/radio',
        name: "Radio",
        slug: "formElementRadio",
        i18n: "Radio",
      },
      {
        url: '/forms/form-elements/input',
        name: "Input",
        slug: "formElementInput",
        i18n: "Input",
      },
      {
        url: '/forms/form-elements/number-input',
        name: "Number Input",
        slug: "formElementNumberInput",
        i18n: "NumberInput",
      },
      {
        url: '/forms/form-elements/textarea',
        name: "Textarea",
        slug: "formElementTextarea",
        i18n: "Textarea",
      },
    ]
  },
  {
    url: '/forms/form-layouts',
    name: "Form Layouts",
    icon: "fas fa-id-card",
    slug: "formsFormLayouts",
    i18n: "FormLayouts",
  },
  {
    header: "Pages",
    i18n: "Pages",
  },
  {
    url: null,
    name: "Authentication",
    icon: "fas fa-user-shield",
    i18n: "Authentication",
    submenu: [
      {
        url: '/pages/login',
        name: "Login",
        slug: "pagesLogin",
        i18n: "Login",
        target: '_blank',
      },
      {
        url: '/pages/register',
        name: "Register",
        slug: "pagesRegister",
        i18n: "Register",
        target: '_blank',
      },
      {
        url: '/pages/forgot-password',
        name: "Forgot Password",
        slug: "pagesForgotPassword",
        i18n: "ForgotPassword",
        target: '_blank',
      },
      {
        url: '/pages/reset-password',
        name: "Reset Password",
        slug: "pagesResetPassword",
        i18n: "ResetPassword",
        target: '_blank',
      },
      {
        url: '/pages/lock-screen',
        name: "Lock Screen",
        slug: "pagesLockScreen",
        i18n: "LockScreen",
        target: '_blank',
      },
    ]
  },
  {
    url: '/pages/comingsoon',
    name: "Coming Soon",
    icon: "fas fa-print",
    i18n: "ComingSoon",
    target: '_blank',
  },
  {
    url: null,
    name: "Error",
    icon: "fas fa-times",
    i18n: "Error",
    submenu: [
      {
        url: '/pages/error-404',
        name: "404",
        slug: "pageError404",
        i18n: "404",
        target: '_blank',
      },
      {
        url: '/pages/error-500',
        name: "500",
        slug: "pageError500",
        i18n: "500",
        target: '_blank',
      }
    ]
  },
  {
    url: '/pages/not-authorized',
    name: "Not Authorized",
    slug: "pageNotAuthorized",
    icon: "fas fa-user-times",
    i18n: "NotAuthorized",
    target: '_blank',
  },
  {
    url: '/pages/maintenance',
    name: "Maintenance",
    slug: "pageMaintenance",
    icon: "fas fa-wrench",
    i18n: "Maintenance",
    target: '_blank',
  },
  {
    url: '/pages/profile',
    name: "Profile",
    icon: "fas fa-user-circle",
    i18n: "Profile",

  },
  {
    url: '/pages/faq',
    name: "FAQ",
    icon: "far fa-question-circle",
    i18n: "FAQ",

  },
  {
    url: '/pages/search',
    name: "Search",
    icon: "fas fa-search-plus",
    i18n: "Search",

  },
  {
    url: '/pages/invoice',
    name: "Invoice",
    icon: "fas fa-receipt",
    i18n: "Invoice",

  },
  {
    header: "Charts & Maps",
    i18n: "ChartsAndMaps",
  },
  {
    url: null,
    name: "Charts",
    icon: "fas fa-chart-line",
    tag: '3',
    tagColor: 'success',
    i18n: "Charts",
    submenu: [
      {
        url: '/charts-and-maps/charts/apex-charts',
        name: "Apex Charts",
        slug: "extraComponentChartsApexCharts",
        i18n: "ApexCharts",
      },
      {
        url: '/charts-and-maps/charts/chartjs',
        name: "chartjs",
        slug: "extraComponentChartsChartjs",
        i18n: "chartjs",
      },
      {
        url: '/charts-and-maps/charts/echarts',
        name: "echarts",
        slug: "extraComponentChartsEcharts",
        i18n: "echarts",
      },
    ]
  },
  {
    url: '/charts-and-maps/maps/google-map',
    name: "Google Map",
    icon: "fas fa-map-marker-alt",
    slug: "extraComponentMapsGoogleMap",
    i18n: "GoogleMap",
  },
  {
    header: "Extensions",
    i18n: "Extensions",
  },
  {
    url: '/extensions/quill-editor',
    name: "Quill Editor",
    icon: "fas fa-newspaper",
    slug: "extraComponentQuillEditor",
    i18n: "QuillEditor",
  },
  {
    url: '/extensions/drag-and-drop',
    name: "Drag & Drop",
    icon: "fas fa-draw-polygon",
    slug: "extraComponentDragAndDrop",
    i18n: "DragAndDrop",
  },
  {
    url: '/extensions/datepicker',
    name: "Datepicker",
    icon: "fas fa-calendar-week",
    slug: "extraComponentDatepicker",
    i18n: "Datepicker",
  },
  {
    header: "Others",
    i18n: "Others",
  },
  {
    url: null,
    name: "Menu Levels",
    icon: "fas fa-bars",
    i18n: "MenuLevels",
    submenu: [
      {
        url: null,
        name: "Menu Level 2.1",
        i18n: "MenuLevel2p1",
      },
      {
        url: null,
        name: "Menu Level 2.2",
        i18n: "MenuLevel2p2",
        submenu: [
          {
            url: null,
            name: "Menu Level 3.1",
            i18n: "MenuLevel3p1",
          },
          {
            url: null,
            name: "Menu Level 3.2",
            i18n: "MenuLevel3p2",
          },
        ]
      },
    ]
  },
  {
    url: null,
    name: "Disabled Menu",
    icon: "EyeOffIcon",
    i18n: "DisabledMenu",
    isDisabled: true,
  }
]