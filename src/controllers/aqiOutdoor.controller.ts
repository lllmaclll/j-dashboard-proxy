import { fetchAQIOutdoorAll, fetchAQIOutdoorByStation } from "../services/aqiOutdoor.service";

export const getAQIOutdoor = async ({ query }: { query: Record<string, string> }) => {
  try {
    const stationID = query.stationID;
    const res = stationID ? await fetchAQIOutdoorByStation(stationID) : await fetchAQIOutdoorAll();

    return new Response(JSON.stringify(res.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error('Failed to fetch AQI data', error);
    return new Response("Failed to fetch AQI data", { status: 500 });
  }
};
