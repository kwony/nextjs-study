import React from 'react'

const Flex = () => {
    return (
        <div style={{
            fontSize: "20px",
            padding: "100px"
        }}>
            <div style={{
                display: "flex",
                backgroundColor: "green",
                height: "60px",

            }}>
                <div style={{
                    background: "pink"
                }}
                >display: flex</div>
                <div style={{
                    background: "tomato",
                }}>Flex 아이템은 가로방향으로 배치된다</div>
                <div style={{
                    background: "yellow"
                }}>Height는 부모를 따른다</div>

            </div>
            <div style={{
                display: "inline-flex",
                backgroundColor: "green",
                height: "60px",
                marginTop: "30px"
            }}>
                <div style={{
                    background: "pink"
                }}
                >display: inline-flex</div>
                <div style={{
                    background: "tomato",
                }}>inline-flex는</div>
                <div style={{
                    background: "yellow"
                }}>부모의 영역가 요소의 전체 영역 만큼만 차지한다</div>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px"
            }}>
                <div style={{
                    background: "pink"
                }}
                >flex-direction: column</div>
                <div style={{
                    background: "tomato",
                }}>flex-direction을 columns으로 설정하면 세로로 나열 할 수 있다</div>
                <div style={{
                    background: "yellow"
                }}>기본 설정 값은 row다</div>
            </div>

            <div style={{
                display: "flex",
                marginTop: "30px",
                backgroundColor: "green",
                flexWrap: "wrap"
            }}>
                <div style={{
                    background: "pink",
                    width: "300px",
                    height: "50px"
                }}
                >flex-wrap: wrap</div>
                <div style={{
                    background: "tomato",
                    width: "600px"
                }}>Flex 영역 아이템을 한 줄에 담을 수 없다면 줄바꿈을 한다</div>
                <div style={{
                    background: "yellow",
                    width: "400px"
                }}>기본 설정 값은 nowrap 이다 (줄바꿈 하지 않는다)</div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
                background: "green",
                height: "50px"
            }}>
                <div style={{
                    background: "pink",
                }}
                >justify-content: space-between</div>
                <div style={{
                    background: "tomato",
                }}>부모 영역의 끝에서 균등하게 채운다</div>
                <div style={{
                    background: "yellow",
                }}>중간에만 빈 여백이 발생한다</div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "30px",
                background: "green",
                height: "50px"
            }}>
                <div style={{
                    background: "pink",

                }}
                >justify-content: space-evenly</div>
                <div style={{
                    background: "tomato",
                }}>부모 영역의 중간에서 균등하게 채운다</div>
                <div style={{
                    background: "yellow",
                }}>끝과 중간에 빈 여백이 발생한다</div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                background: "green",
                height: "50px"
            }}>
                <div style={{
                    background: "pink",
                }}
                >justify-content: center</div>
                <div style={{
                    background: "tomato",
                }}>부모 영역의 중간에서 균등하게 채운다</div>
                <div style={{
                    background: "yellow",
                }}>끝과 중간에 빈 여백이 발생한다</div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                background: "green",
                height: "50px",
                alignItems: "center"
            }}>
                <div style={{
                    background: "pink",
                }}
                >align-items: center</div>
                <div style={{
                    background: "tomato",
                }}>부모 영역의 수직 방향에서 중앙으로 정렬한다</div>
                <div style={{
                    background: "yellow",
                }}>중앙으로 정렬시킬 때 유용하다</div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                background: "green",
                height: "50px",
                alignItems: "stretch"
            }}>
                <div style={{
                    background: "pink",
                }}
                >align-items: stretch</div>
                <div style={{
                    background: "tomato",
                }}>부모 영역의 수직 방향에서 중앙으로 정렬한다</div>
                <div style={{
                    background: "yellow",
                }}>길게 쭉 늘린다</div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                background: "green",
                height: "50px",
                alignItems: "flex-start"
            }}>
                <div style={{
                    background: "pink",
                }}
                >align-items: flex-start</div>
                <div style={{
                    background: "tomato",
                }}>부모 영역의 수직 방향에서 중앙으로 정렬한다</div>
                <div style={{
                    background: "yellow",
                }}>메인 축 시작 부분에 정렬한다</div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                background: "green",
                height: "50px",
                alignItems: "flex-end"
            }}>
                <div style={{
                    background: "pink",
                }}
                >align-items: flex-end</div>
                <div style={{
                    background: "tomato",
                }}>부모 영역의 수직 방향에서 중앙으로 정렬한다</div>
                <div style={{
                    background: "yellow",
                }}>메인 축의 끝부분에 정렬한다</div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                background: "green",

                alignItems: "baseline"
            }}>
                <div style={{
                    background: "pink",
                    fontSize: "10px"
                }}
                >align-items: baseline</div>
                <div style={{
                    background: "tomato",
                    fontSize: "30px"
                }}>부모 영역의 수직 방향에서 중앙으로 정렬한다</div>
                <div style={{
                    background: "yellow",
                }}>텍스트 베이스라인 기준으로 정렬한다</div>
            </div>
        </div>
    )
}

export default Flex;