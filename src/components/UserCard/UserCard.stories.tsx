import {Meta, StoryObj} from "@storybook/react";
import {UserCard} from "./UserCard.tsx";


const meta: Meta<typeof AddItemForm> = {
    title: 'User/UserCard',
    component: UserCard,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    args: {
        name: "User name",
        status: "Hello it-incubator!",
        photo: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
        avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/15.jpg"
    }
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const UserCardStory: Story = {};