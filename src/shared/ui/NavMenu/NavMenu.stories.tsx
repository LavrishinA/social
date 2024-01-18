import {Meta, StoryObj} from "@storybook/react";
import {NavMenu} from "./NavMenu.tsx";
import {BrowserRouter} from "react-router-dom";


const meta: Meta<typeof NavMenu> = {
    title: 'NavMenu',
    component: NavMenu,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story/>
            </BrowserRouter>

        )
    ]

};

export default meta;
type Story = StoryObj<typeof NavMenu>;
export const NavMenuStory: Story = {};