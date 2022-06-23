import CategoryItem from "../category-item/category-item-component"
import "./category.scss"
const Category = ({categories}) =>{
    return(
        <div className="categories-contanier">
            {categories.map((category) =>(
          <CategoryItem key ={category.id} category ={category}/>
        ))}
        </div>

    )
}
export default  Category;