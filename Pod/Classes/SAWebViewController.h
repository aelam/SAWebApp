//
//  SAWebViewController.h
//  AppSettings
//
//  Created by ryan on 15/9/9.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "JSActionModuleLoader.h"
#import <WebViewJavascriptBridge/WebViewJavascriptBridge.h>
#import <JavaScriptCore/JavaScriptCore.h>


@class JSActionModuleLoader;

@protocol SAWebViewController <NSObject>

@property (nonatomic, readonly) IBOutlet UIWebView *webView;
@property (nonatomic, readonly) JSContext *webViewContext;

@end

@interface SAWebViewController : UIViewController<SAWebViewController>

@property (nonatomic, strong) IBOutlet UIWebView *webView;
@property (nonatomic, strong) Class webViewClass;
@property (nonatomic, strong) JSActionModuleLoader *jsLoader;


// 显示个股
// subclass implement
- (void)openCustomPageWithUserInfo:(NSDictionary *)userInfo;
- (void)showOptionsMenu;


@end
