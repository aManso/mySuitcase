
export interface WeatherOutput {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    daily_units: {
        time: string,
        sunset: string,
        sunrise: string,
        temperature_2m_max: string,
        temperature_2m_min: string,
        weather_code: string,
        precipitation_probability_max: string
    },
    daily: {
        time: string[],
        sunset: string[],
        sunrise: string[],
        temperature_2m_max: number[],
        temperature_2m_min: number[],
        weather_code: number[],
        weather_code_object: OpenMeteoWeatherCode[],
        precipitation_probability_max: number[],
        wind_speed_10m_max: number[]
    }
}

export const maxAllowedDaysInAPI = 16;

export interface OpenMeteoWeatherCodeGroup {
    codes: number[];
    description: string;
    commonName: string;
}

export interface OpenMeteoWeatherCode {
    code: number;
    description: string;
    commonName: string;
}

export const OPEN_METEO_WEATHER_CODE_GROUPS: OpenMeteoWeatherCodeGroup[] = [
    { codes: [0], description: 'Clear weather', commonName: 'Clear' },
    {
        codes: [1, 2, 3],
        description: 'Partly cloudy, locally cloudy, overcast',
        commonName: 'Cloudy',
    },
    { codes: [45, 48], description: 'Fog and hoarfrost deposit', commonName: 'Fog, freezing fog' },
    {
        codes: [51, 53, 55],
        description: 'Drizzle not freezing, intensity light, moderate, heavy',
        commonName: 'Drizzle',
    },
    {
        codes: [56, 57],
        description: 'Drizzle freezing, intensity light, moderate to heavy',
        commonName: 'Freezing drizzle',
    },
    {
        codes: [61, 63, 65],
        description: 'Rain, intensity light, moderate, heavy',
        commonName: 'Rain',
    },
    {
        codes: [66, 67],
        description: 'Freezing rain, intensity light, heavy',
        commonName: 'Freezing rain',
    },
    {
        codes: [71, 73, 75],
        description: 'Snow, intensity light, moderate, heavy',
        commonName: 'Snow',
    },
    { codes: [77], description: 'Ice pellets', commonName: 'Ice pellets' },
    {
        codes: [80, 81, 82],
        description: 'Showers, intensity light, moderate, heavy',
        commonName: 'Showers',
    },
    {
        codes: [85, 86],
        description: 'Snow showers, intensity light, moderate to heavy',
        commonName: 'Snow showers',
    },
    {
        codes: [95],
        description: 'Thunderstorm, light to moderate, no hail',
        commonName: 'Thunderstorm',
    },
    {
        codes: [96],
        description: 'Thunderstorm, light to moderate, with hail',
        commonName: 'Thunderstorm with hail',
    },
    {
        codes: [99],
        description: 'Thunderstorm, heavy, with hail',
        commonName: 'Thunderstorm with hail',
    },
];

export const OPEN_METEO_WEATHER_CODES: OpenMeteoWeatherCode[] = OPEN_METEO_WEATHER_CODE_GROUPS
    .flatMap((group) => group.codes.map((code) => ({
        code,
        description: group.description,
        commonName: group.commonName,
    })));

export const OPEN_METEO_WEATHER_CODE_MAP: Record<number, OpenMeteoWeatherCode> =
    OPEN_METEO_WEATHER_CODES.reduce((acc, item) => {
        acc[item.code] = item;
        return acc;
    }, {} as Record<number, OpenMeteoWeatherCode>);

