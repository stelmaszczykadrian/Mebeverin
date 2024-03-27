import './Product.css';
import boxes from "../../assets/Boxes.png";
import {productsData} from "../../header/HeaderData";

export default function Product(){
    return (
        <div className="product-container" id="about-product">
            <div className="product-title">O PRODUKCIE</div>
            <div className="product-subtitle">Benefits and Advantages</div>
            <div className="product-info">
                <div>
                    <img className="product-info-image" src={boxes}></img>
                </div>
                <div className="product-items">
                    {productsData.map(product => (
                        <ProductItem
                            key={product.title}
                            color={product.color}
                            icon={product.icon}
                            title={product.title}

                        />
                    ))}
                </div>
            </div>
            <button className="product-button">DOWIEDZ SIĘ WIĘCEJ</button>
        </div>
    );
}

const ProductItemIcon = ({color, icon}) => (
    <div className="product-item-icon" style={{backgroundColor: color}}>
        <img src={icon} alt="shield"></img>
    </div>
);

const ProductItem = ({color, icon, title}) => (
    <div className="product-item">
        <ProductItemIcon color={color} icon={icon}/>
        <div className="product-item-title">{title}</div>
    </div>
);