//
//  JSActionModule.h
//  AppSettings
//
//  Created by ryan on 15/9/11.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>
#import <SAWebViewController.h>

@interface JSActionModule : NSObject<JSExport>


- (void)attachActionsWithWebViewController:(UIViewController<SAWebViewController> *)webViewController;

- (void)attachActionsWithWebViewContext:(JSContext *)webViewContext;

- (JSContext *)webViewContext;

@end
