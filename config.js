"use strict";
module.exports = {

    //通用配置
    general: {
        platform:           2,      //1手机 2平板 3手表(部分事件不支持)
        kickoff:            false,  //被挤下线是否在3秒后反挤对方
        ignore_self:        true,   //群聊是否无视自己的发言
        web_image_timeout:  30,     //下载网络图片的超时时间(秒)
        web_record_timeout: 30,     //下载网络语音的超时时间(秒)
        debug:              false,  //开启debug

        host:               "0.0.0.0",  //监听主机名
        port:               5700,       //端口
        use_http:           false,      //启用http
        use_ws:             false,      //启用ws，和http使用相同端口(暂不支持分端口)
        access_token:       "",         //访问api的token
        secret:             "",         //上报数据的sha1签名密钥
        post_timeout:       30,         //post超时时间(秒)
        post_message_format:"string",   //string或array
        enable_heartbeat:   false,      //是否启用ws心跳
        heartbeat_interval: 15000,      //ws心跳间隔
        event_filter:       "",         //事件过滤器
        post_url: [
            // "http://your.address.com:80", //上报地址，可以添加多个url
        ],
        ws_reverse_url: [ 
            // "ws://your.address.com:8080", //反向ws地址，可以添加多个url(暂不支持将api和event分两个通道)
        ],
        ws_reverse_reconnect_interval: 3000, //反向ws断线重连间隔(毫秒)
    },

    //每个账号的单独配置(用于覆盖通用配置)
    123456789: {

    },

    987654321: {

    }
};
