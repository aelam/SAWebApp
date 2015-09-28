//
//  JSActionLoader.h
//  AppSettings
//
//  Created by ryan on 15/9/11.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "SAWebViewController.h"
#import <JavaScriptCore/JavaScriptCore.h>

@class SAWebViewController;
@class JSActionModule;
@class JSContext;

@protocol EMJSAPIExport <JSExport>

+ (void)invoke:(NSString *)api withParams:(NSDictionary *)params;

JSExportAs(invoke,
           + (void)invoke:(NSString *)api params:(NSString *)params callback:(JSValue *)jsCallback
           );
@end


@protocol JSActionExport <JSExport>

@property (nonatomic, strong) NSMutableArray *modules;
JSExportAs(invoke,
- (BOOL)invoke:(NSString *)api params:(NSString *)params callback:(JSValue *)jsCallback
);

JSExportAs(on,
- (void)on:(NSString *)api params:(NSString *)params callback:(JSValue *)jsCallback
);

@end

@protocol JSActionModule <JSActionExport>

@end

@interface JSActionModuleLoader : NSObject <JSActionExport>

+ (instancetype)defaultJSActionModuleLoader;

- (void)attachToWebViewController:(SAWebViewController *)webViewController;
- (void)deattachToWebViewController:(SAWebViewController *)webViewController;

- (void)installJSModule:(JSActionModule *)module;
- (void)uninstallJSModule:(JSActionModule *)module;
- (void)installJSModules:(NSArray *)modules;
- (void)uninstallJSModules:(NSArray *)modules;

- (JSContext *)webViewContext;
- (UIWebView *)webView;



@end

