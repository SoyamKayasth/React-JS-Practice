# 🌤️ SkyCast

> A modern weather application built with **React.js** and **Material UI** that provides real-time weather information for any city using the OpenWeatherMap API.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Material_UI](https://img.shields.io/badge/Material_UI-007FFF?logo=mui)
![OpenWeather](https://img.shields.io/badge/API-OpenWeather-orange)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 About

SkyCast is a simple yet elegant weather application that allows users to search for any city and instantly view its current weather conditions.

The application fetches live weather data from the **OpenWeatherMap Weather API** and displays important weather information in a clean and responsive user interface designed with **Material UI**.

This project was built while learning **React.js**, focusing on component-based architecture, state management, API integration, and asynchronous programming.

---


## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Current temperature
- 🥶 Minimum & Maximum temperature
- 💧 Humidity
- 🌤️ Weather description
- 🤗 Feels Like temperature
- 🌍 Dynamic weather icon
- 🎨 Interactive UI using Material UI
- 📱 Responsive design
- ⚠️ Error handling for invalid city names

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- Material UI

### API

- OpenWeatherMap Current Weather API

```
https://api.openweathermap.org/data/2.5/weather
```

---

## 📂 Project Structure

```
SkyCast/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── SearchBox.jsx
│   │   ├── Weather.jsx
│   │   ├── WeatherInfo.jsx
│   │   └── weather.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/SkyCast.git
```

Navigate into the project

```bash
cd SkyCast
```

Install dependencies

```bash
npm install
```

Create a `.env` file in the root directory

```env
VITE_API_KEY=YOUR_OPENWEATHER_API_KEY
```

Start the development server

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file and add:

```env
VITE_API_KEY=YOUR_OPENWEATHER_API_KEY
```

You can get your free API key from:

https://openweathermap.org/api

---

## 📸 Screenshots

> Add screenshots of your application here.

```
Home Screen

Search Result

Weather Card
```

---

## 🚀 React Concepts Learned

This project helped me understand and practice several important React concepts, including:

- Functional Components
- JSX
- Component-Based Architecture
- Props
- useState Hook
- Event Handling
- Forms
- Controlled Components
- API Fetching
- Async / Await
- Conditional Rendering
- Environment Variables (.env)
- CSS Styling
- Material UI Components
- State Management
- Error Handling
- Rendering Dynamic Data

---

## 📚 Material UI Components Used

- TextField
- Button
- Card
- CardMedia
- CardContent
- Typography
- Icons

---

## 🌐 API Response Used

The application fetches weather information including:

- City Name
- Temperature
- Minimum Temperature
- Maximum Temperature
- Humidity
- Feels Like
- Weather Description
- Weather Icon

---

## 🔮 Future Improvements

- 📍 Current Location Weather
- 🌦️ 5-Day Forecast
- 🌙 Dark Mode
- ⭐ Favorite Cities
- 🕒 Search History
- 🌍 Multiple Language Support
- 🌡️ Celsius/Fahrenheit Toggle
- 🌅 Sunrise & Sunset Time
- 🌬️ Wind Speed
- 📊 Air Pressure
- 👀 Visibility Information
- ⏳ Loading Animation
- 🎭 Animated Weather Background

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Soyam Meghraj Kayasth**

GitHub: https://github.com/SoyamKayasth

LinkedIn: https://www.linkedin.com/in/soyam-kayasth/

---

⭐ If you found this project helpful, don't forget to give it a **Star** on GitHub!