// Fetch Data For Category Button
const fetchCategory = async () =>{
  const request = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const response = await request.json();
  const allData = response.data;
  

  // Dynamic Button adding
  const categoryesBtnContainer = document.getElementById('category-btn-container');
  
  allData.forEach((item)=>{
    const btn = document.createElement('button');
    btn.classList.add('btn', 'capitalize', 'm-3');
    btn.innerText = item.category;
    categoryesBtnContainer.appendChild(btn)
  })
}

fetchCategory()