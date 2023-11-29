
import Container from '@/components/ui/container';
import Billboard from '@/components/ui/billboard';
import NoResults from '@/components/ui/no-results';
import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';
import { billboardList, colorList, sizeList } from '@/constants';
import { getProducts } from '@/actions/product';
import ProductCard from '@/components/product/product-card';
import { getDictionary } from '@/i18n/get-dictionary';
import { Locale } from '@/i18n/config';

export const revalidate = 0;

interface ProductsPageProps {
    params: { lang: Locale },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const ProductsPage: React.FC<ProductsPageProps> = async ({
    params,
    searchParams
}) => {
    const dictionary = await getDictionary(params.lang)
    const { products, total } = await getProducts({
        limit: 24,
        skip: 0,
    });
    const sizes = sizeList
    const colors = colorList
    const billboard = billboardList[1]

    return (
        <div className="bg-white">
            <Container>
                <Billboard
                    data={{ ...billboard, label: dictionary.navbar.products }}
                />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {total === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item, index) => (
                                    <ProductCard key={item.id} data={item} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProductsPage;