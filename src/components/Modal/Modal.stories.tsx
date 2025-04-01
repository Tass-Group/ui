import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./index";
import Button from "../Button";
import type { ModalComponent } from "./types";
import { useState } from "react";

const meta = {
  title: "Feedback/Modal",
  component: Modal,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<ModalComponent>;

export default meta;
type Story = StoryObj<ModalComponent>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button title="Open Modal" onClick={() => { setOpen(true); }} />
        <Modal
          open={open}
          title="Basic Modal"
          content="This is a basic modal example."
          onCancel={() => { setOpen(false); }}
          onOk={() => { setOpen(false); }}
        />
      </>
    );
  }
};

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button title="Open Modal with Footer" onClick={() => { setOpen(true); }} />
        <Modal
          open={open}
          title="Modal with Custom Footer"
          content="This modal has a custom footer with multiple buttons."
          onCancel={() => { setOpen(false); }}
          footer={
            <>
              <Button title="Cancel" onClick={() => { setOpen(false); }} />
              <Button title="Save" onClick={() => { setOpen(false); }} />
              <Button title="Delete" onClick={() => { setOpen(false); }} />
            </>
          }
        />
      </>
    );
  }
};

export const Centered: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button title="Open Centered Modal" onClick={() => { setOpen(true); }} />
        <Modal
          open={open}
          title="Centered Modal"
          content="This modal is centered on the screen."
          centered
          onCancel={() => { setOpen(false); }}
          onOk={() => { setOpen(false); }}
        />
      </>
    );
  }
};

export const CustomWidth: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button title="Open Wide Modal" onClick={() => { setOpen(true); }} />
        <Modal
          open={open}
          title="Custom Width Modal"
          content="This modal has a custom width of 800px."
          width={800}
          onCancel={() => { setOpen(false); }}
          onOk={() => { setOpen(false); }}
        />
      </>
    );
  }
};

export const NoMask: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button title="Open Modal without Mask" onClick={() => { setOpen(true); }} />
        <Modal
          open={open}
          title="Modal Without Mask"
          content="This modal doesn't have a background mask."
          mask={false}
          onCancel={() => { setOpen(false); }}
          onOk={() => { setOpen(false); }}
        />
      </>
    );
  }
};

export const NoCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button title="Open Modal without Close Button" onClick={() => { setOpen(true); }} />
        <Modal
          open={open}
          title="Modal Without Close Button"
          content="This modal doesn't have a close button."
          closable={false}
          onCancel={() => { setOpen(false); }}
          onOk={() => { setOpen(false); }}
        />
      </>
    );
  }
};
