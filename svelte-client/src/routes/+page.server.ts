import {GrpcTransport} from "@protobuf-ts/grpc-transport";
import {BenchmarkActionsServiceClient} from "../stubs/benchmark-actions/v1/benchmark-actions.client";
import {ChannelCredentials} from "@grpc/grpc-js";


/** @type {import('./$types').PageLoad} */
export async function load() {

    // setup a transport and create a client instance
    let transport = new GrpcTransport({
          channelCredentials: ChannelCredentials.createInsecure(),
        host: "localhost:5000"
    });
    let client = new BenchmarkActionsServiceClient(transport);
    let {response} = await client.bigArrayProcess({arraySize: 9999});
    return {elapsedTime : response.elapsedTime}
}