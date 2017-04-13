import styled from 'styled-components';

const BookStyle = styled.div`
  .book-title-header {
    background-color: #000000;
    height: 170px;
    width: 100%
    padding: 20px;
    color: white;
  }
  
  img.header-image {
    border-radius: 50%;
  }
  
  figure {
    margin-top: 15px;
  }
  
  font-size: 16px;
  
  table {
    margin-top: 15px;
    background-color: white;
  }
  
  td.display-bold {
    font-weight: bold;
  }
  
  img.cover-art {
    box-shadow: 3px 3px 3px #888888;
  }
`;

export default BookStyle;
