import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMedium: Story = {
  args: {
    styleType: "default",
    children: "Add to cart",
  },
};

export const DefaultSmall: Story = {
  args: {
    styleType: "default",
    children: "Add to cart",
    size: "sm",
  },
};

export const DefaultLarge: Story = {
  args: {
    styleType: "default",
    children: "Add to cart",
    size: "lg",
  },
};

export const AddToCart: Story = {
  args: {
    styleType: "primary",
    children: "Add to cart",
  },
};

export const AddToCartSmall: Story = {
  args: {
    styleType: "primary",
    children: "Add to cart",
    size: "sm",
  },
};

export const AddToCartLarge: Story = {
  args: {
    styleType: "primary",
    children: "Add to cart",
    size: "lg",
  },
};

export const RemoveFromCart: Story = {
  args: {
    styleType: "secondary",
    children: "Remove",
  },
};

export const RemoveFromCartSmall: Story = {
  args: {
    styleType: "secondary",
    children: "Remove",
    size: "sm",
  },
};

export const RemoveFromCartLarge: Story = {
  args: {
    styleType: "secondary",
    children: "Remove",
    size: "lg",
  },
};
