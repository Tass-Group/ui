import Divider from "./index";
import { type DividerProps } from "./types";

export default {
  title: "MyComponents/Divider",
  component: Divider,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { disable: true },
      options: ["horizontal", "vertical"],
      description: "Sets the orientation of the divider"
    },
    color: {
      control: { type: "color" },
      description: "Sets the color of the divider"
    },
    style: {
      control: { type: "object" },
      description: "Sets the style of the divider"
    },
    text: {
      control: { type: "text" },
      description: "Sets the text to display on the divider"
    },
    textPosition: {
      control: { disable: true },
      options: ["left", "center", "right"],
      description: "Sets the position of the text on the divider"
    },
    variant: {
      control: { disable: true },
      options: ["solid", "dashed", "dotted"],
      description: "Sets the variant of the divider"
    }
  }
};

export const DefaultDivider = {
  render: (args: DividerProps) => {
    return (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
        </p>
        <Divider {...args}/>
        <p>
          Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
        </p>
      </>
    );
  },
  args: {
    orientation: "horizontal"
  },
  parameters: {
    docs: {
      source: {
        code: `
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
</p>
<Divider />
<p>
  Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
</p>
        `
      }
    }
  }
};

export const VerticalDivider = {
  render: (args: DividerProps) => {
    return (
      <div style={{ display: "flex", alignItems: "center", height: "15px" }}>
        Text
        <Divider orientation="vertical" {...args}/>
        <a href="#">Link</a>
        <Divider orientation="vertical" {...args}/>
        <a href="#">Link</a>
      </div>
    );
  },
  args: {
    orientation: "vertical"
  },
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ display: "flex", alignItems: "center", height: "15px" }}>
  Text
  <Divider orientation="vertical" {...args}/>
  <a href="#">Link</a>
  <Divider orientation="vertical" {...args}/>
  <a href="#">Link</a>
</div>
        `
      }
    }
  }
};

export const VariantDivider = {
  render: (args: DividerProps) => {
    return (
      <div style={{ padding: "20px" }}>
        <h3>Solid Divider</h3>
        <Divider {...args} color="blue" variant="solid" orientation="horizontal" />
        <p>Some text between dividers</p>

        <h3>Dashed Divider</h3>
        <Divider {...args} color="green" variant="dashed" orientation="horizontal" />
        <p>Some more text between dividers</p>

        <h3>Dotted Divider</h3>
        <Divider {...args} color="red" variant="dotted" orientation="horizontal" />
        <p>More content to show dividers</p>

        <div style={{ display: "flex", alignItems: "center", height: "100px", marginTop: "20px" }}>
          <p>Vertical Dotted</p>
          <Divider {...args} color="purple" variant="dotted" orientation="vertical" />
          <p>Vertical Dashed</p>
          <Divider {...args} color="orange" variant="dashed" orientation="vertical" />
          <p>Vertical Solid</p>
          <Divider {...args} color="black" variant="solid" orientation="vertical" />
        </div>
      </div>
    );
  },
  args: {
    orientation: "horizontal",
    color: "rgba(0, 0, 0, 0.12)",
    variant: "solid"
  },
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ padding: "20px" }}>
  <h3>Solid Divider</h3>
  <Divider color="blue" variant="solid" orientation="horizontal" />
  <p>Some text between dividers</p>

  <h3>Dashed Divider</h3>
  <Divider color="green" variant="dashed" orientation="horizontal" />
  <p>Some more text between dividers</p>

  <h3>Dotted Divider</h3>
  <Divider color="red" variant="dotted" orientation="horizontal" />
  <p>More content to show dividers</p>

  <div style={{ display: "flex", alignItems: "center", height: "100px", marginTop: "20px" }}>
    <p>Vertical Dotted</p>
    <Divider color="purple" variant="dotted" orientation="vertical" />
    <p>Vertical Dashed</p>
    <Divider color="orange" variant="dashed" orientation="vertical" />
    <p>Vertical Solid</p>
    <Divider color="black" variant="solid" orientation="vertical" />
  </div>
</div>
        `
      }
    }
  }
};

export const TextDivider = {
  render: (args: DividerProps) => {
    return (
      <div>
        <p>Text on Left:</p>
        <Divider {...args} text="Left Text" textPosition="left" color="green" orientation="horizontal" />

        <p>Text in Center:</p>
        <Divider {...args} text="Center Text" textPosition="center" color="purple" orientation="horizontal" />

        <p>Text on Right:</p>
        <Divider {...args} text="Right Text" textPosition="right" color="orange" orientation="horizontal" />

        <div style={{ display: "flex", alignItems: "center", height: "100px", marginTop: "16px" }}>
          <p>Vertical Text:</p>
          <Divider {...args} text="Vertical Center" textPosition="center" color="teal" orientation="vertical" />
        </div>
      </div>
    );
  },
  args: {
    orientation: "horizontal",
    color: "rgba(0, 0, 0, 0.12)"
  },
  parameters: {
    docs: {
      source: {
        code: `
<div>
  <p>Text on Left:</p>
  <Divider text="Left Text" textPosition="left" color="green" orientation="horizontal" />

  <p>Text in Center:</p>
  <Divider text="Center Text" textPosition="center" color="purple" orientation="horizontal" />

  <p>Text on Right:</p>
  <Divider text="Right Text" textPosition="right" color="orange" orientation="horizontal" />

  <div style={{ display: "flex", alignItems: "center", height: "100px", marginTop: "16px" }}>
    <p>Vertical Text:</p>
    <Divider text="Vertical Center" textPosition="center" color="teal" orientation="vertical" />
  </div>
</div>
        `
      }
    }
  }
};
