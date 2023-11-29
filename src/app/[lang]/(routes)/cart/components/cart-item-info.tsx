import Rating from "@/components/product/rating";

interface CartItemInfoProps {
    product: Record<string, any>;
}

const CartItemInfo: React.FC<CartItemInfoProps> = ({
    product
}) => {
    return (
        <div>
            <div className="flex justify-between">
                <p className=" text-sm font-semibold text-black">
                    {product.name}
                </p>
            </div>

            <div className="mt-1 flex text-sm">
                <div className="mt-1 flex text-sm">
                    <p className="text-gray-500">{product.category}</p>

                </div>
                <Rating value={product.rating} />
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
        </div>
    );
}

export default CartItemInfo;