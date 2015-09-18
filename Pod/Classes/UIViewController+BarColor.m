//
//  UIViewController+BarColor.m
//  AppSettings
//
//  Created by ryan on 15/9/11.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import "UIViewController+BarColor.h"
#import "UIColor+HexString.h"
#import "UINavigationBar+EMGradient.h"

@implementation UIViewController (BarColor)

- (void)changeNavigationBarColor:(NSString *)colorString {

    NSArray *hexColors = [colorString componentsSeparatedByString:@","];
    NSMutableArray *gradientColors = [NSMutableArray array];
    for(NSString *color0 in hexColors) {
        UIColor *color = [UIColor colorWithHexString:color0];
        [gradientColors addObject:color];
    }
    [self.navigationController.navigationBar setGradientColors:gradientColors];
}

@end
