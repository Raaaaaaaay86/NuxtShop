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
        '81-2': 'repeat(2, minmax(0, 20rem))',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
    scale: ['hover'],
  },
  plugins: [],
};
