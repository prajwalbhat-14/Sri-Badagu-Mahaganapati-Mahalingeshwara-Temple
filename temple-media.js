const templePlaylists = [
  {
    category: 'discourses',
    kannada: 'ಮಹಾಭಾರತ ಪ್ರವಚನ - 2026',
    english: 'Mahabharata Pravachana - 2026',
    url: 'https://youtube.com/playlist?list=PLUAE0zT3SuNQ&si=iIqY5rIATClEo2QZ',
  },
  {
    category: 'discourses',
    kannada: 'ಮಹಾಭಾರತ ಪ್ರವಚನ 2025',
    english: 'Mahabharata Pravachana 2025',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_Z7QwZIoJX2miuh0ivs2oaO&si=_ZL36YBHiSoeMBt7',
  },
  {
    category: 'discourses',
    kannada: 'ಮಹಾಭಾರತ ಪ್ರವಚನ ಸಪ್ತಹ - 2024',
    english: 'Mahabharata Pravachana 2024',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_bm2pACH16jMGZ7BioxCWRl&si=HRe2ZL_OceXKx3KR',
  },
  {
    category: 'discourses',
    kannada: 'ಮಹಾಭಾರತ ಪ್ರವಚನ ಸಪ್ತಹ - 2023',
    english: 'Mahabharata Pravachana 2023',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_bp1toFURWi4cbwglcbPSWo&si=8Nm1BK8kwIWP7ykU',
  },
  {
    category: 'discourses',
    kannada: 'ಮಹಾಭಾರತ ಪ್ರವಚನ ಸಪ್ತಹ - 2022',
    english: 'Mahabharata Pravachana 2022',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_ZmU-kbscmc0EtqjCzjSwoX&si=OzGj2cOu-Wqhuabb',
  },
  {
    category: 'discourses',
    kannada: 'ಮಹಾಭಾರತ ಪ್ರವಚನ ಸಪ್ತಹ - 2021',
    english: 'Mahabharata Pravachana 2021',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_ZlILanW0vmxmIeRBMXF-_b&si=eEKldTUm2alrDe7W',
  },
  {
    category: 'discourses',
    kannada: 'ಮಹಾಭಾರತ ಪ್ರವಚನ ಸಪ್ತಹ - 2020',
    english: 'Mahabharata Pravachana 2020',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_Yy0Xdr049H9oqVUee5tRGF&si=6SgTVFw2ZnnUHC6s',
  },
  {
    category: 'discourses',
    kannada: 'ಭಾಗವತ ಪ್ರವಚನ ಸಪ್ತಾಹ',
    english: 'Bhagavata Pravachana Saptaha',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_bGbT-KsI6JU-zN-qWQsKoY&si=k3bKnjU51kNBtzow',
  },
  {
    category: 'discourses',
    kannada: 'ಜ್ಞಾನ ಯಜ್ಞ ಪ್ರವಚನ',
    english: 'Jnana Yajna Pravachana',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_Yh5KwB-f6lhMjxbszCfSD4&si=WNMNAR8h1hTygL4Z',
  },
  {
    category: 'culture',
    kannada: 'ಅಲಂಗಾರು ಸಾಂಸ್ಕೃತಿಕೋತ್ಸವ - 2024',
    english: 'Alangaru Samskrithikotsava - 2024',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_amAQIAu87z5jOo4fS0jNSP&si=0p_O-M9q-7GU2QUP',
  },
  {
    category: 'culture',
    kannada: 'ಅಲಂಗಾರು ಸಾಂಸ್ಕೃತಿಕೋತ್ಸವ - 2023',
    english: 'Alangaru Samskrithikotsava - 2023',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_Z-iQPttXbE5GtjY9nTfZ2F&si=aH7TVB4LQno583L6',
  },
  {
    category: 'yakshagana',
    kannada: 'ಭಾರತ ದರ್ಶನ — ಮಹಾಭಾರತದ ಕಥೆಗಳ 24 ಗಂಟೆಗಳ ಯಕ್ಷಗಾನ',
    english: 'Bharata Darshana — 24-hour Mahabharata Yakshagana',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_ZFCGclOsrhlJU8IVDlwN4h&si=0ZwHtr79SDE07pIf',
  },
  {
    category: 'yakshagana',
    kannada: 'ಅಲಂಗಾರು ಯಕ್ಷೋತ್ಸವ - 2022',
    english: 'Alangaru Yakshotsava - 2022',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_bzH8V86dgNww12cCCkos1F&si=d4u3IB-NwozSIl0X',
  },
  {
    category: 'yakshagana',
    kannada: 'ಅಲಂಗಾರು ಯಕ್ಷೋತ್ಸವ - 2020',
    english: 'Alangaru Yakshotsava - 2020',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_b9NnlhIyDQNh9x3YZqh9vV&si=qCBBmX-wRGTM13Wd',
  },
  {
    category: 'yakshagana',
    kannada: 'ಅವತಾರ ಲೀಲಾ',
    english: 'Avatara Leela',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_Z136j7aSkQm99I2hrqy1mp&si=Lz-ae1hUEfoXzyLL',
  },
  {
    category: 'yakshagana',
    kannada: 'ವಿಜಯ ವಾಹಿನಿ',
    english: 'Vijaya Vahini',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_YZpSzD6zOkHmNNKK-QwrPe&si=TjcP_WhxRD289qwf',
  },
  {
    category: 'yakshagana',
    kannada: 'ಯಕ್ಷ ತುಣುಕು',
    english: 'Yaksha Tunuku',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_YOE0ULzLOp6KgWMCV_KUPw&si=u3gf1elrwo6odPOI',
  },
  {
    category: 'harikathe',
    kannada: 'ಹರಿಕಥೆ',
    english: 'Harikathe',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_bzTBExmk3S2_XUNGkyj3lj&si=VEEL209okroll_SA',
  },
  {
    category: 'shivaratri',
    kannada: 'ಚೆಂಡೆ ಸುತ್ತು | ಮಹಾಶಿವರಾತ್ರಿ - 2024',
    english: 'Chende Suthu | Maha Shivaratri - 2024',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_agMx6kynDN_fxiu6a0Wgq2&si=8_r3QI2y3yNpN4Lh',
  },
  {
    category: 'shivaratri',
    kannada: 'ಅಲಂಗಾರು ಜಾತ್ರೆ | ಮಹಾಶಿವರಾತ್ರಿ - 2022',
    english: 'Alangaru Jatre | Maha Shivaratri - 2022',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_atr-rNzXOVFrTFAHausjPK&si=Yp3iWjTkLdbhNWAj',
  },
  {
    category: 'shivaratri',
    kannada: 'ಅಲಂಗಾರು ಜಾತ್ರೆ | ಮಹಾಶಿವರಾತ್ರಿ - 2020',
    english: 'Alangaru Jatre | Maha Shivaratri - 2020',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_Zm8GVZ1toYhtCeJaRKj-k3&si=5O9BV87v3GJFVxsq',
  },
  {
    category: 'yaga',
    kannada: 'ಯಾಗ',
    english: 'Yaga',
    url: 'https://youtube.com/playlist?list=PLeIMBwX_PM_b0ZIAV4ZQRlVw5aQxxV5FF&si=DYTNsrdXcFM1jQqi',
  },
];

const mediaCopy = {
  en: {
    label: 'OFFICIAL PLAYLISTS',
    title: 'Living traditions on video',
    description: 'Explore temple celebrations, pravachana, Yakshagana, cultural festivals, Harikathe and Yaga.',
    followLabel: 'FOLLOW US',
    instagram: 'Follow us on Instagram',
    facebook: 'Follow us on Facebook',
    youtube: 'Follow us on YouTube',
    filters: {
      all: 'All playlists',
      discourses: 'Pravachana',
      culture: 'Cultural festivals',
      yakshagana: 'Yakshagana',
      harikathe: 'Harikathe',
      shivaratri: 'Shivaratri',
      yaga: 'Yaga',
    },
    open: 'Open playlist',
    count: 'playlists',
    note: 'Opens the official playlist on YouTube.',
  },
  kn: {
    label: 'ಅಧಿಕೃತ ಪ್ಲೇಲಿಸ್ಟ್‌ಗಳು',
    title: 'ವೀಡಿಯೊಗಳಲ್ಲಿ ಜೀವಂತ ಸಂಪ್ರದಾಯಗಳು',
    description: 'ಅಳಂಗಾರಿನ ಪ್ರವಚನ, ಯಕ್ಷಗಾನ, ಸಾಂಸ್ಕೃತಿಕೋತ್ಸವ ಮತ್ತು ಪವಿತ್ರ ಆಚರಣೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ.',
    followLabel: 'ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ',
    instagram: 'Instagram ನಲ್ಲಿ ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ',
    facebook: 'Facebook ನಲ್ಲಿ ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ',
    youtube: 'YouTube ನಲ್ಲಿ ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ',
    filters: {
      all: 'ಎಲ್ಲ ಪ್ಲೇಲಿಸ್ಟ್‌ಗಳು',
      discourses: 'ಪ್ರವಚನ',
      culture: 'ಸಾಂಸ್ಕೃತಿಕೋತ್ಸವ',
      yakshagana: 'ಯಕ್ಷಗಾನ',
      harikathe: 'ಹರಿಕಥೆ',
      shivaratri: 'ಮಹಾಶಿವರಾತ್ರಿ',
      yaga: 'ಯಾಗ',
    },
    open: 'ಪ್ಲೇಲಿಸ್ಟ್ ತೆರೆಯಿರಿ',
    count: 'ಪ್ಲೇಲಿಸ್ಟ್‌ಗಳು',
    note: 'ಅಧಿಕೃತ ಪ್ಲೇಲಿಸ್ಟ್ YouTube ನಲ್ಲಿ ತೆರೆಯುತ್ತದೆ.',
  },
  hi: {
    label: 'आधिकारिक प्लेलिस्ट',
    title: 'वीडियो में जीवंत परंपराएँ',
    description: 'अलंगार के प्रवचन, यक्षगान, सांस्कृतिक उत्सव और पावन आयोजनों को देखें।',
    followLabel: 'हमें फ़ॉलो करें',
    instagram: 'Instagram पर हमें फ़ॉलो करें',
    facebook: 'Facebook पर हमें फ़ॉलो करें',
    youtube: 'YouTube पर हमें फ़ॉलो करें',
    filters: {
      all: 'सभी प्लेलिस्ट',
      discourses: 'प्रवचन',
      culture: 'सांस्कृतिक उत्सव',
      yakshagana: 'यक्षगान',
      harikathe: 'हरिकथा',
      shivaratri: 'महाशिवरात्रि',
      yaga: 'याग',
    },
    open: 'प्लेलिस्ट खोलें',
    count: 'प्लेलिस्ट',
    note: 'आधिकारिक प्लेलिस्ट YouTube पर खुलेगी।',
  },
};

const addClass = (element, className) => {
  element.className = className;
  return element;
};

const appendText = (parent, tagName, className, text) => {
  const element = document.createElement(tagName);
  if (className) addClass(element, className);
  element.textContent = text;
  parent.append(element);
  return element;
};

const mediaSection = document.createElement('section');
mediaSection.id = 'media';
mediaSection.className = 'section temple-media';
mediaSection.setAttribute('aria-labelledby', 'media-title');

const mediaInner = document.createElement('div');
mediaInner.className = 'temple-media-inner';
mediaSection.append(mediaInner);

const mediaHeading = document.createElement('div');
mediaHeading.className = 'media-heading';
mediaInner.append(mediaHeading);

appendText(mediaHeading, 'div', 'label', '');
mediaHeading.firstElementChild.id = 'media-label';
const mediaTitle = appendText(mediaHeading, 'h2', '', '');
mediaTitle.id = 'media-title';
const mediaDescription = appendText(mediaHeading, 'p', '', '');
mediaDescription.id = 'media-description';

const socialLinks = document.createElement('div');
socialLinks.className = 'media-socials';
socialLinks.setAttribute('aria-label', 'Temple social media');
mediaInner.append(socialLinks);

const followLabel = appendText(socialLinks, 'p', 'media-follow-label', '');
followLabel.setAttribute('aria-hidden', 'true');

const instagramLink = appendText(socialLinks, 'a', 'btn media-social', '');
instagramLink.href = 'https://www.instagram.com/mahalingeshwara_temple_alangar?dlrf=MWJpaGJwYXd3bXRzag==';
instagramLink.target = '_blank';
instagramLink.rel = 'noopener noreferrer';
instagramLink.dataset.mediaCopy = 'instagram';
instagramLink.setAttribute('aria-label', 'Follow the temple on Instagram');

const facebookLink = appendText(socialLinks, 'a', 'btn outline media-social', '');
facebookLink.href = 'https://www.facebook.com/share/1FqNAVN1gW/';
facebookLink.target = '_blank';
facebookLink.rel = 'noopener noreferrer';
facebookLink.dataset.mediaCopy = 'facebook';
facebookLink.setAttribute('aria-label', 'Follow the temple on Facebook');

const youtubeLink = appendText(socialLinks, 'a', 'btn outline media-social', '');
youtubeLink.href = 'https://youtube.com/@alangartv?si=c9Dfq7-YdTnwT6lT';
youtubeLink.target = '_blank';
youtubeLink.rel = 'noopener noreferrer';
youtubeLink.dataset.mediaCopy = 'youtube';
youtubeLink.setAttribute('aria-label', 'Follow the temple on YouTube');

const playlistToolbar = document.createElement('div');
playlistToolbar.className = 'playlist-toolbar';
playlistToolbar.setAttribute('aria-label', 'Filter playlists');
playlistToolbar.setAttribute('role', 'group');
mediaInner.append(playlistToolbar);

const playlistCount = appendText(mediaInner, 'p', 'playlist-count', '');
playlistCount.setAttribute('aria-live', 'polite');

const playlistGrid = document.createElement('div');
playlistGrid.className = 'playlist-grid';
mediaInner.append(playlistGrid);

const renderMediaCopy = () => {
  const language = document.documentElement.lang;
  const copy = mediaCopy[language] || mediaCopy.en;

  document.querySelector('[data-media-nav]')?.replaceChildren(
    document.createTextNode(language === 'kn' ? 'ಮಾಧ್ಯಮ' : language === 'hi' ? 'मीडिया' : 'Media'),
  );
  document.getElementById('media-label').textContent = copy.label;
  mediaTitle.textContent = copy.title;
  mediaDescription.textContent = copy.description;
  followLabel.textContent = copy.followLabel;
  instagramLink.textContent = copy.instagram;
  facebookLink.textContent = copy.facebook;
  youtubeLink.textContent = copy.youtube;

  const activeCategory = playlistToolbar.querySelector('[aria-pressed="true"]')?.dataset.category || 'all';
  playlistToolbar.replaceChildren();

  Object.entries(copy.filters).forEach(([category, label]) => {
    const filter = document.createElement('button');
    filter.type = 'button';
    filter.className = 'playlist-filter';
    filter.textContent = label;
    filter.dataset.category = category;
    filter.setAttribute('aria-pressed', String(category === activeCategory));
    playlistToolbar.append(filter);
  });

  renderPlaylists(activeCategory, copy);
};

const renderPlaylists = (category = 'all', copy = mediaCopy[document.documentElement.lang] || mediaCopy.en) => {
  const visiblePlaylists = category === 'all'
    ? templePlaylists
    : templePlaylists.filter(playlist => playlist.category === category);

  playlistCount.textContent = `${visiblePlaylists.length} ${copy.count}`;
  playlistGrid.replaceChildren();

  visiblePlaylists.forEach((playlist, index) => {
    const card = document.createElement('a');
    card.className = 'playlist-card';
    card.href = playlist.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', `${copy.open}: ${playlist.english}`);
    card.style.setProperty('--card-index', index);

    const artwork = appendText(card, 'span', 'playlist-artwork', '▶');
    artwork.setAttribute('aria-hidden', 'true');
    const categoryLabel = appendText(card, 'span', 'playlist-category', copy.filters[playlist.category]);
    const title = appendText(card, 'h3', 'playlist-title', playlist.kannada);
    title.lang = 'kn';
    appendText(card, 'p', 'playlist-title-en', playlist.english);

    const openLabel = appendText(card, 'span', 'playlist-open', copy.open);
    const externalIcon = appendText(openLabel, 'span', '', '↗');
    externalIcon.setAttribute('aria-hidden', 'true');
    playlistGrid.append(card);
  });
};

const traditionsSection = document.getElementById('traditions');
const donationSection = document.getElementById('donate');
if (traditionsSection && donationSection) {
  traditionsSection.append(mediaSection);

  const mediaNavigationLink = document.createElement('a');
  mediaNavigationLink.href = '#media';
  mediaNavigationLink.dataset.mediaNav = '';
  mediaNavigationLink.dataset.en = 'Media';
  mediaNavigationLink.dataset.kn = 'ಮಾಧ್ಯಮ';
  mediaNavigationLink.dataset.hi = 'मीडिया';
  mediaNavigationLink.textContent = 'Media';
  document.querySelector('.temple-nav a[href="#traditions"]')?.after(mediaNavigationLink);

  renderMediaCopy();

  playlistToolbar.addEventListener('click', event => {
    const filter = event.target.closest('.playlist-filter');
    if (!filter) return;

    playlistToolbar.querySelectorAll('.playlist-filter').forEach(button => {
      button.setAttribute('aria-pressed', String(button === filter));
    });
    renderPlaylists(filter.dataset.category);
  });

  document.getElementById('language')?.addEventListener('change', renderMediaCopy);
}
