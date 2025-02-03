import {useState} from "react";
import './ProductList.css'
function ProductList() {

    const products = [
        {id: 0, name: 'shampoo', price: 1000, availability: true,},
        {id: 1, name: 'soap', price: 6000, availability: true,},
        {id: 2, name: 'faceWash', price: 2000, availability: false,},
        {id: 3, name: 'cream', price: 4000, availability: true,},
        {id: 4, name: 'handWash', price: 8000, availability: false,},
        {id: 5, name: 'Tissue', price: 9000, availability: true,}]


    const [PriceFilter, setPriceFilter] = useState(0);
    const [AvailabilityFilter, setAvailabilityFilter] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products);


    const filterProducts = () => {
        let filtered = products;
        if (PriceFilter > 0) {
            filtered = filtered.filter((product) => product.price > PriceFilter);
        }

        if (AvailabilityFilter) {
            filtered = filtered.filter((product) => product.availability);
        }
        setFilteredProducts(filtered);
    }

    return (
        <>
            <div className="container">
                <input className="text-box"
                    type='number'
                    value={PriceFilter}
                    onChange={(e) => setPriceFilter(Number(e.target.value))}/>
                <button className="btn" onClick={filterProducts}>Filter products</button>
            </div>
            <div className="container">
                <label>
                    <input
                        type={"checkbox"} checked={AvailabilityFilter}
                        onChange={(e) => setAvailabilityFilter(e.target.checked)}/>
                    show only the available products
                </label>
            </div>
            <div className="container">


                <ul>
                    {filteredProducts.map((product) => (
                        <li key={product.id}>
                            {product.name} - ${product.price} - {product.availability ? "available" : "not available"}

                        </li>
                    ))}
                </ul>
            </div>


        </>

    );

}

export default ProductList;