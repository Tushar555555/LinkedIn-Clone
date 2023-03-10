import styled from "styled-components";

const Main = (props) => {
    return (
        <Container>
            <ShareBox>
                <div>
                    <img src="./images/user.svg" alt="" />
                    <button>Start a post</button>
                </div>
                <div>
                    <button style={{ fill: "#70B5F9" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            width="24"
                            height="24"
                            focusable="false"
                        >
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                        </svg>
                        <span>Photo</span>
                    </button>

                    <button style={{ fill: "#7FC15E" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" width="24" height="24" focusable="false">
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                        </svg>
                        <span>Video</span>
                    </button>

                    <button style={{ fill: "#E7A33E" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" width="24" height="24" focusable="false">
                            <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                        </svg>
                        <span>Event</span>
                    </button>

                    <button style={{ fill: "#F5987E" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="" width="24" height="24" focusable="false">
                            <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                        </svg>
                        <span>Write article</span>
                    </button>
                </div>
            </ShareBox>
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src="./images/user.svg" alt="" />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                            </svg>
                        </button>
                    </SharedActor>
                    <Description>Description</Description>
                    <SharedImg>
                        <a>
                            <img src="./images/shared-img.jpeg" alt="" />
                        </a>
                    </SharedImg>

                    <SocialCounts>
                        <li>
                            <button>
                                <img src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="" />
                                <img src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="" />
                                <img src="https://static.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus" alt="" />
                                <span> &nbsp;&nbsp;Aman Gupta and 750 others</span>
                            </button>
                        </li>
                        <li>
                            <a>200 comments &#183; 37 reposts</a>
                        </li>
                    </SocialCounts>
                    <SocialActions>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                            </svg>
                            <span>Like</span>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                            </svg>
                            <span>Comment</span>
                        </button>
                        <button>
                            <img src="./images/repost-icon.jpeg" alt="" />
                            <span>Repost</span>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                            </svg>
                            <span>Send</span>
                        </button>
                    </SocialActions>
                </Article>
            </div>
        </Container>
    );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div{
    button{
        outline: none;
        color: rgba(0,0,0,0.6);
        font-size: 14px;
        line-height: 1.5;
        min-height: 48px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    &:first-child{
        display: flex;
        align-items: center;
        padding: 8px 16px 0 16px;
        img{
            width: 48px;
            border-radius: 50%;
            margin-right: 8px;
        }
        button{
            margin: 4px 0;
            flex-grow: 1;
            border-radius: 35px;
            padding-left: 16px;
            border: 1px solid rgba(0,0,0,0.15);
            background-color: white;
            text-align: left;
        }
    }
    &:nth-child(2){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-bottom: 4px; 

        button{
            svg{
                margin: 0 4px 0 -2px;
            }
            span{
                color: rgb(102,102,102);
            }
        }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a{
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img{
        width: 48px;
        height: 48px;
    }
    & > div{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 0;
        margin-left: 8px;
        overflow: hidden;

        span{
            text-align: left;
            &:first-child{
                font-size: 14px;
                font-weight: 700;
                color: rgba(0,0,0,1);
            }
            &:nth-child(n+1){
                font-size: 12px;
                color: rgba(0,0,0,0.6);
            }
        }
    }
  } 

  button{
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgb(0,0,0,0.9);
  font-size: 14px;
  text-align: left;
`

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

const SocialCounts = styled.ul`
  color: rgb(102,102,102);
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  justify-content: space-between;
  li{
    margin-right: 5px;
    font-size: 13px;
    button{
        display: flex;
        background: transparent;
        border: none;
        img{
            &:nth-child(n+1){
                margin-left: -5px;
            }
        }
        span{
            color: rgb(102,102,102);
            font-size: 12px;
            display: flex;
            align-items: center;
        }
    }
  }
`

const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button{
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: rgb(102,102,102);
    border: none;
    background: white;
    @media(min-width: 768px){
        span{
            margin-left: 8px;
        }
    }
    img{
        height: 10%;
        width: 34px;
    }
    svg{
        margin-right: 5px;
    }
    span{
        font-weight: 600;
    }
  }
`

export default Main;
