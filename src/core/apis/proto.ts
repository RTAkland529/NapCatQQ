import * as protobuffer from 'protobufjs/light';
// //@ProtoNumber(1) var extInfo: Any? = null,
// @ProtoNumber(2) var appid: String? = null,
// @ProtoNumber(3) var title: String? = null,
// @ProtoNumber(4) var desc: String? = null,
// @ProtoNumber(5) var time: ULong? = null,
// @ProtoNumber(6) var scene: UInt? = null,
// @ProtoNumber(7) var templetType: UInt? = null,
// @ProtoNumber(8) var businessType: UInt? = null,
// @ProtoNumber(9) var picUrl: String? = null,
// @ProtoNumber(10) var vidUrl: String? = null,
// @ProtoNumber(11) var jumpUrl: String? = null,
// @ProtoNumber(12) var iconUrl: String? = null,
// @ProtoNumber(13) var verType: UInt? = null,
// @ProtoNumber(14) var shareType: UInt? = null,
// @ProtoNumber(15) var versionId: String? = null,
// @ProtoNumber(16) var withShareTicket: UInt? = null,
// @ProtoNumber(17) var webURL: String? = null,
// //@ProtoNumber(18) var appidRich: Any? = null,
// @ProtoNumber(19) var template: Template? = null,
// //@ProtoNumber(20) var rcvOpenId: Any? = null,
export const AdaptShareInfoReq = new protobuffer.Type("AdaptShareInfoReq").add(
    new protobuffer.Field("appid", 2, "string")
).add(
    new protobuffer.Field("title", 3, "string")
).add(
    new protobuffer.Field("desc", 4, "string")
).add(
    new protobuffer.Field("time", 5, "uint64")
).add(
    new protobuffer.Field("scene", 6, "uint32")
).add(
    new protobuffer.Field("templetType", 7, "uint32")
).add(
    new protobuffer.Field("businessType", 8, "uint32")
).add(
    new protobuffer.Field("picUrl", 9, "string")
).add(
    new protobuffer.Field("vidUrl", 10, "string")
).add(
    new protobuffer.Field("jumpUrl", 11, "string")
).add(
    new protobuffer.Field("iconUrl", 12, "string")
).add(
    new protobuffer.Field("verType", 13, "uint32")
).add(
    new protobuffer.Field("shareType", 14, "uint32")
).add(
    new protobuffer.Field("versionId", 15, "string")
).add(
    new protobuffer.Field("withShareTicket", 16, "uint32")
).add(
    new protobuffer.Field("webURL", 17, "string")
);

export const QWebReq = new protobuffer.Type("QWebReq").
    add(
        new protobuffer.Field('ShareInfoReq', 4, 'bytes')
    );