//
//  UIWebView+Ext.h
//  AppSettings
//
//  Created by ryan on 15/9/9.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <JavaScriptCore/JavaScriptCore.h>

@interface UIWebView (Ext)

- (JSContext *)webViewContext;
- (JSValue *)webViewBridge;

@end
