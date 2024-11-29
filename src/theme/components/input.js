export const Input = {
  baseStyle: {
    field: {
      borderRadius: 'md',
    },
  },
  variants: {
    outline: {
      field: {
        borderColor: 'gray.200',
        _focus: {
          borderColor: 'blue.500',
          boxShadow: '0 0 0 1px blue.500',
        },
      },
    },
  },
  defaultProps: {
    variant: 'outline',
  },
}