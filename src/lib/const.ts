import { 
    Grid24Regular,
    Flowchart24Regular,
    Notepad24Regular,
    TaskListSquareRtl24Regular,
    Person24Regular,
    SignOut24Regular,
    DataUsage24Regular,
    Settings24Regular,
    Home24Regular,
    Calendar24Regular,
    PeopleTeam24Regular,
    Color24Regular,
    AppFolder24Regular
 } from '@fluentui/react-icons'

export const sidebar = [
  {
    id: 2,
    title: "Upcoming",
    url: "/schedule",
    icon: Calendar24Regular,
  },
  {
    id: 7,
    title: "Teams",
    url: "/members",
    icon: PeopleTeam24Regular,
  },
  {
    id: 3,
    title: "Settings",
    url: "/settings",
    icon: Settings24Regular,
  },
];

export const sitelink = [
    { id: 0, title: 'Home', url: '/' },
    { id: 1, title: 'Demo', url: '/demo' },
    { id: 2, title: 'Support Me', url: '/supportme' },
]
export const menuUser = [
    {
        id: 1,
        title: 'Profile',
        url: '/account/profile',
        icon: Person24Regular,
    },
    {
        id: 3,
        title: 'Settings',
        url: '/account/profilesettings',
        icon: Settings24Regular,
    },
    {
        id: 2,
        title: 'Sign Out',
        url: '/workspace/sign-out',
        icon: SignOut24Regular,
    },
]

export const sidebaraccountuser = [
    {
        id: 9,
        title: 'Home',
        url: '/app',
        icon: Home24Regular,
    },
    {
        id: 0,
        title: 'Profile',
        url: '/app/profile',
        icon: Person24Regular,
    },
    {
        id: 1,
        title: 'Integration',
        url: '/app/integration',
        icon: AppFolder24Regular,
    },
    {
        id: 2,
        title: 'Preferences',
        url: '/app/preferences',
        icon: Color24Regular,
    },
    {
        id: 3,
        title: 'Usage',
        url: '/app/usage',
        icon: DataUsage24Regular,
    },
    {
        id: 4,
        title: 'Settings',
        url: '/app/settings',
        icon: Settings24Regular,
    },
]
export const projectsMenu = [
    {
        id: 9,
        title: 'Kanban',
        url: 'board',
        icon: Grid24Regular
    },
    {
        id: 6,
        title: 'Workflow',
        url: 'workflow',
        icon: Flowchart24Regular
    },
    {
        id: 12,
        title: 'Calender',
        url: 'calender',
        icon: Calendar24Regular
    },
    {
        id: 8,
        title: 'Todos',
        url: 'todos',
        icon: TaskListSquareRtl24Regular
    },
    {
        id: 4,
        title: 'Notes',
        url: 'notes', 
        icon:  Notepad24Regular  
    }
]
export const coreFeature = [
    {
        id: 1,
        title: "Don't Miss Out!",
        description:
            'Emphasize the reminder and notification system of your account, ensuring that users never miss important deadlines or tasks.',
        icon: Grid24Regular,
    },
    {
        id: 2,
        title: 'Work Together!',
        description:
            'Highlight the collaboration features of your account, allowing users to share tasks with others, assign tasks to team members, and track progress together.',
        icon: Grid24Regular,
    },
    {
        id: 4,
        title: "It's Safe!",
        description:
            'Assure users of the data security and privacy measures implemented in your account, protecting their sensitive information',
        icon: Grid24Regular,
    },
]