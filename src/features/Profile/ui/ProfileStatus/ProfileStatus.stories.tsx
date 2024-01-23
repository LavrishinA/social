import {Meta, StoryObj} from "@storybook/react";
import {ProfileStatus} from "features/Profile/ui/ProfileStatus/ProfileStatus.tsx";

const meta: Meta<typeof ProfileStatus> = {
    title: 'Profile/ProfileStatus',
    component: ProfileStatus,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    args: {
        status: "Some status!"
    }
};

export default meta;
type Story = StoryObj<typeof ProfileStatus>;

export const ProfileStatusStory: Story = {};