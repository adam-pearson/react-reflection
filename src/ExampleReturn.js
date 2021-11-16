// Pull location from IP address
// http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${apiKey}&q=${response}&language=en-GB
export const searchByIp = {
  "Version": 1,
  "Key": "329260",
  "Type": "City",
  "Rank": 31,
  "LocalizedName": "Manchester",
  "EnglishName": "Manchester",
  "PrimaryPostalCode": "M15 6",
  "Region": {
    "ID": "EUR",
    "LocalizedName": "Europe",
    "EnglishName": "Europe"
  },
  "Country": {
    "ID": "GB",
    "LocalizedName": "United Kingdom",
    "EnglishName": "United Kingdom"
  },
  "AdministrativeArea": {
    "ID": "MAN",
    "LocalizedName": "Manchester",
    "EnglishName": "Manchester",
    "Level": 1,
    "LocalizedType": "Metropolitan Borough",
    "EnglishType": "Metropolitan Borough",
    "CountryID": "GB"
  },
  "TimeZone": {
    "Code": "GMT",
    "Name": "Europe/London",
    "GmtOffset": 0,
    "IsDaylightSaving": false,
    "NextOffsetChange": "2022-03-27T01:00:00Z"
  },
  "GeoPosition": {
    "Latitude": 53.478,
    "Longitude": -2.245,
    "Elevation": {
      "Metric": {
        "Value": 58,
        "Unit": "m",
        "UnitType": 5
      },
      "Imperial": {
        "Value": 190,
        "Unit": "ft",
        "UnitType": 0
      }
    }
  },
  "IsAlias": false,
  "SupplementalAdminAreas": [
    {
      "Level": 0,
      "LocalizedName": "England",
      "EnglishName": "England"
    }
  ],
  "DataSets": [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "DailyPollenForecast",
    "ForecastConfidence",
    "FutureRadar",
    "MinuteCast",
    "Radar"
  ]
};


// Search for string "Manchester"
// http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=Manchester&language=en-GB
export const searchStringManchester = [
  {
    "Version": 1,
    "Key": "329260",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Manchester",
    "Country": {
      "ID": "GB",
      "LocalizedName": "United Kingdom"
    },
    "AdministrativeArea": {
      "ID": "MAN",
      "LocalizedName": "Manchester"
    }
  },
  {
    "Version": 1,
    "Key": "334459",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Manchester",
    "Country": {
      "ID": "US",
      "LocalizedName": "United States"
    },
    "AdministrativeArea": {
      "ID": "NH",
      "LocalizedName": "New Hampshire"
    }
  },
  {
    "Version": 1,
    "Key": "332246",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Manchester",
    "Country": {
      "ID": "US",
      "LocalizedName": "United States"
    },
    "AdministrativeArea": {
      "ID": "CT",
      "LocalizedName": "Connecticut"
    }
  },
  {
    "Version": 1,
    "Key": "2141612",
    "Type": "City",
    "Rank": 65,
    "LocalizedName": "Manchester",
    "Country": {
      "ID": "US",
      "LocalizedName": "United States"
    },
    "AdministrativeArea": {
      "ID": "MO",
      "LocalizedName": "Missouri"
    }
  },
  {
    "Version": 1,
    "Key": "335643",
    "Type": "City",
    "Rank": 65,
    "LocalizedName": "Manchester",
    "Country": {
      "ID": "US",
      "LocalizedName": "United States"
    },
    "AdministrativeArea": {
      "ID": "TN",
      "LocalizedName": "Tennessee"
    }
  },
  {
    "Version": 1,
    "Key": "2119492",
    "Type": "City",
    "Rank": 65,
    "LocalizedName": "Manchester",
    "Country": {
      "ID": "US",
      "LocalizedName": "United States"
    },
    "AdministrativeArea": {
      "ID": "VA",
      "LocalizedName": "Virginia"
    }
  },
  {
    "Version": 1,
    "Key": "34548",
    "Type": "City",
    "Rank": 75,
    "LocalizedName": "Manchester",
    "Country": {
      "ID": "BO",
      "LocalizedName": "Bolivia"
    },
    "AdministrativeArea": {
      "ID": "N",
      "LocalizedName": "Pando"
    }
  },
  {
    "Version": 1,
    "Key": "333030",
    "Type": "City",
    "Rank": 75,
    "LocalizedName": "Manchester",
    "Country": {
      "ID": "US",
      "LocalizedName": "United States"
    },
    "AdministrativeArea": {
      "ID": "IA",
      "LocalizedName": "Iowa"
    }
  },
  {
    "Version": 1,
    "Key": "331369",
    "Type": "City",
    "Rank": 75,
    "LocalizedName": "Manchester",
    "Country": {
      "ID": "US",
      "LocalizedName": "United States"
    },
    "AdministrativeArea": {
      "ID": "WA",
      "LocalizedName": "Washington"
    }
  },
  {
    "Version": 1,
    "Key": "336165",
    "Type": "City",
    "Rank": 85,
    "LocalizedName": "Manchester",
    "Country": {
      "ID": "US",
      "LocalizedName": "United States"
    },
    "AdministrativeArea": {
      "ID": "VT",
      "LocalizedName": "Vermont"
    }
  }
];

// Search for string "Man"
// http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=Man&language=en-GB
export const searchStringMan = [
  {
    "Version": 1,
    "Key": "253810",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Managua",
    "Country": {
      "ID": "NI",
      "LocalizedName": "Nicaragua"
    },
    "AdministrativeArea": {
      "ID": "MN",
      "LocalizedName": "Managua"
    }
  },
  {
    "Version": 1,
    "Key": "264885",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Manila",
    "Country": {
      "ID": "PH",
      "LocalizedName": "Philippines"
    },
    "AdministrativeArea": {
      "ID": "MNL",
      "LocalizedName": "Metropolitan Manila"
    }
  },
  {
    "Version": 1,
    "Key": "42471",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Manaus",
    "Country": {
      "ID": "BR",
      "LocalizedName": "Brazil"
    },
    "AdministrativeArea": {
      "ID": "AM",
      "LocalizedName": "Amazonas"
    }
  },
  {
    "Version": 1,
    "Key": "244163",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Mandalay",
    "Country": {
      "ID": "MM",
      "LocalizedName": "Myanmar"
    },
    "AdministrativeArea": {
      "ID": "04",
      "LocalizedName": "Mandalay"
    }
  },
  {
    "Version": 1,
    "Key": "2622750",
    "Type": "City",
    "Rank": 25,
    "LocalizedName": "Manhattan",
    "Country": {
      "ID": "US",
      "LocalizedName": "United States"
    },
    "AdministrativeArea": {
      "ID": "NY",
      "LocalizedName": "New York"
    }
  },
  {
    "Version": 1,
    "Key": "107719",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Manizales",
    "Country": {
      "ID": "CO",
      "LocalizedName": "Colombia"
    },
    "AdministrativeArea": {
      "ID": "CAL",
      "LocalizedName": "Caldas"
    }
  },
  {
    "Version": 1,
    "Key": "126814",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Mansoura",
    "Country": {
      "ID": "EG",
      "LocalizedName": "Egypt"
    },
    "AdministrativeArea": {
      "ID": "DK",
      "LocalizedName": "Dakahlia"
    }
  },
  {
    "Version": 1,
    "Key": "329260",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Manchester",
    "Country": {
      "ID": "GB",
      "LocalizedName": "United Kingdom"
    },
    "AdministrativeArea": {
      "ID": "MAN",
      "LocalizedName": "Manchester"
    }
  },
  {
    "Version": 1,
    "Key": "206050",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Manado",
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "SA",
      "LocalizedName": "North Sulawesi"
    }
  },
  {
    "Version": 1,
    "Key": "319151",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Manisa",
    "Country": {
      "ID": "TR",
      "LocalizedName": "Turkey"
    },
    "AdministrativeArea": {
      "ID": "45",
      "LocalizedName": "Manisa"
    }
  }
];

// Search for string "M"
// http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=M&language=en-GB
export const searchStringM = [
  {
    "Version": 1,
    "Key": "308526",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Madrid",
    "Country": {
      "ID": "ES",
      "LocalizedName": "Spain"
    },
    "AdministrativeArea": {
      "ID": "MD",
      "LocalizedName": "Madrid"
    }
  },
  {
    "Version": 1,
    "Key": "242560",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Mexico City",
    "Country": {
      "ID": "MX",
      "LocalizedName": "Mexico"
    },
    "AdministrativeArea": {
      "ID": "CMX",
      "LocalizedName": "México City"
    }
  },
  {
    "Version": 1,
    "Key": "294021",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Moscow",
    "Country": {
      "ID": "RU",
      "LocalizedName": "Russia"
    },
    "AdministrativeArea": {
      "ID": "MOW",
      "LocalizedName": "Moscow"
    }
  },
  {
    "Version": 1,
    "Key": "26216",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Melbourne",
    "Country": {
      "ID": "AU",
      "LocalizedName": "Australia"
    },
    "AdministrativeArea": {
      "ID": "VIC",
      "LocalizedName": "Victoria"
    }
  },
  {
    "Version": 1,
    "Key": "204842",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Mumbai",
    "Country": {
      "ID": "IN",
      "LocalizedName": "India"
    },
    "AdministrativeArea": {
      "ID": "MH",
      "LocalizedName": "Maharashtra"
    }
  },
  {
    "Version": 1,
    "Key": "58192",
    "Type": "City",
    "Rank": 13,
    "LocalizedName": "Maoming",
    "Country": {
      "ID": "CN",
      "LocalizedName": "China"
    },
    "AdministrativeArea": {
      "ID": "GD",
      "LocalizedName": "Guangdong"
    }
  },
  {
    "Version": 1,
    "Key": "58179",
    "Type": "City",
    "Rank": 13,
    "LocalizedName": "Meizhou",
    "Country": {
      "ID": "CN",
      "LocalizedName": "China"
    },
    "AdministrativeArea": {
      "ID": "GD",
      "LocalizedName": "Guangdong"
    }
  },
  {
    "Version": 1,
    "Key": "60974",
    "Type": "City",
    "Rank": 13,
    "LocalizedName": "Mianyang",
    "Country": {
      "ID": "CN",
      "LocalizedName": "China"
    },
    "AdministrativeArea": {
      "ID": "SC",
      "LocalizedName": "Sichuan"
    }
  },
  {
    "Version": 1,
    "Key": "253810",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Managua",
    "Country": {
      "ID": "NI",
      "LocalizedName": "Nicaragua"
    },
    "AdministrativeArea": {
      "ID": "MN",
      "LocalizedName": "Managua"
    }
  },
  {
    "Version": 1,
    "Key": "264885",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Manila",
    "Country": {
      "ID": "PH",
      "LocalizedName": "Philippines"
    },
    "AdministrativeArea": {
      "ID": "MNL",
      "LocalizedName": "Metropolitan Manila"
    }
  }
];

// Pull current conditions for Manchester
// http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&language=en-GB&details=true
export const currentConditions = [
    {
      "LocalObservationDateTime": "2021-11-11T10:07:00+00:00",
      "EpochTime": 1636625220,
      "WeatherText": "Cloudy",
      "WeatherIcon": 7,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": true,
      "Temperature": {
        "Metric": {
          "Value": 11.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 52,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RealFeelTemperature": {
        "Metric": {
          "Value": 11.5,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 53,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RealFeelTemperatureShade": {
        "Metric": {
          "Value": 11.5,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 53,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RelativeHumidity": 75,
      "IndoorRelativeHumidity": 42,
      "DewPoint": {
        "Metric": {
          "Value": 6.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 44,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Wind": {
        "Direction": {
          "Degrees": 203,
          "Localized": "SSW",
          "English": "SSW"
        },
        "Speed": {
          "Metric": {
            "Value": 7.9,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 4.9,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "WindGust": {
        "Speed": {
          "Metric": {
            "Value": 12.8,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 8,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "UVIndex": 1,
      "UVIndexText": "Low",
      "Visibility": {
        "Metric": {
          "Value": 16.1,
          "Unit": "km",
          "UnitType": 6
        },
        "Imperial": {
          "Value": 10,
          "Unit": "mi",
          "UnitType": 2
        }
      },
      "ObstructionsToVisibility": "",
      "CloudCover": 91,
      "Ceiling": {
        "Metric": {
          "Value": 610,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 2000,
          "Unit": "ft",
          "UnitType": 0
        }
      },
      "Pressure": {
        "Metric": {
          "Value": 1022,
          "Unit": "mb",
          "UnitType": 14
        },
        "Imperial": {
          "Value": 30.18,
          "Unit": "inHg",
          "UnitType": 12
        }
      },
      "PressureTendency": {
        "LocalizedText": "Steady",
        "Code": "S"
      },
      "Past24HourTemperatureDeparture": {
        "Metric": {
          "Value": 0.7,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 1,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "ApparentTemperature": {
        "Metric": {
          "Value": 13.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 57,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WindChillTemperature": {
        "Metric": {
          "Value": 11.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 52,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WetBulbTemperature": {
        "Metric": {
          "Value": 9,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 48,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Precip1hr": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "PrecipitationSummary": {
        "Precipitation": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "PastHour": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past3Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past6Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past9Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past12Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past18Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past24Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        }
      },
      "TemperatureSummary": {
        "Past6HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 7.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 46,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 11.1,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 52,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past12HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 7.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 46,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 11.1,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 52,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past24HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 7.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 46,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 11.3,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 52,
              "Unit": "F",
              "UnitType": 18
            }
          }
        }
      },
      "MobileLink": "http://www.accuweather.com/en/gb/manchester/m15-6/current-weather/329260?lang=en-gb",
      "Link": "http://www.accuweather.com/en/gb/manchester/m15-6/current-weather/329260?lang=en-gb"
    }
];

// Pull five day forecast for Manchester
// http://dataservice.accuweather.com/forecasts/v1/daily/5day/329260?apikey=8IkAMu7Km3GRRYAkhKSYD7ljbFl4Urfo&language=en-GB&details=true&metric=true
export const fiveDayForecastDummy = {
  "Headline": {
    "EffectiveDate": "2021-11-12T07:00:00+00:00",
    "EffectiveEpochDate": 1636700400,
    "Severity": 3,
    "Text": "Expect showery weather Friday morning until late on Friday night",
    "Category": "rain",
    "EndDate": "2021-11-13T07:00:00+00:00",
    "EndEpochDate": 1636786800,
    "MobileLink": "http://www.accuweather.com/en/gb/manchester/m15-6/daily-weather-forecast/329260?unit=c&lang=en-gb",
    "Link": "http://www.accuweather.com/en/gb/manchester/m15-6/daily-weather-forecast/329260?unit=c&lang=en-gb"
  },
  "DailyForecasts": [
    {
      "Date": "2021-11-12T07:00:00+00:00",
      "EpochDate": 1636700400,
      "Sun": {
        "Rise": "2021-11-12T07:28:00+00:00",
        "EpochRise": 1636702080,
        "Set": "2021-11-12T16:17:00+00:00",
        "EpochSet": 1636733820
      },
      "Moon": {
        "Rise": "2021-11-12T14:38:00+00:00",
        "EpochRise": 1636727880,
        "Set": "2021-11-13T00:16:00+00:00",
        "EpochSet": 1636762560,
        "Phase": "WaxingGibbous",
        "Age": 8
      },
      "Temperature": {
        "Minimum": {
          "Value": 10.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 12.7,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 6.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 10.3,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 6.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 10.3,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 1,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 7,
          "Unit": "C",
          "UnitType": 17
        },
        "Cooling": {
          "Value": 0,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "AirAndPollen": [
        {
          "Name": "AirQuality",
          "Value": 0,
          "Category": "Good",
          "CategoryValue": 1,
          "Type": "Ozone"
        },
        {
          "Name": "Grass",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Mold",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Ragweed",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Tree",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        }
      ],
      "Day": {
        "Icon": 12,
        "IconPhrase": "Showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light",
        "ShortPhrase": "Mostly cloudy, a little rain",
        "LongPhrase": "Mostly cloudy with a little rain",
        "PrecipitationProbability": 95,
        "ThunderstormProbability": 0,
        "RainProbability": 95,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 16.7,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 221,
            "Localized": "SW",
            "English": "SW"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 31.5,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 183,
            "Localized": "S",
            "English": "S"
          }
        },
        "TotalLiquid": {
          "Value": 4.5,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 4.5,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 2,
        "HoursOfRain": 2,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 96,
        "Evapotranspiration": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "SolarIrradiance": {
          "Value": 0.6,
          "Unit": "W/m²",
          "UnitType": 33
        }
      },
      "Night": {
        "Icon": 40,
        "IconPhrase": "Mostly cloudy w/ showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light",
        "ShortPhrase": "A passing shower or two",
        "LongPhrase": "Mostly cloudy with a brief shower or two",
        "PrecipitationProbability": 63,
        "ThunderstormProbability": 13,
        "RainProbability": 63,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 18.5,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 289,
            "Localized": "WNW",
            "English": "WNW"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 27.8,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 277,
            "Localized": "W",
            "English": "W"
          }
        },
        "TotalLiquid": {
          "Value": 4.1,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 4.1,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 2,
        "HoursOfRain": 2,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 90,
        "Evapotranspiration": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "SolarIrradiance": {
          "Value": 0,
          "Unit": "W/m²",
          "UnitType": 33
        }
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/gb/manchester/m15-6/daily-weather-forecast/329260?day=1&unit=c&lang=en-gb",
      "Link": "http://www.accuweather.com/en/gb/manchester/m15-6/daily-weather-forecast/329260?day=1&unit=c&lang=en-gb"
    },
    {
      "Date": "2021-11-13T07:00:00+00:00",
      "EpochDate": 1636786800,
      "Sun": {
        "Rise": "2021-11-13T07:30:00+00:00",
        "EpochRise": 1636788600,
        "Set": "2021-11-13T16:16:00+00:00",
        "EpochSet": 1636820160
      },
      "Moon": {
        "Rise": "2021-11-13T14:52:00+00:00",
        "EpochRise": 1636815120,
        "Set": "2021-11-14T01:34:00+00:00",
        "EpochSet": 1636853640,
        "Phase": "WaxingGibbous",
        "Age": 9
      },
      "Temperature": {
        "Minimum": {
          "Value": 6.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 12.5,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 6.7,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 12.4,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 6.7,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 12.4,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 1.2,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 9,
          "Unit": "C",
          "UnitType": 17
        },
        "Cooling": {
          "Value": 0,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "AirAndPollen": [
        {
          "Name": "AirQuality",
          "Value": 0,
          "Category": "Good",
          "CategoryValue": 1,
          "Type": "Ozone"
        },
        {
          "Name": "Grass",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Mold",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Ragweed",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Tree",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 1,
          "Category": "Low",
          "CategoryValue": 1
        }
      ],
      "Day": {
        "Icon": 8,
        "IconPhrase": "Dreary",
        "HasPrecipitation": false,
        "ShortPhrase": "Low clouds",
        "LongPhrase": "Low clouds",
        "PrecipitationProbability": 3,
        "ThunderstormProbability": 0,
        "RainProbability": 3,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 7.4,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 313,
            "Localized": "NW",
            "English": "NW"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 11.1,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 303,
            "Localized": "WNW",
            "English": "WNW"
          }
        },
        "TotalLiquid": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0,
        "HoursOfRain": 0,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 95,
        "Evapotranspiration": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "SolarIrradiance": {
          "Value": 0.7,
          "Unit": "W/m²",
          "UnitType": 33
        }
      },
      "Night": {
        "Icon": 38,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false,
        "ShortPhrase": "Areas of low clouds",
        "LongPhrase": "Areas of low clouds",
        "PrecipitationProbability": 3,
        "ThunderstormProbability": 0,
        "RainProbability": 3,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 5.6,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 20,
            "Localized": "NNE",
            "English": "NNE"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 9.3,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 46,
            "Localized": "NE",
            "English": "NE"
          }
        },
        "TotalLiquid": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0,
        "HoursOfRain": 0,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 76,
        "Evapotranspiration": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "SolarIrradiance": {
          "Value": 0,
          "Unit": "W/m²",
          "UnitType": 33
        }
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/gb/manchester/m15-6/daily-weather-forecast/329260?day=2&unit=c&lang=en-gb",
      "Link": "http://www.accuweather.com/en/gb/manchester/m15-6/daily-weather-forecast/329260?day=2&unit=c&lang=en-gb"
    },
    {
      "Date": "2021-11-14T07:00:00+00:00",
      "EpochDate": 1636873200,
      "Sun": {
        "Rise": "2021-11-14T07:32:00+00:00",
        "EpochRise": 1636875120,
        "Set": "2021-11-14T16:14:00+00:00",
        "EpochSet": 1636906440
      },
      "Moon": {
        "Rise": "2021-11-14T15:04:00+00:00",
        "EpochRise": 1636902240,
        "Set": "2021-11-15T02:49:00+00:00",
        "EpochSet": 1636944540,
        "Phase": "WaxingGibbous",
        "Age": 10
      },
      "Temperature": {
        "Minimum": {
          "Value": 6.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 12,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 8.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 11.7,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 8.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 11.7,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 1,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 9,
          "Unit": "C",
          "UnitType": 17
        },
        "Cooling": {
          "Value": 0,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "AirAndPollen": [
        {
          "Name": "AirQuality",
          "Value": 0,
          "Category": "Good",
          "CategoryValue": 1,
          "Type": "Ozone"
        },
        {
          "Name": "Grass",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Mold",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Ragweed",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Tree",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        }
      ],
      "Day": {
        "Icon": 8,
        "IconPhrase": "Dreary",
        "HasPrecipitation": false,
        "ShortPhrase": "Low clouds",
        "LongPhrase": "Low clouds",
        "PrecipitationProbability": 5,
        "ThunderstormProbability": 0,
        "RainProbability": 5,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 7.4,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 81,
            "Localized": "E",
            "English": "E"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 11.1,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 84,
            "Localized": "E",
            "English": "E"
          }
        },
        "TotalLiquid": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0,
        "HoursOfRain": 0,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 95,
        "Evapotranspiration": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "SolarIrradiance": {
          "Value": 0.7,
          "Unit": "W/m²",
          "UnitType": 33
        }
      },
      "Night": {
        "Icon": 36,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false,
        "ShortPhrase": "Partly cloudy",
        "LongPhrase": "Partly cloudy",
        "PrecipitationProbability": 8,
        "ThunderstormProbability": 0,
        "RainProbability": 8,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 3.7,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 112,
            "Localized": "ESE",
            "English": "ESE"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 7.4,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 103,
            "Localized": "ESE",
            "English": "ESE"
          }
        },
        "TotalLiquid": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0,
        "HoursOfRain": 0,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 66,
        "Evapotranspiration": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "SolarIrradiance": {
          "Value": 0,
          "Unit": "W/m²",
          "UnitType": 33
        }
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/gb/manchester/m15-6/daily-weather-forecast/329260?day=3&unit=c&lang=en-gb",
      "Link": "http://www.accuweather.com/en/gb/manchester/m15-6/daily-weather-forecast/329260?day=3&unit=c&lang=en-gb"
    },
    {
      "Date": "2021-11-15T07:00:00+00:00",
      "EpochDate": 1636959600,
      "Sun": {
        "Rise": "2021-11-15T07:34:00+00:00",
        "EpochRise": 1636961640,
        "Set": "2021-11-15T16:13:00+00:00",
        "EpochSet": 1636992780
      },
      "Moon": {
        "Rise": "2021-11-15T15:15:00+00:00",
        "EpochRise": 1636989300,
        "Set": "2021-11-16T04:02:00+00:00",
        "EpochSet": 1637035320,
        "Phase": "WaxingGibbous",
        "Age": 11
      },
      "Temperature": {
        "Minimum": {
          "Value": 6.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 11.4,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 7.6,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 12.4,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 7.6,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 12.4,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 1.8,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 9,
          "Unit": "C",
          "UnitType": 17
        },
        "Cooling": {
          "Value": 0,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "AirAndPollen": [
        {
          "Name": "AirQuality",
          "Value": 0,
          "Category": "Good",
          "CategoryValue": 1,
          "Type": "Ozone"
        },
        {
          "Name": "Grass",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Mold",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Ragweed",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Tree",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        }
      ],
      "Day": {
        "Icon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": false,
        "ShortPhrase": "Areas of low clouds and fog",
        "LongPhrase": "Areas of low clouds and fog in the morning followed by afternoon low clouds",
        "PrecipitationProbability": 25,
        "ThunderstormProbability": 0,
        "RainProbability": 25,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 3.7,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 163,
            "Localized": "SSE",
            "English": "SSE"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 7.4,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 226,
            "Localized": "SW",
            "English": "SW"
          }
        },
        "TotalLiquid": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0,
        "HoursOfRain": 0,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 88,
        "Evapotranspiration": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "SolarIrradiance": {
          "Value": 0.9,
          "Unit": "W/m²",
          "UnitType": 33
        }
      },
      "Night": {
        "Icon": 8,
        "IconPhrase": "Dreary",
        "HasPrecipitation": false,
        "ShortPhrase": "Low clouds",
        "LongPhrase": "Low clouds",
        "PrecipitationProbability": 16,
        "ThunderstormProbability": 0,
        "RainProbability": 16,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 3.7,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 161,
            "Localized": "SSE",
            "English": "SSE"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 7.4,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 150,
            "Localized": "SSE",
            "English": "SSE"
          }
        },
        "TotalLiquid": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0,
        "HoursOfRain": 0,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 97,
        "Evapotranspiration": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "SolarIrradiance": {
          "Value": 0,
          "Unit": "W/m²",
          "UnitType": 33
        }
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/gb/manchester/m15-6/daily-weather-forecast/329260?day=4&unit=c&lang=en-gb",
      "Link": "http://www.accuweather.com/en/gb/manchester/m15-6/daily-weather-forecast/329260?day=4&unit=c&lang=en-gb"
    },
    {
      "Date": "2021-11-16T07:00:00+00:00",
      "EpochDate": 1637046000,
      "Sun": {
        "Rise": "2021-11-16T07:36:00+00:00",
        "EpochRise": 1637048160,
        "Set": "2021-11-16T16:11:00+00:00",
        "EpochSet": 1637079060
      },
      "Moon": {
        "Rise": "2021-11-16T15:26:00+00:00",
        "EpochRise": 1637076360,
        "Set": "2021-11-17T05:15:00+00:00",
        "EpochSet": 1637126100,
        "Phase": "WaxingGibbous",
        "Age": 12
      },
      "Temperature": {
        "Minimum": {
          "Value": 7.3,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 10.8,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 6.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 10.7,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 6.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 10.7,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 1.1,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 9,
          "Unit": "C",
          "UnitType": 17
        },
        "Cooling": {
          "Value": 0,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "AirAndPollen": [
        {
          "Name": "AirQuality",
          "Value": 0,
          "Category": "Good",
          "CategoryValue": 1,
          "Type": "Ozone"
        },
        {
          "Name": "Grass",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Mold",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Ragweed",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Tree",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        }
      ],
      "Day": {
        "Icon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": false,
        "ShortPhrase": "Areas of low clouds and fog",
        "LongPhrase": "Areas of low clouds and fog in the morning; overcast in the afternoon",
        "PrecipitationProbability": 15,
        "ThunderstormProbability": 0,
        "RainProbability": 15,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 5.6,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 221,
            "Localized": "SW",
            "English": "SW"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 11.1,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 235,
            "Localized": "SW",
            "English": "SW"
          }
        },
        "TotalLiquid": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0,
        "HoursOfRain": 0,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 94,
        "Evapotranspiration": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "SolarIrradiance": {
          "Value": 0.9,
          "Unit": "W/m²",
          "UnitType": 33
        }
      },
      "Night": {
        "Icon": 12,
        "IconPhrase": "Showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light",
        "ShortPhrase": "Cloudy, a little rain late",
        "LongPhrase": "Low clouds with a little rain late",
        "PrecipitationProbability": 62,
        "ThunderstormProbability": 0,
        "RainProbability": 62,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 7.4,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 211,
            "Localized": "SSW",
            "English": "SSW"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 14.8,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 236,
            "Localized": "SW",
            "English": "SW"
          }
        },
        "TotalLiquid": {
          "Value": 2.2,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 2.2,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 1,
        "HoursOfRain": 1,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 99,
        "Evapotranspiration": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "SolarIrradiance": {
          "Value": 0,
          "Unit": "W/m²",
          "UnitType": 33
        }
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/gb/manchester/m15-6/daily-weather-forecast/329260?day=5&unit=c&lang=en-gb",
      "Link": "http://www.accuweather.com/en/gb/manchester/m15-6/daily-weather-forecast/329260?day=5&unit=c&lang=en-gb"
    }
  ]
};
