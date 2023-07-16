import {GrpcTransport} from "@protobuf-ts/grpc-transport";
import {BenchmarkActionsServiceClient} from "../stubs/benchmark-actions/v1/benchmark-actions.client";
import {ChannelCredentials} from "@grpc/grpc-js";
import {AuthActionsServiceClient} from "../stubs/auth-actions/v1/auth-actions.client";


/** @type {import('./$types').PageLoad} */
export async function load() {
return {
    bunPort : process.env.NEST_JS_BUN_API_PORT,
    denoPort : process.env.NEST_JS_DENO_API_PORT,
    nodeJsPort : process.env.NEST_JS_NODEJS_API_PORT
}
}

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();

        const email = data.get('email');
        const password = data.get('password');

        // setup a transport and create a client instance
        let transport = new GrpcTransport({
            channelCredentials: ChannelCredentials.createInsecure(),
            host: `localhost:${process.env.NEST_JS_AUTH_SERVICE_PORT}`
        });
        let client = new AuthActionsServiceClient(transport);
        let {response} = await client.login({email : email,password});

        return {token : response.token, success: true };
    },
    bigArrayProcess:  async ({ cookies, request } : any)  => {
        const data = await request.formData();
        const size = parseInt(data.get('size'));
        const port = data.get('port');
        const token = data.get('token');

        // setup a transport and create a client instance
        let transport = new GrpcTransport({
            channelCredentials: ChannelCredentials.createInsecure(),
            host: `localhost:${port}`
        });
        let client = new BenchmarkActionsServiceClient(transport);
        let {response} = await client.bigArrayProcess({arraySize: size,token : token});

        return {elapsedTime : response.elapsedTime, success: true };
    },
    bigDbFetch: async (event : any) => {
        // TODO
    }
};

