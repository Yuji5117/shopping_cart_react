import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    styleType: "default",
    children: "Add to cart",
  },
};

export const AddToCart: Story = {
  args: {
    styleType: "primary",
    children: "Add to cart",
  },
};

export const RemoveFromCart: Story = {
  args: {
    styleType: "secondary",
    children: "Remove",
  },
};
