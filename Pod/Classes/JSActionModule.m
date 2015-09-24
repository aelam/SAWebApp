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

- (void)onMenuShareTimeline {
    NSLog(@"%@", NSStringFromSelector(_cmd));
}

- (void)attachActionsWithWebViewController:(UIViewController<SAWebViewController> *)webViewController {
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
