import {Meta, StoryObj} from "@storybook/react";
import {SendText} from "./SendText.tsx";
import {MessageOutlined, SendOutlined} from "@ant-design/icons";

const meta: Meta<typeof SendText> = {
    title: 'SendText',
    component: SendText,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: {
            description: "send message",
            action: ("User send message or post text")
        },

        onChange: {
            description: "change textarea value",
            action: "user input text"
        }
    },
};

export default meta;
type Story = StoryObj<typeof SendText>;

export const SendMessageStory: Story = {
    args: {
        icon: <MessageOutlined/>
    }
};
export const CreatePostStory: Story = {
    args: {
        icon: <SendOutlined />
    }
}