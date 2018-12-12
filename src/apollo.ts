
import ApolloClient, { Operation } from "apollo-boost";

const client = new ApolloClient({ // ApolloClient Object 생성 redux라 생각(dispatch 등을하지 않아도 된다)
    clientState: { // redux의 initialState와 비슷한 것이라 생각하면 된다. 
        defaults: { // default로 Mutation의 기본 설정
            auth: {
                __typename: "Auth",
                isLoggedIn: Boolean(localStorage.getItem("jwt"))
            }
        },
        resolvers: {
            Mutation: { // 두가지 Mutation 생성 (logUserIn, logUserOut )
                logUserIn: (_:any, { token }:any, { cache }:any) => { // 여기서 args = token, context = cache 이다
                    localStorage.setItem("jwt", token);
                    cache.writeData({ // 작성한 data는 typename, isLoged 여부
                        data: {
                            auth: {
                                __typename: "Auth",
                                isLoggedIn: true
                            }
                        }
                    });
                    return null;
                },
                logUserOut: (_: any, __: any, { cache }: any) => { // parent, args, context 순서
                    localStorage.removeItem("jwt"); // logOut시, token 삭제
                    cache.writeData({ 
                        data: {
                            __typename: "Auth",
                            isLoggedIn: false
                        }
                    });
                    return null;
                }
            }
        }
    },
    request: async (operation: Operation) => { // uri 로부터 request를 받기 위해 설정
        operation.setContext({ // operation Object에서 query응답들을 채온다.(모든 operation에 attribute를 설정)
            headers: {
                "X-JWT": localStorage.getItem("jwt") || "" // header에 token을 넣어준다.
            }
        });
    },
    uri: "http://localhost:4000/graphql" // ApolloClient는 default로 여기 uri 만을 필요로 한다
});

export default client;