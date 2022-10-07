import "./collection-preview.styles.scss"
import ProductCard from '../product-card/Product-card.component';
const CollectionPreview= ({title,items}) => {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((item,idx)=>idx<4)
                        .map((product)=>(<ProductCard key={product.id} {...product}/>))
                }
            </div>
        </div>
    )
}
export default CollectionPreview