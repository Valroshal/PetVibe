import { useQuery } from '@tanstack/react-query';
type DogBreed = {
    id: string;
    url: string;
    breeds: { name: string }[];
};

const fetchDogBreeds = async(): Promise<DogBreed[]> => {
    const apiKey = process.env.DOGS_BREED_API_KEY || '';
    const apiURL = 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10';
    
    const response = await fetch(apiURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        redirect: 'follow',
      })

      if (!response.ok) {
        throw new Error('Failed to fetch dog breeds');
      }
    
      return response.json();

}

const useDogImage = () => {
    return useQuery({
        queryKey: ['dogImage'],
        queryFn: fetchDogBreeds,
    });
};

export default useDogImage;