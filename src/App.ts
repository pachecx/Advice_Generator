import styled from "styled-components";

export const Container = styled.div`
  background: #202632;
  height: 100vh;
  padding: 12rem 1rem;
  min-width: 37rem;

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
      height: 33.3rem;
      margin: 0 auto;
    }
    
    .line{
      background-image: url(./assets/pattern-divider-desktop.svg);
    }

    .line .imgLine{
      display: none;
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
  border: 1px solid #ffffff80;
  transition: 1.5s;
  user-select: none;
  
  :hover,
  :focus {
    background: #008cff;
    box-shadow: 0 0 50px #53FFAB, 0 0 20px #53FFAB, 0 0 50px #53FFAB, 0 0 100px #53FFAB;
  }

`;