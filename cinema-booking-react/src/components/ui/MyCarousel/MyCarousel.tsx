import React, {useEffect} from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import MovieItem from "@/components/MoviteItem/MovieItem.tsx";


const MyCarousel = ({items}):JSX.Element => {
    return (
        <Carousel hiddenButton={true}>
            <CarouselContent>
                {items.map((item) => (
                    <CarouselItem className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-1/7">
                        <MovieItem item={item.movie_info}>

                        </MovieItem>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious hiddenButton={true}/>
            <CarouselNext hiddenButton={true}/>
        </Carousel>
    );
};

export default MyCarousel;