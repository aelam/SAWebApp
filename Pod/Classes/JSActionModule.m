//
//  JSActionModule.m
//  AppSettings
//
//  Created by ryan on 15/9/11.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import "JSActionModule.h"
#import "JSActionModuleLoader.h"

@implementation JSActionModule


- (void)attachActionsWithWebViewController:(SAWebViewController<SAWebViewController> *)webViewController {
    self.webViewController = webViewController;
}

- (BOOL)invoke:(NSString *)api params:(NSString *)params callback:(JSValue *)jsCallback {
    SEL selector = NSSelectorFromString(api);
    if ([self respondsToSelector:selector]) {
        [self performSelector:selector withObject:params];
    }
    return YES;
}

- (void)on:(NSString *)api params:(NSString *)params callback:(JSValue *)jsCallback {
    SEL selector = NSSelectorFromString(api);
    if ([self respondsToSelector:selector]) {
        [self performSelector:selector withObject:params];
    }
}


//
//- (void)attachActionsWithWebViewContext:(JSContext *)webViewContext {
//    
//}
//
//- (JSContext *)webViewContext {
//    return [JSActionModuleLoader defaultJSActionModuleLoader].webViewContext;
//}

@end
