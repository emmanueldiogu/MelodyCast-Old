# **WDDM121- An API Project - Research Paper**

![Website screenshot](./screenshot.png "Website screenshot")

<h1 align="center"><img src="./logo.png" alt="MELODYCAST"/></h1>

<p align="center">By</p>

<h2 align="center">Group 10</h2>

## Members

- [AISHA ABUBAKAR LADAN](https://github.com/Lolis007)

- [EMMANUEL DIOGU]()

- [DINH VINH PHUOC VAN]()

<h3 align="center">May 2024</h3>

## **INTRODUCTION**

In this research paper, we shall examine the APIs used in this project, explore their integration procedures, and elucidate the specific functionalities they offer. Additionally, we will provide insights into how React will be utilized to construct a dynamic and responsive website.

## **ABOUT MELODYCAST**

MelodyCast is a music app that selects songs inspired by the weather of the user's location. How the app works; When a user enters a city name in the search box, our app will fetch the weather data for that city. Based on the weather report, it will suggest music that matches the mood and dynamically adjusts the app’s background to reflect the current weather conditions.

## **ABOUT APIs USED**

### **Weather API (**[**OpenWeatherMap**](https://openweathermap.org/api)**):**

OpenWeatherMap is a commercial service that provides historical, current, and forecasted weather data via light-speed APIs (OpenWeather, 2014). It was founded by **Andre Kiselev** and launched in **April 2014** through OpenWeather Ltd; the official website is **_openweathermap.org._**

#### **Project Implementation:**

In the Curl code snippet below, we use the OpenWeather API with the name of the city the user has entered in the input box to return the weather of that location.

```bash
curl -X GET \\  
"<http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}>"
```

```json

{
    "coord": {
        "lon": -79.4163,
        "lat": 43.7001
    },
    "weather": [
        {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 288.16,
        "feels_like": 288.09,
        "temp_min": 286.55,
        "temp_max": 290.42,
        "pressure": 1015,
        "humidity": 91
    },
    "visibility": 1006,
    "wind": {
        "speed": 2.06,
        "deg": 260
    },
    "clouds": {
        "all": 100
    },
    "dt": 1716121194,
    "sys": {
        "type": 2,
        "id": 2043365,
        "country": "CA",
        "sunrise": 1716112085,
        "sunset": 1716165631
    },
    "timezone": -14400,
    "id": 6167865,
    "name": "Toronto",
    "cod": 200
}
```

### **Image API (**[**Pexels API**](https://www.pexels.com/api/)**):**

The Pexels API provides developers with a rich media collection for their applications or websites. The Pexels API is hosted on the [**Pexels API website**](https://www.pexels.com/api/) and was founded in **2014** by twin brothers **Bruno and Ingo Joseph** and **Daniel Frese** who joined in 2015 (Pexels, 2023). The entire Pexels platform is a collaborative effort by photographers, curators, and developers.

#### **Project Implementation:**

In the Curl code snippet below, we use the Pexels API with the weather condition obtained from the OpenWeather response to search for images corresponding to the current weather. Pexels returns multiple image sources, and then we use random numbers between 1 and 15 to select an image to change the app's background image.

```bash
curl -H "Authorization:${API_KEY}" \\  
"https://api.pexels.com/v1/search?query=${openWeather.weather.description}"
```

```json
{
    "id": 531767,
    "width": 6395,
    "height": 4266,
    "url": "<https://www.pexels.com/photo/white-clouds-531767/>",
    "photographer": "Pixabay",
    "photographer_url": "<https://www.pexels.com/@pixabay>",
    "photographer_id": 2659,
    "avg_color": "#80ABCD",
    "src": {
        "original": "<https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg>",
        "large2x": "<https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress\\u0026cs=tinysrgb\\u0026dpr=2\\u0026h=650\\u0026w=940>",
        "large": "<https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress\\u0026cs=tinysrgb\\u0026h=650\\u0026w=940>",
        "medium": "<https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress\\u0026cs=tinysrgb\\u0026h=350>",
        "small": "<https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress\\u0026cs=tinysrgb\\u0026h=130>",
        "portrait": "<https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress\\u0026cs=tinysrgb\\u0026fit=crop\\u0026h=1200\\u0026w=800>",
        "landscape": "<https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress\\u0026cs=tinysrgb\\u0026fit=crop\\u0026h=627\\u0026w=1200>",
        "tiny": "<https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress\\u0026cs=tinysrgb\\u0026dpr=1\\u0026fit=crop\\u0026h=200\\u0026w=280>"
    },
    "liked": false,
    "alt": "White Clouds"
}
```

### **iTunes Search API (**[**iTunes API**](https://performance-partners.apple.com/search-api)**):**

The Search API allows you to place search fields on your website to search for content within the iTunes Store and Apple Books Store. You can search for content, including books, movies, podcasts, music, music videos, audiobooks, and TV shows (Apple, 2024). Apple developed iTunes Search API with no publicly documented date of its founding.

### **Project Implementation:**

In the Curl code snippet below, we use the Search API with the weather condition obtained from the OpenWeather response to search for music corresponding to the current weather. We also add a limit to limit the result to 15 songs per page. Note: iTunes requires users to be authenticated but since we don’t want to delve into authentication for this project, we are using Heroku App CORS Anywhere which you can find at this [link](https://cors-anywhere.herokuapp.com/corsdemo).

```bash
curl -X GET \\  
"<https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search>? \\  
term=${openWeather.weather.description}&media=musicVideo&limit=15" \\  
\-H "X-Requested-With: XMLHttpRequest"
```

```json
{
    "wrapperType": "track",
    "kind": "song",
    "artistId": 909253,
    "collectionId": 120954021,
    "trackId": 120954025,
    "artistName": "Jack Johnson",
    "collectionName": "Sing-a-Longs and Lullabies for the Film Curious George",
    "trackName": "Upside Down",
    "collectionCensoredName": "Sing-a-Longs and Lullabies for the Film Curious George",
    "trackCensoredName": "Upside Down",
    "artistViewUrl": "<https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewArtist?id=909253>",
    "collectionViewUrl": "<https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=120954025&id=120954021&s=143441>",
    "trackViewUrl": "<https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=120954025&id=120954021&s=143441>",
    "previewUrl": "<http://a1099.itunes.apple.com/r10/Music/f9/54/43/mzi.gqvqlvcq.aac.p.m4p>",
    "artworkUrl60": "<http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.60x60-50.jpg>",
    "artworkUrl100": "<http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.100x100-75.jpg>",
    "collectionPrice": 10.99,
    "trackPrice": 0.99,
    "collectionExplicitness": "notExplicit",
    "trackExplicitness": "notExplicit",
    "discCount": 1,
    "discNumber": 1,
    "trackCount": 14,
    "trackNumber": 1,
    "trackTimeMillis": 210743,
    "country": "USA",
    "currency": "USD",
    "primaryGenreName": "Rock"
}
```  

## **References**

Apple. (2024, May 23). _iTunes Search API_. Apple Services Performance Partners. Retrieved May 23, 2024, from <https://performance-partners.apple.com/search-api>

OpenWeather. (2014, April 1). _Weather API_. OpenWeather. Retrieved May 18, 2024, from <https://openweathermap.org/api>

Pexels. (2023, December 26). _About Us_. Pexels. Retrieved May 23, 2024, from <https://www.pexels.com/about/>