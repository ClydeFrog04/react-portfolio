import React, {useState} from "react"
import {CarouselItem, Carousel, CarouselIndicators, CarouselControl} from "reactstrap";
import {IImage} from "../interfaces/projectInterfaces";

interface CarouselProps {
    images: IImage[];
}

const ProjectCarousel: React.FC<CarouselProps> = ({images}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = images.map(image => {
        //todo: Need to add alt text to images
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={image.src}>
                <img className="projectCarouselImg" src={image.src} alt=""/>
            </CarouselItem>
        );
    })

    return (
        <Carousel
            className="projectCarousel"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex}/>
            {slides}
            <CarouselControl direction="prev" onClickHandler={previous} directionText={"Previous"}/>
            <CarouselControl direction="next" onClickHandler={next} directionText={"Next"}/>
        </Carousel>
    );
}

export default ProjectCarousel;
