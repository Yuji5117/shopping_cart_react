import { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./Tag";

const meta = {
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "All items",
    styleType: "default",
  },
};

export const Selected: Story = {
  args: {
    children: "men's clothing",
    styleType: "selected",
  },
};
