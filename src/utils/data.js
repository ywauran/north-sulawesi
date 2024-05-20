export const destinations = [
  {
    id: 1,
    name: "Desa Wisata Budo",
    type: "Wisata Alamat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pictureUrl: "../assets/img/default.png",
    locationsId: 5,
  },
  {
    id: 2,
    name: "Desa Wisata Budo",
    type: "Wisata Alamat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pictureUrl: "../assets/img/default.png",
    locationsId: 5,
  },
];

export const locations = [
  {
    id: 1,
    name: "Kota Manado",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    name: "Kota Tomohon",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Kota Bitung",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Kabupaten Minahasa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    name: "Kabupaten Minahasa Utara",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    name: "Kabupaten Minahasa Tenggara",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    name: "Kabupaten Minahasa Selatan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    name: "Kabupaten Bolaang Mongondow",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 9,
    name: "Kabupaten Bolaang Mongondow Selatan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10,
    name: "Kabupaten Bolaang Mongondow Timur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 11,
    name: "Kabupaten Bolaang Mongondow Utara",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 12,
    name: "Kota Kotamobagu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 13,
    name: "Kepulauan Talaud",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 14,
    name: "Kepulauan Sangihe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 15,
    name: "Kepulauan Sitaro",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const getDestinations = () => {
  return destinations;
};

export const getLocations = () => {
  return locations;
};

export const getDestinationById = (id) => {
  return destinations.find((destination) => destination.id === id);
};

export const getLocationById = (id) => {
  return locations.find((location) => location.id === id);
};

export const getDestinationsByLocationId = (id) => {
  return destinations.filter((destination) => destination.locationsId === id);
};
