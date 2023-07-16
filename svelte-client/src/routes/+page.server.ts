import {GrpcTransport} from "@protobuf-ts/grpc-transport";
import {BenchmarkActionsServiceClient} from "../stubs/benchmark-actions/v1/benchmark-actions.client";
import {ChannelCredentials} from "@grpc/grpc-js";


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
    bigArrayProcess:  async ({ cookies, request } : any)  => {
        const data = await request.formData();
        const size = parseInt(data.get('size'));
        const port = data.get('port');

        // setup a transport and create a client instance
        let transport = new GrpcTransport({
            channelCredentials: ChannelCredentials.createInsecure(),
            host: `localhost:${port}`
        });
        let client = new BenchmarkActionsServiceClient(transport);
        let {response} = await client.bigArrayProcess({arraySize: size});

        return {elapsedTime : response.elapsedTime, success: true };
    },
    bigDbFetch: async (event : any) => {
        // TODO register the user
    }
};