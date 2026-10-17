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

WhereIsIt klasöründeki güncel `mobile/app.json`, README ve mağaza listesi **MapBop** markasını kullanır. URL proje adıyla korunmuştur; eski ekran görüntülerindeki WhereIsIt adı sayfada açıklanır.

Pixel Heist gizlilik açıklaması mevcut geliştirme sürümüne dayanır: yerel kayıtlar ve simüle edilmiş reklam/satın alma sağlayıcıları. MapBop metni mevcut servis kodları ve depo gizlilik taslağına dayanır; analitik/reklam/satın alma yapılandırmalarının sürüme bağlı olduğu açıklanır. Gerçek mağaza sürümünden önce sağlayıcılar, veri kategorileri, saklama süreleri ve iletişim adresi o sürümle eşleştirilmelidir. Metinler mağaza onayı alındığı iddiası değildir.

Özel önizleme yayını mağazaların halka açık destek/gizlilik URL’lerinin yerine kullanılamaz. `oyrigames.com` üzerinden halka açık yayına geçildiğinde `site.origin` değiştirilip yeniden derlenmeli ve hosting erişimi uygun şekilde ayarlanmalıdır. Bu görev özel alan adı veya DNS ayarı yapmaz.

AdMob yayıncı kimliği doğrulanmadığı için `app-ads.txt` üretilmedi. Reklam hesabından alınan gerçek satır hosting köküne ayrıca eklenmelidir.

Başvurular:
- [Apple App Review — destek ve gizlilik bağlantıları](https://developer.apple.com/app-store/review/)
- [App Store Connect — gizlilik bilgileri](https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy/)
- [Google Play — hesap/veri silme açıklamaları](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en)

## Görsel kaynakları

`PixelHeist/assets/lobby/v2/museum_crew.png` tanıtım görseli, `assets/app_icon/` simgesi ve `artifacts/validation/` içindeki mevcut soygun, müze ve ana ekran görüntüleri kullanıldı.
`WhereIsIt/mobile/assets/images/level-island.png`, uygulama simgesi ve `WhereIsIt/store/screenshots/en/` ekranları kullanıldı.
Kaynak oyun depolarının lisansları ve üçüncü taraf hakları geçerlidir.

## Kontroller

`npm run check`, üretilen 36 içerik sayfasının, 18 eski adres yönlendirmesinin ve 404 sayfasının iç bağlantılarını, hedeflerini, görsellerini, başlıklarını, dil ve meta açıklamalarını denetler. Tarayıcı doğrulaması responsive yerleşim, filtre, dil geçişi, menü, SSS ve görsel büyütmeyi kapsar.

## Oyun sayfaları — 18 Ekim 2026

Her oyun sayfasında altı büyütülebilir ekran görüntüsü, iki görsel anlatım bölümü, üç adımlı oynanış açıklaması ve bölüm bağlantıları bulunur. Destek sayfaları kayıt, satın alma ve hata bildirimi konularında rehberlik sunar. Ek kaynaklar: `src/game-details.mjs`.

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
