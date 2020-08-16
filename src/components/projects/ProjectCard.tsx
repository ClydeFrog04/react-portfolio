import React, {useState} from "react";
import {
    Card,
    CardBody,
    CardFooter, CardHeader,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Modal,
    ModalBody
} from "reactstrap";
import ProjectCarousel from "./ProjectCarousel";
import {IProject} from "../../interfaces/projectInterfaces";
import cardPalette from "../../sass/libs/vars";

interface ProjectCardProps {
    project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    const [modal, setModal] = useState(false);
    const toggleMod = () => {
        setModal(!modal);
        console.log("Clicked");
    };
    const {images, name, timeSpent, numContributors, role, description, stack} = project;

    const imgModal = (
            <Modal className="modal-xl" contentClassName="modalSize" isOpen={modal} toggle={toggleMod}>
                <ModalBody>
                    <ProjectCarousel images={images}/>
                </ModalBody>
            </Modal>
    );

    return (
        <>
            {imgModal}
            <Card body inverse style={{backgroundColor: cardPalette.cardBackground}} className="projectCard mx-auto mt-3">
                <CardImg className="card-img" onClick={toggleMod} width="100%" src={images[0].src}/>
                <CardBody style={{color:cardPalette.fontColor}}>
                    <CardHeader style={{backgroundColor: cardPalette.avsBlue}}>{name}</CardHeader>
                    <CardSubtitle style={{backgroundColor: cardPalette.avsBlue}}>Time spent: {timeSpent}</CardSubtitle>
                    <CardSubtitle style={{backgroundColor: cardPalette.avsBlue}}>Number of contributors: {numContributors}</CardSubtitle>
                    <CardSubtitle style={{backgroundColor: cardPalette.avsBlue}}>{description}</CardSubtitle>
                    <CardFooter style={{backgroundColor: cardPalette.avsBlue}}>Role: {role}</CardFooter>
                </CardBody>
            </Card>
        </>
    );
}

export default ProjectCard;