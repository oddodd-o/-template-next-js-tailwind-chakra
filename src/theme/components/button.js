export const Button = {
  baseStyle: {
    minWidth: '40px',
    minHeight: '40px',
    borderRadius: 'md',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 2,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 3,
    },
  },
  variants: {
    solid: {
      bg: 'blue.500',
      color: 'white',
      _hover: {
        bg: 'blue.600',
      },
    },
    outline: {
      bg: 'blue.500',
      color: 'white',
      _hover: {
        bg: 'blue.600',
      },
    },
    ghost: {
      // bg: 'gray.200',
      color: 'gray.800',
      _hover: {
        bg: 'gray.300',
      },
    },
    icon: (props) => ({
      px: 0,
      py: 0,
      bg: "transparent",
      display: "flex",
      justifyContent:
        props.align === "left"
          ? "flex-start"
          : props.align === "right"
          ? "flex-end"
          : "center",
      _hover: {
        color: "primary",
      },
    }),
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
}