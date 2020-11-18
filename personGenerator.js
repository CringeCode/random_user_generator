const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count" : 10,
        "list" : {
            "id_1": "Алиса",
            "id_2": "Анна",
            "id_3": "Виктория",
            "id_4": "Валентина",
            "id_5": "Екатерина",
            "id_6": "Дарья",
            "id_7": "Ксения",
            "id_8": "Марина",
            "id_9": "Татьяна",
            "id_10": "Юлия"  
        }
    }`,

    patronymicJson: `{
        "count" : 10,
        "list" : {
            "id_1": "Иванов",
            "id_2": "Петров",
            "id_3": "Сидоров",
            "id_4": "Максомов",
            "id_5": "Марков",
            "id_6": "Артемов",
            "id_7": "Дмитриев",
            "id_8": "Викторов",
            "id_9": "Егоров",
            "id_10": "Андреев"  
        }
    }`,

    dateJson: `{
        "count" : 12,
        "list" : {
            "id_1": ["января", "30"],
            "id_2": ["февраля", "28"],
            "id_3": ["марта", "31"],
            "id_4": ["апреля", "30"],
            "id_5": ["мая", "31"],
            "id_6": ["июня", "30"],
            "id_7": ["июля", "31"],
            "id_8": ["августа", "31"],
            "id_9": ["сентября", "30"],
            "id_10": ["октября", "31"],
            "id_11": ["ноября", "30"],
            "id_12": ["декабря", "31"]
        }
    }`,

    professionJson: `{
        "common" : {
            "1": "Врач",
            "2": "Инженер",
            "3": "Продовец",
            "4": "Кассир",
            "5": "Бухгалтер",
            "6": "Менеджер",
            "7": "Экономист",
            "8": "Депутат",
            "9": "Повар",
            "10": "Ученый",
            "11": "Дизайнер",
            "12": "Журналист",
            "13": "Полицейский",
            "14": "Консультант",
            "15": "Официант",
            "16": "Парикмахер",
            "17": "Программист",
            "18": "Супервайзер",
            "19": "Товаровед",
            "20": "Фермер"
        },
        "male" : {
            "21": "Солдат",
            "22": "Учитель",
            "23": "Медбрат",
            "24": "Слесарь",
            "25": "Уборщик",
            "26": "Ассистент",
            "27": "Военный",
            "28": "Актер",
            "29": "Грузчик",
            "30": "Сварщик"
        },
        "female" : {
            "21": "Медсестра",
            "22": "Учительница",
            "23": "Ассистентка",
            "24": "Актриса",
            "25": "Стюардесса",
            "26": "Уборщица",
            "27": "Горничная",
            "28": "Швея",
            "29": "Учительница",
            "30": "Сиделка"
        }
    }`,

    RANDOM_GENDER: '',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),


    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomGender: function () {
        this.randomIntNumber() == 0 ? this.RANDOM_GENDER = 'Мужчина' : this.RANDOM_GENDER = 'Женщина';
        return this.RANDOM_GENDER;
    },

    randomFirstName: function () {
        if (this.RANDOM_GENDER == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }
        else if(this.RANDOM_GENDER == 'Женщина') {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function () {

        let surname = this.randomValue(this.surnameJson);
        if (this.RANDOM_GENDER == 'Женщина') {
            surname += 'a';
        }
        return surname;
    },

    randomPatronymic: function () {
        let patronymic = this.randomValue(this.patronymicJson);
        this.RANDOM_GENDER == 'Мужчина' ? patronymic += 'ич' : patronymic += 'на';
        return patronymic;
    },

    randomBirthDate: function () {
        let year = this.randomIntNumber(2002, 1980);
        let dateArr = this.randomValue(this.dateJson);
        let month = dateArr[0];
        let day = this.randomIntNumber(dateArr[1], 1) ;

        return ', ' + day + ' ' + month + ' ' + year;
    },

    randomProfession: function(){
        const obj = JSON.parse(this.professionJson);
        let genderProf = obj.common;
        if (this.RANDOM_GENDER == 'Мужчина'){
            genderProf = Object.assign(genderProf, obj.male);
        }
        else if(this.RANDOM_GENDER == 'Женщина'){
            genderProf = Object.assign(genderProf, obj.female);
        }
        
        const count = Object.keys(genderProf).length;
        
        return genderProf[this.randomIntNumber(count, 1)];
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthDate = this.randomBirthDate();
        this.person.profession = this.randomProfession();

        return this.person;
    }
};