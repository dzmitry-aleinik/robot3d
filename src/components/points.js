const continents = {
  Afrika: {
    countries: {
      Morocco: {
        x: 1,
        y: 2,
        z: 3,
        marker: {
          opacity: 0,
          size: 22,
        },
      },
      Egypt: {
        x: 23,
        y: 20,
        z: 7,
        marker: {
          opacity: 0.15,
          size: 10,
        },
      },
    },
    color: 'rgb(255, 255, 0)',
  },
  Asia: {
    countries: {
      Thailand: {
        x: 11,
        y: 22,
        z: 33,
        marker: {
          opacity: 0.1,
          size: 17,
        },
      },
      India: {
        x: 15,
        y: 7,
        z: 24,
        marker: {
          opacity: 0.9,
          size: 12,
        },
      },
    },
    color: 'rgb(255, 0, 0)',
  },
  Europe: {
    countries: {
      Belarus: {
        x: 10,
        y: 10,
        z: 30,
        marker: {
          opacity: 0.7,
          size: 16,
        },
      },
      France: {
        x: 3,
        y: 0,
        z: 17,
        marker: {
          opacity: 0.5,
          size: 20,
        },
      },
    },
    color: 'rgb(255,165,0)',
  },
};

export default continents;