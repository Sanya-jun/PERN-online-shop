import React, { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;

// import React, { useState, useEffect } from "react";

// // Пример данных для типов товаров и производителей
// const productTypes = [
//   { id: 1, name: "Электроника" },
//   { id: 2, name: "Одежда" },
// ];

// const manufacturers = {
//   1: [
//     { id: 1, name: "Производитель 1" },
//     { id: 2, name: "Производитель 2" },
//   ],
//   2: [
//     { id: 3, name: "Производитель 3" },
//     { id: 4, name: "Производитель 4" },
//   ],
// };

// const products = [
//   { id: 1, typeId: 1, manufacturerId: 1, name: "Товар 1" },
//   { id: 2, typeId: 1, manufacturerId: 2, name: "Товар 2" },
//   { id: 3, typeId: 2, manufacturerId: 3, name: "Товар 3" },
//   { id: 4, typeId: 2, manufacturerId: 4, name: "Товар 4" },
// ];

// const ProductComponent = () => {
//   const [selectedType, setSelectedType] = useState(productTypes[0].id);
//   const [selectedManufacturer, setSelectedManufacturer] = useState(
//     manufacturers[selectedType][0]?.id
//   );
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     const filtered = products.filter(
//       (product) =>
//         product.typeId === selectedType &&
//         product.manufacturerId === selectedManufacturer
//     );
//     setFilteredProducts(filtered);
//   }, [selectedType, selectedManufacturer]);

//   const handleTypeChange = (event) => {
//     const newType = parseInt(event.target.value);
//     setSelectedType(newType);
//     setSelectedManufacturer(manufacturers[newType][0]?.id); // Сбрасываем производителя на первый
//   };

//   const handleManufacturerChange = (event) => {
//     setSelectedManufacturer(parseInt(event.target.value));
//   };

//   return (
//     <div>
//       <h1>Товары</h1>
//       <div>
//         <label>
//           Тип товара:
//           <select value={selectedType} onChange={handleTypeChange}>
//             {productTypes.map((type) => (
//               <option key={type.id} value={type.id}>
//                 {type.name}
//               </option>
//             ))}
//           </select>
//         </label>

//         <label>
//           Производитель:
//           <select
//             value={selectedManufacturer}
//             onChange={handleManufacturerChange}
//           >
//             {manufacturers[selectedType].map((manufacturer) => (
//               <option key={manufacturer.id} value={manufacturer.id}>
//                 {manufacturer.name}
//               </option>
//             ))}
//           </select>
//         </label>
//       </div>

//       <h2>Доступные товары:</h2>
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BrandBar;
