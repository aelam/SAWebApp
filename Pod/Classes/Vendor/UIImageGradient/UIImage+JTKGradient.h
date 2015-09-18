//
//  UIImage+JTKGradient.h
//  Jared King
//
//  Created by Jared on 2/15/13.
//  Copyright (c) 2013 Jared King. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <QuartzCore/QuartzCore.h>

@interface UIImage (JTKGradient)

+ (UIImage *)imageWith2ToneGradient:(UIColor *)tone1 tone2:(UIColor *)tone2 height:(CGFloat)height;

@end
