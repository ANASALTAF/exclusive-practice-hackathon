import { defineQuery } from "next-sanity";


export const allProducts = defineQuery (`
    *[_type == "product"]{(
    _id,
    name,
    description,
    price,
    discountPercentage,
    priceAfterDiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageUrl": images[].asset->url
    ) `)

    export const fourPro = defineQuery (`
        *[_type == "product"] [0..3]{(
        _id,
        name,
        description,
        price,
        discountPercentage,
        priceAfterDiscount,
        rating,
        ratingCount,
        tags,
        sizes,
        "imageUrl": images[].asset->url
        ) `)
