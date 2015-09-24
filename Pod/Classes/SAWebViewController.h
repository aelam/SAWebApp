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

@protocol EMJSAPIExport <JSExport>

+ (void)invoke:(NSString *)api withParams:(NSDictionary *)params;

JSExportAs(invoke,
+ (void)invoke:(NSString *)api params:(NSString *)params callback:(JSValue *)jsCallback
           );
@end

@interface EMJSAPI : NSObject <EMJSAPIExport>

@end



@class JSActionModuleLoader;

@protocol SAWebViewController <NSObject>

@property (nonatomic, readonly) UIWebView *webView;

@end

@interface SAWebViewController : UIViewController<SAWebViewController>

@property (nonatomic, strong) IBOutlet UIWebView *webView;
@property (nonatomic, strong) Class webViewClass;
@property (nonatomic, strong) JSActionModuleLoader *jsLoader;


// 显示个股
// subclass implement
- (void)openCustomPageWithUserInfo:(NSDictionary *)userInfo;


@end
