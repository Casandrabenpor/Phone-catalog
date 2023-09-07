import React from 'react';
import {
  Container,
  Form,
  FormTitle,
} from '../../styles/createStyled/createStyled';
import { ButtonCard } from '../../styles/listStyled/listStyled';
import { useTypedDispatch } from '../../app/store';
import { Link, useNavigate } from 'react-router-dom';
import { createPhone } from '../../features/listSlice/listApiSlice';

export const CreatePhone = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const handleCreatePhone = (e: any) => {
    e.preventDefault();
    let newPhone = {
      photoUrl: e.target.photo.value,
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
    };
    dispatch(createPhone(newPhone));
    navigate('/admin');
  };

  return (
    <>
      <Container>
        <Link to="/">X</Link>
        <FormTitle>NEW PHONE</FormTitle>
        <Form onSubmit={handleCreatePhone}>
          <label htmlFor="photo">Photo Url</label>
          <input
            type="text"
            id="photo"
            name="photo"
            defaultValue=""
            placeholder="img"
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue=""
            placeholder="Name"
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            defaultValue=""
            placeholder="Description"
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            defaultValue=""
            placeholder="Price"
          />
          <ButtonCard type="submit" value="Create">
            Submit
          </ButtonCard>
        </Form>
      </Container>
    </>
  );
};
