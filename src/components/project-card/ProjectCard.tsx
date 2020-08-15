import React, {useState} from "react";
import {
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Modal,
    ModalBody
} from "reactstrap";
import ProjectCarousel from "../ProjectCarousel";
import {IImage} from "../../interfaces/projectInterfaces";

interface ProjectCardProps {
    images: IImage[];
    projectName: string;
    timeSpent: string;
    numContributors: number;
    role: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({images, projectName, timeSpent, numContributors, role, description}) => {
    const [modal, setModal] = useState(false);
    const toggleMod = () => {
        setModal(!modal);
        console.log("Clicked");
    };

    //<Modal className="modal-xl" contentClassName="modalSize" isOpen={modal} toggle={toggleMod}>
    const imgModal = (
            <Modal className="modal-xl" contentClassName="modalSize" isOpen={modal} toggle={toggleMod}>
                <ModalBody>
                    {/*<img width="100%" src={imgSrc}/>*/}
                    <ProjectCarousel images={images}/>
                </ModalBody>
            </Modal>
    );

    return (
        <Col sm={12}>
            {imgModal}
            <Card body inverse style={{backgroundColor: "#257965"}} className="projectCard mx-auto mt-3">
                <CardImg className="card-img" onClick={toggleMod} width="100%" src={images[0].src}/>
                <CardBody>
                    <CardTitle>{projectName}</CardTitle>
                    <CardSubtitle>Time spent: {timeSpent}</CardSubtitle>
                    <CardSubtitle>Number of contributors: {numContributors}</CardSubtitle>
                    <CardText>{description}</CardText>
                    <CardFooter style={{backgroundColor: "#6a1f1f"}}>Role: {role}</CardFooter>
                </CardBody>
            </Card>
        </Col>
    );
}

export default ProjectCard;