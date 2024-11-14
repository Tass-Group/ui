import Col from "./Col";
import Row from "./Row";

export default {
  title: "Layout/Grid",
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  argTypes: {
    gutter: {
      description: "Grid spacing",
      control: { disable: true },
      defaultValue: { summary: 0 }
    },
    span: {
      description: "Number of grid placeholders",
      control: { disable: true },
      defaultValue: { summary: 24 }
    },
    offset: {
      description: "The number of spacers on the left side of the grid",
      control: { disable: true },
      defaultValue: { summary: 0 }
    }
  }
};

export const DefaultGrid = {
  render: () => (
    <div style={{ padding: "20px" }}>
      <Row>
        <Col span={24} style={{ backgroundColor: "#f0f0f0", color: "#000" }}>col</Col>
      </Row>
      <Row>
        <Col span={12} style={{ backgroundColor: "#d0d0d0", color: "#000" }}>col-12</Col>
        <Col span={12} style={{ backgroundColor: "#e0e0e0", color: "#000" }}>col-12</Col>
      </Row>
      <Row>
        <Col span={8} style={{ backgroundColor: "#b0b0b0", color: "#fff" }}>col-8</Col>
        <Col span={8} style={{ backgroundColor: "#c0c0c0", color: "#fff" }}>col-8</Col>
        <Col span={8} style={{ backgroundColor: "#d0d0d0", color: "#fff" }}>col-8</Col>
      </Row>
      <Row>
        <Col span={6} style={{ backgroundColor: "#90c0e0", color: "#fff" }}>col-6</Col>
        <Col span={6} style={{ backgroundColor: "#80b0d0", color: "#fff" }}>col-6</Col>
        <Col span={6} style={{ backgroundColor: "#70a0c0", color: "#fff" }}>col-6</Col>
        <Col span={6} style={{ backgroundColor: "#6090b0", color: "#fff" }}>col-6</Col>
      </Row>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Row>
  <Col span={24} style={{ backgroundColor: "#f0f0f0", color: "#000" }}>col</Col>
</Row>
<Row>
  <Col span={12} style={{ backgroundColor: "#d0d0d0", color: "#000" }}>col-12</Col>
  <Col span={12} style={{ backgroundColor: "#e0e0e0", color: "#000" }}>col-12</Col>
</Row>
<Row>
  <Col span={8} style={{ backgroundColor: "#b0b0b0", color: "#fff" }}>col-8</Col>
  <Col span={8} style={{ backgroundColor: "#c0c0c0", color: "#fff" }}>col-8</Col>
  <Col span={8} style={{ backgroundColor: "#d0d0d0", color: "#fff" }}>col-8</Col>
</Row>
<Row>
  <Col span={6} style={{ backgroundColor: "#90c0e0", color: "#fff" }}>col-6</Col>
  <Col span={6} style={{ backgroundColor: "#80b0d0", color: "#fff" }}>col-6</Col>
  <Col span={6} style={{ backgroundColor: "#70a0c0", color: "#fff" }}>col-6</Col>
  <Col span={6} style={{ backgroundColor: "#6090b0", color: "#fff" }}>col-6</Col>
</Row>
        `
      }
    }
  }
};

export const GridWithGutterNoWrap = {
  render: () => (
    <div style={{ padding: "40px" }}>
      <Row gutter={16}>
        <Col span={6} style={{ backgroundColor: "#90c0e0", color: "#fff", padding: "8px", textAlign: "center" }}>
          col-6
        </Col>
        <Col span={6} style={{ backgroundColor: "#80b0d0", color: "#fff", padding: "8px", textAlign: "center" }}>
          col-6
        </Col>
        <Col span={6} style={{ backgroundColor: "#70a0c0", color: "#fff", padding: "8px", textAlign: "center" }}>
          col-6
        </Col>
        <Col span={6} style={{ backgroundColor: "#6090b0", color: "#fff", padding: "8px", textAlign: "center" }}>
          col-6
        </Col>
      </Row>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Row gutter={16}>
  <Col span={6} style={{ backgroundColor: "#90c0e0", color: "#fff", padding: "8px", textAlign: "center" }}>
    col-6
  </Col>
  <Col span={6} style={{ backgroundColor: "#80b0d0", color: "#fff", padding: "8px", textAlign: "center" }}>
    col-6
  </Col>
  <Col span={6} style={{ backgroundColor: "#70a0c0", color: "#fff", padding: "8px", textAlign: "center" }}>
    col-6
  </Col>
  <Col span={6} style={{ backgroundColor: "#6090b0", color: "#fff", padding: "8px", textAlign: "center" }}>
    col-6
  </Col>
</Row>
        `
      }
    }
  }
};

export const GridWithOffset = {
  render: () => (
    <div style={{ padding: "20px" }}>
      <Row>
        <Col span={8} offset={8} style={{ backgroundColor: "#f0f0f0", color: "#000" }}>col-8</Col>
      </Row>
      <Row>
        <Col span={6} offset={6} style={{ backgroundColor: "#d0d0d0", color: "#000" }}>col-6 col-offset-6</Col>
        <Col span={6} offset={6} style={{ backgroundColor: "#b0b0b0", color: "#000" }}>col-6 col-offset-6</Col>
      </Row>
      <Row>
        <Col span={12} offset={4} style={{ backgroundColor: "#909090", color: "#fff" }}>col-12 col-offset-6</Col>
      </Row>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Row>
  <Col span={8} offset={8} style={{ backgroundColor: "#f0f0f0", color: "#000" }}>col-8</Col>
</Row>
<Row>
  <Col span={6} offset={6} style={{ backgroundColor: "#d0d0d0", color: "#000" }}>col-6 col-offset-6</Col>
  <Col span={6} offset={6} style={{ backgroundColor: "#b0b0b0", color: "#000" }}>col-6 col-offset-6</Col>
</Row>
<Row>
  <Col span={12} offset={4} style={{ backgroundColor: "#909090", color: "#fff" }}>col-12 col-offset-6</Col>
</Row>
        `
      }
    }
  }
};
