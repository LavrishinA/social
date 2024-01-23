import {Meta, StoryObj} from "@storybook/react";
import { UserCard } from "./UserCard";



const meta: Meta<typeof UserCard> = {
    title: 'Profile/UserCard',
    component: UserCard,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    args: {
        fullName: "Profile name",
        aboutMe: "Hello it-incubator!",
        photos: {large: "https://cdn-icons-png.flaticon.com/512/21/21104.png", small: null},
    }
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const UserCardStory: Story = {};