const traditionCopy = {
  en: {
    shivaText: 'Explore the temple’s official Maha Shivaratri celebrations and festival videos.',
    videoNote: 'Official festival playlists are available below.',
    watch: 'Watch Maha Shivaratri playlist',
    mediaNote: 'Browse the temple’s official playlists below, or follow its social channels.',
  },
  kn: {
    shivaText: 'ದೇವಸ್ಥಾನದ ಅಧಿಕೃತ ಮಹಾಶಿವರಾತ್ರಿ ಆಚರಣೆಗಳು ಮತ್ತು ಹಬ್ಬದ ವೀಡಿಯೊಗಳನ್ನು ವೀಕ್ಷಿಸಿ.',
    videoNote: 'ಅಧಿಕೃತ ಹಬ್ಬದ ಪ್ಲೇಲಿಸ್ಟ್‌ಗಳು ಕೆಳಗೆ ಲಭ್ಯವಿವೆ.',
    watch: 'ಮಹಾಶಿವರಾತ್ರಿ ಪ್ಲೇಲಿಸ್ಟ್ ನೋಡಿ',
    mediaNote: 'ದೇವಸ್ಥಾನದ ಅಧಿಕೃತ ಪ್ಲೇಲಿಸ್ಟ್‌ಗಳನ್ನು ಕೆಳಗೆ ವೀಕ್ಷಿಸಿ ಅಥವಾ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮದಲ್ಲಿ ಅನುಸರಿಸಿ.',
  },
  hi: {
    shivaText: 'मंदिर के आधिकारिक महाशिवरात्रि उत्सव और आयोजन के वीडियो देखें।',
    videoNote: 'आधिकारिक उत्सव प्लेलिस्ट नीचे उपलब्ध हैं।',
    watch: 'महाशिवरात्रि प्लेलिस्ट देखें',
    mediaNote: 'नीचे मंदिर की आधिकारिक प्लेलिस्ट देखें या इसके सोशल चैनलों से जुड़ें।',
  },
};

const updateTraditionCopy = () => {
  const copy = traditionCopy[document.documentElement.lang] || traditionCopy.en;
  document.getElementById('shivtext').textContent = copy.shivaText;
  document.getElementById('videonote').textContent = copy.videoNote;
  document.getElementById('watch').textContent = copy.watch;
  document.getElementById('medianote').textContent = copy.mediaNote;
};

updateTraditionCopy();

document.getElementById('language')?.addEventListener('change', () => {
  window.setTimeout(updateTraditionCopy, 0);
});
