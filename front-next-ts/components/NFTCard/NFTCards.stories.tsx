import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NFTCard from "./NFTCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/NFTCard",
  component: NFTCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof NFTCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NFTCard> = (args) => (
  <NFTCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  mint: "",
  token_account: "",
  meta_account: "",
  name: "Genesis #0453",
  image:
    "https://fractal-nft.imgix.net/image/3onvM1Kd4hgh5QJJsVwipSuQh9stUtjc1Cpy2h8gfzEU?w=500&fm=webp&auto=compress&auto=format&frame=1",
  price: "2.50 SOL",
  days: 5,
  refund_nft: (x, y, z, s) => {
    return x + y + z + s;
  },
};
