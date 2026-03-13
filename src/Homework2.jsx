import React, { useState, useEffect } from 'react'
import DogItem from './components/DogItem'

export default function Homework2() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://dogapi.dog/api/v2/breeds')
      .then(res => res.json())
      .then(dogs => { setData(dogs.data) })
      .catch(error => { setError(error.message) })
      .finally(() => setIsLoading(false))
  }, [])

  if (error) return <p>{error}</p>

  if (isLoading) {
    return <p>Đang tải dữ liệu, vui lòng đợi...</p>
  }

  return (
    <div>
      <h3>Danh sách các giống chó</h3>
      {data.length === 0 ? (
        <p>Không có dữ liệu</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          {data.map(dog => (
            <DogItem
              key={dog.id}
              name={dog.attributes.name}
              description={dog.attributes.description}
            />
          ))}
        </div>
      )}
    </div>
  )
}