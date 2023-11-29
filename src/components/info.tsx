"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import Rating from "./product/rating";
import useAuth from "@/hooks/use-auth";
import useLoginModal from "@/hooks/use-login-modal";
import usePreviewModal from "@/hooks/use-preview-modal";

interface InfoProps {
    data: Product
    dictionary: { "add_to_cart": string }
};

const Info: React.FC<InfoProps> = ({ data, dictionary }) => {
    const auth = useAuth()
    const cart = useCart();
    const loginModal = useLoginModal();
    const previewModal = usePreviewModal();


    const onAddToCart = () => {
        if (!auth.token) {
            previewModal.onClose()
            loginModal.onOpen()
            return
        }
        cart.addItem(data);
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
            <div className="mt-3 flex items-end justify-between">

                <Currency value={data?.price} />
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-4">
                    <div>
                        {data.description}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Category:</h3>
                    <div>
                        {data.category}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Discount:</h3>
                    <div>
                        {data.discountPercentage}%
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Stock:</h3>
                    <div>
                        {data.stock}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Rating:</h3>
                    <div>
                        <Rating value={data.rating} />
                    </div>
                </div>


            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddToCart} className="flex items-center gap-x-2 cursor-pointer">
                    {dictionary.add_to_cart}
                    <ShoppingCart size={20} />
                </Button>
            </div>
        </div>
    );
}

export default Info;