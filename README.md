# Oyri Games

Mobil ve gelecekteki PC/Steam oyunları için iki dilli stüdyo ve tanıtım sitesi.
Bağımlılık gerektirmeyen Node.js derlemesi, statik HTML, CSS ve JavaScript kullanır.
Oyun depoları değiştirilmez; seçilen görseller bu projeye kopyalanıp WebP olarak optimize edilmiştir.

## Çalıştırma

Node.js 20 veya üstü:

```sh
npm run build
npm run check
npm run dev
```

Yerel adres: http://127.0.0.1:4173
Üretim çıktısı: `dist/`. Dizinlerin `index.html` dosyaları sunulmalıdır; bulunamayan adresler için `404.html` kullanılmalıdır.
`dist/` herhangi bir statik hosting hizmetine taşınabilir. Sites yapılandırması `.openai/hosting.json` içindedir.

## İçerik ve bağlantılar

- `src/config.mjs`: oyun bilgileri, mağaza URL’leri, destek e-postası ve canonical site adresi.
- `src/pages.mjs`: sayfa şablonları ve Türkçe/İngilizce metinler.
- `src/style.css`: responsive tasarım, azaltılmış hareket ve klavye odak stilleri.
- `src/client.js`: mobil menü, platform filtreleri ve erişilebilir görsel galerisi.
- `assets/`: oyunların kendi proje klasörlerinden alınan görseller.

Varsayılan dil İngilizcedir ve kök dizinde sunulur. Türkçe `/tr/` altındadır. Önceki `/en/` adresleri İngilizce kök karşılıklarına yönlenir. Dil düğmesi mevcut sayfanın diğer dildeki karşılığına gider.

| Sayfa | Varsayılan İngilizce adres |
| --- | --- |
| Ana sayfa | `/` |
| Pixel Heist | `/pixelheist/` |
| MapBop (WhereIsIt) | `/whereisit/` |
| Stüdyo | `/about/` |
| Basın ve indirmeler | `/press/` |
| Destek merkezi | `/support/` |
| Site gizliliği | `/privacy/` |
| Site kullanım koşulları | `/terms/` |
| Oyuna özel destek | `/{oyun}/support/` |
| Oyuna özel gizlilik | `/{oyun}/privacy/` |
| Oyuna özel veri silme | `/{oyun}/delete-data/` |
| Oyuna özel gizlilik tercihleri | `/{oyun}/privacy-choices/` |
| Oyuna özel kullanım/satın alma bilgisi | `/{oyun}/terms/` |

## Yayın bilgileri

Destek adresi önerisi olarak `support@oyrigames.com` kullanıldı. Bu görev e-posta hesabı açmaz, DNS/MX kaydı oluşturmaz ve posta teslimini doğrulamaz. Canlı destek için posta kutusu ayrıca etkinleştirilmelidir. `hello@oyrigames.com` genel iletişim ve `press@oyrigames.com` basın için daha sonra yönlendirme olarak eklenebilir.

Mağaza adresleri doğrulanmadığından `null` tutulur ve ziyaretçiye “bağlantı yakında” durumu gösterilir. `stores.apple` ve `stores.google` doldurulduğunda gerçek bağlantı görünür. Steam bağlantısı veya yeni PC oyunu eklendiğinde platform kartı, filtre ve ilgili sayfa içeriği de güncellenmelidir. Henüz duyurulmayan bir Steam sürümü varmış gibi gösterilmez.

WhereIsIt klasöründeki güncel `mobile/app.json`, README ve mağaza listesi **MapBop** markasını kullanır. URL proje adıyla korunmuştur; güncel simülatör ekranları MapBop adını gösterir.

Gizlilik sayfaları, yayıncının bildirdiği mağaza sürümü planını temel alır: hesap/giriş, bulut kayıt ve ayrı oyun analitiği yok; reklam var. Reklam/mağaza verileri yerel oyun kayıtlarından ayrıdır. Her iki oyunda uygulama içi satın alma ve abonelik bulunacak; genel kitle hedefleniyor ve özellikle çocuklar için tasarlanmıyor. Destek yazışmaları ve silme talebi kayıtları, talep kapandıktan sonra en fazla 12 ay saklanır; yasal kayıt yükümlülükleri hariçtir. Metinler mağaza onayı alındığı iddiası değildir.

Özel önizleme yayını mağazaların halka açık destek/gizlilik URL’lerinin yerine kullanılamaz. `oyrigames.com` üzerinden halka açık yayına geçildiğinde `site.origin` değiştirilip yeniden derlenmeli ve hosting erişimi uygun şekilde ayarlanmalıdır. Bu görev özel alan adı veya DNS ayarı yapmaz.

AdMob yayıncı kimliği doğrulanmadığı için `app-ads.txt` üretilmedi. Reklam hesabından alınan gerçek satır hosting köküne ayrıca eklenmelidir.

Başvurular:
- [Apple App Review — destek ve gizlilik bağlantıları](https://developer.apple.com/app-store/review/)
- [App Store Connect — gizlilik bilgileri](https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy/)
- [Google Play — hesap/veri silme açıklamaları](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en)

## Görsel kaynakları

`PixelHeist/assets/lobby/v2/museum_crew.png` tanıtım görseli, `assets/app_icon/` simgesi ve `artifacts/validation/` içindeki mevcut soygun, müze ve ana ekran görüntüleri kullanıldı.
`WhereIsIt/mobile/assets/images/level-island.png` ve uygulama simgesi kullanıldı. MapBop ekranları 18 Ekim 2026 tarihinde açık iPhone 17 Pro simülatöründen alındı: ana, oynanış/bilgi kartı, yarış, pasaport, dünyalar, seviyeler ve ayarlar. Türkçe sürümden alınan yedi ekran, her iki site dilinde de dil bilgisi açıklamasıyla gösterilir. WebP sürümleri tam 1206 × 2622 çözünürlükte optimize edilmiştir; basın sayfasındaki ZIP özgün PNG dosyalarını içerir.
Kaynak oyun depolarının lisansları ve üçüncü taraf hakları geçerlidir.

## Kontroller

`npm run check`, üretilen 36 içerik sayfasının, 18 eski adres yönlendirmesinin ve 404 sayfasının iç bağlantılarını, hedeflerini, görsellerini, başlıklarını, dil ve meta açıklamalarını denetler. Tarayıcı doğrulaması responsive yerleşim, filtre, dil geçişi, menü, SSS ve görsel büyütmeyi kapsar.

## Oyun sayfaları — 18 Ekim 2026

Pixel Heist sayfasında altı, MapBop sayfasında yedi büyütülebilir ekran görüntüsü, iki görsel anlatım bölümü, üç adımlı oynanış açıklaması ve bölüm bağlantıları bulunur. Destek sayfaları kayıt, satın alma ve hata bildirimi konularında rehberlik sunar. Ek kaynaklar: `src/game-details.mjs`.

App Store için tüm uygulamalarda **Support URL** ve **Privacy Policy URL** gereklidir. `/{oyun}/support/` ve `/{oyun}/privacy/` bu amaçla hazırlanmıştır. Pazarlama URL’si oyun ana sayfasıdır. Gizlilik tercihleri ve veri silme sayfaları ayrıca sunulur; hepsi her uygulama için zorunlu alanlar değildir. Hesap oluşturma eklenirse yalnızca web sayfası yeterli olmaz; Apple uygulama içinde hesap silmeyi başlatma olanağı ister. Kaynak: https://developer.apple.com/support/offering-account-deletion-in-your-app/

Önceki yayın adımı otomatik onay denetimi tarafından engellenmişti. Bu güncelleme yerel kaynakları ve `dist/` çıktısını yeniler; yeni yayın veya erişim anahtarı kullanımı denenmedi.

### App Store Connect adres eşlemesi

| Alan | Pixel Heist | MapBop |
| --- | --- | --- |
| Marketing URL | `/pixelheist/` | `/whereisit/` |
| Support URL | `/pixelheist/support/` | `/whereisit/support/` |
| Privacy Policy URL | `/pixelheist/privacy/` | `/whereisit/privacy/` |
| User Privacy Choices URL (isteğe bağlı) | `/pixelheist/privacy-choices/` | `/whereisit/privacy-choices/` |

Türkçe yerelleştirme için bu adreslere `/tr` öneki eklenir. Mağazaya girilirken tüm adresler halka açık gerçek site origin’i ile birleştirilmelidir.

## Tasarım yenilemesi — 18 Ekim 2026

`frontend-design`, `ui-ux-pro-max` ve `web-design-guidelines` ile yeni görsel sistem uygulandı.
Beceri aramasındaki siyah-beyaz/hareket yoğun öneri, resimli oyun dünyalarına uymadığı için seçilmedi.

- Tuval `#edf2f6`, kâğıt `#ffffff`, metin `#192c42`, ikincil metin `#536579`, ana eylem `#354ed0`, altın vurgu `#f4cf74`.
- Pixel Heist: eserleri ve gece müzesini destekleyen altın tonu. MapBop: ada/harita dünyasına uygun teal tonu.
- Başlıklar yerel Bricolage Grotesque, gövde metinleri yerel DM Sans. OFL lisansları `assets/fonts/` içinde tutulur.
- Ana odak: iki oyunun kapakları. Metinler, düğmeler ve kaynak bağlantıları bu odağa göre sade tutulur.
- Ana sayfa düzeni: solda kısa tanıtım, sağda iki oyun kapağı; aşağıda oyun koleksiyonu, stüdyo ve yardım bağlantıları.
- Oyun sayfaları: oyun kimliği ve kapak; oynanış/görsel anlatım; ekran galerisi; SSS ve oyuncu kaynakları.
- Stüdyo: iki oyun dünyasının kolajı, oyun yaklaşımı ve mevcut oyunlar.
- Destek/gizlilik: açık iletişim, okunabilir satır genişliği ve oyunlara özel kaynaklar.

```text
Ana sayfa
[ logo          oyunlar / stüdyo / basın / destek       EN / TR ]
[ kısa tanıtım ve ana eylem        Pixel Heist + MapBop kapakları ]
[ oyun koleksiyonu                platform filtreleri           ]
[ Pixel Heist                    MapBop                         ]
[ stüdyo görseli                 oyun yaklaşımı                 ]
[ destek                        basın kaynakları               ]
[ oyunlar / destek / gizlilik bağlantıları                       ]
```

`src/ui.mjs` ortak SVG simgelerini ve UI yardımcılarını, `src/shell.mjs` site çerçevesini,
`src/visual-pages.mjs` tanıtım sayfalarını, `src/pages.mjs` kaynak ve politika sayfalarını yönetir.
Kök dil İngilizce, Türkçe `/tr/` olarak korunur. Filtreler `?platform=`, galeri seçimi `?image=` ile adreslenebilir.
Galeride önceki/sonraki, yön tuşları, Escape, geri gezinme ve odak dönüşü desteklenir.

Doğrulama: 55 HTML dosyasında bağlantılar, meta bilgiler, dil karşılıkları, görseller ve oyun kaynakları;
375, 768, 1024 ve 1440 px genişliklerde ana sayfa, stüdyo, iki oyun, basın, destek ve gizlilik düzeni.
Kontrol edilen ana renk çiftleri 4.5:1 metin kontrastını geçer. Hareket azaltma tercihi desteklenir.

## Mağaza iletişim sayfaları

İngilizce sayfalar kök dizinde, Türkçe karşılıkları `/tr/` altındadır.

| Amaç | Pixel Heist | MapBop |
| --- | --- | --- |
| Support URL (App Store) | `/pixelheist/support/` | `/whereisit/support/` |
| Geliştirici iletişim | `/pixelheist/contact/` | `/whereisit/contact/` |
| Privacy Policy URL (her iki mağaza) | `/pixelheist/privacy/` | `/whereisit/privacy/` |
| User Privacy Choices (Apple’da isteğe bağlı) | `/pixelheist/privacy-choices/` | `/whereisit/privacy-choices/` |
| Veri silme açıklamaları | `/pixelheist/delete-data/` | `/whereisit/delete-data/` |
| Kullanım/satın alma bilgileri | `/pixelheist/terms/` | `/whereisit/terms/` |
| Marketing URL | `/pixelheist/` | `/whereisit/` |

Tablodaki yolların kalıcı alan adı `https://oyrigames.com` olacaktır. Genel geliştirici iletişimi `/contact/` adresindedir. Destek/gizlilik sayfaları oyun adını ve e-posta adresini içerir.
E-posta bağlantıları yalnızca kullanıcının posta uygulamasını açar; bir talebin gönderildiği veya verinin silindiği iddia edilmez.

`src/store-profile.mjs` mağazaya gönderilecek sürüme ilişkin sahibi tarafından doğrulanması gereken bilgileri tutar.
Yayıncı Esra Oyri (Türkiye), telefon ve adres bilgilerini kamuya açık site için sağladı; support@oyrigames.com posta kutusunun etkinliğini doğruladı. Kalıcı adres https://oyrigames.com olarak ayarlandı. Hesap/giriş yok, reklam var, ayrı analitik ve bulut kayıt yok. Her iki oyun için uygulama içi satın alma ve abonelik, genel kitle hedefi (özellikle çocuklara yönelik değil) ve talep kapandıktan sonra en fazla 12 aylık destek/silme talebi saklama süresi sahibi tarafından onaylandı. Yasal saklama gereklilikleri hariç tutulur. Reklam/mağaza kayıtları sağlayıcı kurallarına tabidir.

Alan adı HTTPS kontrolünde DNS çözülemedi. Mağazaya URL verilmeden önce alan adının doğru barındırmaya bağlanması, HTTPS ve tüm oyun sayfalarının kamuya açık erişimi doğrulanmalıdır.

Önemli uygulama eşleştirmesi: Pixel Heist deposundaki ticaret sağlayıcısı inceleme sırasında test/simülasyon sağlayıcısıydı; gerçek reklam/ödeme entegrasyonu gönderilen uygulamada doğrulanmalıdır. MapBop kodunda isteğe bağlı PostHog entegrasyonu mevcut; analitik kullanılmayacağı bildirildiğinden mağaza sürümünde devre dışı olduğu doğrulanmalıdır. MapBop satın alma servisi RevenueCat içeriyor. Bu web sitesi işi oyun projelerinin kodunu değiştirmez.

`npm run check` yerel site bütünlüğünü; `npm run check:store` ise mağaza hazırlığı için eksik bilgileri denetler.
İkinci komut, kamuya açık HTTPS erişimi ve gönderilen uygulama sürümlerinin beyanlarla eşleşmesi doğrulanana kadar bilinçli olarak başarısız olur. Hiçbir kontrol mağaza onayı garantisi değildir.

Web sayfaları, mağaza konsolundaki App Privacy/Data safety beyanlarının veya uygulama içi yükümlülüklerin yerini almaz.
Hesap oluşturma eklenirse Apple uygulama içinde silmeyi başlatma olanağı ister; Google Play ise uygulama içi ve dışarıdan erişilen bir silme yolu ister.
Bireysel geliştiricinin App Review ekibine konsolda verdiği özel inceleme iletişim bilgileri, kamuya açık web iletişiminden ayrıdır.
Kişisel telefon/adres yalnızca yayımlanması istenirse siteye eklenir; mağaza hesabı ve bölgesel trader bilgileri ilgili konsolda ayrıca değerlendirilir.

Kaynaklar:
- https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information/
- https://support.google.com/googleplay/android-developer/answer/10144311?hl=en
- https://support.google.com/googleplay/android-developer/answer/13327111?hl=en
- https://developer.apple.com/help/app-review/guideline-reference/5-1-1-account-deletion

Abonelik yönetimi kaynakları:
- https://support.apple.com/en-us/118428
- https://support.google.com/googleplay/answer/7018481?hl=en
- https://developer.apple.com/app-store/subscriptions/
