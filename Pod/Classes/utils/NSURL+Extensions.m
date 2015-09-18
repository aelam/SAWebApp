//
//  NSURL+Extensions.m
//  AppSettings
//
//  Created by ryan on 15/9/9.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import "NSURL+Extensions.h"

@implementation NSURL (Extensions)

- (BOOL)isHTTP {
    if ([[self scheme] isEqualToString:@"http"]) {
        return YES;
    }
    return NO;
}

- (BOOL)isHTTPS {
    if ([[self scheme] isEqualToString:@"https"]) {
        return YES;
    }
    return NO;
}

@end
