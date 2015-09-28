//
//  UIWebView+Ext.m
//  AppSettings
//
//  Created by ryan on 15/9/9.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import "UIWebView+Ext.h"

@implementation UIWebView (Ext)


- (JSContext *)webViewContext {
    JSContext *context = [self valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];
    return context;
}

- (JSValue *)webViewBridge {
    JSContext *context = [self webViewContext];
    return [context objectForKeyedSubscript:@"goods"];
}

@end
