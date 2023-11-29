import { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import Container from "@/components/ui/container";
import { billboardList, } from "@/constants";
import Billboard from "@/components/ui/billboard";
import ProductList from "@/components/product/product-list";
import { getProducts } from "@/actions/product";





export const revalidate = 0;

const HomePage = async ({
    params: { lang },
}: {
    params: { lang: Locale }
}) => {
    const dictionary = await getDictionary(lang)
    const { products } = await getProducts({ limit: 20, skip: 0 });
    const billboard = billboardList[0]
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard
                    data={{ ...billboard, label: dictionary.welcome }}
                />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
};

export default HomePage;