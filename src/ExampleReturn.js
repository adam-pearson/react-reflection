// Search for string "London"
// https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${apiKey}
export const searchQuery = [
  {
    "name": "London",
    "local_names": {
      "af": "Londen",
      "ar": "لندن",
      "ascii": "London",
      "az": "London",
      "bg": "Лондон",
      "ca": "Londres",
      "da": "London",
      "de": "London",
      "el": "Λονδίνο",
      "en": "London",
      "eu": "Londres",
      "fa": "لندن",
      "feature_name": "London",
      "fi": "Lontoo",
      "fr": "Londres",
      "gl": "Londres",
      "he": "לונדון",
      "hi": "लंदन",
      "hr": "London",
      "hu": "London",
      "id": "London",
      "it": "Londra",
      "ja": "ロンドン",
      "la": "Londinium",
      "lt": "Londonas",
      "mk": "Лондон",
      "nl": "Londen",
      "no": "London",
      "pl": "Londyn",
      "pt": "Londres",
      "ro": "Londra",
      "ru": "Лондон",
      "sk": "Londýn",
      "sl": "London",
      "sr": "Лондон",
      "th": "ลอนดอน",
      "tr": "Londra",
      "vi": "Luân Đôn",
      "zu": "ILondon"
    },
    "lat": 51.5085,
    "lon": -0.1257,
    "country": "GB"
  },
  {
    "name": "London",
    "local_names": {
      "ar": "لندن",
      "ascii": "London",
      "bg": "Лондон",
      "de": "London",
      "en": "London",
      "fa": "لندن، انتاریو",
      "feature_name": "London",
      "fi": "London",
      "fr": "London",
      "he": "לונדון",
      "ja": "ロンドン",
      "lt": "Londonas",
      "nl": "London",
      "pl": "London",
      "pt": "London",
      "ru": "Лондон",
      "sr": "Лондон"
    },
    "lat": 42.9834,
    "lon": -81.233,
    "country": "CA"
  },
  {
    "name": "London",
    "local_names": {
      "ar": "لندن",
      "ascii": "London",
      "en": "London",
      "fa": "لندن، اوهایو",
      "feature_name": "London",
      "sr": "Ландон"
    },
    "lat": 39.8865,
    "lon": -83.4483,
    "country": "US",
    "state": "OH"
  },
  {
    "name": "London",
    "local_names": {
      "ar": "لندن",
      "ascii": "London",
      "en": "London",
      "fa": "لندن، کنتاکی",
      "feature_name": "London",
      "sr": "Ландон"
    },
    "lat": 37.129,
    "lon": -84.0833,
    "country": "US",
    "state": "KY"
  },
  {
    "name": "London",
    "local_names": {
      "ascii": "London",
      "ca": "Londres",
      "en": "London",
      "feature_name": "London"
    },
    "lat": 36.4761,
    "lon": -119.4432,
    "country": "US",
    "state": "CA"
  }
];

// Reverse Geocoding - Search for location by co-ordinates
// https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}
export const coordinateSearch = [
  {
    "name": "City of London",
    "local_names": {
      "ar": "مدينة لندن",
      "ascii": "City of London",
      "bg": "Сити",
      "ca": "La City",
      "de": "London City",
      "el": "Σίτι του Λονδίνου",
      "en": "City of London",
      "fa": "سیتی لندن",
      "feature_name": "City of London",
      "fi": "Lontoon City",
      "fr": "Cité de Londres",
      "gl": "Cidade de Londres",
      "he": "הסיטי של לונדון",
      "hi": "सिटी ऑफ़ लंदन",
      "id": "Kota London",
      "it": "Londra",
      "ja": "シティ・オブ・ロンドン",
      "la": "Civitas Londinium",
      "lt": "Londono Sitis",
      "pt": "Cidade de Londres",
      "ru": "Сити",
      "sr": "Сити",
      "th": "นครลอนดอน",
      "tr": "Londra Şehri",
      "vi": "Thành phố Luân Đôn",
      "zu": "Idolobha weLondon"
    },
    "lat": 51.5128,
    "lon": -0.0918,
    "country": "GB"
  },
  {
    "name": "London",
    "local_names": {
      "af": "Londen",
      "ar": "لندن",
      "ascii": "London",
      "az": "London",
      "bg": "Лондон",
      "ca": "Londres",
      "da": "London",
      "de": "London",
      "el": "Λονδίνο",
      "en": "London",
      "eu": "Londres",
      "fa": "لندن",
      "feature_name": "London",
      "fi": "Lontoo",
      "fr": "Londres",
      "gl": "Londres",
      "he": "לונדון",
      "hi": "लंदन",
      "hr": "London",
      "hu": "London",
      "id": "London",
      "it": "Londra",
      "ja": "ロンドン",
      "la": "Londinium",
      "lt": "Londonas",
      "mk": "Лондон",
      "nl": "Londen",
      "no": "London",
      "pl": "Londyn",
      "pt": "Londres",
      "ro": "Londra",
      "ru": "Лондон",
      "sk": "Londýn",
      "sl": "London",
      "sr": "Лондон",
      "th": "ลอนดอน",
      "tr": "Londra",
      "vi": "Luân Đôn",
      "zu": "ILondon"
    },
    "lat": 51.5085,
    "lon": -0.1257,
    "country": "GB"
  },
  {
    "name": "Islington",
    "local_names": {
      "ascii": "Islington",
      "az": "İslinqton",
      "fa": "ایزلینتن",
      "feature_name": "Islington",
      "fr": "District londonien d'Islington",
      "he": "איזלינגטון",
      "ja": "イズリントン",
      "ru": "Ислингтон"
    },
    "lat": 51.5362,
    "lon": -0.103,
    "country": "GB"
  },
  {
    "name": "Lewisham",
    "local_names": {
      "ascii": "Lewisham",
      "de": "London Borough of Lewisham",
      "en": "Lewisham",
      "feature_name": "Lewisham",
      "fi": "Lewisham",
      "fr": "Lewisham",
      "hu": "Lewisham kerület",
      "nl": "Lewisham",
      "no": "Lewisham",
      "ro": "Lewisham"
    },
    "lat": 51.4535,
    "lon": -0.018,
    "country": "GB"
  },
  {
    "name": "Islington",
    "local_names": {
      "ascii": "Islington",
      "de": "London Borough of Islington",
      "en": "Islington",
      "feature_name": "Islington",
      "fr": "Islington",
      "nl": "Islington",
      "no": "Islington",
      "ro": "Islington"
    },
    "lat": 51.547,
    "lon": -0.1094,
    "country": "GB"
  }
];

/**
 * One call API pulls:
 * 
 * - Current Weather
 * - Minute forecast for 1 hour
 * - Hourly forecast for 48 hours
 * - Daily forecast for 7 days
 * - National weather alerts
 * - Historical weather data for the previous 5 days
 * 
 * https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&exclude=minutely,hourly,alerts
 */
export const oneCall = {
  response: {
    data: {
      "lat": 53.5501,
      "lon": -2.4156,
      "timezone": "Europe/London",
      "timezone_offset": 0,
      "current": {
          "dt": 1637157247,
          "sunrise": 1637134770,
          "sunset": 1637165404,
          "temp": 10.98,
          "feels_like": 10.12,
          "pressure": 1022,
          "humidity": 76,
          "dew_point": 6.92,
          "uvi": 0.4,
          "clouds": 100,
          "visibility": 10000,
          "wind_speed": 3.58,
          "wind_deg": 266,
          "wind_gust": 5.81,
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ]
      },
      "daily": [
          {
              "dt": 1637146800,
              "sunrise": 1637134770,
              "sunset": 1637165404,
              "moonrise": 1637163540,
              "moonset": 1637126160,
              "moon_phase": 0.44,
              "temp": {
                  "day": 10.25,
                  "min": 7.68,
                  "max": 10.98,
                  "night": 9.27,
                  "eve": 9.85,
                  "morn": 8.06
              },
              "feels_like": {
                  "day": 9.31,
                  "night": 7.28,
                  "eve": 7.33,
                  "morn": 5.33
              },
              "pressure": 1022,
              "humidity": 76,
              "dew_point": 6.21,
              "wind_speed": 5.56,
              "wind_deg": 273,
              "wind_gust": 11.04,
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "light rain",
                      "icon": "10d"
                  }
              ],
              "clouds": 90,
              "pop": 0.42,
              "rain": 0.51,
              "uvi": 0.62
          },
          {
              "dt": 1637233200,
              "sunrise": 1637221281,
              "sunset": 1637251720,
              "moonrise": 1637250780,
              "moonset": 1637216940,
              "moon_phase": 0.47,
              "temp": {
                  "day": 12.09,
                  "min": 9.03,
                  "max": 12.74,
                  "night": 12.41,
                  "eve": 12.48,
                  "morn": 10.07
              },
              "feels_like": {
                  "day": 11.68,
                  "night": 11.69,
                  "eve": 11.87,
                  "morn": 9.33
              },
              "pressure": 1026,
              "humidity": 89,
              "dew_point": 10.28,
              "wind_speed": 5.94,
              "wind_deg": 253,
              "wind_gust": 12.78,
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "overcast clouds",
                      "icon": "04d"
                  }
              ],
              "clouds": 100,
              "pop": 0.1,
              "uvi": 0.29
          },
          {
              "dt": 1637319600,
              "sunrise": 1637307790,
              "sunset": 1637338038,
              "moonrise": 1637338200,
              "moonset": 1637307780,
              "moon_phase": 0.5,
              "temp": {
                  "day": 12.66,
                  "min": 11.86,
                  "max": 12.77,
                  "night": 11.86,
                  "eve": 12.25,
                  "morn": 12.57
              },
              "feels_like": {
                  "day": 11.76,
                  "night": 10.72,
                  "eve": 11.15,
                  "morn": 11.63
              },
              "pressure": 1029,
              "humidity": 68,
              "dew_point": 6.85,
              "wind_speed": 5.82,
              "wind_deg": 269,
              "wind_gust": 10.74,
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "overcast clouds",
                      "icon": "04d"
                  }
              ],
              "clouds": 100,
              "pop": 0,
              "uvi": 0.51
          },
          {
              "dt": 1637406000,
              "sunrise": 1637394298,
              "sunset": 1637424359,
              "moonrise": 1637425980,
              "moonset": 1637398500,
              "moon_phase": 0.53,
              "temp": {
                  "day": 10.68,
                  "min": 9.01,
                  "max": 11.57,
                  "night": 9.39,
                  "eve": 9.88,
                  "morn": 9.07
              },
              "feels_like": {
                  "day": 9.89,
                  "night": 6.77,
                  "eve": 7.3,
                  "morn": 7.24
              },
              "pressure": 1023,
              "humidity": 80,
              "dew_point": 7.34,
              "wind_speed": 5.39,
              "wind_deg": 269,
              "wind_gust": 11.38,
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "light rain",
                      "icon": "10d"
                  }
              ],
              "clouds": 74,
              "pop": 0.43,
              "rain": 0.39,
              "uvi": 0.51
          },
          {
              "dt": 1637492400,
              "sunrise": 1637480805,
              "sunset": 1637510683,
              "moonrise": 1637514240,
              "moonset": 1637489040,
              "moon_phase": 0.56,
              "temp": {
                  "day": 5.61,
                  "min": 4.87,
                  "max": 7.06,
                  "night": 4.87,
                  "eve": 5.74,
                  "morn": 5.12
              },
              "feels_like": {
                  "day": 1.87,
                  "night": 1.55,
                  "eve": 2.65,
                  "morn": 2.76
              },
              "pressure": 1021,
              "humidity": 62,
              "dew_point": -1.11,
              "wind_speed": 5.51,
              "wind_deg": 341,
              "wind_gust": 12.67,
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "light rain",
                      "icon": "10d"
                  }
              ],
              "clouds": 17,
              "pop": 0.5,
              "rain": 0.46,
              "uvi": 0.5
          },
          {
              "dt": 1637578800,
              "sunrise": 1637567310,
              "sunset": 1637597009,
              "moonrise": 1637603160,
              "moonset": 1637579100,
              "moon_phase": 0.59,
              "temp": {
                  "day": 6.21,
                  "min": 2.94,
                  "max": 6.21,
                  "night": 3.22,
                  "eve": 4,
                  "morn": 2.94
              },
              "feels_like": {
                  "day": 3.8,
                  "night": 1.4,
                  "eve": 2.02,
                  "morn": 0.14
              },
              "pressure": 1034,
              "humidity": 67,
              "dew_point": 0.55,
              "wind_speed": 3.36,
              "wind_deg": 0,
              "wind_gust": 9.38,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ],
              "clouds": 8,
              "pop": 0,
              "uvi": 1
          },
          {
              "dt": 1637665200,
              "sunrise": 1637653815,
              "sunset": 1637683339,
              "moonrise": 1637692800,
              "moonset": 1637668560,
              "moon_phase": 0.62,
              "temp": {
                  "day": 5.85,
                  "min": 2.47,
                  "max": 5.85,
                  "night": 2.8,
                  "eve": 3.33,
                  "morn": 2.47
              },
              "feels_like": {
                  "day": 5.85,
                  "night": 2.8,
                  "eve": 3.33,
                  "morn": 2.47
              },
              "pressure": 1032,
              "humidity": 63,
              "dew_point": -0.55,
              "wind_speed": 1.62,
              "wind_deg": 33,
              "wind_gust": 3.13,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ],
              "clouds": 9,
              "pop": 0,
              "uvi": 1
          },
          {
              "dt": 1637751600,
              "sunrise": 1637740318,
              "sunset": 1637769671,
              "moonrise": 1637783160,
              "moonset": 1637757240,
              "moon_phase": 0.65,
              "temp": {
                  "day": 5.24,
                  "min": 2.53,
                  "max": 5.24,
                  "night": 2.75,
                  "eve": 4.23,
                  "morn": 4.38
              },
              "feels_like": {
                  "day": 3.4,
                  "night": 0.34,
                  "eve": 2.22,
                  "morn": 2.98
              },
              "pressure": 1012,
              "humidity": 91,
              "dew_point": 3.93,
              "wind_speed": 2.39,
              "wind_deg": 353,
              "wind_gust": 6.78,
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "light rain",
                      "icon": "10d"
                  }
              ],
              "clouds": 100,
              "pop": 0.76,
              "rain": 2.64,
              "uvi": 1
          }
      ]
    }
  }
}

export const oneCallTrimmed = {
  response: {
    data: {
      "lat": 53.5501,
      "lon": -2.4156,
      "timezone": "Europe/London",
      "timezone_offset": 0,
      "current": {
          "dt": 1637157247,
          "sunrise": 1637134770,
          "sunset": 1637165404,
          "temp": 10.98,
          "feels_like": 10.12,
          "humidity": 76,
          "uvi": 0.4,
          "wind_speed": 3.58,
          "wind_deg": 266,
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ]
      },
      "daily": [
          {
              "dt": 1637146800,
              "sunrise": 1637134770,
              "sunset": 1637165404,
              "temp": {
                  "min": 7.68,
                  "max": 10.98,
              },
              "humidity": 76,
              "wind_speed": 5.56,
              "wind_deg": 273,
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "light rain",
                      "icon": "10d"
                  }
              ],
              "pop": 0.42,
              "uvi": 0.62
          },
          {
              "dt": 1637233200,
              "sunrise": 1637221281,
              "sunset": 1637251720,
              "temp": {
                  "min": 9.03,
                  "max": 12.74,
              },
              "humidity": 89,
              "wind_speed": 5.94,
              "wind_deg": 253,
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "overcast clouds",
                      "icon": "04d"
                  }
              ],
              "pop": 0.1,
              "uvi": 0.29
          },
          {
              "dt": 1637319600,
              "sunrise": 1637307790,
              "sunset": 1637338038,
              "temp": {
                  "min": 11.86,
                  "max": 12.77,
              },
              "humidity": 68,
              "wind_speed": 5.82,
              "wind_deg": 269,
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "overcast clouds",
                      "icon": "04d"
                  }
              ],
              "pop": 0,
              "uvi": 0.51
          },
          {
              "dt": 1637406000,
              "sunrise": 1637394298,
              "sunset": 1637424359,
              "temp": {
                  "min": 9.01,
                  "max": 11.57,
              },
              "humidity": 80,
              "wind_speed": 5.39,
              "wind_deg": 269,
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "light rain",
                      "icon": "10d"
                  }
              ],
              "pop": 0.43,
              "uvi": 0.51
          },
          {
              "dt": 1637492400,
              "sunrise": 1637480805,
              "sunset": 1637510683,
              "temp": {
                  "min": 4.87,
                  "max": 7.06,
              },
              "humidity": 62,
              "wind_speed": 5.51,
              "wind_deg": 341,
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "light rain",
                      "icon": "10d"
                  }
              ],
              "pop": 0.5,
              "uvi": 0.5
          },
          {
              "dt": 1637578800,
              "sunrise": 1637567310,
              "sunset": 1637597009,
              "temp": {
                  "min": 2.94,
                  "max": 6.21,
              },
              "humidity": 67,
              "wind_speed": 3.36,
              "wind_deg": 0,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ],
              "pop": 0,
              "uvi": 1
          },
          {
              "dt": 1637665200,
              "sunrise": 1637653815,
              "sunset": 1637683339,
              "temp": {
                  "min": 2.47,
                  "max": 5.85,
              },
              "humidity": 63,
              "wind_speed": 1.62,
              "wind_deg": 33,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ],
              "pop": 0,
              "uvi": 1
          },
          {
              "dt": 1637751600,
              "sunrise": 1637740318,
              "sunset": 1637769671,
              "temp": {
                  "min": 2.53,
                  "max": 5.24,
              },
              "humidity": 91,
              "wind_speed": 2.39,
              "wind_deg": 353,
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "light rain",
                      "icon": "10d"
                  }
              ],
              "pop": 0.76,
              "uvi": 1
          }
      ]
    }
  }
}