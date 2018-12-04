import ApolloClient, { Operation } from 'apollo-boost';

const client = new ApolloClient({
    request: async(operation: Operation) => { // request를 받기위해 설정
        operation.setContext({  // operation Object에서 query응답들을 채온다.(모든 operation에 attribute를 설정)
            header: {
                "X-JWT": localStorage.getItem('jwt') || ""
            }
        });
    },
    uri: "http:localhost:4000/graphql"
});

export default client;