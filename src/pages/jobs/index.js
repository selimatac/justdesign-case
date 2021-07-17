import React, { Fragment, useState } from 'react'
import styled from 'styled-components';
import Heading from '../../components/helpers/heading';
import CustomLink from '../../components/helpers/link';
import CustomModalDialog from '../../components/modal';
import CustomProgressBar from '../../components/progressbar';
import EducationCardItem from './education';
import JobsForm from './forms';

const JobsPage = () => {
    const [hasOpen, setHasOpen] = useState(false);
    const tabs = ["first step", "general", "education", "experience"];

    const [educationData, setEducationData] = useState([
        {
            id:1,
            studyHere: false,
            degreeType: "Bachelor",
            degreeName: "Graphic Design",
            schoolName: "Erzincan University",
            country: "Turkey",
            province: "Merkez",
            city: "Erzincan",
            startYear: "2020",
            completionYear: "2021"
        }
    ]);
    const [selectedEducation, setSelectedEducation] = useState();

    const skillsData = [
        { skill: "Graphic Design (Bachelor)", title: "Expert", ratio: "50", color: '#BF5628' },
        { skill: "Graphic Design (Bachelor)", title: "Expert", ratio: "20", color: '#17365D' },
        { skill: "Graphic Design (Bachelor)", title: "Expert", ratio: "85", color: '#17365D' },
    ];

    const handleClickEdit = (id) => {
        setSelectedEducation(id);
        setHasOpen(true);
    }

    const handleClickDelete = (id) => {
        setEducationData(educationData.filter(x => x.id !== id));
    }
    return (
        <Fragment>
            <TabsWrapper className="animate__animated animate__fadeInUp">
                {
                    tabs.map((x,index) => (<TabLinkItem key={index}><CustomLink text={x} fontSize="16" /></TabLinkItem>))
                }
            </TabsWrapper>
            <Heading text="now your educational background." highlightText="educational" fontSize="75" />
            <CardWrapper className="animate__animated animate__fadeInUp animate__delay-1s">
                <CardHeader>
                    <CardHeaderTitle>Education</CardHeaderTitle>
                    <CustomLink text="add new" fontSize="18" onClick={() => setHasOpen(true)} />
                </CardHeader>
                <EducationCardItemWrapper>
                    {
                        educationData.map((x,index) => (
                            <EducationCardItem
                                key={index}
                                data={x}
                                handleClickEdit={() => handleClickEdit(x.id)}
                                handleClickDelete={() => handleClickDelete(x.id)}/>
                        ))
                    }
                </EducationCardItemWrapper>
            </CardWrapper>

            <CardHeader className="animate__animated animate__fadeInUp animate__delay-1s">
                <CardHeaderTitle>Skills</CardHeaderTitle>
                <CustomLink text="add new" fontSize="18" />
                <CustomLink text="edit" fontSize="18" />
            </CardHeader>
            <SkillsCardWrapper className="animate__animated animate__fadeInUp animate__delay-1s">
                {
                    skillsData.map((x,index) => (
                        <CustomProgressBar key={index} skill={x.skill} title={x.title} ratio={x.ratio} color={x.color} />
                    ))
                }
            </SkillsCardWrapper>
            <CustomModalDialog title="add/edit education." hasOpen={hasOpen} setHasOpen={setHasOpen}>
                <JobsForm
                    educationData={educationData}
                    setEducationData={setEducationData}
                    handleClickEdit={handleClickEdit}
                    handleClickDelete={handleClickDelete}
                    selectedEducation={selectedEducation}
                    setSelectedEducation={setSelectedEducation}
                />
            </CustomModalDialog>
        </Fragment>
    )
}

export default JobsPage;
const TabsWrapper = styled.div`
    display:flex;
`;
const TabLinkItem = styled.div`
    margin-right: 2rem;
`;
const CardWrapper = styled.div``;
const CardHeader = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:1rem;
    > * {
        margin-right:3rem;
    }
`;

const CardHeaderTitle = styled.div`
    color:#17365D;
    font-size:18px;
    margin-right:2rem;
`;
const EducationCardItemWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-bottom:5rem;
    > div {
        width:50%;

        &:nth-child(1),
        &:nth-child(2){
            border-top: 1px solid #17365D !important;
        }

        &:nth-child(even) {
            border-top:0;
            border-left:0;
        }

        &:nth-child(odd) {
            border-top:0
        }
    }
`;

const SkillsCardWrapper = styled.div`
    border: 1px solid #17365D;
    padding: 2rem 1rem;
    padding-bottom: .5rem;
    display:flex;
    flex-wrap:wrap;
    margin-bottom:5rem;

    > div {
        width:50%;

        &:nth-child(even){
            padding-left:1rem;
        }

        &:nth-child(odd){
            padding-right:1rem;
        }

    }
`;