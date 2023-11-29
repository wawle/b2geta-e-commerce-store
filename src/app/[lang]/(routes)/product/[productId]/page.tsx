import { getProduct, getProducts } from '@/actions/product';
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import ProductList from '@/components/product/product-list';
import Container from '@/components/ui/container';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

export const revalidate = 0;

interface ProductPageProps {
    params: {
        productId: string;
        lang: Locale
    },
}

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    const dictionary = await getDictionary(params.lang)

    const product = await getProduct(params.productId);
    const { products: suggestedProducts } = await getProducts({ limit: 8, skip: 0 });

    if (!product) {
        return null;
    }

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={product.images} />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={product} dictionary={dictionary.product} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductList title="Related Items" items={suggestedProducts} />
                </div>
            </Container>
        </div>
    )
}

export default ProductPage;