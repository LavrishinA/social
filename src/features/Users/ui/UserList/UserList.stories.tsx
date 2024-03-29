import {Meta, StoryObj} from "@storybook/react";
import {UserList} from "./UserList.tsx";


const meta: Meta<typeof UserList> = {
    title: 'Profile/UserList',
    component: UserList,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
// @ts-ignore
        items: [
            {
                name: "Xacer",
                id: 30571,
                uniqueUrlName: null,
                photos: {
                    small: "https://social-network.samuraijs.com/activecontent/images/users/30571/user-small.jpg?v=1",
                    large: "https://social-network.samuraijs.com/activecontent/images/users/30571/user.jpg?v=1"
                },
                status: "ячс",
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "andreyminec",
                id: 30599,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "XP9K",
                id: 30598,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "RadikBik",
                id: 30597,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "MacheteBy",
                id: 30596,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "Vaone",
                id: 30595,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "extrim1488st",
                id: 30594,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "Sonet_Brashear",
                id: 30593,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "dtro",
                id: 30592,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "rozhkoaleks",
                id: 30591,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "Maxik2024",
                id: 30590,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "FunnyMaxim",
                id: 30589,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "MaximMaxim",
                id: 30588,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "Maximaab",
                id: 30587,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "Smail_K0T",
                id: 30586,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "xaosland",
                id: 30585,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "jojojojajo",
                id: 30584,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "vovochka",
                id: 30583,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "xtk",
                id: 30582,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            },
            {
                name: "Nikitsenko",
                id: 30581,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
                entityStatus: "idle"
            }
        ],
        loading: false
    }
};

export default meta;
type Story = StoryObj<typeof UserList>;

export const UserListItemStory: Story = {};