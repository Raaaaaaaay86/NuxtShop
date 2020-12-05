module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        warning: '#ffc107',
      },
      inset: {
        '1/2': '50%',
      },
      height: {
        88: '22rem',
        120: '30rem',
        162: '40rem',
      },
      width: {
        88: '22rem',
        120: '30rem',
      },
      gridTemplateRows: {
        '60-1': 'repeat(1, minmax(0, 15rem))',
        '81-1': 'repeat(1, minmax(0, 20rem))',
        '60-2': 'repeat(2, minmax(0, 15rem))',
        '81-2': 'repeat(2, minmax(0, 20rem))',
        '60-3': 'repeat(3, minmax(0, 15rem))',
        '81-3': 'repeat(3, minmax(0, 20rem))',
        '60-5': 'repeat(5, minmax(0, 15rem))',
      },
      fontSize: {
        '8xl': ['6rem', {
          lineHeight: '1',
        }],
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
    scale: ['hover'],
  },
  plugins: [],
};
