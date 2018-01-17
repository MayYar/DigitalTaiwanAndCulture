var data = [
  {
    author: "盧俊言",
    pic: "station",
    past: "台中驛",
    now: "台中車站",
    description: "台中火車站對異鄉學子的我來說一點也不陌生 每次返鄉時，我都會提早到台中火車站 所以周遭幾乎都逛了一遍 對比以前最大的不同或許就是多了現代化商店、餐廳在車站裡面 但錐形的建築，高聳的樓鐘甚至擁擠的人潮，繁華的站前依舊沒有改變 正所謂景物依舊，人事已非 古時的東西最能保存下來的即是他的樣貌 現在的台中火車站仍充滿著許多懷舊風味 鐵道便當尤其讓人印象深刻 彷彿不時提醒著人們以前台中火車站的味道。",
  },
  {
    author: "陳芸亭",
    pic: "tccip",
    past: "台中酒廠",
    now: "台中文創園區",
    description: "第一次去到文創園區，是因為自己系上的耶晚，時間是晚上所以沒有特別留意它的樣貌，只記得離學校蠻近的，之後社團活動有一次在那裡表演，才讓我真正認識它。一個人走在園區內，看看展覽，看看表演，時間不知不覺就過了，走到之前耶晚的場地，發現原來它是一間很老的建築，只是被我們借用來當耶晚場地，我想如果沒有進去過，我還真不相信老建築可以被這麼運用。慢慢逛完園區，很難想像這裡以前是座酒廠，台灣有很多酒廠，但有名的不外乎是金門酒廠，經過了這麼多年，酒廠已經被改成文創園區，但園區裡的那種氣息，是不會被改變的。"
  },
  {
    author: "陳芸亭",
    pic: "miyahara",
    past: "宮原眼科",
    now: "宮原眼科",
    description: "宮原眼科算是一個台中火車站附近著名的景點，說到台中，很少人不知道它。宮原眼科以前是台中市衛生院，現在變成是一個著名的吃冰景點，我有去過一次，價錢偏高，可能還是觀光客比較喜歡去，來了台中一年多，也只去過一次。大部分的人除了吃冰，還會進去裡面參觀，裡面的場景很有拍電影的感覺，讓人感覺很舒服，雖然宮原眼科已經由衛生院轉變成了觀光景點，但走到它的內部，會讓我感覺到一種溫暖，或許這就是老建築所留下來的吧。"
  },
  {
    author: "陳均騰",
    pic: "chb",
    past: "株式會社彰化銀行",
    now: "彰化銀行",
    description: "第一次經過彰化銀行是個偶然的機會，那是有記憶以來第一次來台中，走在自由路上，兩旁充斥著各式台中特產，但卻在無數家相同特產店之後，一棟與周遭完全不協調的建築映入眼簾，一開始，只覺得就像博愛特區的西式建築一樣是某個公家機關，看了旁邊的標示才發現原來是間銀行，但始終無法理解為什麼像這樣的建築物會是間銀行。這個問題隨著離開台中回到台北，也被漸漸遺忘，直到架構這個網站才又重拾起這個疑惑，並得到了解答。旅人經過了，會短暫駐足，又或拍張照片，當地人也只會當作平常生活的背景，歷史的遺跡，不變的繼續完成他的使命，人們也隨著時間往前走，但或許有一天我們會在某個偶然，再次回到曾經，如同我「經過」彰化銀行，再次來到台中。"
  },
  {
    author: "黃若蓁",
    pic: "river",
    past: "新盛溪",
    now: "綠川",
    description: "走在人來人往的綠川街 或許是因為靠近火車站，腳步一個個都是匆忙的，沒有誰為了什麼而駐足 兩旁雖然有些現代的商家，但一些老舊的騎樓依然矗立在那，成為最好的歲月痕跡 而徐嘉澤在<沿著綠川街>提到 原本的綠川東西街曾是繁華熱鬧的街道，電動遊樂業甚至多到像是便利商店般的存在，現今卻常常只是人們容易經過的通道 川中的水牛雕像就像是個時代轉移的見證者，見證著一切的改變"
  },
  {
    author: "蔡孟芸",
    pic: "lake",
    past: "雙閣亭",
    now: "湖心亭",
    description: "在一個因緣際會下，我來到了台中公園，一開始我並不知道原來湖心亭有如此久的歷史，只是覺得，夜晚的湖心亭就像這座城市的明燈，是許多情侶約會的去處，也是一個讓厭倦都市生活的人暫時放鬆的地方。現在瞭解了湖心亭的歷史，又有更深得感觸，他就像一個時間軸，見證了台中的今昔，見證了台中的古今，可能也見證了許多，人們的悲歡離合。"
  }
];

function loadData() {
  var timeline = $("#timeline");
  var item;
  for (var i = 0, len = data.length; i < len; i += 1) {
    var pic = $("<img class='img-circle img-responsive' src='img/tc/' onclick='changePic(event)'>")
    var title = $("<h4 class='subheading'>");
    var description = $("<p class='text-muted'>");
    if (i == 0 || i % 2 == 0 ) {
      item = $("<li>");
    } else {
      item = $("<li class='timeline-inverted'>");
    }
    pic.attr("src", pic.attr("src") + data[i].pic + "-old.jpg");
    pic.attr("index", i);
    title.text(data[i].past);

    var descText = data[i].description.substring(0, 100).replace(/\ /g, "<br>") + "...";

    description.html(descText);
    var link = $("<a>");
    link.attr("href", "/location.html?id=" + i);

    timeline.append(item
      .append($("<div class='timeline-image'>").append(pic))
      .append($("<div class='timeline-panel past'>")
        .append($("<div class='timeline-heading'>").append(title))
        .append($("<div class='timeline-body'>").append(link.append(description)))));
  }
}

function loadLocationData() {
  var query = window.location.search.substring(1);
  var index = query.split("=")[1];
  var info = data[index];
  $("#location-title").text(info.now + '/' + info.past);
  $("#location-author").text(info.author);
  $("#img-now").attr('src', 'img/tc/' + info.pic + '-overlap.jpg');

  var descText = info.description.replace(/\ /g, "<br>");
  $("#location-description").html(descText);
}

function changePic(e) {
  if ($(e.target).attr("src").indexOf("old") > -1) {
    $(e.target).attr("src", $(e.target).attr("src").split("-")[0] + ".jpg");
    $($(e.target).parent().parent()).find(".subheading").text(data[parseInt($(e.target).attr("index"), 10)].now);
  } else {
    $(e.target).attr("src", $(e.target).attr("src").split(".")[0] + "-old.jpg");
    $($(e.target).parent().parent()).find(".subheading").text(data[parseInt($(e.target).attr("index"), 10)].past);
  }
}
