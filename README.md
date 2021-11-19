# React Weather

Created with React, OpenWeatherMap, and MaterialUI, utilising Axios for API calls.

## Functionality


1. On the first load, it requests the user's geolocation from their device.
   - If the user accepts, it pulls their geolocation and then sets the weather for that location
   - If the user declines, it pulls a default location (Manchester) and the associated weather
2. The user can then flip between current weather and the weekly forecast (implemented with react-router-dom)
3. The user can also search for different locations. Each search item has a click handler which sends the search item's location data to the location state. Then, using useEffect, the weather is automatically pulled.
4. The user can return to their geolocation at will using the button in the top right. If the user declined the initial location request, no further ones will work, so this button will not show in those cases.
