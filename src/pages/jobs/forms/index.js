import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Heading from '../../../components/helpers/heading';
import CustomLink from '../../../components/helpers/link';
import EducationCardItem from '../education';

const JobsForm = ({ educationData, setEducationData, handleClickDelete, handleClickEdit, selectedEducation, setSelectedEducation }) => {

    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = educationData;
        if (data.find(x => x.id === selectedEducation)) {
            data = [...data.filter(x => x.id !== selectedEducation)];
        }

        setEducationData([
            ...data,
            formData
        ]);

        setFormData({});
        setSelectedEducation(null);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            id: formData.id ? formData.id : Date.now(),
            [e.target.name]: e.target.type === "radio" ? e.target.checked : e.target.value
        });
    }

    useEffect(() => {
        setFormData({ ...educationData.find(x => x.id === selectedEducation) });
    }, [selectedEducation]);

    return (
        <ContentWrapper>
            <LeftContent>
                {
                    educationData.map((x, index) => (
                        <EducationCardItem
                            key={x.id}
                            data={x}
                            handleClickEdit={() => handleClickEdit(x.id)}
                            handleClickDelete={() => handleClickDelete(x.id)}
                            selectedEducation={selectedEducation}
                        />
                    ))
                }
                <AddNewBtn onClick={() => { setFormData({}); setSelectedEducation(null); }}>
                    <svg xmlns="http://www.w3.org/2000/svg" alignmentBaseline="center" height="24px" viewBox="0 0 24 24" width="37px" fill="#21426C"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                    add new
                </AddNewBtn>
            </LeftContent>
            <RightContent>
                <Heading text="add education." fontSize="45px" isAnimate={false} />
                <AddEducationForm onSubmit={(e) => handleSubmit(e)}>
                    <label className="radio">
                        <input required type="radio" name="studyHere" onChange={handleChange} checked={formData.studyHere} />
                        I currently study here.
                    </label>
                    <label>
                        degree type
                        <select required name="degreeType" onChange={handleChange} value={formData.degreeType || ""}>
                            <option value="x">Senior</option>
                            <option value="y">Junior</option>
                        </select>
                    </label>
                    <label>
                        degree name
                        <input required type="text" name="degreeName" onChange={handleChange} value={formData.degreeName || ""} />
                    </label>
                    <label>
                        school name
                        <input required type="text" name="schoolName" onChange={handleChange} value={formData.schoolName || ""} />
                    </label>
                    <label>
                        country
                        <select required name="country" onChange={handleChange} value={formData.country || ""}>
                            <option value="x">Turkey</option>
                            <option value="y">UK</option>
                        </select>
                    </label>
                    <label>
                        state/province
                        <select required name="province" onChange={handleChange} value={formData.province || ""}>
                            <option value="x">Merkez</option>
                            <option value="y">Ümraniye</option>
                            <option value="z">Bostancı</option>
                        </select>
                    </label>
                    <label>
                        city
                        <input required type="text" name="city" onChange={handleChange} value={formData.city || ""} />
                    </label>
                    <label>
                        start year
                        <input required type="text" name="startYear" onChange={handleChange} value={formData.startYear || ""} />
                    </label>
                    <label>
                        completion year
                        <input required type="text" name="completionYear" onChange={handleChange} value={formData.completionYear || ""} />
                    </label>
                    <CustomLink onClick={handleSubmit} text="add education." isAnimate={false} />
                </AddEducationForm>
            </RightContent>
        </ContentWrapper>
    )
}

export default JobsForm;

const ContentWrapper = styled.div`
    display:flex;
    flex-direction: row;
`;

const LeftContent = styled.div`
    display:flex;
    flex-direction: column;
    max-width:530px;
    height:100%;
    flex:1;
    overflow:auto;
    padding-bottom:2rem;

    > div {
        border-left:0;
        border-top:0;
        height: 218px;
        padding:3rem;
    }
`;

const RightContent = styled.div`
    width:100%;
    flex:1;
    overflow-y:auto;
    padding:2rem 10rem;
`;

const AddNewBtn = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    border: 1px solid #17365D;
    color: #17365D;
    border-top:0;
    border-left:0;
    cursor:pointer;
    font-size:26px;
`;

const AddEducationForm = styled.form`
    label {
        display:flex;
        flex-direction:column;
        margin-bottom:1rem;
        &.radio{
            flex-direction:row;
        }
    }
`;