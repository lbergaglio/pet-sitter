import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Stella",
    surname: "Bernardi",
    email: "bella@gmail.com",
    telephone: "1145713986",
    password: "1234",
    city: "Quilmes",
    adress: "Videla 674",
    isPetSitter: false,
    notifications: [],
    history: [],
  },
  {
    name: "Luciano",
    surname: "Bergaglio",
    email: "lbergaglio@yahoo.com.ar",
    telephone: "1168526988",
    password: "1234",
    city: "Ranelagh",
    adress: "Diagonal H 4160",
    isPetSitter: false,
    notifications: [],
    history: [],
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const {
        name,
        surname,
        email,
        telephone,
        password,
        city,
        adress,
        isPetSitter,
        notifications,
        history,
      } = action.payload;
      state.name = name;
      state.surname = surname;
      state.email = email;
      state.telephone = telephone;
      state.password = password;
      state.city = city;
      state.adress = adress;
      state.isPetSitter = isPetSitter;
      state.notifications = notifications;
      state.history = history;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    changeAdress: (state, action) => {
      state.adress = action.payload;
    },
  },
});

export const { addUser, changePassword, changeAdress } = userSlice.actions;
export default userSlice.reducer;
