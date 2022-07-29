import { useNavigate } from "react-router-dom";
import "./directory-item.scss";
const CategoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    return (
        <div className="directory-item-container" onClick={() => navigate(route)}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />

            <div className="directory-item-body-container">

                <h2 className="title">{title.toUpperCase()}</h2>
                <p>Shop Now</p>


            </div>

        </div >

    )
}

export default CategoryItem