import Button from "./index";

export default {
  title: "MyComponents/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "The title of the Button",
      control: {
        type: "text"
      }
    }
  }
};

export const ButtonOne = {
  args: {
    title: "This is the Button One title"
  }
};
