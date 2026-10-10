import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Languages, ArrowUpRight, Play, Heart, MapPin, CalendarDays, Flower2, Landmark, Music2, HandHeart, ChevronDown, Sparkles } from 'lucide-react';
import './styles.css';

const copy = {
  en: {
    nav: ['Home','The Temple','Visitors','Sevas','Festivals & Arts','Donate','Contact'],
    eyebrow:'A sacred place • Alangar, Moodbidri',
    title:'Where devotion meets timeless tradition',
    subtitle:'Sri Badagu Mahaganapati & Mahalingeshwara Temple',
    intro:'A digital doorway to the temple, its living traditions, sacred services, and the community that gathers here.',
    explore:'Explore the temple', discover:'Discover our traditions',
    aboutTag:'OUR HERITAGE', aboutTitle:'A place of faith, culture & community',
    aboutText:'Located in Alangar, Moodbidri, Sri Badagu Mahaganapati & Mahalingeshwara Temple is a place of worship and devotion. This website is a growing digital record of the temple, its customs, celebrations, and visitors. More verified history and temple photographs can be added as they are shared by the temple.',
    fact1:'Temple', fact2:'Locality', fact3:'Region',
    factTemple:'Sri Badagu Mahaganapati & Mahalingeshwara Temple', factLocality:'Alangar, Moodbidri', factRegion:'Dakshina Kannada, Karnataka',
    visitTag:'SACRED MOMENTS', visitTitle:'Visitors & blessings', visitText:'A record of revered swamijis, dignitaries, and guests who have visited the temple.',
    visitorNote:'Visitor profiles and media links will be added after details are confirmed by the temple team.',
    sevasTag:'OFFERINGS & WORSHIP', sevasTitle:'Sevas at the temple', sevasText:'Explore the services offered and the occasions on which they are performed. Please confirm current timings, booking process, and fees with the temple office.',
    occasions:'Occasions & observances', seva1:'Daily worship', seva1d:'Regular pooja and customary worship. Exact timings to be confirmed.', seva2:'Festival sevas', seva2d:'Special offerings on festival days and auspicious occasions.', seva3:'Devotee offerings', seva3d:'Offerings and rituals as permitted by temple tradition.',
    artsTag:'LIVING TRADITIONS', artsTitle:'Festivals, faith & performing arts', artsText:'Shivaratri celebrations and the region’s rich devotional and performance traditions.',
    shivaTitle:'Maha Shivaratri', shivaText:'A sacred observance dedicated to Lord Shiva. Add the temple’s official schedule, event photos, and videos here once available.',
    yak:'Yakshagana', yakd:'A vibrant coastal Karnataka theatre tradition combining music, dance, dialogue, and storytelling.',
    thala:'Thalamaddale', thalad:'A traditional dialogue-centred performance rooted in Yakshagana, known for improvisation and scholarship.',
    ashta:'Ashtavadhana', ashtad:'A demanding literary and intellectual art of attending to multiple tasks simultaneously.',
    prav:'Pravachana', pravd:'Spiritual discourses and reflections on sacred texts and values.',
    watch:'Watch videos', playlist:'Open playlist', channel:'Temple YouTube channel',
    mediaNote:'Official YouTube, Instagram, and playlist URLs are placeholders until the temple shares the correct links.',
    donateTag:'SUPPORT THE TEMPLE', donateTitle:'Your offering helps preserve tradition',
    donateText:'Contributions can support temple activities, celebrations, maintenance, and community initiatives. Please use only the temple’s verified official payment details.',
    qrTitle:'Official donation QR', qrText:'QR code to be supplied by the temple. Do not make payments to an unverified account.',
    donateBtn:'Donation details coming soon', contactTitle:'Plan your visit', contactText:'For darshan timings, seva booking, festival dates, and donation verification, contact the temple directly.',
    location:'Alangar, Moodbidri, Dakshina Kannada, Karnataka', map:'Open location', footer:'A devotional digital space, created with respect for the temple and its traditions.',
    placeholder:'Content awaiting temple confirmation', soon:'Coming soon', lang:'Language',
  },
  kn: {
    nav: ['ಮುಖಪುಟ','ದೇವಸ್ಥಾನ','ಭೇಟಿ ನೀಡಿದವರು','ಸೇವೆಗಳು','ಹಬ್ಬಗಳು ಮತ್ತು ಕಲೆಗಳು','ದೇಣಿಗೆ','ಸಂಪರ್ಕ'],
    eyebrow:'ಪವಿತ್ರ ಸ್ಥಳ • ಅಳಂಗಾರು, ಮೂಡುಬಿದಿರೆ',
    title:'ಭಕ್ತಿ ಮತ್ತು ಪರಂಪರೆ ಒಂದಾಗುವ ತಾಣ',
    subtitle:'ಶ್ರೀ ಬಡಗು ಮಹಾಗಣಪತಿ ಮತ್ತು ಮಹಾಲಿಂಗೇಶ್ವರ ದೇವಸ್ಥಾನ',
    intro:'ದೇವಸ್ಥಾನ, ಅದರ ಸಂಪ್ರದಾಯಗಳು, ಸೇವೆಗಳು ಮತ್ತು ಭಕ್ತ ಸಮುದಾಯವನ್ನು ಪರಿಚಯಿಸುವ ಡಿಜಿಟಲ್ ವೇದಿಕೆ.',
    explore:'ದೇವಸ್ಥಾನವನ್ನು ತಿಳಿಯಿರಿ', discover:'ಸಂಪ್ರದಾಯಗಳನ್ನು ನೋಡಿ',
    aboutTag:'ನಮ್ಮ ಪರಂಪರೆ', aboutTitle:'ನಂಬಿಕೆ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಸಮುದಾಯದ ತಾಣ',
    aboutText:'ಶ್ರೀ ಬಡಗು ಮಹಾಗಣಪತಿ ಮತ್ತು ಮಹಾಲಿಂಗೇಶ್ವರ ದೇವಸ್ಥಾನ ದಕ್ಷಿಣ ಕನ್ನಡ ಜಿಲ್ಲೆಯ ಮೂಡುಬಿದಿರೆಯ ಅಳಂಗಾರಿನಲ್ಲಿದೆ. ದೇವಸ್ಥಾನದ ಇತಿಹಾಸ, ಆಚರಣೆಗಳು, ಹಬ್ಬಗಳು ಮತ್ತು ಸಂದರ್ಶಕರ ಮಾಹಿತಿಯನ್ನು ಇಲ್ಲಿ ಕ್ರಮೇಣ ಸೇರಿಸಲಾಗುತ್ತದೆ. ದೃಢೀಕರಿಸಿದ ಮಾಹಿತಿ ಮತ್ತು ಚಿತ್ರಗಳನ್ನು ದೇವಸ್ಥಾನದವರು ಹಂಚಿದಂತೆ ನವೀಕರಿಸಲಾಗುತ್ತದೆ.',
    fact1:'ದೇವಸ್ಥಾನ', fact2:'ಸ್ಥಳ', fact3:'ಪ್ರದೇಶ', factTemple:'ಶ್ರೀ ಬಡಗು ಮಹಾಗಣಪತಿ ಮತ್ತು ಮಹಾಲಿಂಗೇಶ್ವರ ದೇವಸ್ಥಾನ', factLocality:'ಅಳಂಗಾರು, ಮೂಡುಬಿದಿರೆ', factRegion:'ದಕ್ಷಿಣ ಕನ್ನಡ, ಕರ್ನಾಟಕ',
    visitTag:'ಪವಿತ್ರ ಕ್ಷಣಗಳು', visitTitle:'ಸಂದರ್ಶಕರು ಮತ್ತು ಆಶೀರ್ವಾದ', visitText:'ದೇವಸ್ಥಾನಕ್ಕೆ ಭೇಟಿ ನೀಡಿದ ಪೂಜ್ಯ ಸ್ವಾಮೀಜಿಗಳು, ಗಣ್ಯರು ಮತ್ತು ಅತಿಥಿಗಳ ಮಾಹಿತಿ.',
    visitorNote:'ದೇವಸ್ಥಾನದವರಿಂದ ಮಾಹಿತಿ ದೃಢಪಟ್ಟ ನಂತರ ಸಂದರ್ಶಕರ ವಿವರಗಳು ಮತ್ತು ಮಾಧ್ಯಮ ಕೊಂಡಿಗಳನ್ನು ಸೇರಿಸಲಾಗುತ್ತದೆ.',
    sevasTag:'ಪೂಜೆ ಮತ್ತು ಸೇವೆಗಳು', sevasTitle:'ದೇವಸ್ಥಾನದ ಸೇವೆಗಳು', sevasText:'ಲಭ್ಯವಿರುವ ಸೇವೆಗಳು ಮತ್ತು ಅವು ನಡೆಯುವ ಸಂದರ್ಭಗಳ ಮಾಹಿತಿ. ಸಮಯ, ನೋಂದಣಿ ಮತ್ತು ಶುಲ್ಕಗಳಿಗಾಗಿ ದೇವಸ್ಥಾನವನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    occasions:'ವಿಶೇಷ ಸಂದರ್ಭಗಳು', seva1:'ದೈನಂದಿನ ಪೂಜೆ', seva1d:'ನಿತ್ಯದ ಪೂಜೆ ಮತ್ತು ಸಂಪ್ರದಾಯಬದ್ಧ ಆರಾಧನೆ. ನಿಖರ ಸಮಯ ದೃಢೀಕರಿಸಬೇಕು.', seva2:'ಹಬ್ಬದ ಸೇವೆಗಳು', seva2d:'ಹಬ್ಬಗಳು ಮತ್ತು ಶುಭ ಸಂದರ್ಭಗಳಲ್ಲಿ ವಿಶೇಷ ಅರ್ಪಣೆಗಳು.', seva3:'ಭಕ್ತರ ಸೇವೆಗಳು', seva3d:'ದೇವಸ್ಥಾನದ ಸಂಪ್ರದಾಯಕ್ಕೆ ಅನುಗುಣವಾದ ಸೇವೆಗಳು.',
    artsTag:'ಜೀವಂತ ಸಂಪ್ರದಾಯಗಳು', artsTitle:'ಹಬ್ಬಗಳು, ಭಕ್ತಿ ಮತ್ತು ಪ್ರದರ್ಶನ ಕಲೆಗಳು', artsText:'ಮಹಾಶಿವರಾತ್ರಿ ಆಚರಣೆಗಳು ಮತ್ತು ಕರಾವಳಿಯ ಭಕ್ತಿ ಹಾಗೂ ಪ್ರದರ್ಶನ ಕಲೆಗಳ ಪರಿಚಯ.',
    shivaTitle:'ಮಹಾಶಿವರಾತ್ರಿ', shivaText:'ಭಗವಾನ್ ಶಿವನಿಗೆ ಸಮರ್ಪಿತವಾದ ಪವಿತ್ರ ಆಚರಣೆ. ಅಧಿಕೃತ ಕಾರ್ಯಕ್ರಮ, ಚಿತ್ರಗಳು ಮತ್ತು ವೀಡಿಯೊಗಳನ್ನು ಲಭ್ಯವಾದಾಗ ಸೇರಿಸಲಾಗುತ್ತದೆ.',
    yak:'ಯಕ್ಷಗಾನ', yakd:'ಸಂಗೀತ, ನೃತ್ಯ, ಸಂಭಾಷಣೆ ಮತ್ತು ಕಥನವನ್ನು ಒಗ್ಗೂಡಿಸುವ ಕರಾವಳಿ ಕರ್ನಾಟಕದ ರಂಗಕಲೆ.',
    thala:'ತಾಳಮದ್ದಳೆ', thalad:'ಸಂವಾದ, ಪಾಂಡಿತ್ಯ ಮತ್ತು ಸ್ವತಂತ್ರ ನಿರೂಪಣೆಗೆ ಹೆಸರಾದ ಯಕ್ಷಗಾನಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆ.',
    ashta:'ಅಷ್ಟಾವಧಾನ', ashtad:'ಒಂದೇ ಸಮಯದಲ್ಲಿ ಹಲವು ಕಾರ್ಯಗಳಿಗೆ ಗಮನ ನೀಡುವ ಸಾಹಿತ್ಯಿಕ ಮತ್ತು ಬೌದ್ಧಿಕ ಕಲೆ.',
    prav:'ಪ್ರವಚನ', pravd:'ಪವಿತ್ರ ಗ್ರಂಥಗಳು ಮತ್ತು ಮೌಲ್ಯಗಳ ಕುರಿತು ಆಧ್ಯಾತ್ಮಿಕ ಉಪನ್ಯಾಸಗಳು.',
    watch:'ವೀಡಿಯೊ ನೋಡಿ', playlist:'ಪ್ಲೇಲಿಸ್ಟ್ ತೆರೆಯಿರಿ', channel:'ದೇವಸ್ಥಾನದ YouTube ಚಾನೆಲ್',
    mediaNote:'ಅಧಿಕೃತ YouTube, Instagram ಮತ್ತು ಪ್ಲೇಲಿಸ್ಟ್ ಕೊಂಡಿಗಳನ್ನು ದೇವಸ್ಥಾನದವರು ನೀಡಿದ ನಂತರ ಸೇರಿಸಲಾಗುತ್ತದೆ.',
    donateTag:'ದೇವಸ್ಥಾನಕ್ಕೆ ಸಹಕರಿಸಿ', donateTitle:'ನಿಮ್ಮ ಕಾಣಿಕೆ ಪರಂಪರೆಯನ್ನು ಉಳಿಸಲು ನೆರವಾಗುತ್ತದೆ',
    donateText:'ದೇವಸ್ಥಾನದ ಚಟುವಟಿಕೆಗಳು, ಹಬ್ಬಗಳು, ನಿರ್ವಹಣೆ ಮತ್ತು ಸಮುದಾಯ ಕಾರ್ಯಗಳಿಗೆ ಕಾಣಿಕೆ ಸಹಾಯ ಮಾಡಬಹುದು. ದೃಢೀಕರಿಸಿದ ಅಧಿಕೃತ ಪಾವತಿ ವಿವರಗಳನ್ನು ಮಾತ್ರ ಬಳಸಿ.',
    qrTitle:'ಅಧಿಕೃತ ದೇಣಿಗೆ QR', qrText:'ದೇವಸ್ಥಾನದಿಂದ QR ಕೋಡ್ ಪಡೆಯಬೇಕಿದೆ. ದೃಢೀಕರಿಸದ ಖಾತೆಗೆ ಹಣ ಕಳುಹಿಸಬೇಡಿ.',
    donateBtn:'ದೇಣಿಗೆ ವಿವರಗಳು ಶೀಘ್ರದಲ್ಲೇ', contactTitle:'ನಿಮ್ಮ ಭೇಟಿಯನ್ನು ಯೋಜಿಸಿ', contactText:'ದರ್ಶನದ ಸಮಯ, ಸೇವಾ ನೋಂದಣಿ, ಹಬ್ಬಗಳ ದಿನಾಂಕ ಮತ್ತು ದೇಣಿಗೆ ದೃಢೀಕರಣಕ್ಕಾಗಿ ದೇವಸ್ಥಾನವನ್ನು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ.',
    location:'ಅಳಂಗಾರು, ಮೂಡುಬಿದಿರೆ, ದಕ್ಷಿಣ ಕನ್ನಡ, ಕರ್ನಾಟಕ', map:'ಸ್ಥಳವನ್ನು ತೆರೆಯಿರಿ', footer:'ದೇವಸ್ಥಾನ ಮತ್ತು ಅದರ ಸಂಪ್ರದಾಯಗಳಿಗೆ ಗೌರವದಿಂದ ನಿರ್ಮಿಸಿದ ಭಕ್ತಿಯ ಡಿಜಿಟಲ್ ವೇದಿಕೆ.',
    placeholder:'ದೇವಸ್ಥಾನದ ದೃಢೀಕರಣಕ್ಕಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ', soon:'ಶೀಘ್ರದಲ್ಲೇ', lang:'ಭಾಷೆ',
  },
  hi: {
    nav: ['होम','मंदिर','आगंतुक','सेवाएँ','उत्सव और कलाएँ','दान','संपर्क'],
    eyebrow:'पवित्र स्थान • अलंगार, मूडबिद्री',
    title:'जहाँ भक्ति और परंपरा का संगम होता है',
    subtitle:'श्री बडगु महागणपति एवं महालिंगेश्वर मंदिर',
    intro:'मंदिर, उसकी परंपराओं, धार्मिक सेवाओं और भक्त समुदाय से परिचित कराने वाला डिजिटल मंच।',
    explore:'मंदिर के बारे में जानें', discover:'परंपराएँ देखें',
    aboutTag:'हमारी विरासत', aboutTitle:'आस्था, संस्कृति और समुदाय का स्थान',
    aboutText:'श्री बडगु महागणपति एवं महालिंगेश्वर मंदिर कर्नाटक के दक्षिण कन्नड़ जिले के मूडबिद्री स्थित अलंगार में है। मंदिर का इतिहास, रीति-रिवाज, उत्सव और आगंतुकों की जानकारी यहाँ धीरे-धीरे जोड़ी जाएगी। सत्यापित विवरण और तस्वीरें मंदिर से मिलने पर वेबसाइट अपडेट होगी।',
    fact1:'मंदिर', fact2:'स्थान', fact3:'क्षेत्र', factTemple:'श्री बडगु महागणपति एवं महालिंगेश्वर मंदिर', factLocality:'अलंगार, मूडबिद्री', factRegion:'दक्षिण कन्नड़, कर्नाटक',
    visitTag:'पवित्र क्षण', visitTitle:'आगंतुक और आशीर्वाद', visitText:'मंदिर आने वाले पूज्य स्वामीजी, विशिष्ट अतिथियों और गणमान्य व्यक्तियों का परिचय।',
    visitorNote:'मंदिर की ओर से विवरण की पुष्टि होने के बाद आगंतुकों की जानकारी और मीडिया लिंक जोड़े जाएंगे।',
    sevasTag:'पूजा और अर्पण', sevasTitle:'मंदिर की सेवाएँ', sevasText:'उपलब्ध सेवाओं और उनके अवसरों के बारे में जानें। समय, बुकिंग और शुल्क की पुष्टि मंदिर कार्यालय से करें।',
    occasions:'विशेष अवसर', seva1:'दैनिक पूजा', seva1d:'नियमित पूजा और पारंपरिक आराधना। सटीक समय की पुष्टि होनी बाकी है।', seva2:'उत्सव सेवाएँ', seva2d:'त्योहारों और शुभ अवसरों पर विशेष अर्पण।', seva3:'भक्तों की सेवाएँ', seva3d:'मंदिर की परंपराओं के अनुसार अर्पण और अनुष्ठान।',
    artsTag:'जीवंत परंपराएँ', artsTitle:'उत्सव, भक्ति और प्रदर्शन कलाएँ', artsText:'महाशिवरात्रि उत्सव और तटीय कर्नाटक की समृद्ध भक्ति एवं प्रदर्शन परंपराएँ।',
    shivaTitle:'महाशिवरात्रि', shivaText:'भगवान शिव को समर्पित पवित्र पर्व। मंदिर का आधिकारिक कार्यक्रम, तस्वीरें और वीडियो उपलब्ध होने पर यहाँ जोड़े जाएंगे।',
    yak:'यक्षगान', yakd:'संगीत, नृत्य, संवाद और कहानी कहने की तटीय कर्नाटक की जीवंत रंगमंच परंपरा।',
    thala:'तालमद्दले', thalad:'यक्षगान से जुड़ी संवाद-प्रधान परंपरा, जो तात्कालिक प्रस्तुति और विद्वत्ता के लिए जानी जाती है।',
    ashta:'अष्टावधान', ashtad:'एक साथ कई कार्यों पर ध्यान केंद्रित करने की साहित्यिक और बौद्धिक कला।',
    prav:'प्रवचन', pravd:'पवित्र ग्रंथों और जीवन-मूल्यों पर आध्यात्मिक व्याख्यान।',
    watch:'वीडियो देखें', playlist:'प्लेलिस्ट खोलें', channel:'मंदिर का YouTube चैनल',
    mediaNote:'आधिकारिक YouTube, Instagram और प्लेलिस्ट लिंक मंदिर से मिलने के बाद जोड़े जाएंगे।',
    donateTag:'मंदिर का सहयोग करें', donateTitle:'आपका अर्पण परंपरा को संरक्षित करने में मदद करता है',
    donateText:'योगदान मंदिर की गतिविधियों, उत्सवों, रखरखाव और सामुदायिक पहलों में सहायक हो सकता है। केवल मंदिर के सत्यापित आधिकारिक भुगतान विवरणों का उपयोग करें।',
    qrTitle:'आधिकारिक दान QR', qrText:'मंदिर से आधिकारिक QR कोड मिलना बाकी है। किसी असत्यापित खाते में भुगतान न करें।',
    donateBtn:'दान का विवरण जल्द उपलब्ध होगा', contactTitle:'अपनी यात्रा की योजना बनाएँ', contactText:'दर्शन समय, सेवा बुकिंग, उत्सव तिथियों और दान की पुष्टि के लिए मंदिर से सीधे संपर्क करें।',
    location:'अलंगार, मूडबिद्री, दक्षिण कन्नड़, कर्नाटक', map:'स्थान खोलें', footer:'मंदिर और उसकी परंपराओं के प्रति सम्मान के साथ बनाया गया भक्तिमय डिजिटल मंच।',
    placeholder:'मंदिर की पुष्टि की प्रतीक्षा में', soon:'जल्द आ रहा है', lang:'भाषा',
  }
};

const navIds = ['home','temple','visitors','sevas','traditions','donate','contact'];
const mediaCards = [
  { key:'yak', desc:'yakd', icon:Music2, media:'Yakshagana' },
  { key:'thala', desc:'thalad', icon:Sparkles, media:'Thalamaddale' },
  { key:'ashta', desc:'ashtad', icon:Flower2, media:'Ashtavadhana' },
  { key:'prav', desc:'pravd', icon:Landmark, media:'Pravachana' },
];

function App(){
  const [lang,setLang] = useState('en');
  const [menuOpen,setMenuOpen] = useState(false);
  const t = copy[lang];
  useEffect(()=>{ document.documentElement.lang = lang==='kn'?'kn':lang; },[lang]);
  const go = id => { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); setMenuOpen(false); };
  return <div className={`site lang-${lang}`}>
    <div className="topline"><span><Flower2 size={14}/> {t.eyebrow}</span><span className="topline-right">ॐ <span>•</span> Om Namah Shivaya</span></div>
    <header className="header">
      <button className="brand" onClick={()=>go('home')} aria-label="Home">
        <span className="brand-mark"><Landmark size={25}/></span><span className="brand-copy"><b>{lang==='kn'?'ಶ್ರೀ ಬಡಗು ಮಹಾಗಣಪತಿ':lang==='hi'?'श्री बडगु महागणपति':'Sri Badagu Mahaganapati'}</b><small>{lang==='kn'?'ಮತ್ತು ಮಹಾಲಿಂಗೇಶ್ವರ ದೇವಸ್ಥಾನ':lang==='hi'?'एवं महालिंगेश्वर मंदिर':'& Mahalingeshwara Temple'}</small></span>
      </button>
      <nav className={menuOpen?'nav open':'nav'}>{t.nav.map((label,i)=><button key={navIds[i]} onClick={()=>go(navIds[i])}>{label}</button>)}</nav>
      <div className="header-actions"><label className="language"><Languages size={16}/><select value={lang} onChange={e=>setLang(e.target.value)} aria-label={t.lang}><option value="en">English</option><option value="kn">ಕನ್ನಡ</option><option value="hi">हिन्दी</option></select><ChevronDown size={13}/></label><button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button></div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-pattern"></div><div className="hero-glow"></div>
        <div className="hero-content">
          <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="om-seal">ॐ</motion.div>
          <motion.p className="eyebrow gold" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}}>{t.eyebrow}</motion.p>
          <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{delay:.25,duration:.8}}>{t.title}</motion.h1>
          <motion.div className="ornament" initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:.55,duration:.7}}><span></span> ✧ <span></span></motion.div>
          <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}}>{t.subtitle}</motion.h2>
          <motion.p className="hero-intro" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.65}}>{t.intro}</motion.p>
          <motion.div className="hero-buttons" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.8}}><button className="btn btn-gold" onClick={()=>go('temple')}>{t.explore}<ArrowUpRight size={17}/></button><button className="btn btn-outline" onClick={()=>go('traditions')}>{t.discover}</button></motion.div>
        </div>
        <div className="hero-bottom"><span>ALANGAR · MOODBIDRI</span><span className="scroll-cue"><span></span> SCROLL TO DISCOVER</span><span>KARNATAKA, INDIA</span></div>
      </section>

      <section className="intro-section section-pad" id="temple">
        <div className="section-label"><span>01</span><span className="label-line"></span><span>{t.aboutTag}</span></div>
        <div className="intro-grid">
          <motion.div className="intro-heading" initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.2}}><p className="eyebrow">{t.eyebrow}</p><h2>{t.aboutTitle}</h2><div className="mini-ornament">✦ ❧ ✦</div></motion.div>
          <motion.div className="intro-copy" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}}><p>{t.aboutText}</p><div className="facts"><div><span>{t.fact1}</span><b>{t.factTemple}</b></div><div><span>{t.fact2}</span><b>{t.factLocality}</b></div><div><span>{t.fact3}</span><b>{t.factRegion}</b></div></div></motion.div>
        </div>
        <div className="image-note"><Flower2 size={18}/><span>{t.placeholder} — temple photographs and verified history can be added here.</span></div>
      </section>

      <section className="visitors section-pad" id="visitors">
        <div className="section-label light"><span>02</span><span className="label-line"></span><span>{t.visitTag}</span></div>
        <div className="section-heading-row"><div><h2>{t.visitTitle}</h2><p>{t.visitText}</p></div><span className="watermark">ॐ</span></div>
        <div className="visitor-card"><div className="visitor-symbol"><Landmark size={30}/></div><div><span className="card-kicker">{t.soon}</span><h3>{t.placeholder}</h3><p>{t.visitorNote}</p></div><span className="visitor-arrow"><ArrowUpRight/></span></div>
        <p className="small-note">{t.mediaNote}</p>
      </section>

      <section className="sevas section-pad" id="sevas">
        <div className="section-label"><span>03</span><span className="label-line"></span><span>{t.sevasTag}</span></div>
        <div className="section-heading-row"><div><h2>{t.sevasTitle}</h2><p>{t.sevasText}</p></div><Flower2 className="heading-icon" size={42}/></div>
        <h3 className="subheading">{t.occasions}</h3>
        <div className="seva-grid">
          {[['01','seva1','seva1d'],['02','seva2','seva2d'],['03','seva3','seva3d']].map(([n,title,desc])=><motion.article className="seva-card" key={n} whileHover={{y:-6}} transition={{duration:.2}}><span className="seva-number">{n}</span><div className="seva-icon"><Flower2 size={25}/></div><h3>{t[title]}</h3><p>{t[desc]}</p><span className="card-foot">{t.soon}</span></motion.article>)}
        </div>
      </section>

      <section className="traditions section-pad" id="traditions">
        <div className="section-label light"><span>04</span><span className="label-line"></span><span>{t.artsTag}</span></div>
        <div className="section-heading-row"><div><h2>{t.artsTitle}</h2><p>{t.artsText}</p></div><Music2 className="heading-icon" size={42}/></div>
        <article className="shivaratri">
          <div className="shiva-art"><div className="shiva-moon">☾</div><div className="shiva-om">ॐ</div><div className="shiva-rays"></div></div>
          <div className="shiva-copy"><span className="card-kicker">✦ {t.soon}</span><h3>{t.shivaTitle}</h3><p>{t.shivaText}</p><div className="video-placeholder"><span className="play-circle"><Play size={17} fill="currentColor"/></span><span>{t.placeholder}</span></div><button className="text-link" onClick={()=>go('contact')}>{t.watch}<ArrowUpRight size={16}/></button></div>
        </article>
        <div className="arts-grid">{mediaCards.map((item,i)=>{const Icon=item.icon;return <motion.article key={item.key} className="art-card" whileHover={{y:-5}}><div className="art-top"><span>0{i+1}</span><Icon size={25}/></div><h3>{t[item.key]}</h3><p>{t[item.desc]}</p><span className="art-coming">{t.soon}</span></motion.article>})}</div>
        <div className="channel-banner"><div className="channel-icon"><Play size={22}/></div><div><b>{t.channel}</b><p>{t.mediaNote}</p></div><span className="coming-pill">{t.soon}</span></div>
      </section>

      <section className="donate section-pad" id="donate">
        <div className="donate-decoration">ॐ</div><div className="section-label"><span>05</span><span className="label-line"></span><span>{t.donateTag}</span></div>
        <div className="donate-grid"><div className="donate-copy"><h2>{t.donateTitle}</h2><p>{t.donateText}</p><div className="trust-note"><Heart size={18}/><span>{t.qrText}</span></div><button className="btn btn-dark" onClick={()=>go('contact')}>{t.donateBtn}<ArrowUpRight size={17}/></button></div><div className="qr-card"><div className="qr-frame"><div className="qr-placeholder"><div className="qr-corner c1"></div><div className="qr-corner c2"></div><div className="qr-corner c3"></div><div className="qr-center">ॐ</div><span className="qr-cross">＋</span><span className="qr-cross cross2">＋</span><span className="qr-cross cross3">＋</span></div></div><h3>{t.qrTitle}</h3><p>{t.qrText}</p></div></div>
      </section>

      <section className="contact section-pad" id="contact"><div className="contact-main"><div className="section-label light"><span>06</span><span className="label-line"></span><span>{t.nav[6]}</span></div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="location-line"><MapPin size={19}/><span>{t.location}</span></div><a className="btn btn-gold" href="https://share.google/l8r6EsAB4UoUe5Iix" target="_blank" rel="noreferrer">{t.map}<ArrowUpRight size={17}/></a></div><div className="contact-side"><div className="temple-stamp"><Landmark size={35}/><span>श्रद्धा • सेवा • संस्कृति</span><b>ॐ</b></div></div></section>
    </main>
    <footer className="footer"><div className="footer-brand"><span className="brand-mark"><Landmark size={22}/></span><div><b>{t.subtitle}</b><small>ALANGAR · MOODBIDRI</small></div></div><p>{t.footer}</p><button onClick={()=>go('home')} className="back-top">↑ <span>TOP</span></button><div className="copyright">© {new Date().getFullYear()} Sri Badagu Mahaganapati & Mahalingeshwara Temple</div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
