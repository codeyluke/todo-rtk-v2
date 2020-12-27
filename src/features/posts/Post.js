import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './postSlice';

export default function Post() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts({ limit: 5 }));
  }, [dispatch]);

  return (
    <div>
      <h1>posts...</h1>
    </div>
  );
}
