//
//  UINavigationBar+EMGradient.m
//  EMStock
//
//  Created by ryan on 15/8/24.
//  Copyright (c) 2015年 flora. All rights reserved.
//

#import "UINavigationBar+EMGradient.h"

@implementation UINavigationBar (EMGradient)

- (void)setGradientColors:(NSArray *)colors {
    if ([colors count] >= 2) {
        UIImage *image = [UIImage imageWith2ToneGradient:colors.firstObject tone2:colors.lastObject height:self.frame.size.height];
        [self setBackgroundImage:image forBarMetrics:UIBarMetricsDefault];
    } else {
        NSLog(@"gradientColors should be more than 2");
    }
}

@end
