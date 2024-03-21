import styled from "styled-components";

export const Container = styled.div`
  background: #202632;
  height: 100vh;
  padding: 12rem 1rem;
  min-width: 36rem;

  text-align: center;

  .card{
    background: #313A49;
    border-radius: 1rem;
    padding: 2rem 1.5rem;

    h1,span{
      color: #4EE69D;
      font-size: 1.2rem;
      margin: 1rem auto 2rem;
      letter-spacing: 2px;
    }

    p{
      color: #CEE2E9;
      font-weight: 800;
    }

    .line{
      margin: 1.5rem auto 1.5rem;
    }
  }

  @media(min-width: 1024px){
    padding: 17rem 15rem;

    .card{
      width: 53.6rem;
      height: 22.3rem;
      margin: 0 auto;

      p{
        height: 25px;
      }
    }
    
    .line{
      padding-top: 3rem;
    }

    .line .imgLine{
      width: 100%;
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
  cursor: pointer;
  
  .imgIcon{
    width: 1.6rem;
    height: 1.6rem;
  }

  box-shadow: transparent;
  border: none;
  transition: 1.5s;
  user-select: none;
  
  :hover,
  :focus {
    box-shadow: 0 0 50px #53FFAB, 0 0 20px #53FFAB, 0 0 50px #53FFAB, 0 0 100px #53FFAB;
  }

  @media(min-width: 1024px){
    margin: 3rem auto -3.5rem;
    padding: 1.5rem;
  
    .imgIcon{
      width: 1.9rem;
      height: 1.9rem;
    }
  }
`;