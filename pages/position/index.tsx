import React, { useState, useEffect } from 'react'

// CSS의 position는 문서에서 어떻게 요소를 배치할 것인지를 결정하는 속성이다
const Position = () => {
    return (
        <div style={{
            backgroundColor: "gray",
            textAlign: "center",
            height: "700px",
            width: "100%",
            overflowY: "scroll"
        }}>
            <div style={{
                height: "150px",
                width: "500px",
                backgroundColor: "tomato",
            }}>
                <div style={{
                    fontWeight: "bold",
                    fontSize: "30px"
                }}>
                    static
                </div>
                position 의 기본값이다. 특별한 값을 세팅하지 않으면 위에서부터 차곡차고 쌓여간다. top, left, right, bottom 설정은 무시된다
            </div>
            <div style={{
                height: "50px",
                width: "500px",
                backgroundColor: "tomato",
                marginTop: "20px"
            }}>
                <div style={{
                    fontWeight: "bold",
                    fontSize: "30px"
                }}>
                    static2
                </div>
            </div>

            <div style={{
                position: "relative",
                width: "500px",
                height: "230px",
                top: "30px",
                left: "100px",
                backgroundColor: "cyan",
            }}>
                <div style={{
                    fontWeight: "bold",
                    fontSize: "30px"
                }}>
                    relative
                </div>
                static일 때 설정되는 요소의 위치 기준으로 상대적인 위치를 결정함. top, left, right, bottom 설정을 통해 상대적 위치를 결정 할 수 있다

                <div style={{
                    width: "300px",
                    height: "100px",
                    top: "100px",
                    right: "16px",
                    backgroundColor: "skyblue",
                    position: "absolute"
                }}>
                    <div style={{
                        fontWeight: "bold",
                        fontSize: "30px"
                    }}>
                        Absolute
                    </div>
                    static 이 아닌 첫번 째 상위요소를 자신의 배치 기준으로 삼는다. top, left, right 조건은 으로 위치를 지정할 수 있음

                </div>
            </div>

            <div style={{
                position: "relative",
                width: "500px",
                height: "400px",
                top: "30px",
                backgroundColor: "cyan",
            }}>
                <h1>relative2</h1>

                <div style={{
                    position: "static",
                    height: "200px",
                    width: "300px",
                    backgroundColor: "tomato"
                }}>

                    <div style={{
                        fontWeight: "bold",
                        fontSize: "30px"
                    }}>
                        static3
                    </div>

                    <div style={{
                        width: "300px",
                        height: "100px",
                        top: "50px",
                        right: "0px",
                        backgroundColor: "skyblue",
                        position: "absolute"
                    }}>
                        <div style={{
                            fontWeight: "bold",
                            fontSize: "30px"
                        }}>
                            Absolute2
                        </div>
                        static 3에 포함됐지만 relative 2를 자신의 상위 요소로 삼는 것을 확인 할 수 있다.
                    </div>
                </div>

                <div style={{
                    width: "500px",
                    height: "200px",
                    position: "fixed",
                    backgroundColor: "pink",
                    bottom: "100px",
                    right: "10px"
                }}>
                    <div style={{
                        fontWeight: "bold",
                        fontSize: "30px"
                    }}>
                        fixed
                    </div>
                    화면을 위아래 스크롤 하더라도 고정된 공간에 위치한다. 배치 기준은 부모요소가 아닌 뷰포트 즉 브라우저 전체 화면이며 top, left, right, bottom을 기준으로 위치할 공간을 고정해줄 수 있다.
                    Relative2 에 포함됐지만 브라우저를 자신의 상위 배치 기준으로 삼고 있다.
                </div>
            </div>
        </div>
    )
}

export default Position;