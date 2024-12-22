import React, { FC } from "react";
import { Item } from "./CarouselWrapper";

type ItemProps = {
    children: Item;
}
const CarouselItem: FC<ItemProps> = ({ children }) => {
    return(
        <div>
            <p>{children.title}</p>
            <p>{children.subtitle}</p>
            <p>{children.text}</p>
        </div>
    );
}

export default CarouselItem;