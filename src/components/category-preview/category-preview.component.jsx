import "./category-preview.styles.scss"
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
const CategoryPreview = ({ title, products }) => {
    return (
        <div className="category-preview-container">
            <h2>
               <Link to= {title}> <span className="title">{title.toUpperCase()}</span></Link>
            </h2>
            <div className="preview">
                {products.filter((_, i) => i < 4).map((product) =>
                    <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>

        </div>
    );
};

export default CategoryPreview;