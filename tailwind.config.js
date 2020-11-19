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
      },
      width: {
        88: '22rem',
        120: '30rem',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [],
};
