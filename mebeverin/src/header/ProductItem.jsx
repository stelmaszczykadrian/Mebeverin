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

export default ProductItem;
