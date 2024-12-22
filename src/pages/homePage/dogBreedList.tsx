import React from 'react';
import useDogImage from '../../server/dogBreedsApi';
type Dog = {
    id: string;
    url: string;
}

const DogImageList = () => {
  const { data, isLoading, error } = useDogImage();

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Dog Images</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {data!.map((dog: Dog) => (
          <img
            key={dog.id}
            src={dog.url}
            alt=""
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        )) }
      </div>
    </div>
  );
};

export default DogImageList;
