import type { Meta, StoryObj } from "@storybook/react";
import message from ".";
import Button from "../Button";

const meta: Meta<typeof Button> = {
  title: "Feedback/Message",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Success: Story = {
  render: () => (
    <Button title="Show Success Message" onClick={() => { message.success("This is a success message"); }} />
  )
};

export const Info: Story = {
  render: () => (
    <Button title="Show Info Message" onClick={() => { message.info("This is an info message"); }} />
  )
};

export const Warning: Story = {
  render: () => (
    <Button title="Show Warning Message" onClick={() => { message.warning("This is a warning message"); }} />
  )
};

export const Error: Story = {
  render: () => (
    <Button title="Show Error Message" onClick={() => { message.error("This is an error message"); }} />
  )
};

export const CustomDuration: Story = {
  render: () => (
    <Button title="Show Message (5s)" onClick={() => { message.success("This message will stay for 5 seconds", 5); }} />
  )
};

export const WithCallback: Story = {
  render: () => (
    <Button
      title="Show Message with Callback"
      onClick={() => {
        message.success("This message has a callback", 3, () => {
          console.log("Message closed");
        });
      }
      }
    />
  )
};

export const MultipleMessages: Story = {
  render: () => (
    <Button
      title="Show Multiple Messages"
      onClick={() => {
        message.success("Success message");
        message.info("Info message");
        message.warning("Warning message");
        message.error("Error message");
      }}
    />
  )
};
