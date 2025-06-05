import { Text } from "../../Text"

type PopularProductsSectionContentItemNameProps = {
    name: string;
}

export const PopularProductsSectionContentItemName = ({
    name
}: PopularProductsSectionContentItemNameProps) => {
    return (
        <>
            <div className="md:hidden">
                <Text fontSize={"lg"} fontFamily={"opensans"} color={"mint"} content={name} fontWeight={"bold"} />
            </div>
            <div className="hidden md:block">
                <Text fontSize={"3xl"} fontFamily={"opensans"} color={"mint"} content={name} fontWeight={"bold"} />
            </div>
        </>
    )
}