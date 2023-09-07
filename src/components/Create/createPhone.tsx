import React from 'react';
import {
  Container,
  Form,
  FormTitle,
} from '../../styles/createStyled/createStyled';
import { ButtonCard } from '../../styles/listStyled/listStyled';
import { Link } from 'react-router-dom';

export const CreatePhone = () => {
  return (
    <>
      <Container>
        <Link to="/">X</Link>
        <FormTitle>NEW PHONE</FormTitle>
        <Form>
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
          <ButtonCard type="submit">Submit</ButtonCard>
        </Form>
      </Container>
    </>
  );
};
