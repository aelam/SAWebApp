//
//  SAWebViewController+Ext.m
//  AppSettings
//
//  Created by ryan on 15/9/9.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import "SAWebViewController+Ext.h"
#import "UIViewController+BarColor.h"
#import <JavaScriptCore/JavaScriptCore.h>

@interface SAWebViewController ()

@property (nonatomic, strong) NSDictionary *shareInfo;

@end

@implementation SAWebViewController (Ext)

- (void)loadWebViewActionJS {
    NSString *jsPath = [[NSBundle mainBundle] pathForResource:@"EMBridge" ofType:@"js"];
    NSString *js = [NSString stringWithContentsOfFile:jsPath encoding:NSUTF8StringEncoding error:nil];
    [[self webViewContext] evaluateScript:js];
    
    [self registerChangeNavigationBarColors];
    [self registerCanOpenURL];
}


- (JSContext *)webViewContext {
    JSContext *context = [self.webView valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];
    return context;
}

- (void)registerChangeNavigationBarColors {
    JSContext *context = [self webViewContext];
    JSValue *goods = [context objectForKeyedSubscript:@"goods"];
    __weak __typeof(self)weakSelf = self;
    
    NSInteger (^changeNavigationBarColors)(NSString *, NSString *) = ^NSInteger(NSString *colors, NSString *type) {
        [weakSelf changeNavigationBarColor:colors];
     
        return 1;
    };
    
    [goods setObject:changeNavigationBarColors forKeyedSubscript:@"changeNavigationBarColors"];
}

- (void)registerCanOpenURL {
    JSContext *context = [self webViewContext];
    JSValue *goods = [context objectForKeyedSubscript:@"goods"];
    
    BOOL (^CanOpenURL)(NSString *, NSString *) = ^BOOL(NSString *urlString, NSString *callback) {
        BOOL rs = [[UIApplication sharedApplication] canOpenURL:[NSURL URLWithString:urlString]];
        NSString* string = [NSString stringWithFormat:@"%@(%d);",callback,rs];
        [context evaluateScript:string];
        
        return rs;
    };
    
    [goods setObject:CanOpenURL forKeyedSubscript:@"canOpenURL"];
}

// MARK: Actions
- (void)showMenuItems {
    
}

- (void)hideMenuItems {
    
}

- (void)onMenuShareTimeline:(id)info {
    
}

- (void)showNavigationBar:(BOOL)show {
    
}

- (void)setNavigationBarTitle:(NSString *)title {
    
}

// UI config

@end
