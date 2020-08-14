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

interface ProjectCardProps {
    imgSrc?: string;
    projectName: string;
    timeSpent: string;
    numContributors: number;
    role: string;
    description: string;
}

/*
const ModalExample = (props) => {
  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
 */

const ProjectCard: React.FC<ProjectCardProps> = ({imgSrc, projectName, timeSpent, numContributors, role, description}) => {
    const [modal, setModal] = useState(false);
    const toggleMod = () => {
        setModal(!modal);
        console.log("Clicked");
    };

    const imgModal = (
            <Modal className="modal-xl" contentClassName="modalSize" isOpen={modal} toggle={toggleMod}>
                <ModalBody>
                    <img width="100%" src={imgSrc}/>
                </ModalBody>
            </Modal>
    );

    return (
        <Col sm={12}>
            {imgModal}
            <Card body inverse style={{backgroundColor: "#257965"}} className="w-25 mx-auto mt-3">
                {imgSrc ? <CardImg className="card-img" onClick={toggleMod} width="100%" src={imgSrc}/> : null}
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