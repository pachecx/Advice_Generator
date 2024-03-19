import styled from "styled-components";

export const Container = styled.div`
  background: #202632;
  height: 100vh;
  padding: 12rem 1rem;

  text-align: center;

  .card{
    background: #313A49;
    border-radius: 1rem;
    padding: 2rem 1.5rem;

    h1,span{
      color: #4EE69D;
      font-size: 1.2rem;
      margin: 1rem auto 2rem;
    }

    p{
      color: #CEE2E9;
      font-weight: 800;
    }

    .line{
      margin: 1.5rem auto 1.5rem;
    }
  }
`;

export const Button = styled.button`
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  margin: 0 auto -3.5rem;
  background: #53FFAB;
  border: none;
  
  .imgIcon{
    width: 1.6rem;
    height: 1.6rem;
  }
`;