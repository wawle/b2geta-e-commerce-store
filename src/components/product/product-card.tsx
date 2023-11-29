"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import Rating from "./rating";
import useAuth from "@/hooks/use-auth";
import useLoginModal from "@/hooks/use-login-modal";

interface ProductCard {
    data: Product
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    const previewModal = usePreviewModal();
    const cart = useCart();
    const router = useRouter();
    const auth = useAuth();
    const loginModal = useLoginModal();

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    };

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        if (!auth.token) {
            loginModal.onOpen();
            return
        }

        cart.addItem(data);
    };
    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Image & actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data.thumbnail}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="aspect-square object-cover rounded-md"
                    placeholder="blur"
                    blurDataURL={data.thumbnail}
                    priority
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="font-semibold text-lg">{data.title}</p>
                <p className="text-sm text-gray-500">{data.category}</p>
                <Rating value={data.rating} />
            </div>
            {/* Price & Reiew */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    );
}

export default ProductCard;