type Publication = {
  title: string;
  links: { name: string; url: string }[];
};

type YearSection = {
  year: string;
  publications: Publication[];
};

const publications: YearSection[] = [
  {
    year: "2025",
    publications: [
      {
        title: "Язык мироздания — теория групп и теория категорий",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/879808/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/yazyik_mirozdaniya__teoriya_grupp_i_teoriya_kategoriy_12644786",
          },
          { name: "Дзен", url: "https://dzen.ru/a/aAkRjx0RRHq_iCL_" },
        ],
      },
      {
        title:
          "Лямбда, Лисп и Ложбан — в поисках утраченного Вавилона, или мой проект конструирования симметричного языка",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/902574/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/lyambda_lisp_i_lozhban__v_poiskakh_utrachennogo_vavilona_ili_moy_proekt_konstruirovaniya_simmetrichnogo_yazyika_chast_1_12684376",
          },
          { name: "Дзен", url: "https://dzen.ru/a/aBdWjj48oAugXiV8" },
        ],
      },
      {
        title:
          "Nomina nuda tenemus: открываем ли мы математические законы или просто придумываем их?",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/908288/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/nomina_nuda_tenemus_otkryivaem_li_myi_matematicheskie_zakonyi_ili_prosto_pridumyivaem_ikh_12746587",
          },
          { name: "Дзен", url: "https://dzen.ru/a/aCyhKbsrPTc31sKl" },
        ],
      },
      {
        title: "Отсутствие оснований и аксиома Бога",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/922460/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/otsutstvie_osnovaniy_i_aksioma_boga_12908192",
          },
          { name: "Дзен", url: "https://dzen.ru/a/aGQNLQmP-mts1yAl" },
        ],
      },
      {
        title:
          "Вселенная рендерится на глазах у смотрящего на неё солипсиста",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/924776/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/vselennaya_renderitsya_na_glazakh_u_smotryashchego_na_neyo_solipsista_13042426",
          },
          { name: "Дзен", url: "https://dzen.ru/a/aJNkjm4ywA1pRwTl" },
        ],
      },
      {
        title:
          "Гений Пифагора: почему в рекурсивно-вычисляемом клеточном автомате Вселенной наше сознание бессмертно?",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/945820/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/geniy_pifagora_chast_1_pochemu_v_rekursivnovyichislyaemom_kletochnom_avtomate_vselennoy_nashe_soznanie_bessmertno_13193126",
          },
          { name: "Дзен", url: "https://dzen.ru/a/aMr_CDqRshoGH6uD" },
        ],
      },
      {
        title:
          "Происхождение духов: как естественный отбор работает в мире информационных сущностей, и причём тут LLM и кибернетика",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/957816/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/proiskhozhdenie_dukhov_kak_estestvennyiy_otbor_rabotaet_v_mire_informatsionnyikh_sushchnostey_i_prichyom_tut_llm_i_kibernetika_13355587",
          },
          { name: "Дзен", url: "https://dzen.ru/a/aQc8Q5PMAhbhUz2L" },
        ],
      },
      {
        title:
          "Путешествие в пространство смыслов: как анатомия LLM поможет нам в работе со смыслами и поиске новой теории познания",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/962644/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/puteshestvie_v_prostranstvo_smyislov_kak_anatomiya_llm_pomozhet_nam_v_rabote_so_smyislami_i_poiske_novoy_teorii_poznaniya_13421512",
          },
          { name: "Дзен", url: "https://dzen.ru/a/aSCBgyZ41ysablrS" },
        ],
      },
      {
        title: "Есть ли у человека душа и можно ли перенести сознание в компьютер?",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/969442/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/est_li_u_cheloveka_dusha_i_mozhno_li_perenesti_soznanie_v_kompyuter_13443010",
          },
          { name: "Дзен", url: "https://dzen.ru/a/aSlRr6icEHs5kbQr" },
        ],
      },
      {
        title:
          "Метафизика, космопсихизм и перводвигатель: есть ли сознание у камней?",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/973108/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/metafizika_kosmopsikhizm_i_pervodvigatel_est_li_soznanie_u_kamney_13485998",
          },
          { name: "Дзен", url: "https://dzen.ru/a/aTmpeJfGVS9u68jW" },
        ],
      },
      {
        title:
          "Гравитация в пространстве смыслов, геометрия французской философии постмодерна и буддийский метамодерн",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/971526/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/gravitatsiya_v_prostranstve_smyislov_geometriya_frantsuzskoy_filosofii_postmoderna_i_buddiyskiy_metamodern_chast_1_13516944",
          },
          { name: "Дзен", url: "https://dzen.ru/a/aUU51fYBgkgkUlkq" },
        ],
      },
      {
        title: "Объектно-ориентированная философия",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/979190/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/obektnoorientirovannaya_filosofiya_13533704",
          },
          { name: "Дзен", url: "https://dzen.ru/a/aUv3s3jJpVfwvXWF" },
        ],
      },
    ],
  },
  {
    year: "2024",
    publications: [
      {
        title: "Размышления о мире. Часть 2: Панпсихизм",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/778948/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/razmyishleniya_o_mire_chast_2_panpsikhizm_11124243",
          },
          { name: "Дзен", url: "https://dzen.ru/a/Zcncl6o98R0soroX" },
        ],
      },
      {
        title: "Левиафаны, слоёное бытие и ноосферные бомбы",
        links: [
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/leviafanyi_sloyonoe_byitie_i_noosfernyie_bombyi_11200070",
          },
          { name: "Дзен", url: "https://dzen.ru/a/Zejf03cAeG-YsAa9" },
        ],
      },
      {
        title: "Смысл жизни с точки зрения программиста-буддиста",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/796049/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/smyisl_zhizni_s_tochki_zreniya_programmistabuddista_chast_1_11221936",
          },
          { name: "Дзен", url: "https://dzen.ru/a/ZfH5RtC2Hniys2zB" },
        ],
      },
      {
        title: "Нейросети, виртуальная реальность и Бог-солипсист",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/801117/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/neyroseti_virtualnaya_realnost_i_bogsolipsist_11250990",
          },
          { name: "Дзен", url: "https://dzen.ru/a/Zf1oX9SMfgUmdfHm" },
        ],
      },
      {
        title: "Двоичный код Вселенной и симметричные языки",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/804525/" },
          { name: "Дзен", url: "https://dzen.ru/a/ZiO8mfut0nvvY-0_" },
        ],
      },
      {
        title:
          "Как Достоевский и Ницше повлияли на мировоззрение Дарта Вейдера",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/809907/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/kak_fyodor_mikhaylovich_dostoevskiy_i_fridrikh_nitsshe_povliyali_na_mirovozzrenie_darta_veydera_11369391",
          },
          { name: "Дзен", url: "https://dzen.ru/a/ZjCea2aZSDarxdYV" },
        ],
      },
      {
        title: "Дзэн в искусстве программирования",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/809155/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/dzyen_v_iskusstve_programmirovaniya_11507271",
          },
          { name: "Дзен", url: "https://dzen.ru/a/ZmsycwQYWFjv4VlO" },
        ],
      },
      {
        title: "Вселенная как театр одного актёра",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/821613/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/vselennaya_kak_teatr_odnogo_aktyora_11528663",
          },
          { name: "Дзен", url: "https://dzen.ru/a/ZnQtrqN_lEeJWyfg" },
        ],
      },
      {
        title: "Как и зачем моё иллюзорное «я» пришло к буддизму",
        links: [
          { name: "Вастрик", url: "https://vas3k.club/post/25082/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/kak_i_zachem_moyo_illyuzornoe_ya_prishlo_k_buddizmu_chast_1_11683771",
          },
          { name: "Дзен", url: "https://dzen.ru/a/ZqJjlpvhXzWr4ky3" },
        ],
      },
      {
        title: "Почему я учусь видеть духов",
        links: [
          { name: "Вастрик", url: "https://vas3k.club/post/25923/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/pochemu_ya_uchus_videt_dukhov_11881304",
          },
          { name: "Дзен", url: "https://dzen.ru/a/ZwFS0UrHVi-eHgZF" },
        ],
      },
      {
        title:
          "Распределение IQ: как программисту выживать в мире, рассчитанном на дураков?",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/850172/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/raspredelenie_iq_kak_programmistu_vyizhivat_v_mire_rasschitannom_na_durakov_11927414",
          },
          { name: "Дзен", url: "https://dzen.ru/a/ZxN00cbsLig8rPUU" },
        ],
      },
      {
        title:
          "Квантовый ластик, Хорхе Луис Борхес и сказка, которая пишет сама себя",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/852870/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/kvantovyiy_lastik_khorkhe_luis_borkhes_i_skazka_kotoraya_pishet_sama_sebya_12049529",
          },
          { name: "Дзен", url: "https://dzen.ru/a/Z0BK1xQHIkbcHXPg" },
        ],
      },
    ],
  },
  {
    year: "2023",
    publications: [
      {
        title: "Cознание — величайшая загадка Вселенной",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/715088/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/coznanie__velichayshaya_zagadka_vselennoy_chast_1_9993314",
          },
          {
            name: "Дзен",
            url: "https://dzen.ru/media/sergeyshpadyrev/coznanie--velichaishaia-zagadka-vselennoi-63fdae4e303f1f5c2d2b1683",
          },
        ],
      },
      {
        title:
          "Неполнота и относительность — как Эйнштейн, Гейзенберг, Шрёдингер и Гёдель сокрушили Запад и построили мост на Восток",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/720396/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/nepolnota_i_otnositelnost__kak_yeynshteyn_geyzenberg_shryodinger_i_gyodel_sokrushili_zapad_i_postroili_most_na_vostok_chast_1_10596952",
          },
          {
            name: "Дзен",
            url: "https://dzen.ru/media/sergeyshpadyrev/nepolnota-i-otnositelnost--kak-einshtein-geizenberg-shredinger-i-gedel-sokrushili-zapad-i-postroili-most-na-vostok-64498d06773c3213fc04c599",
          },
        ],
      },
      {
        title: "Дзен и рекурсивные петли",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/718578/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/dzen_i_rekursivnyie_petli_10597009",
          },
          {
            name: "Дзен",
            url: "https://dzen.ru/media/sergeyshpadyrev/dzen-i-rekursivnye-petli-64eb1e0d79aeaf5303f54dd5",
          },
        ],
      },
      {
        title: "Эйлер, Чёрч и Мандельброт — этюд о красоте и математике",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/724768/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/yeyler_chyorch_i_mandelbrot__yetyud_o_krasote_i_matematike_10602137",
          },
          {
            name: "Дзен",
            url: "https://dzen.ru/media/sergeyshpadyrev/eiler-cherch-i-mandelbrot--etiud-o-krasote-i-matematike-65424e044e020949e13a5d0c",
          },
        ],
      },
      {
        title:
          "Искусственный интеллект, Большой Взрыв, чёрные дыры и филиокве — ищем ответ на вопрос, расколовший христианскую церковь",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/750620/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/iskusstvennyiy_intellekt_bolshoy_vzryiv_chyornyie_dyiryi_i_filiokve__ishchem_otvet_na_vopros_raskolovshiy_khristianskuyu_tserkov_chast_1_10613991",
          },
          {
            name: "Дзен",
            url: "https://dzen.ru/media/sergeyshpadyrev/iskusstvennyi-intellekt-bolshoi-vzryv-chernye-dyry-i-filiokve--iscem-otvet-na-vopros-raskolovshii-hristianskuiu-cerkov-64eb20148350ed3fd17cb0cf",
          },
        ],
      },
      {
        title: "О деревьях, растущих в Мультивселенной",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/761434/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/o_derevyakh_rastushchikh_v_multivselennoy_10661221",
          },
          {
            name: "Дзен",
            url: "https://dzen.ru/media/sergeyshpadyrev/o-dereviah-rastuscih-v-multivselennoi-65087b1c949fb602e4e909d8",
          },
        ],
      },
      {
        title:
          "Как управлять Вселенной, не покидая психиатрической лечебницы",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/764504/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/kak_upravlyat_vselennoy_ne_pokidaya_psikhiatricheskoy_lechebnitsyi_10738333",
          },
          {
            name: "Дзен",
            url: "https://dzen.ru/media/sergeyshpadyrev/kak-upravliat-vselennoi-ne-pokidaia-psihiatricheskoi-lechebnicy-652b9010d141d60240cbf30e",
          },
        ],
      },
      {
        title:
          "Слово Божие — функциональное программирование как основа Вселенной",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/767864/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/slovo_bozhie__funktsionalnoe_programmirovanie_kak_osnova_vselennoy_10785454",
          },
          {
            name: "Дзен",
            url: "https://dzen.ru/media/sergeyshpadyrev/slovo-bojie--funkcionalnoe-programmirovanie-kak-osnova-vselennoi-65424b291f26311882d4819d",
          },
        ],
      },
      {
        title: "Размышления о мире. Часть 1: Панкомпьютационализм",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/774950/" },
          {
            name: "Пикабу",
            url: "https://pikabu.ru/story/razmyishleniya_o_mire_chast_1_pankompyutatsionalizm_10894773",
          },
          {
            name: "Дзен",
            url: "https://dzen.ru/media/sergeyshpadyrev/razmyshleniia-o-mire-chast-1-pankompiutacionalizm-656f8eae904c575fc9782dfb",
          },
        ],
      },
    ],
  },
  {
    year: "2022",
    publications: [
      {
        title: "Вселенная Стивена Вольфрама",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/649483/" }],
      },
    ],
  },
  {
    year: "2021",
    publications: [
      {
        title:
          "Как египетский фараон Аменхотеп основал христианство, и почему оно стало идеальным мемом",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/536446/" }],
      },
      {
        title:
          "Как Пифагор, Платон и Будда предвосхитили самую смелую гипотезу современной науки",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/556716/" }],
      },
      {
        title:
          "Как я дважды пытался, но ни разу не смог получить высшее ИТ-образование в российской провинции",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/562476/" }],
      },
      {
        title: "Почему современная наука основана на вере?",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/563890/" }],
      },
      {
        title: "Как профессор MIT доказал существование Бога с помощью математики",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/567478/" }],
      },
      {
        title:
          "Как обрести бессмертие с помощью автомата Калашникова и диссертации американского физика по квантовой механике",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/566982/" }],
      },
      {
        title:
          "Почему «теорию всего» следует искать в информатике, и почему следующим Эйнштейном станет программист",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/570002/" }],
      },
      {
        title: "Есть ли сознание у нейронной сети?",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/570824/" }],
      },
      {
        title:
          "Буддийский физмат: как гёделевская неполнота и иррациональные числа породили нашу Вселенную",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/574558/" }],
      },
      {
        title: "Архитектура Вселенной, часть 1: Сознание",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/579960/" }],
      },
      {
        title: "Архитектура Вселенной, часть 2: Относительность",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/581120/" }],
      },
      {
        title: "Архитектура Вселенной, часть 3: Идея",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/587126/" }],
      },
      {
        title: "Панель управления собой: 10 простых шагов к порядку в вашей жизни",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/587598/" }],
      },
    ],
  },
  {
    year: "2020",
    publications: [
      {
        title: "Почему мы живем не в Матрице, а в матрице?",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/517888/" }],
      },
      {
        title: "Буддизм с точки зрения программиста",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/522438/" }],
      },
      {
        title:
          "Стивен Вольфрам: кажется, мы близки к пониманию фундаментальной теории физики, и она прекрасна",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/518206/" }],
      },
      {
        title:
          "Как я устал от JavaScript и создал свой собственный язык программирования",
        links: [
          { name: "Хабр", url: "https://habr.com/ru/articles/524962/" },
          {
            name: "dev.to",
            url: "https://dev.to/sergeyshpadyrev/why-i-wrote-my-own-programming-language-based-on-javascript-435g",
          },
        ],
      },
      {
        title:
          "Как я победил прокрастинацию, узнал свои истинные желания, поставил четкие цели и достиг их",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/531480/" }],
      },
      {
        title:
          "Как древние шумеры повлияли на значение скорости света, и почему Великая Французская Революция не смогла им помешать",
        links: [{ name: "Хабр", url: "https://habr.com/ru/articles/532758/" }],
      },
    ],
  },
];

export default function Publications() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Публикации</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        На этой странице собраны ссылки на все мои лонгрид-эссе на разных ресурсах.
      </p>

      {publications.map((section) => (
        <section key={section.year} style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            {section.year} год
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {section.publications.map((pub, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div style={{ marginBottom: "0.5rem" }}>{pub.title}</div>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  {pub.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#0066cc",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
