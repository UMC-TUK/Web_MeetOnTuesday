import React from 'react';
import { useParams } from 'react-router-dom';

function OtherPage() {
  const { content } = useParams();
  return <h1>{content} 페이지로 이동 됨</h1>;
}

export default OtherPage;
