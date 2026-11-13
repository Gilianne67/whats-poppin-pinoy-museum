/**
 * Verified visual assets for the museum.
 * Every still was taken from Wikimedia Commons, checked against that file’s
 * license metadata, and reviewed before it was stored in /public/images.
 * Captions describe what the file page and the picture support.
 * Remote URLs are fallbacks only — the page prefers the local file.
 */

const CC_BY_SA_4 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const CC_BY_SA_3 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const CC_BY_4 = 'https://creativecommons.org/licenses/by/4.0/';
const CC_BY_3 = 'https://creativecommons.org/licenses/by/3.0/';
const CC_BY_2 = 'https://creativecommons.org/licenses/by/2.0/';
const CC_BY_25 = 'https://creativecommons.org/licenses/by/2.5/';
const CC0 = 'https://creativecommons.org/publicdomain/zero/1.0/';

function commonsFile(fileName) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${fileName}?width=1200`;
}

function commonsPage(fileName) {
  return `https://commons.wikimedia.org/wiki/File:${fileName}`;
}

/** @type {Record<string, {
 *   id: string,
 *   src: string,
 *   remoteSrc: string,
 *   alt: string,
 *   cardLabel: string,
 *   caption: string,
 *   attribution: string,
 *   license: string,
 *   licenseUrl?: string,
 *   sourceUrl: string,
 *   sourceLabel: string
 * }>} */
export const mediaLibrary = {
  'nokia-3310': {
    id: 'nokia-3310',
    src: '/images/nokia-3310.jpg',
    remoteSrc: commonsFile('Nokia_3310_mobile_phone.jpg'),
    alt: 'A dark blue Nokia 3310 mobile phone with a small screen and physical keypad, lying on a light wooden table.',
    cardLabel: 'Nokia 3310 feature phone',
    caption:
      'A Nokia 3310 feature phone. Handsets like this were part of the prepaid, SMS-centered mobile culture of the early 2000s. This photograph does not show a text-message thread.',
    attribution: 'Santeri Viinamäki',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('Nokia_3310_mobile_phone.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'nokia-1100': {
    id: 'nokia-1100',
    src: '/images/nokia-1100.jpg',
    remoteSrc: commonsFile('Nokia_1100.JPG'),
    alt: 'Front view of a blue and silver Nokia 1100 mobile phone with a monochrome screen and numeric keypad.',
    cardLabel: 'Nokia 1100 feature phone',
    caption:
      'A Nokia 1100 feature phone, the kind of prepaid handset widely used for calls and SMS.',
    attribution: 'Georgy90',
    license: 'CC BY-SA 3.0',
    licenseUrl: CC_BY_SA_3,
    sourceUrl: commonsPage('Nokia_1100.JPG'),
    sourceLabel: 'Wikimedia Commons',
  },
  'crt-monitor': {
    id: 'crt-monitor',
    src: '/images/crt-monitor.jpg',
    remoteSrc: commonsFile('HP_Pavilion_v72_17_inch_CRT_Monitor_front_view_IMG_9419.JPG'),
    alt: 'Front view of a gray HP Pavilion v72 CRT computer monitor on a red carpet.',
    cardLabel: 'CRT computer monitor',
    caption:
      'An HP Pavilion v72 17-inch CRT computer monitor. Cathode-ray-tube screens were still common on desktop computers in the early 2000s, including in shared internet shops. This unit is not photographed in the Philippines.',
    attribution: 'Scott A. Miller',
    license: 'CC BY 3.0',
    licenseUrl: CC_BY_3,
    sourceUrl: commonsPage('HP_Pavilion_v72_17_inch_CRT_Monitor_front_view_IMG_9419.JPG'),
    sourceLabel: 'Wikimedia Commons',
  },
  'ipod-classic': {
    id: 'ipod-classic',
    src: '/images/ipod-classic.jpg',
    remoteSrc: commonsFile('Ipod-classic-6th-gen.jpg'),
    alt: 'A gray Apple iPod Classic with a dark screen and a circular click wheel, on a white background.',
    cardLabel: 'iPod Classic music player',
    caption:
      'An Apple iPod Classic (6th generation), a portable digital music player of the MP3 era. The Commons file identifies the capacity as 120 GB.',
    attribution: 'Evan Amos',
    license: 'Public domain',
    sourceUrl: commonsPage('Ipod-classic-6th-gen.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'mp3-player': {
    id: 'mp3-player',
    src: '/images/mp3-player.jpg',
    remoteSrc: commonsFile('Mp3_Player_Blue.jpg'),
    alt: 'Close-up of a blue portable music player with a dark screen and a round control pad labeled Menu and Vol.',
    cardLabel: 'Portable MP3 player',
    caption:
      'A blue portable MP3 player. The Commons file does not name a brand, so this page does not assign one.',
    attribution: 'Strange Anomaly',
    license: 'CC BY 4.0',
    licenseUrl: CC_BY_4,
    sourceUrl: commonsPage('Mp3_Player_Blue.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'friendster-logo': {
    id: 'friendster-logo',
    src: '/images/friendster-logo.png',
    remoteSrc: commonsFile('Friendster_logo_new.svg'),
    alt: 'Friendster logo: a blue smiley-face icon beside the word friendster.',
    cardLabel: 'Friendster wordmark',
    caption:
      'The Friendster wordmark from the Commons file “Friendster logo new.” It identifies the service. It is not a screenshot of a mid-2000s member profile.',
    attribution: 'Marked public domain on Wikimedia Commons. File credit: friendster.com',
    license: 'Public domain',
    sourceUrl: commonsPage('Friendster_logo_new.svg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'piso-net': {
    id: 'piso-net',
    src: '/images/piso-net.jpg',
    remoteSrc: commonsFile('Parakawat_kan_piso_net.jpg'),
    alt: 'A person in a basketball jersey and red cap seated at a computer kiosk with a keyboard and monitor.',
    cardLabel: 'Piso-net computer station',
    caption:
      'A computer station the photographer describes, in Bikol, as a piso-net setup — the Philippine pay-per-use computer shop that grew out of internet-café culture. The Commons page does not give a year. It is shown with the 2030 access projection as an example of shared computer use, not as a forecast and not as a confirmed 2000–2010 interior.',
    attribution: 'Derk29',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('Parakawat_kan_piso_net.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'social-apps': {
    id: 'social-apps',
    src: '/images/social-apps.jpg',
    remoteSrc: commonsFile('Social_media_apps.jpg'),
    alt: 'Close-up of an iPhone App Library in Swedish, with folders containing YouTube, TikTok, Instagram, Netflix, Spotify, Facebook, and other apps.',
    cardLabel: 'Phone with social and streaming apps',
    caption:
      'A smartphone App Library showing social, short-video, and streaming apps, including YouTube, TikTok, Instagram, Netflix, Spotify, and Facebook. The interface language is Swedish. This is not a Philippine home screen.',
    attribution: 'Theresepersonne',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('Social_media_apps.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'social-apps-fandom': {
    id: 'social-apps-fandom',
    src: '/images/social-apps.jpg',
    remoteSrc: commonsFile('Social_media_apps.jpg'),
    alt: 'Close-up of an iPhone App Library in Swedish, with folders containing YouTube, TikTok, Instagram, Netflix, Spotify, Facebook, and other apps.',
    cardLabel: 'Apps used by cross-border fandoms',
    caption:
      'The same kind of smartphone app library, shown here because fan communities translate clips, stream releases, and organize across these platforms. The interface is in Swedish and is not a screenshot from a Philippine artist’s account.',
    attribution: 'Theresepersonne',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('Social_media_apps.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'social-apps-language': {
    id: 'social-apps-language',
    src: '/images/social-apps.jpg',
    remoteSrc: commonsFile('Social_media_apps.jpg'),
    alt: 'Close-up of an iPhone App Library in Swedish, with folders containing YouTube, TikTok, Instagram, Netflix, Spotify, Facebook, and other apps.',
    cardLabel: 'A platform interface in another language',
    caption:
      'A reference image for the language projection: this App Library is in Swedish, on a phone that also carries global video and music apps. It is not a prediction of a 2030 Philippine interface, and it is not a local home screen.',
    attribution: 'Theresepersonne',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('Social_media_apps.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'smartphone-use': {
    id: 'smartphone-use',
    src: '/images/smartphone-use.jpg',
    remoteSrc: commonsFile('Smartphone_Use.jpg'),
    alt: 'A hand holding a red Samsung smartphone. The screen shows a grid of learning-topic icons, including one labeled CS: Artificial Intelligence.',
    cardLabel: 'A smartphone in the hand',
    caption:
      'A Samsung smartphone in use. The screen is an educational topic menu, including a tile labeled “CS: Artificial Intelligence,” not a social-media feed and not a generative-AI product.',
    attribution: 'Océanos y dados',
    license: 'CC0',
    licenseUrl: CC0,
    sourceUrl: commonsPage('Smartphone_Use.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'ring-light': {
    id: 'ring-light',
    src: '/images/ring-light.jpg',
    remoteSrc: commonsFile('Ring_light_in_Torp_shopping_mall,_Uddevalla.jpg'),
    alt: 'A lit ring light on a stand with a smartphone mounted in the center, in front of boxes labeled as a vlogging stand.',
    cardLabel: 'Ring light and phone for vlogging',
    caption:
      'A ring light with a smartphone mounted on a vlogging stand, on display in an electronics shop at Torp shopping mall in Uddevalla, Sweden. It shows the kind of tool digital creators use. It is not a photograph of a specific Philippine creator or P-pop shoot.',
    attribution: 'W.carter',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('Ring_light_in_Torp_shopping_mall,_Uddevalla.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'neural-network': {
    id: 'neural-network',
    src: '/images/neural-network.png',
    remoteSrc: commonsFile('Simplified_neural_network_model_example.png'),
    alt: 'A diagram with outlined shapes on the left and arrows pointing toward colored shapes on the right.',
    cardLabel: 'Diagram of a neural network',
    caption:
      'A simplified diagram of a neural-network model for object detection. It is a reference for the 2030 projection about AI-assisted media, not a screenshot of a product and not a claim about what Philippine media will look like.',
    attribution:
      'Mikael Häggström, M.D. The Commons file cites Ferrie and Kaiser, Neural Networks for Babies (2019), as a reference for the diagram.',
    license: 'CC0',
    licenseUrl: CC0,
    sourceUrl: commonsPage('Simplified_neural_network_model_example.png'),
    sourceLabel: 'Wikimedia Commons',
  },
  'abscbn-compound': {
    id: 'abscbn-compound',
    src: '/images/abscbn-compound.jpg',
    remoteSrc: commonsFile('ABS-CBN_(Quezon_City;_03-06-2020).jpg'),
    alt: 'The ABS-CBN compound in Quezon City, with a long studio building, a satellite dish, and a red-and-white transmitter tower.',
    cardLabel: 'ABS-CBN compound, Quezon City',
    caption:
      'The ABS-CBN compound in Quezon City, photographed in 2020, including the studio building and transmitter tower. This is the network facility. It is not a still from ASAP or any other program.',
    attribution: 'patrickroque01',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('ABS-CBN_(Quezon_City;_03-06-2020).jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'gma-center': {
    id: 'gma-center',
    src: '/images/gma-center.jpg',
    remoteSrc: commonsFile('GMA_Network_Center_in_Quezon_City.jpg'),
    alt: 'Night photograph of the GMA Network Center, with a blue illuminated GMA sign and a broadcast tower on the roof.',
    cardLabel: 'GMA Network Center, Quezon City',
    caption:
      'The GMA Network Center in Quezon City at night. GMA broadcast the talent search StarStruck, which the network dates to a 2003 launch. This photograph shows the building, not a scene from StarStruck or any other program.',
    attribution: 'Aerous',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('GMA_Network_Center_in_Quezon_City.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'pbb-house': {
    id: 'pbb-house',
    src: '/images/pbb-house.jpg',
    remoteSrc: commonsFile('Pinoy_Big_Brother_house_after_Renovations.jpg'),
    alt: 'A yellow and blue house behind a white fence, with Pinoy Big Brother and ABS-CBN signs on the gate and the upper wall.',
    cardLabel: 'Pinoy Big Brother house',
    caption:
      'The Pinoy Big Brother house, with the program name and ABS-CBN mark visible on the building and gate. The Commons file describes this exterior as the house after renovations in 2011. It is not a scene from an episode, and it is not the 2005 construction view.',
    attribution: 'Jruoy15',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('Pinoy_Big_Brother_house_after_Renovations.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'opm-concert': {
    id: 'opm-concert',
    src: '/images/opm-concert.jpg',
    remoteSrc: commonsFile('A_night_of_rock_and_opm.jpg'),
    alt: 'A nighttime outdoor concert seen from the crowd, with a lit stage, a video screen, and performers under a lighting truss.',
    cardLabel: 'OPM concert in Pasacao',
    caption:
      'An outdoor night concert in Pasacao. The photographer titles the file “A night of rock and OPM” and identifies the act as 6cyclemind. People on stage are not individually recognizable in this wide shot, and the file does not state a year.',
    attribution: 'Lawrence756',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('A_night_of_rock_and_opm.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'dinagyang-dance': {
    id: 'dinagyang-dance',
    src: '/images/dinagyang-dance.jpg',
    remoteSrc: commonsFile('Dinagyang_Festival_Street_Dance.jpg'),
    alt: 'Dancers in green, blue, and gold festival costumes with feathered headdresses, performing with arms raised on a wet street.',
    cardLabel: 'Dinagyang festival street dance',
    caption:
      'Street dance at the Dinagyang Festival in Iloilo City. This is a Philippine festival performance. It is not a still from a televised dance craze or from a specific social-video challenge.',
    attribution: 'FroyR',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('Dinagyang_Festival_Street_Dance.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'karaoke-videok': {
    id: 'karaoke-videok',
    src: '/images/karaoke-videok.jpg',
    remoteSrc: commonsFile('Video_Karaoke_(Video_K)_from_the_Philippines.jpg'),
    alt: 'A bright green video-karaoke machine in a wooden room, with large speakers, a coin slot, and a CRT television on top.',
    cardLabel: 'Philippine video-karaoke unit',
    caption:
      'A Video K karaoke unit from the Philippines, with a CRT television on top. Karaoke machines carried OPM and other songs through homes, barangay gatherings, and diaspora communities.',
    attribution: 'Obsidian Soul',
    license: 'CC0',
    licenseUrl: CC0,
    sourceUrl: commonsPage('Video_Karaoke_(Video_K)_from_the_Philippines.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'vanness-wu-2005': {
    id: 'vanness-wu-2005',
    src: '/images/vanness-wu-2005.jpg',
    remoteSrc: commonsFile('MTV_Asia_Aid_2005_Vanness_Wu.jpg'),
    alt: 'Vanness Wu standing in a white jacket and black cap in front of a backdrop printed with MTV Asia Aid.',
    cardLabel: 'Vanness Wu at MTV Asia Aid 2005',
    caption:
      'Vanness Wu at MTV Asia Aid 2005. Wu was a member of the Taiwanese group F4, associated with the series Meteor Garden (2001), which drew a large Philippine audience. This is an event photograph, not a still from the series.',
    attribution: 'Sry85',
    license: 'CC BY 2.5',
    licenseUrl: CC_BY_25,
    sourceUrl: commonsPage('MTV_Asia_Aid_2005_Vanness_Wu.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'blackpink-london': {
    id: 'blackpink-london',
    src: '/images/blackpink-london-2022.jpg',
    remoteSrc: commonsFile('BLACKPINK_Pink_Venom_Tour_2022_(2).jpg'),
    alt: 'A crowded arena concert seen from the stands, with yellow spotlights, stage screens, and audience members holding pink light sticks.',
    cardLabel: 'BLACKPINK concert, London 2022',
    caption:
      'BLACKPINK on the Pink Venom tour at the O2 Arena in London, 1 December 2022, photographed from the crowd. A Korean pop concert on an international stage. It is not a Philippine concert and not a P-pop show.',
    attribution: 'David Skinner',
    license: 'CC BY 2.0',
    licenseUrl: CC_BY_2,
    sourceUrl: commonsPage('BLACKPINK_Pink_Venom_Tour_2022_(2).jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'blackpink-community': {
    id: 'blackpink-community',
    src: '/images/blackpink-london-2022.jpg',
    remoteSrc: commonsFile('BLACKPINK_Pink_Venom_Tour_2022_(2).jpg'),
    alt: 'A crowded arena concert seen from the stands, with yellow spotlights, stage screens, and audience members holding pink light sticks and phones.',
    cardLabel: 'A concert crowd linked by phones',
    caption:
      'Audience members at BLACKPINK’s 1 December 2022 London concert hold light sticks and phones. A present-day reference for digital fan communities, not a picture of a 2030 platform and not a Philippine gathering.',
    attribution: 'David Skinner',
    license: 'CC BY 2.0',
    licenseUrl: CC_BY_2,
    sourceUrl: commonsPage('BLACKPINK_Pink_Venom_Tour_2022_(2).jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'cosplay-convention': {
    id: 'cosplay-convention',
    src: '/images/cosplay-convention.jpg',
    remoteSrc: commonsFile('Universal_Cosplay_Convention_2016.jpg'),
    alt: 'A large convention hall seen from a balcony, with people in costumes, merchandise tables, and a stage.',
    cardLabel: 'Cosplay convention, Malaysia 2016',
    caption:
      'Universal Cosplay Convention 2016 at The Place, OneCity, Subang Jaya, Malaysia. A Southeast Asian fan gathering associated with anime and game costumes. Specific characters are not identified in this wide view, and this is not a frame from an anime.',
    attribution: 'Chongkian',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('Universal_Cosplay_Convention_2016.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'cosplay-asean': {
    id: 'cosplay-asean',
    src: '/images/cosplay-convention.jpg',
    remoteSrc: commonsFile('Universal_Cosplay_Convention_2016.jpg'),
    alt: 'A large convention hall seen from a balcony, with people in costumes, merchandise tables, and a stage.',
    cardLabel: 'A regional fan convention',
    caption:
      'The 2016 Universal Cosplay Convention in Subang Jaya, Malaysia, used here as a present-day reference for regional fan gatherings. It illustrates the projection of denser ASEAN pop corridors. It is not a photograph of a 2030 event.',
    attribution: 'Chongkian',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('Universal_Cosplay_Convention_2016.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  'vr-smartphone': {
    id: 'vr-smartphone',
    src: '/images/vr-smartphone.jpg',
    remoteSrc: commonsFile('VR_headset_with_smartphone_and_stereoscopy_image.jpg'),
    alt: 'A black virtual-reality headset on a wooden floor, with a smartphone above it showing a doubled stereoscopic view of a park bench.',
    cardLabel: 'Phone-based virtual reality',
    caption:
      'A smartphone and a virtual-reality viewer displaying a stereoscopic image. A reference for projected virtual performances. It is not a recording of a 2030 concert.',
    attribution: 'Bert Niehaus',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: commonsPage('VR_headset_with_smartphone_and_stereoscopy_image.jpg'),
    sourceLabel: 'Wikimedia Commons',
  },
  hololens: {
    id: 'hololens',
    src: '/images/hololens.jpg',
    remoteSrc: commonsFile('HoloLens_2.jpeg'),
    alt: 'Front view of a Microsoft HoloLens visor with a dark curved lens and small red controls at the sides.',
    cardLabel: 'Microsoft HoloLens headset',
    caption:
      'A Microsoft HoloLens augmented-reality headset (Commons file title: HoloLens 2). A reference for projected AR layers at performances. It is not evidence that this device is already standard at Philippine concerts.',
    attribution: 'Microsoft Sweden',
    license: 'CC BY 2.0',
    licenseUrl: CC_BY_2,
    sourceUrl: commonsPage('HoloLens_2.jpeg'),
    sourceLabel: 'Wikimedia Commons',
  },
};

export const videos = {
  'asap-2023': {
    id: 'asap-2023',
    youtubeId: 'cPgNsJqOZv0',
    title: "Horizon’s first performance on ASAP Natin ‘To | ASAP Natin 'To",
    channel: 'ABS-CBN Entertainment',
    channelUrl: 'https://www.youtube.com/@abscbnentertainment',
    watchUrl: 'https://www.youtube.com/watch?v=cPgNsJqOZv0',
    note: 'Official ABS-CBN Entertainment upload of a performance on ASAP Natin ‘To, published in 2023. ASAP is the network’s long-running musical variety program. This clip is not a 2000s episode.',
  },
  'pbb-house-tour': {
    id: 'pbb-house-tour',
    youtubeId: 'y0Fln4jcRjE',
    title: 'Pinoy Big Brother Collab: AC, binigyan si Bianca ng house tour (Episode 13)',
    channel: 'GMA Network',
    channelUrl: 'https://www.youtube.com/@gmanetwork',
    watchUrl: 'https://www.youtube.com/watch?v=y0Fln4jcRjE',
    note: 'Official GMA Network upload. The title identifies a later Pinoy Big Brother collab-edition house tour, not footage from the 2005 premiere.',
  },
};

export function getMediaList(ids = []) {
  return ids.map((id) => mediaLibrary[id]).filter(Boolean);
}

export function getVideo(id) {
  return id ? videos[id] : undefined;
}

/** One credit line per Commons file, plus the official videos. */
export function listMediaCredits() {
  const seen = new Set();
  const images = [];
  Object.values(mediaLibrary).forEach((item) => {
    if (seen.has(item.sourceUrl)) return;
    seen.add(item.sourceUrl);
    images.push(item);
  });
  return {
    images,
    videos: Object.values(videos),
  };
}
