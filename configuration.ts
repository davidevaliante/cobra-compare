export interface Config {
    streamerId : string | number 
    streamerName : string
    api : string
    primaryColor : string
    secondaryColor : string
    fontString : string
    font : string
    youtubeMetatag? : string
    geoApi: string
}

export const configuration : Config = {
    streamerId : 3,
    streamerName : 'ilcobra',
    api : 'https://compare.topadsservices.com',
    primaryColor : '#2b2b2b',
    secondaryColor : '#ff6347',
    fontString : "https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap",
    font : 'Turret Road',
    geoApi : 'https://api.ipgeolocation.io/ipgeo'
}

