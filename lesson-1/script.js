Vue.createApp({
  data() {
    return {
      firstname: "Aibol",
      secondname: "Bissenkul",
      lastname: "Amankosovich",
      users: [
        {
          id: 1,
          firstname: "Erlan",
          secondname: "Aubakirov",
        },
        {
          id: 2,
          firstname: "Azamat",
          secondname: "Bizhanov",
        },
        {
          id: 3,
          firstname: "Miras",
          secondname: "Kaidarov",
        },
        {
          id: 4,
          firstname: "Zhanerke",
          secondname: "Kappar",
        },
        {
          id: 5,
          firstname: "Asemai",
          secondname: "Abitaeva",
        },
      ],
      page: 1,
    };
  },
  computed: {
    fullName() {
      console.log("Вызвался computed");
      return `${this.firstname} ${this.secondname} ${this.lastname}`.toUpperCase();
    },
  },
  methods: {
    userFullName() {
      console.log("Вызвался methods");
      return `${this.users[this.page - 1].firstname} ${
        this.users[this.page - 1].secondname
      }`;
    },
    nazad() {
      console.log("Нажали назад");
      if (this.page > 1) {
        return this.page--;
      }
    },
    vpered() {
      console.log("Нажали вперед");
      if (this.page < this.users.length) {
        return this.page++;
      }
    },
    number(index) {
      console.log(`Нажали на ${index + 1}`);
      return (this.page = index + 1);
    },
  },
  watch: {
    page(newValue, oldValue) {
      console.log(`Новое значение:${newValue} | Старое значение:${oldValue}`);
    },
  }
}).mount("#app");
