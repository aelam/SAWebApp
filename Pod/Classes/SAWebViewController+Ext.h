//
//  SAWebViewController+Ext.h
//  AppSettings
//
//  Created by ryan on 15/9/9.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import "SAWebViewController.h"

@class JSContext;

@interface SAWebViewController ()



@end

@interface SAWebViewController (Ext)

- (JSContext *)webViewContext;

- (void)loadWebViewActionJS;

- (void)hideNavigationBar:(BOOL)hide animation:(BOOL)animation;
- (void)copyText:(NSString *)text; //copy?text=
- (BOOL)canOpenURL:(NSURL *)URL;


- (void)updateUserInfo:(NSDictionary *)userInfo;
- (void)pointChnaged:(NSDictionary *)info;
- (void)checkTaskStatus:(NSDictionary *)info;

- (void)addZXG:(NSInteger)stockId;
- (void)share:(NSDictionary *)info;

@end
