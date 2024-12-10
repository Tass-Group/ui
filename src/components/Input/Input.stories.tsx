import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";
import Icon from "../Icon";

const meta: Meta<typeof Input> = {
  title: "Data Entry/Input",
  component: Input,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "middle", "large"]
    },
    status: {
      control: "select",
      options: [undefined, "error", "warning"]
    }
  }
};

export default meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    placeholder: "Basic usage"
  }
};

export const Sizes: StoryObj<typeof Input> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input size="large" placeholder="Large size" />
      <Input size="middle" placeholder="Default size" />
      <Input size="small" placeholder="Small size" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Input size="large" placeholder="Large size" />
  <Input size="middle" placeholder="Default size" />
  <Input size="small" placeholder="Small size" />
</div>
        `
      }
    }
  }
};

export const WithPrefix: StoryObj<typeof Input> = {
  args: {
    prefix: <Icon name="user" />,
    placeholder: "Enter username"
  }
};

export const WithSuffix: StoryObj<typeof Input> = {
  args: {
    suffix: <Icon name="magnifier" size={16} />,
    placeholder: "Search"
  }
};

export const Clearable: StoryObj<typeof Input> = {
  args: {
    allowClear: true,
    placeholder: "Clearable input"
  }
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    disabled: true,
    placeholder: "Disabled input"
  }
};

export const Status: StoryObj<typeof Input> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input status="error" placeholder="Error status" />
      <Input status="warning" placeholder="Warning status" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Input status="error" placeholder="Error status" />
  <Input status="warning" placeholder="Warning status" />
</div>
        `
      }
    }
  }
};

export const Group: StoryObj<typeof Input.Group> = {
  render: () => (
    <Input.Group compact>
      <Input style={{ width: "20%" }} defaultValue="0571" />
      <Input style={{ width: "30%" }} defaultValue="26888888" />
    </Input.Group>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Input.Group compact>
  <Input style={{ width: "20%" }} defaultValue="0571" />
  <Input style={{ width: "30%" }} defaultValue="26888888" />
</Input.Group>
        `
      }
    }
  }
};

export const TextArea: StoryObj<typeof Input.TextArea> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input.TextArea placeholder="Basic usage" />
      <Input.TextArea
        showCount
        maxLength={100}
        placeholder="With character count"
      />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Input.TextArea placeholder="Basic usage" />
  <Input.TextArea showCount maxLength={100} placeholder="With character count" />
</div>
        `
      }
    }
  }
};
