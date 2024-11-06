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
      description: "Button title",
      control: {
        type: "text"
      },
      defaultValue: {
        summary: "Default"
      }
    },
    onClick: {
      description: "Button click event",
      action: "clicked"
    },
    type: {
      description: "Button type",
      control: "select",
      options: ["default", "danger", "success", "warning", "primary"],
      defaultValue: {
        summary: "default"
      }
    },
    icon: {
      description: "Button icon",
      control: {
        disable: true
      }
    },
    color: {
      description: "Button color",
      control: {
        type: "color"
      }
    },
    size: {
      description: "Button size",
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: {
        summary: "medium"
      }
    },
    shape: {
      description: "Button shape",
      control: "radio",
      options: ["circle", "round", "square"],
      defaultValue: {
        summary: "square"
      }
    },
    disabled: {
      description: "Button disabled",
      control: {
        type: "boolean"
      },
      defaultValue: {
        summary: false
      }
    }
  }
};

export const DefaultButton = {
  args: {
    title: "Default",
    type: "default",
    size: "medium",
    disabled: false,
    shape: "square"
  }
};
