import IconLabelPage from "./IconLablePage";
import Icon from "./index";

export default {
  title: "Universal/Icon",
  component: Icon,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "select" },
      options: [
        "EyeClosed", "upload", "user", "users", "volume", "volumehigh", "..."

      ],
      description: "The name of the icon to be displayed."
    },
    size: {
      control: { type: "number", min: 8, max: 64, step: 2 },
      defaultValue: 24,
      description: "The size of the icon in pixels."
    },
    color: {
      control: { type: "color" },
      defaultValue: "currentColor",
      description: "The color of the icon."
    },
    onClick: { action: "clicked" }
  }
};

export const DefaultIcon = {
  args: {
    name: "EyeClosed",
    size: 24,
    color: "currentColor"
  }
};

export const LargeIcon = {
  args: {
    name: "user",
    size: 48
  }
};

export const ColoredIcon = {
  args: {
    name: "upload",
    size: 32,
    color: "#e74c3c"
  }
};

export const AllIcons = {
  render: () => <IconLabelPage />,
  parameters: {
    controls: { disable: true },
    docs: {
      source: {
        code: null
      }
    }
  }
};
