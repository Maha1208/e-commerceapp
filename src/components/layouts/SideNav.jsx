import React from 'react'
import { useState } from 'react';
import CardsData from '../mock/CardsData';
import WomanIcon from '@mui/icons-material/Woman';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import Category from '../category/Category';

const SideNav = () => {
    const [data, setData] = useState([]);

    const filterResult = (items) => {
        const result = CardsData.filter((curData) => {
          return curData.subcategory === items;
        });
        setData(result);
      };
    
  return (
  <div class="sidenav">
  <Category filterResult={data} />
  <div>
  <h4><ChildCareIcon/>KidsWears</h4> 
  <button onClick={() => filterResult("gowns")}>Gowns</button>
  <button onClick={() => filterResult("girl")}>Girl Set</button> 
  <button onClick={() => filterResult("boy")}>Boy Set</button>
  <button onClick={() => filterResult("nightwear")}>Night Wear</button>
  </div><br/>

  <div>
  <h4><WomanIcon/>EthnicWears</h4> 
  <button onClick={() => filterResult("sarees")}>Saree Collections</button>
  <button onClick={() => filterResult("lehenga")}>Lehenga Collections</button> 
  <button onClick={() => filterResult("kurtas")}>Kutas Collection</button>
  <button onClick={() => filterResult("plazoo")}>Plazoo Collections</button>
  </div><br/>

  <div>
  <h4><WomanIcon/>WesternWears</h4> 
  <button onClick={() => filterResult("tops")}>Women Tops & Tunics</button>
  <button onClick={() => filterResult("wtshirt")}>Women T-Shirts</button> 
  <button onClick={() => filterResult("wjeans")}>Women Jeans</button>
  <button onClick={() => filterResult("jumpsuits")}>Women Jump Suits</button>
  </div><br/>

  <div>
  <h4><EmojiPeopleIcon/>Mens Wear</h4> 
  <button onClick={() => filterResult("formal")}>Men Formal Pants</button>
  <button onClick={() => filterResult("mshirt")}>Men Shirts</button> 
  <button onClick={() => filterResult("mtshirt")}>Men T-shirts</button>
  <button onClick={() => filterResult("mjeans")}>Men Jeans</button>
  </div><br/>
</div>
  )
}

export default SideNav
