import type { Meta, StoryObj } from "@storybook/react";
import Upload from ".";

const meta: Meta<typeof Upload> = {
  title: "Data Entry/Upload",
  component: Upload,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    accept: {
      control: "text",
      description: "File types that can be accepted"
    },
    action: {
      control: "text",
      description: "Upload URL"
    },
    multiple: {
      control: "boolean",
      description: "Whether to support multiple file upload"
    },
    listType: {
      control: { type: "radio" },
      options: ["text", "picture", "picture-card"],
      description: "Type of uploadList"
    },
    disabled: {
      control: "boolean",
      description: "Disable upload button"
    }
  }
};

export default meta;

export const Basic: StoryObj<typeof Upload> = {
  args: {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
  }
};

export const PictureCard: StoryObj<typeof Upload> = {
  args: {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    listType: "picture-card",
    accept: "image/*"
  }
};

export const MultipleFiles: StoryObj<typeof Upload> = {
  args: {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    multiple: true
  }
};

export const Disabled: StoryObj<typeof Upload> = {
  args: {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    disabled: true
  }
};
