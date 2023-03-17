import React from 'react';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { Input, StyledSearchForm, Button } from '.';

const initialValues = {
  searchQuery: '',
};

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = ({ searchQuery }, { resetForm }) => {
    if (searchQuery.trim() === '') {
      return toast.error('Type something');
    }
    onSubmit(searchQuery);
    resetForm();
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <StyledSearchForm>
        <Input
          type="text"
          name="searchQuery"
          placeholder="Search movies"
          autoFocus={true}
        />
        <Button type="submit" aria-label="search">
          Search
        </Button>
      </StyledSearchForm>
    </Formik>
  );
};
