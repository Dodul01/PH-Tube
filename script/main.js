const fetchCategory = async () =>{
  const request = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const response = await request.json();
  const allData = response.data;
  
}

fetchCategory()