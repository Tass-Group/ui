import styled, { css } from "styled-components";

const typeStyles = {
  default: css`
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #d9d9d9;

    &:not(:disabled) {
      &:hover {
        background-color: #f9f9f9;
      }

      &:active {
        background-color: #f0f0f0;
      }
    }
  `,
  primary: css`
    background-color: #9090c0;
    color: #ffffff;

    &:not(:disabled) {
      &:hover {
        background-color: #8080b0;
      }

      &:active {
        background-color: #7070a0;
      }
    }
  `,
  danger: css`
    background-color: #ff4d4f;
    color: #ffffff;

    &:not(:disabled) {
      &:hover {
        background-color: #ff7875;
      }

      &:active {
        background-color: #d9363e;
      }
    }
  `,
  success: css`
    background-color: #52c41a;
    color: #ffffff;

    &:not(:disabled) {
      &:hover {
        background-color: #73d13d;
      }

      &:active {
        background-color: #389e0d;
      }
    }
  `,
  warning: css`
    background-color: #faad14;
    color: #ffffff;

    &:not(:disabled) {
      &:hover {
        background-color: #ffc53d;
      }

      &:active {
        background-color: #d48806;
      }
    }
  `
};

const sizeStyles = {
  small: css`
    padding: 6px 12px;
    font-size: 14px;
  `,
  medium: css`
    padding: 10px 20px;
    font-size: 16px;
  `,
  large: css`
    padding: 14px 28px;
    font-size: 18px;
  `
};

const shapeStyles = {
  square: css`
    border-radius: 4px;
  `,
  round: css`
    border-radius: 20px;
  `,
  circle: css`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    font-size: 10px;
    align-items: center;
    justify-content: center;
  `
};

type TypeStyles = typeof typeStyles;
type TypeStylesKey = keyof TypeStyles;

type SizeStyles = typeof sizeStyles;
type SizeStylesKey = keyof SizeStyles;

type ShapeStyles = typeof shapeStyles;
type ShapeStylesKey = keyof ShapeStyles;

export const StyledButton = styled.button<{ type: TypeStylesKey, disabled?: boolean, color?: string, size: SizeStylesKey, shape: ShapeStylesKey }>`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ type }) => typeStyles[type]}

  ${({ color }) =>
      css`
        background-color: ${color};

        &:not(:disabled) {
          &:hover {
            background-color: ${color};
            opacity: 0.9;
          }
          &:active {
            background-color: ${color};
            opacity: 0.8;
          }
        }
      `
  }
  
  ${({ size }) => sizeStyles[size]}

  ${({ shape }) => shapeStyles[shape]}
`;
