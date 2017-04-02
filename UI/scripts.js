var articlesService = (function () {
    var articles = [
        {
            id: "1",
            title: "Барселона начала войну с туристами: их стало слишком много",
            picture: "s-media-cache-ak0.pinimg.com/originals/e9/9b/6c/e99b6cd899682b51ee9b86b3cf2587b9.png",
            sumary: "В Барселоне живет 1,6 миллиона человек. В прошлом году город принял 32 миллиона туристов.",
            tags: "туризм, строительство",
            author: "Meduza",
            createdAt: new Date('2017-02-27'),
            content: "content"
        },
        {
            id: "2",
            title: "Минфин: эксперименты по отмене налогов приведут к разбалансированности бюджета",
            picture: "http://likiliks.ru/images/smile_high.png",
            sumary: "Эксперименты по отмене налогов приведут к разбалансированности бюджета, заявил на XVIII Ассамблее деловых кругов в Минске заместитель министра финансов Дмитрий Кийко.",
            tags: "Налоги, министерства, предприниматели",
            author: "Александр Ярошевич",
            createdAt: new Date('2016-02-27'),
            content: "content"
        },
        {
            id: "3",
            title: "Транспортного налога недостаточно. Минтранс ищет деньги на ремонт местных дорог",
            picture: "https://s-media-cache-ak0.pinimg.com/originals/d6/d1/41/d6d1417da4a57c0c4c1ae06c9cdac142.png",
            sumary: "Рабочая группа при Минтрансе определила, какие местные дороги в стране требуют ремонта — всего насчитали около 6 тысяч километров. Сейчас решается, из каких источников будут финансировать эти работы — средств транспортного налога для этого недостаточно. Об этом AUTO.TUT.BY рассказал первый заместитель министра транспорта и коммуникаций Беларуси Алексей Авраменко.",
            tags: "Авто, дороги, министерства, ГАИ, дороги, Транспорт",
            author: "Юлия Альгерчик",
            createdAt: new Date('2047-02-27'),
            content: "content"
        },
        {
            id: "4",
            title: 'Крэйг Вудкрофт: Сегодня "Локомотив" показал, почему они лучше нас',
            picture: "http://slottimania.com/dailyOffersImages/sadface.png",
            sumary: "Главный тренер минского «Динамо» Крэйг Вудкрофт прокомментировал поражение от ярославского «Локомотива» в пятом матче плей-офф КХЛ (1:4).",
            tags: "Хоккей, КХЛ",
            author: "ХК Динамо-Минск",
            createdAt: new Date('2014-02-27'),
            content: "content"
        },
        {
            id: "5",
            title: "Бывший и. о. начальника ГАИ Барановичей, обвиняемый в смертельном ДТП, признал вину полностью",
            picture: "http://4.bp.blogspot.com/-prEu_lFHh9g/Veym4MJZIjI/AAAAAAAAKnM/8BhPlPj7Vrs/s1600/87nc5hwn6v_2d6pow4twq_file.png",
            sumary: "Суд Ляховичского района 28 февраля начал рассмотрение уголовного дела по обвинению бывшего временно исполняющего обязанности начальника ОГАИ Барановичского ГОВД Андрея Волковыцкого в ДТП, которое унесло жизнь 36-летней женщины. На первом заседании выступит сторона обвинения, обвиняемый, а также заслушают свидетелей. Обвиняемый полностью признал свою вину.",
            tags: "ГАИ, ДТП, суды, криминал, правовая информация, Транспорт",
            author: "Станислав Коршунов",
            createdAt: new Date('2017-02-21'),
            content: "content"
        },
        {
            id: "6",
            title: "Первая половина марта будет по-апрельски теплой: ожидается до +15°С ",
            picture: "http://ulybkasalym.ru/favicon.ico",
            sumary: "Беларусь распрощалась с зимой максимально теплой погодой. Как ожидают синоптики, первая декада марта будет соответствовать климатической норме апреля. Но обольщаться не стоит: это месяц переходный, поэтому температура еще может снижаться. Подробнее TUT.BY рассказала главный синоптик Гидромета Светлана Рыбакова.",
            tags: "общество, Погода из первых уст, Погода, климат",
            author: "TUT.BY",
            createdAt: new Date('2017-02-23'),
            content: "content"
        },
        {
            id: "7",
            title: "Новость",
            picture: "http://www.arcadiaclub.com/ico/icone_alta_risoluzione/smile/png/faccina_occhiolino_256x256.png",
            sumary: "человеческой доброте и о том, как сбылась мечта человека из далекой пустыни на границе Индии с Пакистаном.Эта история о приключении казахстанцев, человеческой доброте и о том, как сбылась мечта человека из далекой пустыни на границе Индии с Пакистаном.Эта история о приключении казахстанцев",
            tags: "#tag1 #tag2",
            author: "Petr Pavlovich Semedeneev",
            createdAt: new Date('2017-02-22'),
            content: "content"
        },
        {
            id: "8",
            title: "Новость",
            picture: "http://www.arcadiaclub.com/ico/icone_alta_risoluzione/smile/png/faccina_occhiali_neri_256x256.png",
            sumary: "человеческой доброте и о том, как сбылась мечта человека из далекой пустыни на границе Индии с Пакистаном.Эта история о приключении казахстанцев, человеческой доброте и о том, как сбылась мечта человека из далекой пустыни на границе Индии с Пакистаном.Эта история о приключении казахстанцев",
            tags: "#tag1 #tag2",
            author: "Petr Pavlovich Semedeneev",
            createdAt: new Date('2017-04-27'),
            content: "content"
        },

        {
            id: "9",
            title: "Новость",
            picture: "http://www.golook-telefonia.it/wp-content/uploads/2016/02/Nuove-Faccine-Whatsapp-Significato-04-150x150.png",
            sumary: "человеческой доброте и о том, как сбылась мечта человека из далекой пустыни на границе Индии с Пакистаном.Эта история о приключении казахстанцев, человеческой доброте и о том, как сбылась мечта человека из далекой пустыни на границе Индии с Пакистаном.Эта история о приключении казахстанцев",
            tags: "#tag1 #tag2",
            author: "Petr Pavlovich Semedeneev",
            createdAt: new Date('2017-02-18'),
            content: "content"
        },
        {
            id: "10",
            title: "Новость",
            picture: "http://icon-icons.com/icons2/307/PNG/512/Emoji-Wink-Icon_34088.png",
            sumary: "человеческой доброте и о том, как сбылась мечта человека из далекой пустыни на границе Индии с Пакистаном.Эта история о приключении казахстанцев, человеческой доброте и о том, как сбылась мечта человека из далекой пустыни на границе Индии с Пакистаном.Эта история о приключении казахстанцев",
            tags: "#tag1 #tag2",
            author: "Petr Pavlovich Semedeneev",
            createdAt: new Date('2017-02-27'),
            content: "content"
        },
        {
            id: "11",
            title: "Взрыв на СТО в Минске, один человек пострадал",
            picture: "http://icon-icons.com/icons2/307/PNG/512/Emoji-Wink-Icon_34088.png",
            sumary: "На одной из столичных СТО 2 марта прогремел взрыв. По последним данным, пострадал один человек, сообщает СТВ.",
            tags: " Автомобили, ПДД, ГАИ",
            author: "TUT.BY",
            createdAt: new Date('2017-02-27'),
            content: "Как сообщили в МЧС, сообщение о взрыве в СТО на улице Карвата поступило в 10.11 утра 2 марта. Когда через пять минут работники МЧС прибыли на место, из здания СТО шел дым. По предварительной информации, произошла вспышка паров легковоспламеняющейся жидкости при проведении аргонной сварки бензобака"
        },
        {
            id: "12",
            title: "На одной из столичных СТО 2 марта прогремел взрыв. По последним данным, пострадал один человек, сообщает СТВ.",
            picture: "http://icon-icons.com/icons2/307/PNG/512/Emoji-Wink-Icon_34088.png",
            sumary: "Более двух лет назад в Минске начали реформировать систему ЖКХ. Все ли намеченное удалось реализовать и какие уже можно подвести итоги, рассказал «СБ Беларусь Сегодня»",
            tags: "TUT.BY, Минск",
            author: "TUT.BY",
            createdAt: new Date('2017-02-27'),
            content: "В результате вместо 141 организации в ЖКХ города осталось 58 и почти на четверть снизилась численность работников. Это минус 3,4 тысячи человек. За 2016 год получено 29 миллионов рублей экономии затрат. Уровень возмещения населением расходов на техническое обслуживание многоэтажных домов вырос вдвое: он был всего 39% в 2015-м и уже 89,7% по итогам 2016 года"
        },
        {
            id: "13",
            title: "Двое рабочих выпали из люльки у Академии управления. Один из них в больнице",
            picture: "http://icon-icons.com/icons2/307/PNG/512/Emoji-Wink-Icon_34088.png",
            sumary: "Утром 3 марта у входа в Академию управления в Минске при проведении ремонтных работ пострадал рабочий. На месте работает следственно-оперативная группа, сообщили TUT.BY в управлении Следственного комитета по Минску.",
            tags: " происшествияСтраны: БеларусьГорода: МинскМетки: Фотофакт",
            author: "TUT.BY",
            createdAt: new Date('2017-02-27'),
            content: "«В первой половине дня двое рабочих проводили возле главного входа ремонтные работы с использованием автокрана. В результате надлома стрелы из люльки крана выпали двое рабочих. Один из мужчин получил травмы и был госпитализирован»"
        },
        {
            id: "14",
            title: "Минстройархитектуры признал дома, в том числе дом с растяжкой уникальной застройкой",
            picture: "http://icon-icons.com/icons2/307/PNG/512/Emoji-Wink-Icon_34088.png",
            sumary: "Минстройархитектуры считает дома на проспекте Независимости напротив здания «Беларусьфильма» в Минске «уникальной исторической застройкой». Об этом говорится в письме из Министерства архитектуры и строительства",
            tags: " жилье, архитектура, белорусское кино, госорганы,",
            author: "Naviny.by",
            createdAt: new Date('2017-02-27'),
            content: "Как говорится в письме, «при реконструкции жилых домов № 103, 105, 107, 109 и 111 по проспекту Независимости в Минске строительство дополнительного этажа и мансарды не планируется»."
        },
        {
            id: "15",
            title: "Фотофакт. Самолет на Октябрьской площади в Минске",
            picture: "http://icon-icons.com/icons2/307/PNG/512/Emoji-Wink-Icon_34088.png",
            sumary: "Два дня в центре Минска можно было видеть самолет и вертолет. Самолет Як-52 и вертолет Ми-2 выставили на Октябрьской площади.",
            tags: "авиация, Беларусь,  Минск, Фотофакт",
            author: "TUT.BY",
            createdAt: new Date('2017-02-27'),
            content: "Эти образцы авиатехники появились в центре Минска в связи с празднованием 90-летия ДОСААФ."
        },
        {
            id: "16",
            title: "В Минске инспекторы задержали бесправника на Nissan. В ГАИ о нем сообщила жена",
            picture: "http://icon-icons.com/icons2/307/PNG/512/Emoji-Wink-Icon_34088.png",
            sumary: "В Минске инспекторы задержали бесправника на Nissan Altima. О том, что мужчина не имеет водительского удостоверения и поехал на автомобиле, сообщила его жена.",
            tags: " Автомобили, ПДД, ГАИ",
            author: "Ярослав Потрягин",
            createdAt: new Date('2017-02-27'),
            content: "Информация о предполагаемом нарушителе была передана сотрудникам ГАИ. Инспекторы остановили Nissan. Оказалось, что 40-летний водитель действительно не имеет прав (никогда не получал). Кроме того, выяснилось, что 2008 и 2011 годах мужчину задерживали за управление автомобилем в состоянии алкогольного опьянения"
        },
        {
            id: "17",
            title: "Нетрезвый отец на Mazda с детьми в салоне сбил женщину с ребенком на руках",
            picture: "http://icon-icons.com/icons2/307/PNG/512/Emoji-Wink-Icon_34088.png",
            sumary: "33-летний гродненец вечером пил у себя дома пиво, — кратко описали обстоятельства происшествия в ГАИ Гродненской области.",
            tags: " Автомобили, ПДД, ГАИ",
            author: "TUT.BY",
            createdAt: new Date('2017-02-27'),
            content: "33-летний гродненец вечером пил у себя дома пиво, — кратко описали обстоятельства происшествия в ГАИ"
        },
        {
            id: "18",
            title: "Нетрезвый отец на Mazda с детьми в салоне сбил женщину с ребенком на руках",
            picture: "http://icon-icons.com/icons2/307/PNG/512/Emoji-Wink-Icon_34088.png",
            sumary: "33-летний гродненец вечером пил у себя дома пиво, — кратко описали обстоятельства происшествия в ГАИ Гродненской области.",
            tags: " Автомобили, ПДД, ГАИ",
            author: "TUT.BY",
            createdAt: new Date('2017-02-27'),
            content: "33-летний гродненец вечером пил у себя дома пиво, — кратко описали обстоятельства происшествия в ГАИ"
        },
        {
            id: "19",
            title: "В Минске инспекторы задержали бесправника на Nissan. В ГАИ о нем сообщила жена",
            picture: "http://icon-icons.com/icons2/307/PNG/512/Emoji-Wink-Icon_34088.png",
            sumary: "В Минске инспекторы задержали бесправника на Nissan Altima. О том, что мужчина не имеет водительского удостоверения и поехал на автомобиле, сообщила его жена.",
            tags: " Автомобили, ПДД, ГАИ",
            author: "Ярослав Потрягин",
            createdAt: new Date('2017-02-27'),
            content: "Информация о предполагаемом нарушителе была передана сотрудникам ГАИ. Инспекторы остановили Nissan. Оказалось, что 40-летний водитель действительно не имеет прав (никогда не получал). Кроме того, выяснилось, что 2008 и 2011 годах мужчину задерживали за управление автомобилем в состоянии алкогольного опьянения"
        },
        {
            id: "20",
            title: "Двое рабочих выпали из люльки у Академии управления. Один из них в больнице",
            picture: "http://icon-icons.com/icons2/307/PNG/512/Emoji-Wink-Icon_34088.png",
            sumary: "Утром 3 марта у входа в Академию управления в Минске при проведении ремонтных работ пострадал рабочий. На месте работает следственно-оперативная группа, сообщили TUT.BY в управлении Следственного комитета по Минску.",
            tags: " происшествияСтраны: БеларусьГорода: МинскМетки: Фотофакт",
            author: "TUT.BY",
            createdAt: new Date('2017-02-27'),
            content: "«В первой половине дня двое рабочих проводили возле главного входа ремонтные работы с использованием автокрана. В результате надлома стрелы из люльки крана выпали двое рабочих. Один из мужчин получил травмы и был госпитализирован»"
        }
    ];

    var tags = ["tag1", "tag2", "tag7"];


    function isArticle(article) {
        if (typeof article.id !== 'string' || article.id.length <= 0) {
            console.log("1");
            return false;
        }
        if (typeof article.title !== 'string' || article.title.length <= 0 || article.title.length >= 100) {
            console.log("2");
            return false;
        }
        if (typeof article.picture !== 'string') {
            console.log("3");
            return false;
        }
        if (typeof article.sumary !== 'string' || article.sumary.length <= 0 || article.sumary.length >= 200) {
            console.log("4");
            return false;
        }

        if (typeof article.author !== 'string') {
            console.log("5");
            return false;
        }
        if (!(article.createdAt instanceof Date)) {
            console.log("6");
            return false;
        }
        if (typeof article.content !== 'string' || article.content.length <= 0) {
            console.log("7");
            return false;
        }
        if (typeof article.tags !== 'string') {
            console.log("8");
            return false;
        }
        // for (var i = 0; i < tags.length; i++) {
        //     if (article.tags.indexOf(tags[i]) === -1) {
        //         console.log("9");
        //         //return false;
        //     }
        // }
        console.log("10");
        return true;
    }

    function addArticle(article) {
        if (!isArticle(article)) {
            return false;
        }
        else {
            articles.push(article);
            return true;
        }
    }

    function removeArticle(id) {
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id === id) {
                articles.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    function editArticle(id, toEdit) {
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id === id) {
                var article = articles[i];

                if (toEdit.title != undefined) {
                    article.title = toEdit.title;
                }
                if(toEdit.sumary != undefined) {
                    article.sumary = toEdit.sumary;
                }
                if(toEdit.content != undefined) {
                    article.content = toEdit.content;
                }
                if(toEdit.tags != undefined) {
                    article.tags = toEdit.tags;
                }
                if(isArticle(article)){
                    articles.splice(i, 1, article);
                    return true;
                }

            }
            return false;
        }
    }

    function getArticle(index) {
        if (index < 0 || index > articles.length) {
            return false;
        } else {
            return articles[index];
        }
    }

    function containAuthor(article, author) {
        if (author === undefined) {
            return true;
        }
        if (article.author.toLowerCase() === author.toLowerCase()) {
            return true;
        }
        return false;
    }

    function containTags(article, tags) {
        if (tags === undefined) {
            return true;
        }
        for (var i = 0; i < tags.length; i++) {
            if (article.tags.toLowerCase().indexOf(tags[i].toLowerCase()) === -1) {
                return false;
            }
        }
        return true;
    }

    function inDateRange(article, startDate, endDate) {
        if (startDate === undefined && endDate === undefined) {
            return true;
        }
        if (startDate !== undefined && !(startDate instanceof Date)) {
            return false;
        }
        if (endDate !== undefined && !(endDate instanceof Date)) {
            return false;
        }
        if (startDate instanceof Date && endDate instanceof Date) {
            return true;
        }
        var flag = false;
        if (startDate instanceof Date) {
            if (article.createdAt > startDate) {
                flag = true;
            }
        }
        if (endDate instanceof Date) {
            if (article.createdAt < endDate) {
                flag = true;
            }
        }
        return flag;
    }

    function comparator(article1, article2) {
        if (article1.createdAt < article2.createdAt) {
            return 1;
        } else if (article1.createdAt > article2.createdAt) {
            return -1;
        } else {
            return 0;
        }
    }

    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;
        if (top > articles.length || top < 0) {
            top = articles.length;
        }
        if (skip < 0 || skip > articles.length) {
            skip = 0;
        }
        var newArticles = [];
        if (filterConfig != undefined) {
            for (var i = skip; i < top; i++) {
                if (
                    containAuthor(articles[i], filterConfig.author) &&
                    containTags(articles[i], filterConfig.tags) &&
                    inDateRange(articles[i], filterConfig.startDate, filterConfig.endDate)) {

                    newArticles.push(articles[i]);

                }
            }
        }
        else {
            newArticles = articles.slice(skip, skip + top)
        }
        newArticles.sort(comparator);
        return newArticles;
    }

    return {
        getArticles: getArticles,
        getArticle: getArticle,
        addArticle: addArticle,
        removeArticle: removeArticle,
        editArticle: editArticle
    };
}());

var articleRenderer = (function () {
    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;
    var USER = null;
    function init() {
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector('#ListOfNews');
        USER = document.querySelector('#authorized');
    }

    function insertArticlesInDOM(articles) {
        var articlesNodes = renderArticles(articles);
        articlesNodes.forEach(function (node) {
            ARTICLE_LIST_NODE.appendChild(node);
        });
    }

    function removeArticlesFromDom() {
        ARTICLE_LIST_NODE.innerHTML = '';
    }


    function renderArticles(articles) {
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }

    function renderArticle(article) {
        var template = ARTICLE_TEMPLATE;
        template.content.querySelector('.article-list-item-title').textContent = article.title;
        template.content.querySelector('.article-list-item-sumary').textContent = article.sumary;
        template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);
        template.content.querySelector('.article-list-item-tags').textContent = article.tags;
        //template.content.querySelector('.article-list-item-content').textContent = article.content;

        return template.content.querySelector('.pieceOfNews').cloneNode(true);
    }

    function removeArticle(id) {
        if(!articlesService.removeArticle(id)){
            return false;
        }
        ARTICLE_LIST_NODE.innerHTML = '';
        insertArticlesInDOM(articlesService.getArticles());
        return true;
    }

    function addArticle(article){

        if(!articlesService.addArticle(article)){
            return false;
        }
        ARTICLE_LIST_NODE.innerHTML = '';
        insertArticlesInDOM(articlesService.getArticles());
        return true;
    }

    function editArticle(id, article){
        if(!articlesService.editArticle(id,article)){
            return false;
        }
        ARTICLE_LIST_NODE.innerHTML = '';
        insertArticlesInDOM(articlesService.getArticles());
        return true;
    }

    function formatDate(d) {
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' +
            d.getHours() + ':' + d.getMinutes();
    }
    function deleteButtons(article){

    }
    function logOut(){
        if(USER === null){
            return false;
        }
        USER = null;
        var elements = document.querySelectorAll(".authorized");
        Array.prototype.forEach.call( elements, function( node ) {
            node.parentNode.removeChild( node );
        });
        document.querySelector("#authentification").querySelector('a').textContent = "Вход";
        return true;
    }

    function logIn(user){
        if(USER !== null){
            return false;
        }
        USER = user;
        document.querySelector("#authentification").querySelector('a').textContent = "Выход";
        var elements = document.querySelectorAll(".buttonInfo");


        var newLi = document.createElement('li');
        newLi.innerHTML = "<b1>" + user.toString() + "</b1>"
        newLi.className = ".header authorized";
        document.querySelector(".header").insertBefore(newLi, document.querySelector("#authentification"));

        newLi = document.createElement('li');
        newLi.innerHTML = '<li class="authorized"><a href="#exit">Добавить новость</a></li>'
        document.querySelector(".header").insertBefore(newLi,document.querySelector("#authentification"));




        Array.prototype.forEach.call( elements, function( node ) {
            var newElement = document.createElement('li');
            var newLink = document.createElement('a');
            newElement.className = "authorized";
            newLink.className = "buttonInArticle authorized";
            newLink.href = "#delete";
            var liText = document.createTextNode("Удалить");
            newLink.appendChild(liText);

            newLink.appendChild(liText);
            node.appendChild(newElement);
            node.appendChild(newLink);

            newElement = document.createElement('li');
            newLink = document.createElement('a');
            newLink.className = "buttonInArticle authorized";
            newElement.className = "authorized";
            newLink.href = "#edit";
            liText = document.createTextNode("Изменить");
            newLink.appendChild(liText);

            newLink.appendChild(liText);
            node.appendChild(newElement);
            node.appendChild(newLink);
        });
        return true;

    }
    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom,
        renderArticle: renderArticle,
        removeArticle: removeArticle,
        addArticle: addArticle,
        editArticle: editArticle,
        logOut: logOut,
        logIn: logIn
    };
}());


document.addEventListener('DOMContentLoaded', startApp);


function startApp() {
    articleRenderer.init();
    renderArticles();
}

function renderArticles(skip, top, filter) {
    articleRenderer.removeArticlesFromDom();
    var articles = articlesService.getArticles(skip, top, filter);
    articleRenderer.insertArticlesInDOM(articles);
}

function addArticle(article){
    var checker;
    if(articlesService.addArticle(article)){
        checker = true;
        console.log('11');
        renderArticles();
        console.log('12');
    }
    else{
        console.log('13');
        checker = false;
    }
    return checker;
}
function removeArticle(id){
    var checker;
    if(articlesService.removeArticle(id)){
        checker = true;
    }else{
        checker = false;
    }
    renderArticles();
    return checker;
}
function editArticle(id, article){
    var checker;
    if(articlesService.editArticle(id, article)){
        renderArticles();
        checker = true;
    } else {
        checker = false;
    }
    return checker;

}
