/**
 * Exhibit content for WHAT'S POPPIN', PINOY?
 * Theme: The Influence of the Past to the Current Patterns in Philippine Popular Culture
 *
 * Content notes:
 * - Past (2000–2010) and present entries summarize widely documented patterns.
 * - 2030 entries are labeled projections, not historical facts.
 * - Image slots use placeholders unless a verified asset is supplied.
 */

export const museumMeta = {
  title: "WHAT'S POPPIN', PINOY?",
  subtitle: 'A Digital Museum of Philippine Popular Culture',
  theme:
    'The Influence of the Past to the Current Patterns in Philippine Popular Culture',
  eras: [
    { id: 'past', label: '2000–2010', shortLabel: 'Past' },
    { id: 'present', label: 'Present', shortLabel: 'Present' },
    { id: 'future', label: '2030 Projections', shortLabel: '2030' },
  ],
};

export const galleries = [
  {
    id: 'technology',
    slug: 'technology',
    title: 'Technology Gallery',
    tagline: 'From texting queues to always-on screens',
    intro:
      'How Filipino communication tools — from SMS and internet cafés to social platforms and short-form video — reshaped how pop culture is made, shared, and remixed.',
    accent: 'tech',
  },
  {
    id: 'performance',
    slug: 'performance',
    title: 'Performance Gallery',
    tagline: 'Stages, screens, and livestreams',
    intro:
      'How Filipino entertainment moved from noontime TV and OPM radio hits to reality franchises, P-pop, and creator-led performance online.',
    accent: 'perf',
  },
  {
    id: 'globalization',
    slug: 'globalization',
    title: 'Globalization Gallery',
    tagline: 'Local taste, global circuits',
    intro:
      'How overseas Filipino communities, imported formats, and platform economies linked Philippine pop culture to regional and global flows — without erasing local flavor.',
    accent: 'global',
  },
];

/** @typedef {'past' | 'present' | 'future'} EraId */

/**
 * @type {Array<{
 *   id: string,
 *   galleryId: string,
 *   era: EraId,
 *   title: string,
 *   summary: string,
 *   description: string,
 *   imageLabel: string,
 *   tags: string[],
 *   speculative?: boolean
 * }>}
 */
export const exhibits = [
  // ——— Technology ———
  {
    id: 'tech-past-sms',
    galleryId: 'technology',
    era: 'past',
    title: 'SMS Nation & Feature Phones',
    summary:
      'In the 2000s, the Philippines became known for exceptionally high SMS usage, with prepaid feature phones and texting shaping daily social life.',
    description:
      'During the 2000s, prepaid mobile phones and SMS messaging were central to Filipino social connection. Texting supported everything from family coordination to fan voting and promotional contests on television. Internet cafés also served as shared access points for Friendster profiles, early blogs, and chat rooms when home broadband was less common. These habits trained a generation to communicate in short, frequent bursts — a pattern that later migrated to chat apps and social feeds.',
    imageLabel:
      'Image placeholder — early-2000s prepaid feature phone and SMS conversation UI',
    tags: ['SMS', 'prepaid phones', 'internet cafés'],
  },
  {
    id: 'tech-past-social',
    galleryId: 'technology',
    era: 'past',
    title: 'Friendster, Multiply & Early Social Web',
    summary:
      'Friendster and Multiply were widely used Philippine social platforms before Facebook became dominant later in the decade.',
    description:
      'Friendster was a major social networking hub for many Filipinos in the mid-2000s, known for profile customization, testimonials, and music/video embeds that doubled as identity display. Multiply and similar photo- and blog-oriented sites also circulated personal and fan content. These early platforms established familiar patterns — curated profiles, public comments, and viral sharing — that later social networks scaled with faster mobile internet.',
    imageLabel:
      'Image placeholder — nostalgic Friendster-era profile layout (generic recreation)',
    tags: ['Friendster', 'Multiply', 'social networking'],
  },
  {
    id: 'tech-present-platforms',
    galleryId: 'technology',
    era: 'present',
    title: 'Mobile-First Platforms & Short Video',
    summary:
      'Smartphones, messaging apps, and short-form video platforms now sit at the center of Philippine digital pop culture.',
    description:
      'Today, Filipino audiences largely encounter music, comedy, news snippets, and fandom through smartphones. Messaging apps, Facebook, YouTube, TikTok, and related platforms support both mass entertainment and niche creator communities. Livestream commerce, reaction culture, and algorithm-driven discovery have changed how hits emerge — often faster and more fragmented than broadcast-era appointment viewing. Continuity with the past remains visible: text-first social habits and communal sharing still matter, now at platform scale.',
    imageLabel:
      'Image placeholder — smartphone showing short-form video and chat apps',
    tags: ['smartphones', 'TikTok', 'YouTube', 'messaging'],
  },
  {
    id: 'tech-present-creators',
    galleryId: 'technology',
    era: 'present',
    title: 'Creator Tools & Digital Fandom Infrastructure',
    summary:
      'Affordable phones, editing apps, and fan communities turn audiences into producers and organizers.',
    description:
      'Accessible cameras, free editing apps, and platform monetization tools have expanded who can publish performance and commentary. Fan communities coordinate streaming parties, tag campaigns, and digital archiving across platforms. This infrastructure builds on earlier SMS voting and forum culture, but with richer media and metrics. It also raises ongoing public conversations about misinformation, attention economy pressures, and digital labor — themes that continue into projections for the next decade.',
    imageLabel:
      'Image placeholder — creator setup with phone, ring light, and laptop',
    tags: ['creators', 'fandom', 'digital labor'],
  },
  {
    id: 'tech-future-ai',
    galleryId: 'technology',
    era: 'future',
    title: 'Projected: AI-Assisted Local Media',
    summary:
      'Projection for 2030: generative tools may speed localization, remix culture, and personalized feeds — with unresolved questions about authenticity and labor.',
    description:
      'Looking toward 2030, one widely discussed trajectory is wider use of AI-assisted editing, translation, and content personalization in Philippine media ecosystems. Creators and studios might use these tools to adapt formats faster across languages and diasporic audiences. This remains a projection, not a settled outcome: adoption will depend on access, regulation, platform rules, and public trust. Continuity with earlier tech eras suggests Filipinos will remix new tools into communal, mobile-first practices rather than replace social connection wholesale.',
    imageLabel:
      'Image placeholder — conceptual 2030 interface mixing AI tools and Pinoy media feeds',
    tags: ['projection', 'AI', 'personalization'],
    speculative: true,
  },
  {
    id: 'tech-future-access',
    galleryId: 'technology',
    era: 'future',
    title: 'Projected: Connectivity Gaps & Hybrid Spaces',
    summary:
      'Projection for 2030: uneven broadband and device access may keep hybrid online/offline pop culture spaces important.',
    description:
      'Even as networks improve, projections for 2030 often note that digital access can remain uneven across regions and income levels. Community viewing, shared devices, and physical-digital events may continue alongside immersive apps. This projection extends a documented pattern from internet cafés and barangay cable culture: technology adoption in the Philippines has frequently been collective and adaptive. Policy, infrastructure investment, and platform pricing will shape how evenly future pop culture circulates.',
    imageLabel:
      'Image placeholder — mixed urban/rural connectivity map concept for 2030',
    tags: ['projection', 'access', 'infrastructure'],
    speculative: true,
  },

  // ——— Performance ———
  {
    id: 'perf-past-tv',
    galleryId: 'performance',
    era: 'past',
    title: 'Noontime TV & Variety Spectacle',
    summary:
      'Noontime and primetime variety formats were major shared entertainment rituals in the 2000s Philippine broadcast landscape.',
    description:
      'Programs in the noontime and variety tradition — including long-running formats associated with networks such as ABS-CBN and GMA — mixed games, comedy, music, and audience participation. These shows offered national rendezvous points before streaming fragmented schedules. Celebrity hosts, studio audiences, and contest segments modeled a participatory style of entertainment that later reappeared in reality TV voting and interactive social media challenges.',
    imageLabel:
      'Image placeholder — 2000s noontime variety studio stage (generic recreation)',
    tags: ['television', 'variety', 'broadcast'],
  },
  {
    id: 'perf-past-opm',
    galleryId: 'performance',
    era: 'past',
    title: 'OPM Radio Hits & Music Video Culture',
    summary:
      'Original Pilipino Music (OPM) thrived through radio, MTV Philippines / MYX-era video rotation, and album releases in the 2000s.',
    description:
      'In the 2000s, OPM artists reached audiences through radio playlists, music video channels, concerts, and physical or early digital sales. Channels and blocks dedicated to music video rotation helped visualize stars and fan aesthetics. Ballads, pop-rock, and novelty hits coexisted, reflecting both mainstream radio economics and youth taste. This era’s emphasis on hooks, televised performance, and fan devotion remains audible in later P-pop and viral music cultures.',
    imageLabel:
      'Image placeholder — 2000s music video channel bumper and radio cassette/CD stack',
    tags: ['OPM', 'radio', 'music video'],
  },
  {
    id: 'perf-past-reality',
    galleryId: 'performance',
    era: 'past',
    title: 'Reality TV & Talent Searches',
    summary:
      'Reality and talent formats, including Pinoy Big Brother (debut 2005) and singing competitions, expanded celebrity pathways.',
    description:
      'Reality television and televised talent searches became prominent in the mid-to-late 2000s, offering longer narrative arcs than one-night variety spots. Pinoy Big Brother premiered in 2005 and became a widely discussed franchise in Philippine entertainment. Singing competitions and related formats similarly turned audition culture into primetime storytelling. Audience voting — often via SMS in that period — linked performance culture directly to the technology habits of the time.',
    imageLabel:
      'Image placeholder — reality show house set / talent audition stage concept',
    tags: ['reality TV', 'talent search', 'SMS voting'],
  },
  {
    id: 'perf-present-ppop',
    galleryId: 'performance',
    era: 'present',
    title: 'P-pop, Idols & Multi-Platform Acts',
    summary:
      'Contemporary P-pop groups and solo acts build careers across YouTube, social platforms, livestreams, and live concerts.',
    description:
      'Present-day Filipino pop performance often combines idol-industry training aesthetics with local language, humor, and fandom practices. Acts associated with the P-pop wave circulate choreography challenges, behind-the-scenes content, and fan projects online while still pursuing traditional TV and arena stages when available. The pathway recalls earlier talent searches, but discovery and retention now lean heavily on algorithmic platforms and organized digital fandoms.',
    imageLabel:
      'Image placeholder — contemporary P-pop stage performance with LED screens',
    tags: ['P-pop', 'idols', 'concerts'],
  },
  {
    id: 'perf-present-creators',
    galleryId: 'performance',
    era: 'present',
    title: 'Creator Comedy, Dance & Livestream Stages',
    summary:
      'Independent creators stage comedy, dance, and music performances primarily through social video and livestreams.',
    description:
      'Beyond traditional studios, many Filipino performers build audiences on YouTube, TikTok, and livestream platforms. Sketch comedy, dance trends, covers, and commentary blur lines between amateur and professional entertainment. Brand deals and fan donations form part of the livelihood mix. This present pattern extends the participatory spirit of variety TV while relocating the “stage” into the phone — a continuity from SMS-era audience involvement to always-on interaction.',
    imageLabel:
      'Image placeholder — livestream performance on a phone screen collage',
    tags: ['creators', 'comedy', 'livestream'],
  },
  {
    id: 'perf-future-hybrid',
    galleryId: 'performance',
    era: 'future',
    title: 'Projected: Hybrid Concert Economies',
    summary:
      'Projection for 2030: live shows may routinely pair with immersive online tickets, AR extras, and diaspora-synchronized viewing.',
    description:
      'A plausible 2030 projection is that major Pinoy performances will more often bundle physical venues with high-quality remote experiences for domestic and overseas audiences. Artists might release interactive setlists, multilingual captions, or collectible digital memorabilia alongside tours. This is speculative: success depends on bandwidth, ticket pricing, and whether fans prefer communal livestream rituals over passive recordings. The projection continues a long arc from broadcast spectacles to platform-native stages.',
    imageLabel:
      'Image placeholder — conceptual hybrid concert with on-site crowd and remote viewers',
    tags: ['projection', 'concerts', 'diaspora'],
    speculative: true,
  },

  // ——— Globalization ———
  {
    id: 'glob-past-formats',
    galleryId: 'globalization',
    era: 'past',
    title: 'Imported Formats, Local Adaptation',
    summary:
      'Philippine TV in the 2000s frequently adapted international formats while localizing hosts, humor, and audience rituals.',
    description:
      'Global television formats — including reality, talent, and drama templates — entered Philippine broadcasting and were remade for local languages and sensibilities. At the same time, Filipino productions circulated among overseas Filipino communities through cable, recorded media, and early online sharing. This two-way traffic showed globalization not as simple replacement of local culture, but as negotiation: foreign structures, Filipino performance styles.',
    imageLabel:
      'Image placeholder — TV format bible / localized studio branding collage',
    tags: ['TV formats', 'localization', 'broadcast'],
  },
  {
    id: 'glob-past-ofw',
    galleryId: 'globalization',
    era: 'past',
    title: 'OFW Circuits & Long-Distance Fandom',
    summary:
      'Overseas Filipino Workers and migrants carried music, TV, and remittance-funded media habits across borders throughout the 2000s.',
    description:
      'Large overseas Filipino populations helped circulate karaoke favorites, soap opera talk, and celebrity news across continents. Remittances also shaped household media consumption at home. Phone calls, prepaid cards, and later early social networks kept families and fan communities linked. These circuits established a durable pattern: Philippine pop culture has long been produced with both domestic and diasporic audiences in mind.',
    imageLabel:
      'Image placeholder — airport departure / balikbayan box and karaoke night concept',
    tags: ['OFW', 'diaspora', 'karaoke'],
  },
  {
    id: 'glob-present-streaming',
    galleryId: 'globalization',
    era: 'present',
    title: 'Streaming Libraries & Regional Taste',
    summary:
      'Global streaming platforms and YouTube sit alongside local free-to-air and digital channels in today’s media diet.',
    description:
      'Present-day Filipino viewers often mix local free content with global streaming catalogs, K-drama and Asian pop influences, Hollywood releases, and homegrown digital shows. YouTube remains a major discovery layer. Artists and creators aim for both trending local relevance and exportable aesthetics. Globalization here is platform-mediated: recommendation systems sit between cultural producers and audiences, amplifying some cross-border hits while niche local forms persist in parallel feeds.',
    imageLabel:
      'Image placeholder — streaming app grid with Philippine and regional titles',
    tags: ['streaming', 'YouTube', 'regional media'],
  },
  {
    id: 'glob-present-ppop-export',
    galleryId: 'globalization',
    era: 'present',
    title: 'Export Ambitions & Fan Diplomacy',
    summary:
      'Contemporary acts and creatives pursue regional tours, multilingual content, and international fanbases.',
    description:
      'Building on earlier diaspora circuits, today’s artists, athletes in entertainment crossovers, and digital creators often strategize for Southeast Asian and global visibility. Fan communities translate content, organize international streaming goals, and welcome touring acts. These practices echo 2000s long-distance fandom but operate through faster platforms and metrics. They also spark discussions about cultural representation, language choice, and how “global” success should be measured.',
    imageLabel:
      'Image placeholder — world tour routing map with Philippine artist branding',
    tags: ['export', 'fandom', 'tours'],
  },
  {
    id: 'glob-future-sea',
    galleryId: 'globalization',
    era: 'future',
    title: 'Projected: Deeper ASEAN Pop Corridors',
    summary:
      'Projection for 2030: denser collaboration across Southeast Asian pop industries, with Filipino creators as frequent partners.',
    description:
      'Looking to 2030, a common projection is stronger ASEAN creative corridors — shared festivals, co-produced series, multilingual idol training, and cross-border brand campaigns. Filipino performers and production talent could be central nodes, given English/Filipino bilingual reach and diaspora networks. This remains speculative and contingent on trade policy, platform partnerships, and funding. It extends documented patterns of format trade and regional taste already visible today.',
    imageLabel:
      'Image placeholder — conceptual ASEAN pop collaboration network diagram',
    tags: ['projection', 'ASEAN', 'collaboration'],
    speculative: true,
  },
  {
    id: 'glob-future-identity',
    galleryId: 'globalization',
    era: 'future',
    title: 'Projected: Identity Negotiation Online',
    summary:
      'Projection for 2030: debates over language, authenticity, and algorithmic bias may intensify as content scales globally.',
    description:
      'As more Pinoy content targets international feeds, projections for 2030 include sharper public debate about which stories travel, which languages are rewarded, and how platforms moderate cultural expression. Educators, artists, and communities may push for better archiving of local forms that algorithms under-promote. This speculative view continues a historical tension already present in format adaptation and diaspora media: staying legible abroad without flattening what feels local.',
    imageLabel:
      'Image placeholder — bilingual content switcher UI concept for 2030',
    tags: ['projection', 'identity', 'language'],
    speculative: true,
  },
];

export function getGalleryBySlug(slug) {
  return galleries.find((g) => g.slug === slug);
}

export function getExhibitsForGallery(galleryId) {
  return exhibits.filter((e) => e.galleryId === galleryId);
}

export function getExhibitById(id) {
  return exhibits.find((e) => e.id === id);
}
