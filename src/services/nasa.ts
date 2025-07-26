const NASA_API_BASE = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'DEMO_KEY'; // NASA provides DEMO_KEY for development

export interface ApodResponse {
  title: string;
  url: string;
  explanation: string;
  date: string;
  media_type: string;
  copyright?: string;
  hdurl?: string;
}

export const fetchApod = async (date?: string): Promise<ApodResponse> => {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY,
      ...(date && { date })
    });
    
    const response = await fetch(`${NASA_API_BASE}?${params}`);
    
    if (!response.ok) {
      throw new Error(`NASA API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching APOD:', error);
    throw error;
  }
};

export const fetchApodRange = async (startDate: string, endDate: string): Promise<ApodResponse[]> => {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY,
      start_date: startDate,
      end_date: endDate
    });
    
    const response = await fetch(`${NASA_API_BASE}?${params}`);
    
    if (!response.ok) {
      throw new Error(`NASA API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching APOD range:', error);
    throw error;
  }
};