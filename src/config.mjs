// Confirm these values before public release. Null store URLs render release status.
export const site = {
  name: 'Oyri Games', origin: 'https://oyrigames.com',
  supportEmail: 'support@oyrigames.com',
  updated: '2026-10-18',
};
export const games = [
  { id: 'pixelheist', name: 'Pixel Heist', color: '#e4b16c', genre: ['Bulmaca · Sanat · Strateji', 'Puzzle · Art · Strategy'],
    short: ['Her pikselin bir planı var.', 'Every pixel has a plan.'],
    description: ['Küçük dronlar, büyük bir soygun. Renkleri eşleştir, doğru sırayı bul ve sanat eserlerini piksel piksel koleksiyonuna kat.', 'Tiny drones. One ambitious heist. Match colors, find the right sequence, and collect works of art one pixel at a time.'],
    art: 'pixelheist-keyart.webp', icon: 'pixelheist-icon.webp',
    screens: [['pixelheist-play.webp','Soygun başlasın','The heist begins'],['pixelheist-gallery.webp','Kendi sanat galeriniz','Your own art gallery'],['pixelheist-home.webp','Bir sonraki görev','Your next mission'],['pixelheist-story.webp','Soygunun arkasındaki hikâye','The story behind the heist'],['pixelheist-detail.webp','Sanata yakından bak','A closer look at the art'],['pixelheist-crew.webp','Robot ekibinle tanış','Meet your robotic crew']],
    stores: {apple: null, google: null, steam: null},
    features: [
      ['01','Bir renk. Bir karar.','One color. One decision.','Sınırlı yuvalarını dikkatli kullan. Dronları doğru sırayla gönder, dıştaki pikselleri temizle ve içteki renklere yol aç.','Make every dock count. Send drones in the right order, clear the outer pixels, and open a path to the colors inside.'],
      ['02','Sanatı yeniden keşfet.','Rediscover the art.','Soygun tamamlandığında eser koleksiyonunun bir parçası olur. Galerinde eserleri incele ve piksel yorumlarını keşfet.','Each completed heist adds a work to your collection. Step into your gallery and discover its pixel interpretation.'],
      ['03','Küçük bir ekiple büyük işler.','A small crew. A big ambition.','Sanat soygunları etrafında şekillenen bir hikâyede ilerle; her görevde bulmaca ile koleksiyonunu birlikte büyüt.','Follow a story built around art heists, growing your collection with every puzzle you solve.']
    ],
    faqs: [
      ['Oyun nasıl oynanıyor?','How do I play?','Renkli taşıyıcıları boş yuvalara yerleştir. Dronlar erişebildikleri aynı renk pikselleri toplar. İç renkler için önce önlerindeki pikselleri temizlemelisin.','Place colored carriers in free docks. Drones collect matching pixels they can reach. Clear the outer pixels to reach the colors inside.'],
      ['İlerlemem nerede saklanır?','Where is my progress saved?','Mevcut sürümde ilerleme ve ayarlar cihazında saklanır. Uygulamayı silmeden veya cihaz değiştirmeden önce kayıtlarını korumayı unutma.','The current build stores progress and settings on your device. Take care of your save data before removing the app or changing devices.'],
      ['Nereden indirebilirim?','Where can I download it?','Mağaza bağlantıları henüz duyurulmadı. Resmî bağlantılar hazır olduğunda bu sayfaya eklenecek.','Store links have not been announced yet. Official links will be added here when available.']
    ]
  },
  { id: 'whereisit', name: 'MapBop', alias: 'WhereIsIt', color: '#78d8c8', genre: ['Coğrafya · Keşif · Bilgi', 'Geography · Discovery · Quiz'],
    short: ['Dünya, bir dokunuş uzağında.', 'The world is a tap away.'],
    description: ['Haritaya dokun, ülkeleri ve başkentleri keşfet. Günlük rotanı tamamla, pasaportunu damgalarla doldur ve aynı telefonda arkadaşına meydan oku.', 'Tap the map, discover countries and capitals. Complete your daily route, fill your passport with stamps, and challenge a friend on the same phone.'],
    art: 'mapbop-keyart.webp', icon: 'mapbop-icon.webp',
    screenshotSize: [1206, 2622], screenshotLanguage: 'tr', screenshotArchive: 'mapbop-screenshots-tr.zip',
    screens: [['mapbop-home.webp','Keşfe başla','Start exploring'],['mapbop-play.webp','Ülkeleri haritada tanı','Meet countries on the map'],['mapbop-race.webp','Birlikte yarışa hazırlan','Set up a race together'],['mapbop-passport.webp','Keşiflerini pasaportunda takip et','Track discoveries in your passport'],['mapbop-worlds.webp','Dünyaları keşfet','Explore the worlds'],['mapbop-levels.webp','Bölge ve seviyeni seç','Choose a region and level'],['mapbop-settings.webp','Oyunu kendine göre ayarla','Make the game your own']],
    stores: {apple: null, google: null, steam: null},
    features: [
      ['01','Ezberleme, keşfet.','Discover as you play.','Ülkeler ve başkentlerle tanış. Kolaydan zora ilerleyen harita sorularında konumları dokunarak öğren.','Meet countries and capitals. Learn their locations by tapping through map challenges that grow with you.'],
      ['02','Her gün yeni bir rota.','A new route every day.','Günlük tekrarlarla öğrendiklerini tazele. Günlük rotanı tamamla, serini sürdür ve yeni pasaport damgaları kazan.','Revisit what you have learned with daily reviews. Complete your route, build your streak, and collect passport stamps.'],
      ['03','Aynı telefon, tatlı rekabet.','One phone. Friendly rivalry.','Arkadaşınla aynı cihazda yarış. Harita bilginizi karşılaştırın ve bir sonraki keşfi birlikte yapın.','Race a friend on the same device. Put your map knowledge to the test and make your next discovery together.']
    ],
    faqs: [
      ['WhereIsIt ile MapBop aynı oyun mu?','Are WhereIsIt and MapBop the same game?','Evet. WhereIsIt proje adı; güncel oyun ve mağaza markası MapBop: Geography Game. Bu sayfa her iki adla ilgili bilgileri içerir.','Yes. WhereIsIt is the project name. The current game and store brand is MapBop: Geography Game. This page covers both names.'],
      ['Hesap açmam gerekiyor mu?','Do I need an account?','Hayır. İlerleme, ayarlar ve yarış geçmişi cihazında saklanır. Yarış için yazdığın oyuncu adları da cihazında kalır.','No. Your progress, settings, and race history stay on your device, as do the player names entered for a race.'],
      ['Mağazada ne zaman olacak?','When will it be in stores?','Kesin çıkış tarihi henüz duyurulmadı. App Store ve Google Play bağlantıları hazır olduğunda burada paylaşılacak.','A release date has not been announced. App Store and Google Play links will appear here when ready.']
    ]
  }
];
