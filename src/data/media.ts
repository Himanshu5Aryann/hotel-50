// Official/local hotel photography supplied for this site.
// Keeping image paths local avoids broken third-party photo URLs and makes
// the site reliable even when external image hosts are unavailable.

const photo = (name: string) => `/${name}`;

export const PUBLIC_PHOTOS = [
  photo("1him.jpg"),
  photo("444.jpg"),
  photo("HA1.jpg"),
  photo("hotel_binwa_01.jpg"),
  photo("hotel_binwa_02.jpg"),
  photo("hotel_binwa_03.jpg"),
  photo("hotel_binwa_04.jpg"),
  photo("hotel_binwa_05.jpg"),
  photo("hotel_binwa_06.jpg"),
  photo("hotel_binwa_07.jpg"),
  photo("hotel_binwa_08.jpg"),
  photo("hotel_binwa_09.jpg"),
  photo("hotel_binwa_10.jpg"),
  photo("hotel_binwa_11.jpg"),
  photo("hotel_binwa_12.jpg"),
  photo("hotel_binwa_13.jpg"),
  photo("hotel_binwa_14.jpg"),
  photo("hotel_binwa_15.jpg"),
  photo("hotel_binwa_16.jpg"),
  photo("hotel_binwa_high_quality.jpg"),
  photo("ph1.jpg"),
  photo("ph2.jpg"),
  photo("ph3.jpg"),
  photo("ph4.jpg"),
  photo("ph5.jpg"),
  photo("ph6.jpg"),
  photo("ph7.jpg"),
  photo("ph8.jpg"),
  photo("ph9.jpg"),
  photo("ph 10.jpg"),
  photo("ph11.jpg"),
  photo("v1.jpg"),
  photo("vps011.jpg"),
];

export const PHOTOS = {
  ph1: photo("ph1.jpg"),
  ph2: photo("ph2.jpg"),
  ph3: photo("ph3.jpg"),
  ph4: photo("ph4.jpg"),
  ph5: photo("ph5.jpg"),
  ph6: photo("ph6.jpg"),
  ph7: photo("ph7.jpg"),
  ph8: photo("ph8.jpg"),
  ph9: photo("ph9.jpg"),
  ph10: photo("ph 10.jpg"),
  ph11: photo("ph11.jpg"),
  him: photo("1him.jpg"),
  exterior: photo("444.jpg"),
  couple: photo("HA1.jpg"),
  venue: photo("v1.jpg"),
  mountainRoom: photo("vps011.jpg"),
};

export const HERO_VIDEO = {
  src: "/14504316 4096 2160 30fps.mp4",
  poster: PHOTOS.ph1,
};

export const STORY_VIDEO = {
  src: "https://videos.pexels.com/video-files/29766214/12791772_3840_2160_25fps.mp4",
  poster: PHOTOS.ph6,
  title: "A Celebration at Hotel Binwa View & Banquets",
};

export const RECEPTION_VIDEO = {
  src: "https://videos.pexels.com/video-files/27180423/12091498_3840_2160_50fps.mp4",
  poster: PHOTOS.ph7,
  title: "Moments From a Grand Reception",
};

// The PH images are mapped into the site's existing content slots so every
// previously remote/missing photo is replaced with supplied hotel photography.
export const WEDDINGS = {
  hero: PHOTOS.ph1,
  couplePortrait: PHOTOS.ph6,
  couple2: PHOTOS.ph8,
  couple3: PHOTOS.ph10,
  ringExchange: PHOTOS.ph9,
  embrace: PHOTOS.ph6,
  outdoor: PHOTOS.him,
  smiling: PHOTOS.couple,
  ritual: PHOTOS.ph1,
};

export const BANQUETS = {
  hero: PHOTOS.ph3,
  decor1: PHOTOS.ph2,
  stage: PHOTOS.ph1,
  prepared: PHOTOS.ph7,
  reception: PHOTOS.ph11,
  floralArch: PHOTOS.ph2,
  brideVenue: PHOTOS.venue,
  receptionFloral: PHOTOS.ph3,
  hallFlowers: PHOTOS.ph7,
  tablesHall: PHOTOS.venue,
};

export const DINING_TABLES = {
  elegant1: PHOTOS.ph4,
  placeSetting: PHOTOS.ph5,
  eventHall: PHOTOS.ph3,
  candlelit: PHOTOS.ph4,
  banquetTable: PHOTOS.ph5,
  fineSetting: PHOTOS.ph7,
};

export const CELEBRATIONS = {
  sangeet1: PHOTOS.ph1,
  sangeet2: PHOTOS.ph2,
  family1: PHOTOS.ph6,
  family2: PHOTOS.ph10,
  diwali: PHOTOS.ph3,
  traditional: PHOTOS.ph9,
  birthday1: PHOTOS.ph11,
  birthday2: PHOTOS.ph8,
  birthday3: PHOTOS.ph10,
  balloons: PHOTOS.ph2,
  engagement1: photo("pexels-sharan-rathi-740892-19201996.jpg"),
  engagement2: photo("pexels-sharan-rathi-740892-19201996.jpg"),
  engagement3: photo("pexels-sharan-rathi-740892-19201996.jpg"),
  corporate1: PHOTOS.ph3,
  corporate2: PHOTOS.ph7,
  corporateHall: PHOTOS.venue,
};

export const HOTEL = {
  exteriorMist: PHOTOS.him,
  exteriorNight: PHOTOS.exterior,
  exteriorHills: PHOTOS.venue,
  valleyHouse: PHOTOS.him,
  pool1: PHOTOS.mountainRoom,
  pool2: PHOTOS.mountainRoom,
  pool3: PHOTOS.mountainRoom,
};

export const ROOMS = {
  room1: photo("hotel_binwa_01.jpg"),
  room2: photo("hotel_binwa_02.jpg"),
  room3: photo("hotel_binwa_03.jpg"),
  room4: photo("hotel_binwa_04.jpg"),
  service: photo("hotel_binwa_05.jpg"),
  room5: photo("hotel_binwa_06.jpg"),
};

export const FOOD = {
  tandoori1: PHOTOS.ph4,
  tandoori2: PHOTOS.ph5,
  poolside: PHOTOS.ph3,
  plated1: PHOTOS.ph4,
  paneer: PHOTOS.ph5,
  plated2: PHOTOS.ph7,
};

export const HIMACHAL = {
  manaliRiver: PHOTOS.him,
  manaliTown: PHOTOS.him,
  valley: PHOTOS.him,
  fir: PHOTOS.mountainRoom,
  urbanValley: PHOTOS.venue,
  kashmirRange: PHOTOS.him,
  himalayaAerial: PHOTOS.him,
  monastery: PHOTOS.exterior,
};

const HOTEL_ROOMS = PUBLIC_PHOTOS.filter((src) => /hotel_binwa_\d+\.jpg$/.test(src));

export const GALLERY = {
  weddings: [PHOTOS.ph1, PHOTOS.ph6, PHOTOS.ph8, PHOTOS.ph9, PHOTOS.ph10, PHOTOS.couple, PHOTOS.him],
  banquets: [PHOTOS.ph1, PHOTOS.ph2, PHOTOS.ph3, PHOTOS.ph7, PHOTOS.ph11, PHOTOS.venue, PHOTOS.him],
  events: [PHOTOS.ph2, PHOTOS.ph3, PHOTOS.ph4, PHOTOS.ph5, PHOTOS.ph6, PHOTOS.ph7, PHOTOS.ph11, PHOTOS.venue],
  venue: [PHOTOS.him, PHOTOS.exterior, PHOTOS.venue, photo("hotel_binwa_high_quality.jpg"), PHOTOS.ph3, PHOTOS.ph7],
  rooms: [...HOTEL_ROOMS, PHOTOS.mountainRoom],
  dining: [PHOTOS.ph4, PHOTOS.ph5, PHOTOS.ph3, PHOTOS.ph7, ...HOTEL_ROOMS.slice(0, 4)],
  celebrations: [PHOTOS.ph1, PHOTOS.ph2, PHOTOS.ph6, PHOTOS.ph8, PHOTOS.ph9, PHOTOS.ph10, PHOTOS.ph11, PHOTOS.venue],
  himachal: [PHOTOS.him, PHOTOS.mountainRoom, PHOTOS.exterior, PHOTOS.venue],
  all: PUBLIC_PHOTOS,
};
