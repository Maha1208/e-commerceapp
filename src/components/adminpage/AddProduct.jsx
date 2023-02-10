import React from "react";

const AddProduct = () => {
  return (
    <div classname="addproductform">
      <form>
        <select id="input" name="category">
          <option value="womenswear">womenswear</option>
          <option value="womensethnic">womensethnic</option>
          <option value="kidswear">kidswear</option>
          <option value="menswear">menswear</option>
        </select>
        <br />
        <select id="input" name="subcategory">
          <option value="sarees">sarees</option>
          <option value="plazoo">plazoo</option>
          <option value="lehenga">lehenga</option>
          <option value="kurtas">kurtas</option>
          <option value="tops">tops</option>
          <option value="wtshirt">wtshirt</option>
          <option value="wjeans">wjeans</option>
          <option value="jumpsuits">jumpsuits</option>
          <option value="girl">girl</option>
          <option value="nightwear">nightwear</option>
          <option value="boy">boy</option>
          <option value="gowns">gowns</option>
          <option value="formal">formal</option>
          <option value="mtshirt">mtshirt</option>
          <option value="mshirt">mshirt</option>
          <option value="mjeans">mjeans</option>
        </select>{" "}
        <br />
        <label>ProductName:</label>
        <input type="text" id="input" name="productname" required /><br/>
        <label>Image URL</label>
        <input type="text" id="input" name="image" required /><br/>
        <label>Product Type</label>
        <input type="text" id="input" name="type" required /><br/>
        <label>Some data</label>
        <input type="text" id="input" name="somedata" required /><br/>
        <label>Price</label>
        <input type="number" id="input" name="price" required /><br/>
        <label>Rating</label>
        <input type="number" id="input" name="rating" required /><br/>
        <label>Quantity</label>
        <input type="number" id="input" name="qnty" required /><br/>
      </form>
    </div>
  );
};

export default AddProduct;
