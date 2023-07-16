// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "benchmark-actions/v1/benchmark-actions.proto" (package "benchmarkActions", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message benchmarkActions.BigArrayProcessRequest
 */
export interface BigArrayProcessRequest {
    /**
     * @generated from protobuf field: int32 arraySize = 1;
     */
    arraySize: number;
    /**
     * @generated from protobuf field: string token = 2;
     */
    token: string;
}
/**
 * @generated from protobuf message benchmarkActions.BigArrayProcessResponse
 */
export interface BigArrayProcessResponse {
    /**
     * @generated from protobuf field: string elapsedTime = 1;
     */
    elapsedTime: string;
}
/**
 * @generated from protobuf message benchmarkActions.BigDbFetchRequest
 */
export interface BigDbFetchRequest {
}
/**
 * @generated from protobuf message benchmarkActions.BigDbFetchResponse
 */
export interface BigDbFetchResponse {
    /**
     * @generated from protobuf field: string elapsedTime = 1;
     */
    elapsedTime: string;
    /**
     * @generated from protobuf field: string resultCount = 2;
     */
    resultCount: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class BigArrayProcessRequest$Type extends MessageType<BigArrayProcessRequest> {
    constructor() {
        super("benchmarkActions.BigArrayProcessRequest", [
            { no: 1, name: "arraySize", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<BigArrayProcessRequest>): BigArrayProcessRequest {
        const message = { arraySize: 0, token: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BigArrayProcessRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BigArrayProcessRequest): BigArrayProcessRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 arraySize */ 1:
                    message.arraySize = reader.int32();
                    break;
                case /* string token */ 2:
                    message.token = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BigArrayProcessRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 arraySize = 1; */
        if (message.arraySize !== 0)
            writer.tag(1, WireType.Varint).int32(message.arraySize);
        /* string token = 2; */
        if (message.token !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.token);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message benchmarkActions.BigArrayProcessRequest
 */
export const BigArrayProcessRequest = new BigArrayProcessRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BigArrayProcessResponse$Type extends MessageType<BigArrayProcessResponse> {
    constructor() {
        super("benchmarkActions.BigArrayProcessResponse", [
            { no: 1, name: "elapsedTime", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<BigArrayProcessResponse>): BigArrayProcessResponse {
        const message = { elapsedTime: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BigArrayProcessResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BigArrayProcessResponse): BigArrayProcessResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string elapsedTime */ 1:
                    message.elapsedTime = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BigArrayProcessResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string elapsedTime = 1; */
        if (message.elapsedTime !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.elapsedTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message benchmarkActions.BigArrayProcessResponse
 */
export const BigArrayProcessResponse = new BigArrayProcessResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BigDbFetchRequest$Type extends MessageType<BigDbFetchRequest> {
    constructor() {
        super("benchmarkActions.BigDbFetchRequest", []);
    }
    create(value?: PartialMessage<BigDbFetchRequest>): BigDbFetchRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BigDbFetchRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BigDbFetchRequest): BigDbFetchRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: BigDbFetchRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message benchmarkActions.BigDbFetchRequest
 */
export const BigDbFetchRequest = new BigDbFetchRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BigDbFetchResponse$Type extends MessageType<BigDbFetchResponse> {
    constructor() {
        super("benchmarkActions.BigDbFetchResponse", [
            { no: 1, name: "elapsedTime", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "resultCount", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<BigDbFetchResponse>): BigDbFetchResponse {
        const message = { elapsedTime: "", resultCount: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BigDbFetchResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BigDbFetchResponse): BigDbFetchResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string elapsedTime */ 1:
                    message.elapsedTime = reader.string();
                    break;
                case /* string resultCount */ 2:
                    message.resultCount = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BigDbFetchResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string elapsedTime = 1; */
        if (message.elapsedTime !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.elapsedTime);
        /* string resultCount = 2; */
        if (message.resultCount !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.resultCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message benchmarkActions.BigDbFetchResponse
 */
export const BigDbFetchResponse = new BigDbFetchResponse$Type();
/**
 * @generated ServiceType for protobuf service benchmarkActions.BenchmarkActionsService
 */
export const BenchmarkActionsService = new ServiceType("benchmarkActions.BenchmarkActionsService", [
    { name: "BigArrayProcess", options: {}, I: BigArrayProcessRequest, O: BigArrayProcessResponse },
    { name: "BigDbFetch", options: {}, I: BigDbFetchRequest, O: BigDbFetchResponse }
]);
