import { Meta, StoryObj } from "@storybook/react";

import { ContentCard } from "./ContentCard";

const meta = {
  component: ContentCard,
} satisfies Meta<typeof ContentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultContentCard: Story = {
  args: {
    sourceUrl: "@/assets/images/macbook.jpg",
    title: "MacBook Pro",
    description: "PC.............................",
  },
};
