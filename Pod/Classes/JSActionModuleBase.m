//
//  JSActionModuleBase.m
//  AppSettings
//
//  Created by ryan on 15/9/11.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import "JSActionModuleBase.h"

@implementation JSActionModuleBase


- (void)attachActionsWithWebViewContext:(JSContext *)webViewContext {
    JSContext *context = [self webViewContext];
    JSValue *goods = [context objectForKeyedSubscript:@"goods"];
    __weak __typeof(self)weakSelf = self;
    
    NSInteger (^changeNavigationBarColors)(NSString *, NSString *) = ^NSInteger(NSString *colors, NSString *type) {
//        [weakSelf changeNavigationBarColor:colors];
        
        return 1;
    };
    
    [goods setObject:changeNavigationBarColors forKeyedSubscript:@"changeNavigationBarColors"];
    
}

//- (void)registerChangeNavigationBarColors {
//    JSContext *context = [self webViewContext];
//    JSValue *goods = [context objectForKeyedSubscript:@"goods"];
//    __weak __typeof(self)weakSelf = self;
//    
//    NSInteger (^changeNavigationBarColors)(NSString *, NSString *) = ^NSInteger(NSString *colors, NSString *type) {
//        [weakSelf changeNavigationBarColor:colors];
//        
//        return 1;
//    };
//    
//    [goods setObject:changeNavigationBarColors forKeyedSubscript:@"changeNavigationBarColors"];
//}
//
//- (void)registerCanOpenURL {
//    JSContext *context = [self webViewContext];
//    JSValue *goods = [context objectForKeyedSubscript:@"goods"];
//    
//    BOOL (^CanOpenURL)(NSString *, NSString *) = ^BOOL(NSString *urlString, NSString *callback) {
//        BOOL rs = [[UIApplication sharedApplication] canOpenURL:[NSURL URLWithString:urlString]];
//        NSString* string = [NSString stringWithFormat:@"%@(%d);",callback,rs];
//        [context evaluateScript:string];
//        
//        return rs;
//    };
//    
//    [goods setObject:CanOpenURL forKeyedSubscript:@"canOpenURL"];
//}
//


@end
