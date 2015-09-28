//
//  JSActionModuleBase.m
//  AppSettings
//
//  Created by ryan on 15/9/11.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import "JSActionModuleBase.h"
#import "UIViewController+BarColor.h"

@interface JSActionModuleBase ()

@property (nonatomic, strong) JSValue *shareJSValue;

@end

@implementation JSActionModuleBase

- (void)attachActionsWithWebViewContext:(JSContext *)webViewContext {
    JSContext *context = [self webViewContext];
    JSValue *goods = [context objectForKeyedSubscript:@"goods"];
//    __weak __typeof(self)weakSelf = self;
    
    NSInteger (^changeNavigationBarColors)(NSString *, NSString *) = ^NSInteger(NSString *colors, NSString *type) {
//        [weakSelf changeNavigationBarColor:colors];
        
        return 1;
    };
    
    [goods setObject:changeNavigationBarColors forKeyedSubscript:@"changeNavigationBarColors"];
    
}

- (void)changeNavigationBarColor {
//    NSArray *arguments = [JSContext currentArguments];
}

- (void)showOptionsMenu {
    NSArray *arguments = [JSContext currentArguments];
    JSValue *arguments2 = arguments[2];
    [arguments2 invokeMethod:@"success" withArguments:arguments];
    [self.webViewController showOptionsMenu];
}

// menu

- (void)onMenuShare {
    NSArray *arguments = [JSContext currentArguments];
    JSValue *arguments1 = arguments[1];
    self.shareJSValue = arguments1;
    JSValue *callback = arguments[2];
    [callback invokeMethod:@"success" withArguments:arguments];
}

- (void)share {
    NSArray *arguments = [JSContext currentArguments];
    JSValue *arguments1 = arguments[1];
//    self.shareJSValue = arguments1;
    JSValue *callback = arguments[2];
//    [callback invokeMethod:@"success" withArguments:arguments];
    
//    [self.shareJSValue invokeMethod:@"completion" withArguments:nil];
//    [self.shareJSValue invokeMethod:@"completion" withArguments:nil];
}

@end
